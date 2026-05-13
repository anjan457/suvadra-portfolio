import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Download, 
  Briefcase, 
  Award, 
  BookOpen, 
  Heart, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Menu, 
  X, 
  MapPin, 
  MessageCircle,
  TrendingUp,
  Sun,
  Moon,
  Sparkles,
  Send
} from 'lucide-react';
import profileImage from './assets/suv4.png';
import cvFile from './assets/Suvadra_Kundu_CV.pptx.pdf';
import galleryPhotoTeam from './photo_gallery/Team_collaboration.png';
import galleryPhotoProgram from './photo_gallery/program_delivery.png';
import galleryPhotoWorkspace from './photo_gallery/workspace.png';
import galleryPhotoHighlight from './photo_gallery/e0c84321-8def-40c9-bc91-d0560519421e.png';

/** Primary CTAs — same indigo family as hero “Kundu” */
const accentCtaClass = 'bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors';

const quickStats = [
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Teams Trained', value: 20, suffix: '+' },
  { label: 'Projects Coordinated', value: 150, suffix: '+' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isFormSent, setIsFormSent] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isGalleryGridOpen, setIsGalleryGridOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackTop, setShowBackTop] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [cvDownloads, setCvDownloads] = useState(() => parseInt(localStorage.getItem('cvDownloads') || '0'));
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([0, 0, 0, 0]);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Scroll: progress bar + back-to-top
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setIsScrolled(scrolled > 20);
      setShowBackTop(scrolled > 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'services', 'projects', 'gallery', 'experience', 'certifications', 'education', 'languages', 'faq', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll er function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Link a click korle mobile menu bondho hoye jabe
  };

  const theme = isDarkMode
    ? {
        bg: 'bg-[#081616]',
        text: 'text-[#EAF1EF]',
        mutedText: 'text-[#A6B8B4]',
        sectionAlt: 'bg-[#102524]',
        cardBg: 'bg-[#112928]',
        softCard: 'bg-[#193433]',
        primary: 'bg-[#D7720C]',
        primaryText: 'text-[#F0A048]',
        accent: 'text-[#9BB2AD]',
        accentBg: 'bg-[#9BB2AD]',
        borderAccent: 'border-[#436661]',
        line: 'border-[#436661]/30',
      }
    : {
        bg: 'bg-[#F5F4ED]',
        text: 'text-[#0D2322]',
        mutedText: 'text-[#738F8A]',
        sectionAlt: 'bg-white',
        cardBg: 'bg-white',
        softCard: 'bg-[#F5F4ED]',
        primary: 'bg-[#D7720C]',
        primaryText: 'text-[#D7720C]',
        accent: 'text-[#738F8A]',
        accentBg: 'bg-[#738F8A]',
        borderAccent: 'border-[#738F8A]',
        line: 'border-[#738F8A]/20',
      };
  const projects = [
    {
      title: 'Client Service Dashboard',
      desc: 'Daily task tracking, client follow-up status, and shift-wise progress monitoring in one interface.',
      stack: 'React, Excel Workflow, Reporting',
    },
    {
      title: 'Training Session Planner',
      desc: 'A structured planner for training modules, attendance, and assessment scheduling.',
      stack: 'Program Design, Coordination, Documentation',
    },
    {
      title: 'Future Project: Chef & F&B Service Excellence',
      desc: 'A practical workflow concept to improve kitchen coordination, food quality consistency, and guest service standards.',
      stack: 'Food Production, Team Coordination, Service Quality',
    },
  ];
  const skills = [
    { name: 'Client Communication', value: 96 },
    { name: 'Data Entry & Documentation', value: 94 },
    { name: 'Task Scheduling & Management', value: 92 },
    { name: 'Work Order Tracking', value: 90 },
  ];
  const coreCompetencies = [
    'Client Communication',
    'Data Entry & Documentation',
    'Task Scheduling & Management',
    'Work Order Tracking',
    'Contractor Coordination',
    'Effective Communication',
    'Team Collaboration',
    'Time Management',
    'Attention to Detail',
    'Problem Solving',
    'Decision Making',
  ];
  const toolsAndTech = [
    'MS Word & MS Excel',
    'Google Workspace',
    'Email & Calendar Management',
    'Documentation & Reporting',
  ];
  const testimonials = [
    {
      quote: 'Suvadra consistently keeps communication clear and ensures every task is completed on time.',
      author: 'Operations Supervisor',
    },
    {
      quote: 'Her training sessions are structured, practical, and highly engaging for team members.',
      author: 'Training Coordinator',
    },
  ];
  const languages = [
    { name: 'English', level: 'Fluent', value: 78 },
    { name: 'Bangla', level: 'Fluent (Native)', value: 92 },
    { name: 'Hindi', level: 'Proficient (Speaking & Listening)', value: 65 },
  ];
  const galleryItems = [
    {
      title: 'Team collaboration',
      subtitle: 'Modern office, brainstorming, and working together',
      src: galleryPhotoTeam,
    },
    {
      title: 'Program delivery',
      subtitle: 'Leading meetings, milestones, and clear communication',
      src: galleryPhotoProgram,
    },
    {
      title: 'Workspace',
      subtitle: 'Professional environment and day-to-day coordination',
      src: galleryPhotoWorkspace,
    },
    {
      title: 'Professional highlight',
      subtitle: 'Training, service, and teamwork in focus',
      src: galleryPhotoHighlight,
    },
  ];
  const faqItems = [
    {
      q: 'Are you available for full-time or freelance work?',
      a: 'Yes. I am open to both full-time opportunities and project-based freelance coordination assignments.',
    },
    {
      q: 'Which type of roles are best matched with your profile?',
      a: 'Client coordination, training facilitation, documentation and reporting, and operations support roles are the best fit.',
    },
    {
      q: 'How quickly can you start a new assignment?',
      a: 'For most roles, I can start immediately or within a short transition window based on project requirements.',
    },
    {
      q: 'Can we contact you directly for an interview?',
      a: 'Absolutely. You can contact me by email or the quick message form on this website.',
    },
  ];

  const nextGallery = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevGallery = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const encodeForm = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload),
      });
      form.reset();
      setIsFormSent(true);
      setTimeout(() => setIsFormSent(false), 3500);
    } catch (error) {
      setIsFormSent(false);
    }
  };

  useEffect(() => {
    const targets = quickStats.map((item) => item.value);
    const maxDuration = 900;
    const frameMs = 24;
    const steps = Math.max(1, Math.floor(maxDuration / frameMs));
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      setAnimatedStats(targets.map((target) => Math.min(target, Math.ceil((target * currentStep) / steps))));
      if (currentStep >= steps) clearInterval(timer);
    }, frameMs);
    return () => clearInterval(timer);
  }, []);

  // Testimonial auto-slide
  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % testimonials.length), 3500);
    return () => clearInterval(t);
  }, []);

  // Skills animate on scroll
  useEffect(() => {
    if (!skillsVisible) return;
    const skillValues = skills.map(s => s.value);
    const steps = 40;
    let step = 0;
    const t = setInterval(() => {
      step++;
      setAnimatedSkills(skillValues.map(v => Math.min(v, Math.ceil((v * step) / steps))));
      if (step >= steps) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [skillsVisible]);

  // Skills section observer
  useEffect(() => {
    const el = document.getElementById('skills-section');
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Custom cursor
  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const over = (e) => { if (e.target.closest('a,button,[role="button"]')) setCursorHover(true); };
    const out  = ()  => setCursorHover(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, []);

  const handleCvDownload = () => {
    const next = cvDownloads + 1;
    setCvDownloads(next);
    localStorage.setItem('cvDownloads', next);
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300 selection:bg-[#738F8A] selection:text-white`}>

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 z-[60] h-[3px] w-full bg-transparent">
        <div className="h-full bg-gradient-to-r from-[#2A7A6F] via-[#D7720C] to-[#2A7A6F] transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Back to top */}
      {showBackTop && (
        <button
          onClick={(e) => scrollToSection(e, 'home')}
          className={`fixed bottom-5 right-5 z-[55] w-11 h-11 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDarkMode ? 'bg-[#193433] text-[#EAF1EF] border border-[#436661]/60' : 'bg-white text-[#0D2322] border border-[#E4E8E7]'}`}
          aria-label="Back to top"
        >
          <ArrowRight className="-rotate-90" size={18} />
        </button>
      )}

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? `${isDarkMode ? 'bg-[#081616]/90' : 'bg-[#F5F4ED]/90'} backdrop-blur-md shadow-sm py-4` : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-name-display text-2xl font-semibold tracking-tight cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
            Suvadra<span className="text-[#2A7A6F]">.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {[
              { label: 'Services', id: 'services' },
              { label: 'Projects', id: 'projects' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Experience', id: 'experience' },
              { label: 'Credentials', id: 'certifications' },
              { label: 'Education', id: 'education' },
              { label: 'Language', id: 'languages' },
              { label: 'FAQ', id: 'faq' },
            ].map(({ label, id }, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="nav-link cursor-pointer"
                style={{
                  animationDelay: `${i * 0.07}s`,
                  color: activeSection === id ? '#2A7A6F' : undefined,
                }}
              >
                {label}
                <span className="nav-link-underline" style={{ width: activeSection === id ? '100%' : undefined, background: activeSection === id ? '#2A7A6F' : undefined }} />
              </a>
            ))}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2.5 rounded-full border ${theme.line} hover:scale-110 hover:rotate-12 transition-all duration-300`}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={(e) => scrollToSection(e, 'contact')} className={`${accentCtaClass} px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-105`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full ${theme.bg} shadow-lg py-6 px-6 flex flex-col space-y-4 font-medium border-t ${theme.line}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block hover:text-[#D7720C]">Services</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block hover:text-[#D7720C]">Projects</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="block hover:text-[#D7720C]">Gallery</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="block hover:text-[#D7720C]">Experience</a>
            <a href="#certifications" onClick={(e) => scrollToSection(e, 'certifications')} className="block hover:text-[#D7720C]">Credentials</a>
            <a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="block hover:text-[#D7720C]">Education</a>
            <a href="#languages" onClick={(e) => scrollToSection(e, 'languages')} className="block hover:text-[#D7720C]">Language</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-[#D7720C]">FAQ</a>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`w-full py-2 rounded-xl border ${theme.line}`}>
              {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
            </button>
            <button onClick={(e) => scrollToSection(e, 'contact')} className={`${accentCtaClass} px-6 py-3 rounded-full w-full mt-4`}>
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" data-reveal className="reveal relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#D7720C]/10 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#738F8A]/20 blur-3xl"></div>
        <div className="relative z-20 flex-1 space-y-8 text-center md:text-left">
          <h1 className="font-name-display leading-[1.08] tracking-tight">
            <span className="block text-5xl md:text-7xl font-semibold">
              Suvadra
            </span>
            <span
              className={`block text-6xl md:text-8xl font-bold ${
                isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'
              }`}
            >
              Kundu
            </span>
          </h1>
          <h2 className={`text-xl md:text-2xl ${theme.accent} font-medium leading-relaxed max-w-2xl`}>
            Professional Client Coordinator & Lead Trainer. <br/>
            <span className={theme.text}>I transform complex data and daily operations into clear, people-first workflows that teams can trust.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
            <a href="mailto:mailboxofsuvra@gmail.com" className={`${accentCtaClass} px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center`}>
              <Mail size={20} />
              Let's talk
            </a>
            
            {/* Ekhane button er bodole anchor tag deya holo jate CV download hoy */}
            <a
              href={cvFile}
              download="Suvadra_Kundu_CV.pdf"
              onClick={handleCvDownload}
              className={`relative bg-transparent border-2 ${isDarkMode ? 'border-[#EAF1EF]' : 'border-[#0D2322]'} ${theme.text} px-8 py-4 rounded-full font-medium ${isDarkMode ? 'hover:bg-[#EAF1EF] hover:text-[#0D2322]' : 'hover:bg-[#0D2322] hover:text-[#F5F4ED]'} transition-all flex items-center gap-2 w-full sm:w-auto justify-center`}
            >
              <Download size={20} />
              Download CV
              {cvDownloads > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D7720C] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cvDownloads}
                </span>
              )}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {quickStats.map((item, idx) => (
              <div key={item.label} className={`rounded-2xl border ${theme.line} ${theme.cardBg} backdrop-blur-sm p-4 text-left shadow-sm`}>
                <p className="text-2xl font-extrabold tracking-tight">{animatedStats[idx]}{item.suffix}</p>
                <p className={`text-sm ${theme.mutedText}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hero portrait — 3D floating PNG (no frame) */}
        {/* pointer-events: portrait visually overlaps text on md+ (translate); clicks must pass through to mailto links */}
        <div className="pointer-events-none [&_*]:pointer-events-none flex w-full flex-1 justify-center md:w-auto md:justify-end md:pr-2">
          {/* No aspect-[3/4] here — inner .profile-3d-stage keeps ratio; outer must grow so the tagline box does not overflow onto the heading (mobile). */}
          <div className="relative mx-auto w-full max-w-[320px] translate-x-1 overflow-visible md:mx-0 md:max-w-[24rem] md:-translate-x-6 lg:-translate-x-8">
            {/* Orbit rings around portrait */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-[2]">
              <div className="absolute left-1/2 top-[44%] flex h-[74%] w-[74%] max-h-[19rem] max-w-[19rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div
                  className={`profile-orbit-spin relative h-full w-full rounded-full border-2 border-dashed ${
                    isDarkMode ? 'border-[#738F8A]/35' : 'border-[#738F8A]/45'
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg ${
                      isDarkMode
                        ? 'bg-[#F0A048] shadow-[#D7720C]/35'
                        : 'bg-[#D7720C] shadow-[#D7720C]/40'
                    }`}
                  />
                </div>
              </div>
              <div className="absolute left-1/2 top-[44%] flex h-[88%] w-[88%] max-h-[22.5rem] max-w-[22.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div
                  className={`profile-orbit-spin profile-orbit-spin--reverse h-full w-full rounded-full border ${
                    isDarkMode ? 'border-[#D7720C]/22' : 'border-[#D7720C]/32'
                  } shadow-[0_0_36px_rgba(215,114,12,0.08)]`}
                />
              </div>
            </div>

            {/* Floating info badges */}
            {/* Top-left: NSDA badge */}
            <div
              className={`absolute -left-6 top-8 z-20 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl backdrop-blur-md ${
                isDarkMode
                  ? 'bg-[#112928]/90 border border-[#A5B4FC]/35 text-[#EAF1EF]'
                  : 'bg-white/90 border border-[#4F46E5]/25 text-[#0D2322]'
              }`}
            >
              <Award size={16} className={isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'} />
              <span className={`text-xs font-bold ${isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'}`}>NSDA Level 4</span>
            </div>
            {/* Top-right: Experience */}
            <div
              className={`absolute -right-4 top-20 z-20 flex flex-col items-center rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md ${
                isDarkMode
                  ? 'bg-[#112928]/90 border border-[#A5B4FC]/35 text-[#EAF1EF]'
                  : 'bg-white/90 border border-[#4F46E5]/25 text-[#0D2322]'
              }`}
            >
              <span className={`text-xl font-extrabold ${isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'}`}>8+</span>
              <span
                className={`text-[10px] font-semibold leading-tight text-center ${isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'}`}
              >
                Years Exp.
              </span>
            </div>

            <div className="profile-3d-stage relative z-10 aspect-[3/4] w-full">
            {/* Soft glow halo behind the figure */}
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 -z-10 blur-3xl ${isDarkMode ? 'bg-[#D7720C]/25' : 'bg-[#D7720C]/20'}`}
              style={{ borderRadius: '50%' }}
            />
            {/* Secondary cool glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[#738F8A]/20 blur-3xl"
            />
            {/* Ground shadow ellipse */}
            <div
              aria-hidden
              className="profile-3d-ground pointer-events-none absolute -bottom-2 left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-[50%] bg-black/35 blur-xl"
            />
            <div className="profile-3d-wrapper relative h-full w-full">
              <img
                src={profileImage}
                alt="Suvadra Kundu"
                className={`profile-3d-img relative z-10 mx-auto h-full w-full object-contain object-top ${
                  isDarkMode ? 'profile-3d-img--dark' : 'profile-3d-img--light'
                }`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            </div>

            {/* Motivational text below feet */}
            <div className={`relative z-20 mt-4 mx-auto flex flex-col items-center gap-1 text-center rounded-2xl border px-6 py-3 backdrop-blur-sm shadow-md ${
              isDarkMode
                ? 'bg-[#0F2C2B]/80 border-[#A5B4FC]/35'
                : 'bg-white/80 border-[#4F46E5]/25'
            }`}>
              <p className={`motivation-text text-[11px] font-bold tracking-[0.18em] uppercase ${isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'}`}>
                Empowering People
              </p>
              <div className={`h-px w-8 rounded-full ${isDarkMode ? 'bg-[#A5B4FC]/45' : 'bg-[#4F46E5]/35'}`} />
              <p className={`motivation-text motivation-text--delay text-[10px] tracking-widest uppercase ${isDarkMode ? 'text-[#A5B4FC]' : 'text-[#4F46E5]'}`}>
                One Team at a Time
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-reveal className="reveal py-20 bg-[#0D2322] text-[#F5F4ED] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Services</h2>
              <p className="text-[#738F8A] text-lg">Delivering high-quality coordination, hospitality operations, and training support with proven hands-on experience.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Client Coordination", icon: <MessageCircle size={32} />, desc: "Managing communications, task scheduling, and work order tracking." },
              { title: "Assessor-Led Training", icon: <Award size={32} />, desc: "NSDA Level 4 certified Assessor & Trainer, delivering structured classes and practical skill development." },
              { title: "Food & Beverage Operations", icon: <Briefcase size={32} />, desc: "Supporting smooth kitchen workflow, food quality control, and efficient team coordination for consistent service delivery." },
              { title: "Digital Marketing", icon: <TrendingUp size={32} />, desc: "Strategic growth using Facebook Blueprint and Google Digital Garage tools." }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#1A3332] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-[#738F8A]/20 hover:border-[#2A7A6F] hover:shadow-xl">
                <div className="text-[#2A7A6F] mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#738F8A] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" data-reveal className={`reveal py-24 px-6 md:px-12 ${theme.sectionAlt}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-center gap-3">
            <Sparkles className={theme.primaryText} />
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article key={project.title} className={`${theme.cardBg} p-8 rounded-3xl border ${theme.line} shadow-sm hover:shadow-md transition`}>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className={`${theme.mutedText} mb-4 leading-relaxed`}>{project.desc}</p>
                <p className={`text-sm font-semibold ${theme.primaryText}`}>{project.stack}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" data-reveal className="reveal py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Animated heading */}
        <div className="mb-12 relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="gallery-line-anim h-px w-10 bg-[#D7720C]" />
            <span className={`text-xs font-bold tracking-widest uppercase ${isDarkMode ? 'text-[#F0A048]' : 'text-[#D7720C]'}`}>Portfolio</span>
          </div>
          <h2 className="gallery-title-anim text-4xl md:text-5xl font-bold">
            Photo{' '}
            <span className="gallery-shimmer-text">Gallery</span>
          </h2>
          <p className={`${theme.mutedText} mt-3 gallery-sub-anim`}>Training, coordination, and professional highlights.</p>
          {/* Floating decorative dots */}
          <div aria-hidden className="pointer-events-none absolute -top-4 right-0 flex gap-1.5">
            {[0,1,2,3,4].map(i => (
              <span key={i} className="gallery-dot-float inline-block h-1.5 w-1.5 rounded-full bg-[#D7720C]/40" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>

        <div className={`rounded-3xl overflow-hidden border ${theme.line} ${theme.cardBg} shadow-sm gallery-card-anim`}>
          <button
            onClick={() => setIsGalleryGridOpen(true)}
            className="relative w-full text-left group overflow-hidden"
          >
            <img
              key={`gallery-main-${activeGalleryIndex}`}
              src={galleryItems[activeGalleryIndex].src}
              alt={galleryItems[activeGalleryIndex].title}
              className="h-[320px] md:h-[460px] w-full object-contain bg-[#0D2322]/5 gallery-fade-in"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-white/90 text-[#0D2322] text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                View All
              </span>
            </div>
            <span className="absolute top-4 right-4 rounded-full bg-black/60 text-white px-3 py-1 text-sm gallery-counter-anim">
              {activeGalleryIndex + 1}/{galleryItems.length}
            </span>
          </button>

          <div className="p-5 md:p-6 flex items-center justify-between gap-4">
            <div className="gallery-info-anim">
              <p className="text-xl font-bold">{galleryItems[activeGalleryIndex].title}</p>
              <p className={`text-sm mt-1 ${theme.mutedText}`}>{galleryItems[activeGalleryIndex].subtitle}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevGallery}
                className={`gallery-nav-btn h-10 w-10 rounded-full border ${theme.line} flex items-center justify-center hover:bg-[#D7720C] hover:text-white hover:border-[#D7720C] transition-all duration-200 active:scale-90`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextGallery}
                className={`gallery-nav-btn h-10 w-10 rounded-full border ${theme.line} flex items-center justify-center hover:bg-[#D7720C] hover:text-white hover:border-[#D7720C] transition-all duration-200 active:scale-90`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-wrap gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeGalleryIndex
                    ? 'w-8 bg-[#D7720C] gallery-dot-active'
                    : `w-2.5 hover:w-5 ${isDarkMode ? 'bg-[#436661] hover:bg-[#738F8A]' : 'bg-[#CAD6D3] hover:bg-[#738F8A]'}`
                }`}
                aria-label={`Show gallery image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="skills-section" data-reveal className="reveal py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`${theme.cardBg} rounded-3xl p-8 border ${theme.line} shadow-sm`}>
            <h3 className="text-3xl font-bold mb-6">Core Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, idx) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 text-sm font-semibold">
                    <span>{skill.name}</span>
                    <span>{animatedSkills[idx] || 0}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-[#193433]' : 'bg-[#E3E7E5]'}`}>
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#2A7A6F] to-[#D7720C] transition-all duration-300 ease-out" style={{ width: `${animatedSkills[idx] || 0}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={`mt-8 rounded-2xl p-5 ${theme.softCard} border ${theme.line}`}>
              <p className={`text-xs font-bold tracking-widest uppercase ${theme.primaryText}`}>Core Competencies</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {coreCompetencies.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D7720C]"></span>
                    <span className={theme.mutedText}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-xs font-bold tracking-widest uppercase ${theme.primaryText}`}>Tools & Tech</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {toolsAndTech.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D7720C]"></span>
                    <span className={theme.mutedText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${theme.cardBg} rounded-3xl p-8 border ${theme.line} shadow-sm flex flex-col`}>
            <h3 className="text-3xl font-bold mb-6">Testimonials</h3>
            {/* min-h: absolute blockquotes don't contribute to height — without this the carousel collapses on mobile */}
            <div className="relative min-h-[260px] flex-1 overflow-hidden sm:min-h-[280px]">
              {testimonials.map((item, idx) => (
                <blockquote
                  key={item.author}
                  className={`absolute inset-0 flex flex-col rounded-2xl p-5 ${theme.softCard} transition-all duration-500 ${
                    idx === testimonialIdx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <p className="leading-relaxed text-lg">"{item.quote}"</p>
                  <footer className={`mt-4 shrink-0 text-sm font-semibold ${theme.primaryText}`}>— {item.author}</footer>
                </blockquote>
              ))}
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === testimonialIdx ? 'w-6 bg-[#D7720C]' : `w-2 ${isDarkMode ? 'bg-[#436661]' : 'bg-[#CAD6D3]'}`}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="languages" data-reveal className={`reveal py-24 px-6 md:px-12 ${theme.sectionAlt}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.primaryText}`}>Language</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Languages</h2>
          </div>
          <div className={`${theme.cardBg} rounded-3xl p-8 border ${theme.line} shadow-sm max-w-3xl`}>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">{lang.name}</p>
                      <p className={theme.mutedText}>{lang.level}</p>
                    </div>
                  </div>
                  <div className={`mt-4 h-2 rounded-full ${isDarkMode ? 'bg-[#193433]' : 'bg-[#E3E7E5]'}`}>
                    <div className="h-2 rounded-full bg-[#B8872B]" style={{ width: `${lang.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" data-reveal className="reveal py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className={`${theme.mutedText} mt-3`}>Quick answers to common queries.</p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={item.q} className={`rounded-2xl border ${theme.line} ${theme.cardBg}`}>
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold"
              >
                <span>{item.q}</span>
                <span className={theme.primaryText}>{openFaqIndex === idx ? '-' : '+'}</span>
              </button>
              {openFaqIndex === idx && <p className={`px-5 pb-5 ${theme.mutedText}`}>{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" data-reveal className="reveal py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line for timeline */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#738F8A]/30"></div>
          
          <div className="space-y-12">
            {[
              {
                period: "Current",
                role: "Lead Trainer (F&B Production Level 3)",
                company: "SAIC Institute of Management & Technology",
                active: true
              },
              {
                period: "April 2025 – February 2026",
                role: "Client Coordinator",
                company: "Megamind Infotech, Dhaka",
                active: false
              },
              {
                period: "February 2018 – March 2025",
                role: "Commis II",
                company: "Amari Dhaka, Gulshan",
                active: false
              }
            ].map((job, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20 group">
                {/* Timeline Dot */}
                <div className={`absolute left-2.5 md:left-7 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${job.active ? 'bg-[#D7720C] border-[#D7720C]' : `${theme.cardBg} border-[#738F8A]`} group-hover:scale-125 transition-transform`}></div>
                
                <div className={`${theme.cardBg} p-6 md:p-8 rounded-3xl shadow-sm border ${theme.line} hover:shadow-md transition-shadow`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${job.active ? 'bg-[#D7720C]/10 text-[#D7720C]' : 'bg-[#738F8A]/10 text-[#738F8A]'}`}>
                    {job.period}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{job.role}</h3>
                  <p className={`text-lg ${theme.mutedText} flex items-center gap-2`}>
                    <Briefcase size={18} className={theme.accent} />
                    {job.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Certifications Section */}
      <section id="certifications" data-reveal className={`reveal py-24 ${theme.sectionAlt} px-6 md:px-12 border-y ${theme.line}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trainings & Certificates</h2>
            <p className="text-[#738F8A] text-lg">A snapshot of professional trainings and credentials aligned with my CV.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Assessor & Trainer (CBTA & M, Level 4)", org: "NSDA", year: "2026" },
              { title: "Food and Beverage Production (Level 3)", org: "NSDA", year: "2025" },
              { title: "Foundation Grammar & Writing (81%)", org: "Mentors", year: "2024" },
              { title: "Spoken English & Phonetics (88%)", org: "Mentors", year: "2024" },
              { title: "Driving Training", org: "Faridpur TTC", year: "2023" },
              { title: "Digital Marketing", org: "Google Digital Garage", year: "2021" },
              { title: "Facebook Blueprint Certification", org: "Facebook", year: "2021" },
              { title: "Digital Marketing Course", org: "Sheikh Hasina Tech Park", year: "2021" },
              { title: "Spoken English Course", org: "BBC Janala", year: "2016" },
              { title: "Cabin Crew Basic Course", org: "Jobs1.com", year: "2015" },
              { title: "News Presentation Course", org: "Jobs1.com", year: "2015" },
              { title: "Basic Computer Skills", org: "Dept. of Social Service", year: "2014" }
            ].map((cert, idx) => (
              <div key={idx} className={`p-8 rounded-3xl ${theme.softCard} hover:bg-[#0D2322] hover:text-[#F5F4ED] transition-all duration-300 group border ${theme.line} hover:-translate-y-1 hover:shadow-xl`}>
                <p className="text-sm font-semibold text-[#D7720C] mb-2 tracking-wider uppercase">{cert.org}</p>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className={`font-medium ${theme.mutedText} group-hover:text-[#738F8A]/80`}>{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Community Impact Section */}
      <section id="education" data-reveal className="reveal py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education - Ekhane baki degree gulo add kora hoyeche */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={32} className={theme.primaryText} />
              <h2 className="text-3xl font-bold">Academic Background</h2>
            </div>
            
            <div className="space-y-6">
              {/* Masters Degree */}
              <div className={`${theme.cardBg} p-8 rounded-3xl shadow-sm border ${theme.line} hover:border-[#738F8A]/40 transition-colors`}>
                <h3 className="text-2xl font-bold mb-2">Master of Arts</h3>
                <p className={`text-lg ${theme.text} mb-4`}>Bengali Language, Literature & Culture</p>
                <div className={`flex items-center justify-between ${theme.mutedText} font-medium border-t ${theme.line} pt-4 mt-4`}>
                  <span>National University of Bangladesh</span>
                  <span>CGPA 3.00/4.00</span>
                </div>
              </div>

              {/* Bachelors Degree */}
              <div className={`${theme.cardBg} p-8 rounded-3xl shadow-sm border ${theme.line} hover:border-[#738F8A]/40 transition-colors`}>
                <h3 className="text-2xl font-bold mb-2">Bachelor of Arts</h3>
                <p className={`text-lg ${theme.text} mb-4`}>Bengali (Honours)</p>
                <div className={`flex items-center justify-between ${theme.mutedText} font-medium border-t ${theme.line} pt-4 mt-4`}>
                  <span>National University of Bangladesh</span>
                  <span>Passing Year: 2017</span>
                </div>
              </div>
            </div>

          </div>

          {/* Community */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Heart size={32} className={theme.primaryText} />
              <h2 className="text-3xl font-bold">Community Impact</h2>
            </div>
            <div className="space-y-4">
              <div className={`${theme.cardBg} p-6 rounded-3xl shadow-sm border ${theme.line} flex items-start gap-4 hover:border-[#738F8A]/40 transition-colors`}>
                <div className="mt-1 w-2 h-2 rounded-full bg-[#D7720C]"></div>
                <div>
                  <h4 className="font-bold text-lg">RCY Volunteer</h4>
                  <p className={theme.mutedText}>Bangladesh Red Crescent Society</p>
                </div>
              </div>
              <div className={`${theme.cardBg} p-6 rounded-3xl shadow-sm border ${theme.line} flex items-start gap-4 hover:border-[#738F8A]/40 transition-colors`}>
                <div className="mt-1 w-2 h-2 rounded-full bg-[#D7720C]"></div>
                <div>
                  <h4 className="font-bold text-lg">Field Agent</h4>
                  <p className={theme.mutedText}>Help Aid Foundation</p>
                </div>
              </div>
              <div className={`${theme.cardBg} p-6 rounded-3xl shadow-sm border ${theme.line} flex items-start gap-4 hover:border-[#738F8A]/40 transition-colors`}>
                <div className="mt-1 w-2 h-2 rounded-full bg-[#D7720C]"></div>
                <div>
                  <h4 className="font-bold text-lg">Trainer</h4>
                  <p className={theme.mutedText}>Magura Ideal Debating Society</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" data-reveal className="reveal bg-[#0D2322] text-[#F5F4ED] pt-24 pb-8 px-6 md:px-12 rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 border-b border-[#738F8A]/20 pb-16">
            
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's work <br/> together.</h2>
              <p className="text-xl text-[#738F8A] mb-8">Available for new work and direct inquiries.</p>
              <a href="mailto:mailboxofsuvra@gmail.com" className={`inline-flex items-center gap-2 ${accentCtaClass} px-8 py-4 rounded-full font-bold transition-all text-lg`}>
                Start a Conversation
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex flex-col justify-end space-y-6 md:pl-12">
              <a href="mailto:mailboxofsuvra@gmail.com" className="flex items-center gap-4 text-xl hover:text-[#D7720C] transition-colors group">
                <div className="p-3 bg-[#1A3332] rounded-full group-hover:bg-[#D7720C]/20 transition-colors"><Mail size={24} /></div>
                mailboxofsuvra@gmail.com
              </a>
              <div className="flex items-center gap-4 text-xl text-[#738F8A] group">
                <div className="p-3 bg-[#1A3332] rounded-full"><MapPin size={24} className="text-[#F5F4ED]"/></div>
                Boalmari, Faridpur, Bangladesh
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Message</h3>
              <form
                name="quick-message"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleContactSubmit}
                className="space-y-3"
              >
                <input type="hidden" name="form-name" value="quick-message" />
                <p className="hidden">
                  <label>
                    Do not fill this if you are human: <input name="bot-field" />
                  </label>
                </p>
                <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-[#1A3332] border border-[#738F8A]/30 px-4 py-3 outline-none focus:border-[#D7720C]" />
                <input name="email" required type="email" placeholder="Your email" className="w-full rounded-xl bg-[#1A3332] border border-[#738F8A]/30 px-4 py-3 outline-none focus:border-[#D7720C]" />
                <textarea name="message" required rows={3} placeholder="Your message" className="w-full rounded-xl bg-[#1A3332] border border-[#738F8A]/30 px-4 py-3 outline-none focus:border-[#D7720C]"></textarea>
                <button type="submit" className={`${accentCtaClass} px-5 py-3 rounded-xl flex items-center gap-2`}>
                  <Send size={18} />
                  Send Message
                </button>
                {isFormSent && <p className="text-xs text-[#9fd3ad]">Message sent successfully. Thank you.</p>}
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[#738F8A] text-sm">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.linkedin.com/in/sk-shuvra/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://x.com/suvadrakundu" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X (Twitter)</a>
            </div>
            <div className="flex items-center gap-6">
              <p>© 2026 Suvadra Kundu. All rights reserved.</p>
              <button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white flex items-center gap-1 transition-colors">
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
      <a
        href={cvFile}
        download="Suvadra_Kundu_CV.pdf"
        className={`${accentCtaClass} fixed bottom-5 right-5 z-[55] px-5 py-3 rounded-full shadow-xl md:hidden`}
      >
        CV
      </a>
      {/* Floating social buttons — left side */}
      <div className="fixed left-5 bottom-5 z-[55] flex flex-col gap-3">
        {/* Gmail */}
        <a
          href="mailto:mailboxofsuvra@gmail.com"
          aria-label="Email Suvadra"
          className="social-fab bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center border border-black/5 hover:scale-110 hover:-translate-y-1 transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            <path fill="#EA4335" d="M1.5 5.5v13h4.2V9.1L1.5 5.5z" />
            <path fill="#34A853" d="M18.3 9.1v9.4h4.2v-13l-4.2 3.6z" />
            <path fill="#FBBC05" d="M18.3 18.5H5.7V9.1L12 14l6.3-4.9v9.4z" />
            <path fill="#4285F4" d="M22.5 5.5L12 14 1.5 5.5 3.8 4h16.4l2.3 1.5z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sk-shuvra/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Suvadra"
          className="social-fab bg-[#0A66C2] text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        {/* X (Twitter) */}
        <a
          href="https://x.com/suvadrakundu"
          target="_blank"
          rel="noreferrer"
          aria-label="X Suvadra"
          className="social-fab bg-black text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
          </svg>
        </a>
      </div>
      {isGalleryGridOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsGalleryGridOpen(false)}
        >
          <div className="max-w-5xl w-full rounded-3xl overflow-hidden bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 md:p-6 border-b border-[#E4E8E7] flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-[#0D2322]">Gallery Preview</p>
                <p className="text-[#5E6F6B]">All photos in one view ({galleryItems.length})</p>
              </div>
              <button
                className="h-10 w-10 rounded-full bg-[#0D2322] text-white flex items-center justify-center"
                onClick={() => setIsGalleryGridOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[75vh] overflow-auto">
              {galleryItems.map((item, idx) => (
                <figure
                  key={`grid-photo-${idx}`}
                  className="rounded-2xl overflow-hidden border border-[#E2E7E5] bg-[#F7F7F5] gallery-pop-in"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <img src={item.src} alt={item.title} className="w-full h-44 object-contain bg-[#0D2322]/5" />
                  <figcaption className="p-3">
                    <p className="font-semibold text-[#0D2322] text-sm">{item.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}