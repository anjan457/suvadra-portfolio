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
  Phone,
  MessageCircle,
  TrendingUp,
  Sun,
  Moon,
  Sparkles,
  Send
} from 'lucide-react';
import profileImage from './assets/suvadra.jpg';
import cvFile from './assets/Suvadra_Kundu_CV.pptx.pdf';

const quickStats = [
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Teams Trained', value: 20, suffix: '+' },
  { label: 'Projects Coordinated', value: 150, suffix: '+' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isGalleryGridOpen, setIsGalleryGridOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Navbar er scroll effect control korar jonno
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { title: 'Training Session', subtitle: 'Facilitating practical group learning', src: profileImage },
    { title: 'Professional Portrait', subtitle: 'Personal brand and profile highlight', src: profileImage },
    { title: 'Team Collaboration', subtitle: 'Coordinating cross-functional activities', src: profileImage },
    { title: 'Program Delivery', subtitle: 'Structured service and communication', src: profileImage },
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
      a: 'Absolutely. You can contact me by email, WhatsApp, or the quick message form on this website.',
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

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300 selection:bg-[#738F8A] selection:text-white`}>
      
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? `${isDarkMode ? 'bg-[#081616]/90' : 'bg-[#F5F4ED]/90'} backdrop-blur-md shadow-sm py-4` : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
            Suvadra<span className={theme.primaryText}>.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Services</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Projects</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Gallery</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Experience</a>
            <a href="#certifications" onClick={(e) => scrollToSection(e, 'certifications')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Credentials</a>
            <a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Education</a>
            <a href="#languages" onClick={(e) => scrollToSection(e, 'languages')} className="hover:text-[#D7720C] transition-colors cursor-pointer">Language</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[#D7720C] transition-colors cursor-pointer">FAQ</a>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2.5 rounded-full border ${theme.line} hover:scale-105 transition`}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={(e) => scrollToSection(e, 'contact')} className={`${theme.primary} text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg`}>
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
            <button onClick={(e) => scrollToSection(e, 'contact')} className={`${theme.primary} text-white px-6 py-3 rounded-full w-full mt-4`}>
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" data-reveal className="reveal relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#D7720C]/10 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#738F8A]/20 blur-3xl"></div>
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Suvadra <br className="hidden md:block"/> Kundu
          </h1>
          <h2 className={`text-xl md:text-2xl ${theme.accent} font-medium leading-relaxed max-w-2xl`}>
            Professional Client Coordinator & Lead Trainer. <br/>
            <span className={theme.text}>I transform complex data and daily operations into clear, people-first workflows that teams can trust.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
            <a href="mailto:mailboxofsuvra@gmail.com" className={`${theme.primary} text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center`}>
              <Mail size={20} />
              Get in Touch
            </a>
            
            {/* Ekhane button er bodole anchor tag deya holo jate CV download hoy */}
            <a 
              href={cvFile} 
              download="Suvadra_Kundu_CV.pptx.pdf" 
              className={`bg-transparent border-2 ${isDarkMode ? 'border-[#EAF1EF]' : 'border-[#0D2322]'} ${theme.text} px-8 py-4 rounded-full font-medium ${isDarkMode ? 'hover:bg-[#EAF1EF] hover:text-[#0D2322]' : 'hover:bg-[#0D2322] hover:text-[#F5F4ED]'} transition-all flex items-center gap-2 w-full sm:w-auto justify-center`}
            >
              <Download size={20} />
              Download CV
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
        
        {/* Hero Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className={`absolute inset-0 ${theme.accentBg} rounded-full opacity-20 animate-pulse`}></div>
            <div className={`absolute inset-4 border-2 ${theme.borderAccent} rounded-full`}></div>
            <div className="absolute inset-6 rounded-full border border-[#D7720C]/40"></div>
            <div className="absolute inset-8 bg-[#0D2322] rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
               {/* Jokhon apni eta apnar pc te run korben, nicher src ta change kore apnar "image.png" diye diben:
                 <img src="image.png" alt="Suvadra Kundu" className="w-full h-full object-cover" />
               */}
               <img 
                 src={profileImage} 
                 alt="Suvadra Kundu" 
                 className="w-full h-full object-cover"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
               />
            </div>
            {/* Decorative element */}
            <div className={`absolute bottom-4 left-4 w-16 h-16 ${theme.primary} rounded-full flex items-center justify-center text-white shadow-lg`}>
              <ArrowRight className="-rotate-45" size={28} />
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
              <div key={idx} className="bg-[#1A3332] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-[#738F8A]/20 hover:border-[#D7720C] hover:shadow-xl">
                <div className={`${theme.primaryText} mb-6`}>{service.icon}</div>
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
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Photo Gallery</h2>
          <p className={`${theme.mutedText} mt-3`}>Training, coordination, and professional highlights.</p>
        </div>
        <div className={`rounded-3xl overflow-hidden border ${theme.line} ${theme.cardBg} shadow-sm`}>
          <button
            onClick={() => setIsGalleryGridOpen(true)}
            className="relative w-full text-left"
          >
            <img
              key={`gallery-main-${activeGalleryIndex}`}
              src={galleryItems[activeGalleryIndex].src}
              alt={galleryItems[activeGalleryIndex].title}
              className="h-[320px] md:h-[460px] w-full object-contain bg-[#0D2322]/5 gallery-fade-in"
              loading="lazy"
            />
            <span className="absolute top-4 right-4 rounded-full bg-black/60 text-white px-3 py-1 text-sm">
              {activeGalleryIndex + 1}/{galleryItems.length}
            </span>
          </button>
          <div className="p-5 md:p-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold">{galleryItems[activeGalleryIndex].title}</p>
              <p className={`text-sm mt-1 ${theme.mutedText}`}>{galleryItems[activeGalleryIndex].subtitle}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={prevGallery} className={`h-10 w-10 rounded-full border ${theme.line} flex items-center justify-center`}>
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextGallery} className={`h-10 w-10 rounded-full border ${theme.line} flex items-center justify-center`}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-wrap gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === activeGalleryIndex ? 'w-8 bg-[#D7720C]' : `w-2.5 ${isDarkMode ? 'bg-[#436661]' : 'bg-[#CAD6D3]'}`}`}
                aria-label={`Show gallery image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="reveal py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`${theme.cardBg} rounded-3xl p-8 border ${theme.line} shadow-sm`}>
            <h3 className="text-3xl font-bold mb-6">Core Skills</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 text-sm font-semibold">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-[#193433]' : 'bg-[#E3E7E5]'}`}>
                    <div className="h-2 rounded-full bg-[#D7720C]" style={{ width: `${skill.value}%` }}></div>
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
          <div className={`${theme.cardBg} rounded-3xl p-8 border ${theme.line} shadow-sm`}>
            <h3 className="text-3xl font-bold mb-6">Testimonials</h3>
            <div className="space-y-4">  
              {testimonials.map((item) => (
                <blockquote key={item.author} className={`rounded-2xl p-5 ${theme.softCard}`}>
                  <p className="leading-relaxed">"{item.quote}"</p>
                  <footer className={`mt-3 text-sm font-semibold ${theme.primaryText}`}>- {item.author}</footer>
                </blockquote>
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
              <a href="mailto:mailboxofsuvra@gmail.com" className={`inline-flex items-center gap-2 ${theme.primary} text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all text-lg`}>
                Start a Conversation
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex flex-col justify-end space-y-6 md:pl-12">
              <a href="mailto:mailboxofsuvra@gmail.com" className="flex items-center gap-4 text-xl hover:text-[#D7720C] transition-colors group">
                <div className="p-3 bg-[#1A3332] rounded-full group-hover:bg-[#D7720C]/20 transition-colors"><Mail size={24} /></div>
                mailboxofsuvra@gmail.com
              </a>
              <div className="flex items-center gap-4 text-xl group">
                <div className="p-3 bg-[#1A3332] rounded-full"><Phone size={24} className="text-[#F5F4ED]" /></div>
                +880 1327 274392
              </div>
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
                <button type="submit" className={`${theme.primary} text-white px-5 py-3 rounded-xl flex items-center gap-2`}>
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
        download="Suvadra_Kundu_CV.pptx.pdf"
        className={`${theme.primary} fixed bottom-5 right-5 z-40 text-white px-5 py-3 rounded-full shadow-xl md:hidden`}
      >
        CV
      </a>
      <a
        href="mailto:mailboxofsuvra@gmail.com"
        aria-label="Email Suvadra"
        className="fixed bottom-20 left-5 z-40 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center border border-black/5 hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
          <path fill="#EA4335" d="M1.5 5.5v13h4.2V9.1L1.5 5.5z" />
          <path fill="#34A853" d="M18.3 9.1v9.4h4.2v-13l-4.2 3.6z" />
          <path fill="#FBBC05" d="M18.3 18.5H5.7V9.1L12 14l6.3-4.9v9.4z" />
          <path fill="#4285F4" d="M22.5 5.5L12 14 1.5 5.5 3.8 4h16.4l2.3 1.5z" />
        </svg>
      </a>
      <a
        href="https://wa.me/8801327274392"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Suvadra"
        className="fixed bottom-5 left-5 z-40 bg-[#25D366] text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current" aria-hidden="true">
          <path d="M19.11 17.21c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.21-.44-2.31-1.39-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.56c-.2 0-.51.08-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.07 3.16 5.01 4.43.7.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.39.24-.68.24-1.26.17-1.39-.07-.12-.27-.2-.56-.34zM16.02 5.33c-5.88 0-10.66 4.78-10.66 10.66 0 1.87.49 3.7 1.41 5.32L5.3 26.67l5.53-1.45c1.57.86 3.34 1.31 5.19 1.31h.01c5.88 0 10.66-4.78 10.66-10.66 0-2.85-1.11-5.53-3.12-7.54-2.01-2-4.69-3-7.55-3zm0 19.31h-.01c-1.58 0-3.12-.43-4.46-1.23l-.32-.19-3.28.86.87-3.19-.21-.33a8.73 8.73 0 0 1-1.34-4.67c0-4.82 3.92-8.74 8.75-8.74 2.34 0 4.54.91 6.2 2.57a8.7 8.7 0 0 1 2.55 6.19c0 4.82-3.92 8.74-8.75 8.74z" />
        </svg>
      </a>
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