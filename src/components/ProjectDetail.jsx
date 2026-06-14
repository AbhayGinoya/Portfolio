import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Award, CheckCircle2, ShieldAlert
} from "lucide-react";
import Swal from 'sweetalert2';
import { PROJECTS } from "../constants/portfolioData";

const TechBadge = ({ tech }) => {
  return (
    <div className="group relative overflow-hidden px-3 py-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-100 dark:border-blue-500/10 hover:border-blue-500/30 transition-all duration-350 cursor-default">
      <div className="relative flex items-center gap-1.5">
        <span className="text-xs font-semibold text-blue-800 dark:text-blue-300">
          {tech}
        </span>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === 'Private') {
    Swal.fire({
      icon: 'info',
      title: 'Source Code Private',
      text: 'Sorry, the source code for this project is private.',
      confirmButtonText: 'Understand',
      confirmButtonColor: '#2563eb',
      background: document.documentElement.classList.contains('dark') ? '#0c0529' : '#ffffff',
      color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000'
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = PROJECTS.find((p) => String(p.id) === id);
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Loading Project Details...</h2>
        </div>
      </div>
    );
  }

  const techStackCount = project.TechStack?.length || 0;
  const featuresCount = project.Features?.length || 0;
  const achievementsCount = project.KeyAchievements?.length || 0;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030014] relative overflow-hidden transition-colors duration-300">
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-0 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] animate-blob" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* Navigation Breadcrumb & Back button */}
        <div className="flex items-center space-x-3 md:space-x-4 mb-8 md:mb-12">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white/90 rounded-xl transition-all duration-300 border border-slate-200 dark:border-white/10 text-sm font-semibold shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back</span>
          </button>
          <div className="flex items-center space-x-1 text-sm text-slate-400 dark:text-white/50">
            <span>Portfolio</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 dark:text-white/90 font-medium truncate">{project.title}</span>
          </div>
        </div>

        {/* Hero layout */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Block: Content Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-150 dark:border-blue-550/10">
                {project.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-950 dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent leading-tight mt-2">
                {project.title}
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>

            <p className="text-base md:text-lg text-slate-650 dark:text-slate-350 leading-relaxed">
              {project.description}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-blue-650 dark:text-blue-300">{techStackCount}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider mt-1">Tech Stack</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-300">{featuresCount}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider mt-1">Key Features</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-300">{achievementsCount || 2}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider mt-1">Metrics</div>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.Link && (
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-750 hover:to-cyan-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.PlayStoreLink && (
                <a
                  href={project.PlayStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-250 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 text-slate-700 dark:text-gray-200 font-semibold text-sm rounded-xl transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <span>Play Store</span>
                </a>
              )}

              {project.AppStoreLink && (
                <a
                  href={project.AppStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-250 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 text-slate-700 dark:text-gray-200 font-semibold text-sm rounded-xl transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <span>App Store</span>
                </a>
              )}

              {project.Github && (
                <a
                  href={project.Github === 'Private' ? '#' : project.Github}
                  onClick={(e) => {
                    if (!handleGithubClick(project.Github)) e.preventDefault();
                  }}
                  target={project.Github === 'Private' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-250 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 text-slate-750 dark:text-gray-200 font-semibold text-sm rounded-xl transition-all"
                >
                  <Github className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span>{project.Github === 'Private' ? 'Private Source' : 'View Code'}</span>
                </a>
              )}
            </div>

            {/* Tech Stack Badge list */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-500" />
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.TechStack && project.TechStack.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            {project.Architecture && (
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm space-y-4 hover:border-slate-350 dark:hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">Architecture & System Design</h3>
                </div>
                <p className="text-sm md:text-base text-slate-650 dark:text-slate-350 leading-relaxed">
                  {project.Architecture}
                </p>
              </div>
            )}

            {/* Key Achievements Card */}
            {project.KeyAchievements && (
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm space-y-4 hover:border-slate-350 dark:hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">Key Achievements</h3>
                </div>
                <ul className="space-y-3">
                  {project.KeyAchievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-slate-650 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Block: Image Mockup & Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-250 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <img
                src={project.Img}
                alt={project.title}
                className="w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Side Card: Key Features */}
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span>Key Features</span>
              </h3>
              {project.Features && project.Features.length > 0 ? (
                <ul className="space-y-3">
                  {project.Features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-650 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-400">No specific features listed.</p>
              )}
            </div>
          </div>

        </div>

        {/* Detailed Tabs/Sections Section */}
        {project.Challenges && (
          <div className="mt-16 pt-12 border-t border-slate-250/50 dark:border-white/5">
            {/* Challenges & Solutions Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm space-y-5 hover:border-slate-350 dark:hover:border-white/15 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Technical Challenges Solved</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-red-500/[0.02] border border-red-500/10 dark:border-red-500/5 space-y-2">
                  <h4 className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">The Challenge</h4>
                  <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed">{project.Challenges}</p>
                </div>
                <div className="p-5 rounded-xl bg-emerald-500/[0.02] border border-emerald-500/10 dark:border-emerald-500/5 space-y-2">
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">The Solution</h4>
                  <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed">{project.Solutions}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetails;
