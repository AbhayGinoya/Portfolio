import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, AppStoreLink, PlayStoreLink, ProjectLink, id }) => {

  const handleDetails = (e) => {
    if (!id) {
      console.log("ID not available");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full h-full flex flex-col">
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-25 blur transition duration-500"></div>

      {/* Main Card Container */}
      <div className="relative flex-grow flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300">
        
        {/* Cover Image Container */}
        <div className="relative overflow-hidden aspect-video border-b border-slate-100 dark:border-white/5 bg-slate-100 dark:bg-slate-900">
          <img
            src={Img}
            alt={Title}
            className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content Container */}
        <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* Title */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {Title}
            </h3>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {Description}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            {/* Links Block */}
            <div className="flex items-center gap-3">
              {ProjectLink && (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <span>Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {PlayStoreLink && (
                <a
                  href={PlayStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <span>Play Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {AppStoreLink && (
                <a
                  href={AppStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <span>App Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Details Button */}
            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white/90 text-xs font-semibold transition-all duration-200 hover:scale-103 active:scale-97"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <span className="text-slate-400 dark:text-slate-650 text-xs">Details Not Available</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardProject;