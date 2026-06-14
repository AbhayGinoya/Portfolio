import React, { useEffect, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import { Code, Award, Filter } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";
import AOS from "aos";
import "aos/dist/aos.css";

// ShowMore/ShowLess Toggle Button Component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-slate-700 dark:text-slate-350 hover:text-blue-600 dark:hover:text-white text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-white/20 group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-1.5">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [certificates, setCertificates] = useState([]);
  const [projectFilter, setProjectFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
    // Load local certificates if they exist in cache, else set static mock
    const cachedCerts = JSON.parse(localStorage.getItem("certificates")) || [];
    setCertificates(cachedCerts);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (projectFilter === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === projectFilter);
  }, [projectFilter]);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  const filterOptions = ["All", "Mobile", "Full Stack"];

  return (
    <div className="md:px-[10%] px-[5%] w-full py-20 bg-transparent overflow-hidden" id="Portfolio">
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500">
          Portfolio Showcase
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through production-ready applications, code repositories, and structural design integrations.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {certificates.length > 0 ? (
          <>
            {/* AppBar and Tabs Section */}
            <AppBar
              position="static"
              elevation={0}
              sx={{
                bgcolor: "transparent",
                border: "1px solid var(--border-color)",
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                mb: 4,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  zIndex: 0,
                },
              }}
              className="px-2"
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
                sx={{
                  minHeight: "64px",
                  "& .MuiTab-root": {
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontWeight: "700",
                    color: "var(--text-secondary)",
                    textTransform: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: "16px 0",
                    zIndex: 1,
                    margin: "4px",
                    borderRadius: "16px",
                    "&:hover": {
                      color: "#2563eb",
                      backgroundColor: "rgba(37, 99, 235, 0.08)",
                      transform: "translateY(-1px)",
                    },
                    "&.Mui-selected": {
                      color: "#2563eb",
                      background: "rgba(37, 99, 235, 0.1)",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                    },
                  },
                  "& .MuiTabs-indicator": {
                    height: 0,
                  },
                  "& .MuiTabs-flexContainer": {
                    gap: "4px",
                  },
                }}
              >
                <Tab
                  icon={<Code className="mb-1 w-4 h-4" />}
                  label="Projects"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<Award className="mb-1 w-4 h-4" />}
                  label="Certificates"
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>

            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={setValue}
            >
              {/* Projects Tab */}
              <TabPanel value={value} index={0} dir={theme.direction}>
                {/* Filter Bar */}
                <div 
                  className="flex items-center justify-center gap-2 mb-8 flex-wrap"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-1.5 text-slate-500 mr-2 text-xs md:text-sm font-semibold">
                    <Filter className="w-4 h-4" />
                    <span>Filter:</span>
                  </div>
                  {filterOptions.map(f => (
                    <button
                      key={f}
                      onClick={() => {
                        setProjectFilter(f);
                        setShowAllProjects(false);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                        projectFilter === f
                          ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                          : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 hover:border-slate-350 dark:hover:border-white/20"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                <div className="container mx-auto flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
                    {displayedProjects.map((project, index) => (
                      <div
                        key={project.id || index}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={index * 100}
                      >
                        <CardProject
                          Img={project.Img}
                          Title={project.title}
                          Description={project.description}
                          AppStoreLink={project.AppStoreLink}
                          PlayStoreLink={project.PlayStoreLink}
                          ProjectLink={project.Link}
                          id={project.id}
                        />
                      </div>
                    ))}
                  </div>
                  {filteredProjects.length > initialItems && (
                    <div className="mt-8">
                      <ToggleButton
                        onClick={() => toggleShowMore('projects')}
                        isShowingMore={showAllProjects}
                      />
                    </div>
                  )}
                </div>
              </TabPanel>

              {/* Certificates Tab */}
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="container mx-auto flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {displayedCertificates.map((certificate, index) => (
                      <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={index * 100}
                      >
                        <Certificate ImgSertif={certificate.Img} />
                      </div>
                    ))}
                  </div>
                  {certificates.length > initialItems && (
                    <div className="mt-8">
                      <ToggleButton
                        onClick={() => toggleShowMore('certificates')}
                        isShowingMore={showAllCertificates}
                      />
                    </div>
                  )}
                </div>
              </TabPanel>
            </SwipeableViews>
          </>
        ) : (
          /* Render only Projects Panel when no certificates exist */
          <>
            {/* Filter Bar */}
            <div 
              className="flex items-center justify-center gap-2 mb-8 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-1.5 text-slate-500 mr-2 text-xs md:text-sm font-semibold">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
              </div>
              {filterOptions.map(f => (
                <button
                  key={f}
                  onClick={() => {
                    setProjectFilter(f);
                    setShowAllProjects(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                    projectFilter === f
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 hover:border-slate-350 dark:hover:border-white/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="container mx-auto flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 100}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.title}
                      Description={project.description}
                      AppStoreLink={project.AppStoreLink}
                      PlayStoreLink={project.PlayStoreLink}
                      ProjectLink={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
              {filteredProjects.length > initialItems && (
                <div className="mt-8">
                  <ToggleButton
                    onClick={() => toggleShowMore('projects')}
                    isShowingMore={showAllProjects}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </Box>
    </div>
  );
}