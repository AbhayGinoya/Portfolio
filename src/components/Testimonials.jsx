import React, { useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/portfolioData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section className="py-20 md:px-[10%] px-[5%] bg-slate-50/50 dark:bg-black/20 w-full overflow-hidden" id="Testimonials">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500">
            Recommendations & Client Love
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
            Read what clients, founders, and technical leads say about working with me on their mobile products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
              className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm dark:shadow-none group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-5 dark:opacity-10 text-blue-600 dark:text-blue-450 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Five Stars Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed italic relative z-10">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-150 text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
