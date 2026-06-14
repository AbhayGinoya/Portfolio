import React, { useEffect } from 'react';
import { Phone, Server, Cpu, Database, Zap, Layout } from 'lucide-react';
import { SERVICES } from '../constants/portfolioData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ICON_MAP = {
  Phone: Phone,
  Server: Server,
  Cpu: Cpu,
  Database: Database,
  Zap: Zap,
  Layout: Layout,
};

const Services = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section className="py-20 md:px-[10%] px-[5%] bg-white dark:bg-transparent w-full overflow-hidden" id="Services">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500">
            Services & Expertise
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
            Providing end-to-end mobile app development services, from initial architecture design to backend integration and performance fine-tuning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((srv, index) => {
            const IconComponent = ICON_MAP[srv.icon] || Cpu;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
                className="group relative"
              >
                {/* Background Accent Glow on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>

                {/* Service Card */}
                <div className="relative h-full p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {srv.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Micro Indicator Line */}
                  <div className="w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-6 transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
