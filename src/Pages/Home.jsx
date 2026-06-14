import React, { useState, useEffect, useCallback, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Sparkles, FileText, ArrowDown } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PERSONAL_INFO } from '../constants/portfolioData'

// Status Badge Component
const StatusBadge = memo(() => (
  <div className="inline-block animate-float" data-aos="zoom-in" data-aos-delay="200">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-4 py-2 rounded-full bg-white dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 flex-shrink-0" />
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent text-xs sm:text-sm font-semibold">
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

// Title Component
const MainTitle = memo(() => (
  <div className="space-y-1.5 sm:space-y-3" data-aos="fade-up" data-aos-delay="400">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6.5xl font-black tracking-tight leading-[1.15]">
      <span className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent">
        {PERSONAL_INFO.name}
      </span>
      <br />
      <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mt-1 inline-block">
        Mobile App Architect
      </span>
    </h1>
  </div>
));

// CTA Button Component
const CTAButton = memo(({ href, text, icon: Icon, primary, onClick }) => (
  <a 
    href={href} 
    onClick={onClick} 
    className="group relative w-full sm:w-[160px] h-12 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer select-none hover:scale-[1.03]"
  >
    {primary ? (
      <>
        {/* Glow behind */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl opacity-60 blur-md group-hover:opacity-90 transition-all duration-700"></div>
        {/* Front Panel */}
        <div className="relative h-full w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-sm">
          <span>{text}</span>
          <Icon className="w-4 h-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
        </div>
      </>
    ) : (
      <>
        {/* Glow/Border behind */}
        <div className="absolute -inset-0.5 bg-slate-200 dark:bg-white/10 rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition-all duration-500"></div>
        {/* Front Panel */}
        <div className="relative h-full w-full bg-white dark:bg-[#030014] rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-slate-700 dark:text-gray-200 font-semibold text-sm">
          <span>{text}</span>
          <Icon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
        </div>
      </>
    )}
  </a>
));

// Social Link Component
const SocialLink = memo(({ icon: Icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative p-3 hover:scale-110 transition-transform duration-300 inline-block cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
    <div className="relative rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 p-2 flex items-center justify-center text-slate-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white group-hover:border-slate-350 dark:group-hover:border-white/20 transition-all duration-300">
      <Icon className="w-5 h-5" />
    </div>
  </a>
));

// Custom Counter hook for achievements animation
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end.replace(/\D/g, ''));
    
    if (endValue === 0) return;
    
    const incrementTime = Math.floor(duration / endValue);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, Math.max(incrementTime, 30));

    return () => clearInterval(timer);
  }, [end, duration]);

  const suffix = end.replace(/[0-9]/g, '');
  return <span>{count}{suffix}</span>;
};

// Achievement Metric Card Component
const MetricCard = memo(({ value, label, index }) => (
  <div 
    className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-slate-300 dark:hover:border-white/10 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
    data-aos="fade-up"
    data-aos-delay={1000 + index * 100}
  >
    <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-950 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
      <Counter end={value} />
    </span>
    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">
      {label}
    </span>
  </div>
));

// Resume download handler
const handleDownloadResume = () => {
  const pdfUrl = "assets/Abhay Profile Flutter.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "AbhayGinoya-Flutter.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const WORDS = ["Flutter Developer", "Mobile App Architect", "Backend Specialist"];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Smooth offset scrolling
  const handleScrollTo = useCallback((e, targetId) => {
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
  }, []);

  // Typing Effect Logic
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? 90 : 45
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  // Lottie Animation Options
  const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-700 ${
      isHovering 
        ? "scale-[140%] rotate-1" 
        : "scale-[135%]"
    }`
  };

  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden" id="Home">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] dark:blur-[160px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#06b6d4]/10 dark:bg-[#06b6d4]/5 blur-[120px] dark:blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-[10%] relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-10">
          
          {/* Left Column - Details */}
          <div 
            className="lg:col-span-7 space-y-6 text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <StatusBadge />
            <MainTitle />

            {/* Sub-Header typing display */}
            <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="600">
              <span className="text-lg sm:text-xl md:text-2xl font-light text-slate-650 dark:text-gray-300">
                Senior {text}
              </span>
              <span className="w-[3px] h-6 bg-blue-500 dark:bg-blue-400 ml-1 animate-pulse"></span>
            </div>

            {/* Biography Summary */}
            <p 
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {PERSONAL_INFO.summary}
            </p>

            {/* Call To Action Controls */}
            <div 
              className="flex flex-col sm:flex-row gap-3 pt-2 w-full justify-start" 
              data-aos="fade-up" 
              data-aos-delay="1000"
            >
              <CTAButton href="#Portfolio" text="View Projects" icon={ExternalLink} primary={true} onClick={(e) => handleScrollTo(e, 'Portfolio')} />
              <CTAButton href="#Contact" text="Get in Touch" icon={Mail} primary={false} onClick={(e) => handleScrollTo(e, 'Contact')} />
            </div>

            {/* Social Channels Row */}
            <div 
              className="flex items-center gap-4 pt-2"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <SocialLink icon={Github} link={PERSONAL_INFO.socials.github} />
              <SocialLink icon={Linkedin} link={PERSONAL_INFO.socials.linkedin} />
              <button 
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 bg-white dark:bg-black/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-sm font-semibold text-slate-600 dark:text-gray-300 hover:scale-105"
              >
                <FileText className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Achievements Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {PERSONAL_INFO.achievements.map((ach, idx) => (
                <MetricCard key={idx} index={idx} {...ach} />
              ))}
            </div>

          </div>

          {/* Right Column - Premium Animation Mockup */}
          <div 
            className="lg:col-span-5 h-[320px] sm:h-[400px] lg:h-[500px] xl:h-[550px] relative flex items-center justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {/* Pulsing Backlighting */}
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/15 to-[#06b6d4]/15 rounded-full blur-3xl transition-all duration-700 ease-in-out ${
              isHovering ? "opacity-70 scale-105" : "opacity-45 scale-100"
            }`}></div>

            {/* Main Interactive Animation Container */}
            <div className={`relative z-10 w-full h-full opacity-95 transform transition-transform duration-700 ${
              isHovering ? "scale-[1.02]" : "scale-100"
            }`}>
              <DotLottieReact {...lottieOptions} />
            </div>

            {/* Floating indicator */}
            <a 
              href="#About"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/20 hover:bg-white dark:hover:bg-white/10 hover:scale-115 transition-all text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 z-20 animate-bounce cursor-pointer"
            >
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;