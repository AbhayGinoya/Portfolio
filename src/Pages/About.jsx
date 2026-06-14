import React, { useEffect, memo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck, Shield, Database, LayoutTemplate, Settings } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SKILL_CATEGORIES } from '../constants/portfolioData'

// Header Section
const Header = memo(() => (
  <div className="text-center mb-10 md:mb-16">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base flex items-center justify-center gap-1.5"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-4 h-4 text-blue-500" />
      Engineering High-Performance Mobile Ecosystems
      <Sparkles className="w-4 h-4 text-blue-500" />
    </p>
  </div>
));

// Profile Image with Glow
const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center p-4">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background gradients */}
      <div className="absolute -inset-4 opacity-[20%] dark:opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 rounded-2xl blur-xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-cyan-500 to-teal-400 rounded-2xl blur-xl animate-float opacity-50" />
      </div>

      <div className="relative z-10">
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-2xl z-20 transition-all duration-700 group-hover:border-white/40" />
          <img
            src="assets/images/photo.jpg"
            alt="Abhay Ginoya Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 dark:opacity-40 z-10" />
        </div>
      </div>
    </div>
  </div>
));

// Skills Grid Component
const SkillsSection = memo(() => {
  const getCategoryIcon = (title) => {
    switch (title) {
      case 'Mobile Development':
        return <Globe className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Backend & Systems':
        return <Shield className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 'Databases (Offline-First)':
        return <Database className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Architecture & Design':
        return <LayoutTemplate className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      default:
        return <Settings className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    }
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
          Technical Skills & Architecture
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl mx-auto">
          Comprehensive toolbelt across mobile ecosystems, state container layers, local storage models, and backend infrastructures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 backdrop-blur-md"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                {getCategoryIcon(cat.title)}
                <h4 className="font-bold text-slate-850 dark:text-slate-200 text-sm tracking-wide">
                  {cat.title}
                </h4>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:bg-slate-100/60 dark:hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1 pr-2">
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain flex-shrink-0 opacity-80"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 ml-1.5 mr-2" />
                      )}
                      <span className="text-xs font-semibold text-slate-700 dark:text-gray-300 line-clamp-2 leading-tight break-all">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex-shrink-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const handleDownload = () => {
  const pdfUrl = "assets/Abhay Profile Flutter.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "AbhayGinoya-Flutter.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="h-auto py-20 text-slate-800 dark:text-white px-[5%] sm:px-[5%] lg:px-[10%]"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Biography Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h3
              className="text-2xl sm:text-3xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-slate-500 dark:text-slate-400">Hello, I'm</span>
              <span className="block mt-1 text-slate-850 dark:text-gray-200 font-extrabold text-4xl sm:text-5xl">
                Abhay Ginoya
              </span>
            </h3>

            <div
              className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-gray-400 leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <p>
                As a passionate <strong>Mobile App Architect & Senior Flutter Developer</strong> with 4+ years of professional engineering experience, I specialize in design-to-delivery processes for cross-platform applications. I build scalable mobile solutions and offline-first client syncing modules.
              </p>
              <p>
                My technical experience includes designing relational layouts with <strong>Drift, Sqflite</strong> and object-oriented stores with <strong>Isar</strong> database. On backend architecture, I design <strong>Serverpod (Dart-native)</strong> configurations and <strong>Node.js</strong> solutions with <strong>PostgreSQL</strong> databases, resolving data sync collisions using vector metrics.
              </p>
              <p>
                I prioritize writing maintainable code, separating UI components from database interfaces via <strong>Clean Architeclture</strong> patterns. I partner closely with product owners, UI designers, and developer teams to design premium, state-of-the-art software systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4 w-full">
              <button
                data-aos="fade-up"
                data-aos-duration="800"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                onClick={handleDownload}
              >
                <FileText className="w-5 h-5" /> Download CV
              </button>
              <a
                href="#Portfolio"
                onClick={(e) => handleScrollTo(e, 'Portfolio')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-blue-500/30 hover:border-blue-500 text-blue-600 dark:text-cyan-400 font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-blue-500/5 dark:hover:bg-cyan-500/10 cursor-pointer select-none"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Code className="w-5 h-5" /> View Projects
              </a>
            </div>
          </div>

          {/* Profile Image container */}
          <div className="lg:col-span-5 w-full">
            <ProfileImage />
          </div>
        </div>

        {/* Skills Cards Grid Container */}
        <SkillsSection />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-spin-slower {
          animation: spin-slower 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);