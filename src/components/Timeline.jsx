import React, { useState, useEffect } from 'react';
import { Briefcase, Award, Rocket, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../constants/portfolioData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const categories = ['All', 'Work Experience', 'Freelance Projects', 'Professional Growth'];

  const filteredTimeline = filter === 'All' 
    ? EXPERIENCE_TIMELINE 
    : EXPERIENCE_TIMELINE.filter(item => item.type === filter);

  const getTimelineIcon = (type) => {
    switch (type) {
      case 'Work Experience':
        return <Briefcase className="w-5 h-5 text-blue-505 dark:text-blue-400" />;
      case 'Freelance Projects':
        return <Rocket className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 md:px-[10%] px-[5%] bg-slate-50/50 dark:bg-black/20 w-full overflow-hidden" id="Timeline">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500">
            Professional Journey
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
            A chronological timeline of my professional roles, contract engagements, and milestones as a mobile solutions engineer.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-32">
          {filteredTimeline.map((item, index) => (
            <div 
              key={index} 
              className="mb-12 last:mb-0 relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Left Side Metadata - Visible on desktop */}
              <div className="hidden md:block absolute right-[100%] mr-12 text-right top-1 w-24">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {item.type}
                </span>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 flex items-center justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Central Node Circle */}
              <div className="absolute -left-[27px] top-0.5 w-12 h-12 rounded-full bg-white dark:bg-[#030014] border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center shadow-md z-10 transition-transform hover:scale-110 duration-300">
                {getTimelineIcon(item.type)}
              </div>

              {/* Content Card */}
              <div className="ml-10 md:ml-12 p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-none hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 backdrop-blur-xl">
                {/* Mobile Metadata - Visible on mobile only */}
                <div className="flex flex-wrap items-center gap-3 md:hidden mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </span>
                </div>

                {/* Job Title and Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <span className="hidden md:inline-block text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200/50 dark:border-white/5">
                    {item.duration}
                  </span>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3">
                  {item.points.map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed group/item">
                      <CheckCircle2 className="w-4 h-4 text-blue-500/80 dark:text-blue-400/80 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
