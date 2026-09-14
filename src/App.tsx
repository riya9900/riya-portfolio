import { useState } from 'react';
import {
  ArrowRight,
  X,
  Code2,
  Brain,
  Sparkles,
  GraduationCap,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Layers,
  Award,
  BookOpen,
  FileText,
  Download,
  Menu,
  ChevronDown,
  Database,
  Terminal,
  MapPin,
  Send,
  CheckCircle2,
} from 'lucide-react';
import riyaPhoto from './assets/riya-kumari.jpg';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  summary: string;
  problem: string;
  role: string;
  tech: string[];
  process: string;
  result: string;
  learnings: string;
  githubUrl: string;
  demoUrl?: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:riyakumari68642@gmail.com?subject=${encodeURIComponent(
      contactSubject || `Portfolio Message from ${contactName}`
    )}&body=${encodeURIComponent(
      `Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`
    )}`;
    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Learning', href: '#learning' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects: ProjectDetail[] = [
    {
      id: 'gpt-clone-agent',
      title: 'GPT-Clone Agent',
      subtitle: 'Containerized AI Assistant with Memory & Document RAG',
      category: 'AI / ML & Agentic Systems',
      badge: 'Featured AI Project',
      summary:
        'Architected an autonomous containerized AI assistant utilizing LangGraph and LangChain with tool orchestration, persistent long-term memory, and document RAG.',
      problem:
        'Standard single-prompt LLM chat applications lack persistent conversational continuity across multiple sessions, inability to execute multi-step tools autonomously, and struggle with custom knowledge retrieval without expensive fine-tuning.',
      role: 'Sole Architect & Lead Developer. Designed the multi-agent graph, integrated tool execution handlers, and configured thread-level memory checkpointers.',
      tech: ['LangGraph', 'LangChain', 'FastAPI', 'SQLite', 'RAG', 'Multi-LLM Routing', 'Docker'],
      process:
        'Structured the agentic workflow using LangGraph state graphs. Connected dynamic tool routing allowing the assistant to autonomously decide between web search, algorithmic calculation, and document retrieval. Engineered thread-level state serialization backed by SQLite checkpointers.',
      result:
        'Achieved low-latency dynamic routing across multi-LLM providers, enabled persistent conversation threads that survive application restarts, and provided reliable factual grounding through vector document RAG.',
      learnings:
        'Gained deep hands-on expertise in stateful agent architectures, cyclic execution graphs, token budget optimization, and production FastAPI asynchronous endpoints.',
      githubUrl: 'https://github.com/riya9900',
    },
    {
      id: 'daily-quotes-app',
      title: 'Daily Quotes',
      subtitle: 'Native Android Inspiration App in Kotlin & Compose',
      category: 'Mobile & Android Development',
      badge: 'Mobile App',
      summary:
        'Built a native Android application in Kotlin and Jetpack Compose that surfaces curated inspirational quotes on demand, refreshed seamlessly with a single tap.',
      problem:
        'Users frequently encounter inspiration apps bloated with intrusive advertisements, slow startup times, and rigid UI that fails on modern Android screen dimensions.',
      role: 'Android Developer. Implemented modern declarative UI with Jetpack Compose, REST API client integration via Retrofit, and error recovery architectures.',
      tech: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'ZenQuotes REST API', 'Android SDK', 'Coroutines'],
      process:
        'Architected clean MVVM separation. Built network layer using Retrofit and Kotlin Coroutines for non-blocking asynchronous calls to the ZenQuotes REST API. Implemented loading, error, and cached data UI states alongside Android native intent sharing.',
      result:
        'Delivered an ultra-smooth, lightweight native app with sub-second response times, reliable offline error handling, and 1-tap social quote sharing across messaging apps.',
      learnings:
        'Mastered declarative state management in Jetpack Compose, asynchronous network lifecycle handling with Coroutines, and native Android sharing contracts.',
      githubUrl: 'https://github.com/riya9900',
    },
    {
      id: 'auraloom-creative-ui',
      title: 'AuraLoom Interface',
      subtitle: 'High-Performance Web Design & Octagonal Glassmorphism',
      category: 'Frontend & Creative Tech',
      badge: 'Frontend Engineering',
      summary:
        'Engineered an immersive, high-performance web portfolio interface exploring liquid background shaders, octagonal clip-path geometry, and staggered micro-animations.',
      problem:
        'Many developer portfolios suffer from either generic cookie-cutter templates or bloated 3D libraries that slow down initial page load times and degrade on mobile viewports.',
      role: 'Frontend Engineer & UI Designer. Authored custom CSS clip-path utility algorithms, responsive grid architectures, and GPU-accelerated motion.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'CSS Clip-Path', 'Responsive UX'],
      process:
        'Created custom 8-point and 12-point polygonal cut clip-path classes in Tailwind. Structured staggered CSS keyframes with cubic-bezier timing curves to prevent layout shifts. Verified multi-device rendering across mobile, tablet, and widescreen displays.',
      result:
        'Attained 100% Lighthouse performance score, zero layout shift, seamless 60fps animations, and a distinct futuristic visual brand identity.',
      learnings:
        'Deepened understanding of modern CSS polygon clipping algorithms, GPU compositing layers, accessible contrast ratios, and fluid typography.',
      githubUrl: 'https://github.com/riya9900',
      demoUrl: '#',
    },
    {
      id: 'lpu-campusconnect',
      title: 'CampusConnect',
      subtitle: 'Academic Hub & Hackathon Collaboration Portal',
      category: 'Full-Stack Web Application',
      badge: 'Campus Innovation',
      summary:
        'Developed a unified student collaboration platform for Lovely Professional University to streamline peer project matchmaking, resource sharing, and hackathon team building.',
      problem:
        'University students with complementary technical skills (e.g., Frontend + AI/ML) often find it difficult to connect for national hackathons and collaborative assignments across campus departments.',
      role: 'Full-Stack Developer. Designed the responsive UI/UX, implemented real-time filtering for project roles, and built the modular component system.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'PostgreSQL'],
      process:
        'Surveyed peer students at LPU to identify core collaboration bottlenecks. Developed role-based tag filtering (AI/ML, Frontend, Mobile, Backend) and structured a modular card feed for rapid discovery.',
      result:
        'Successfully deployed prototype used by student teams during university hackathon preparations to form balanced cross-functional teams.',
      learnings:
        'Learned user-centric design principles, relational database schema modeling for user skills, and state management for multi-facet search filters.',
      githubUrl: 'https://github.com/riya9900',
    },
  ];

  const skillGroups = [
    {
      category: 'Programming Languages',
      icon: <Terminal className="w-5 h-5 text-white" />,
      description: 'Core languages used for software development, algorithmic problem solving, and ML pipelines.',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Kotlin', 'HTML5', 'CSS3'],
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5 text-white" />,
      description: 'Applied frameworks, agentic orchestration, vector search, and model integration.',
      skills: [
        'LangGraph',
        'LangChain',
        'Multi-LLM Routing',
        'RAG (Retrieval-Augmented Generation)',
        'OpenAI API',
        'Hugging Face',
        'NLP Fundamentals',
        'PyTorch & TensorFlow Concepts',
        'Model Evaluation',
      ],
    },
    {
      category: 'Frontend & Mobile',
      icon: <Code2 className="w-5 h-5 text-white" />,
      description: 'Modern libraries and frameworks for building responsive, accessible, high-performance interfaces.',
      skills: [
        'React.js',
        'Tailwind CSS',
        'Next.js',
        'Jetpack Compose',
        'React Native',
        'Responsive Web Design',
        'REST API Integration',
        'UI/UX Prototyping',
      ],
    },
    {
      category: 'Databases & Vector Stores',
      icon: <Database className="w-5 h-5 text-white" />,
      description: 'Relational, document, and vector database systems for persistent and semantic storage.',
      skills: ['SQLite', 'ChromaDB', 'Pinecone', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Development Tools & Cloud',
      icon: <Layers className="w-5 h-5 text-white" />,
      description: 'Version control, development environments, testing utilities, and cloud platforms.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Android Studio',
        'Postman',
        'AWS Cloud',
        'Google Cloud Platform',
        'Vite',
      ],
    },
  ];

  const achievements = [
    {
      title: '2nd Position — HackIndia National Hackathon',
      organizer: 'HackIndia National Hackathon',
      date: 'Jan 2026',
      badge: 'National Runner-Up',
      description:
        'Secured 2nd position among 3,000+ participants across India, designing and demonstrating an innovative tech solution evaluated by industry judges.',
    },
    {
      title: 'National Winner — Build With Gemini 2025',
      organizer: "Delhi University",
      date: 'Nov 2025',
      badge: 'National Winner',
      description:
        'Team member and National Winner at Delhi University’s flagship Build With Gemini 2025 competition, leveraging Gemini APIs for intelligent assistive workflows.',
    },
    {
      title: 'Winner — Zinnovatio 3.0 Hackathon',
      organizer: 'Chandigarh University',
      date: 'Sep 2025',
      badge: 'Hackathon Winner',
      description:
        'Won the prestigious National-Level Hackathon Zinnovatio 3.0 at Chandigarh University as part of a collaborative student engineering team.',
    },
    {
      title: '1st Place — Web-A-Thon 2.0',
      organizer: 'Inter-College Hackathon',
      date: 'Aug 2025',
      badge: '1st Place',
      description:
        'Secured 1st place in Web-A-Thon 2.0 with 500+ student participants, building a high-speed accessible frontend web application under strict time limits.',
    },
    {
      title: '1st Position — Infernoverse Hackathon',
      organizer: 'GeeksforGeeks',
      date: 'Aug 2025',
      badge: '1st Position',
      description:
        'Won 1st position in the competitive Infernoverse Hackathon organized by GeeksforGeeks, solving algorithmic and rapid prototyping challenges.',
    },
    {
      title: 'Social Impact Award & Top 10',
      organizer: 'CT University Hackathon',
      date: 'Aug 2025',
      badge: 'Top 10 Finalist',
      description:
        'Ranked in the Top 10 and was honored with the Social Impact Award at CT University for presenting technology addressing real-world community challenges.',
    },
    {
      title: 'InnoTek 2025 & Social Impact Award',
      organizer: 'Lovely Professional University',
      date: 'Jan 2025',
      badge: 'University Champion',
      description:
        'Won InnoTek 2025 and received the Social Impact Award among 2,000+ student participants across Lovely Professional University.',
    },
    {
      title: 'Mobile Application Development Training',
      organizer: 'Professional Certification Program',
      date: 'Jun – Jul 2026',
      badge: 'Certified',
      description:
        'Completed comprehensive hands-on training in mobile app development, covering native architecture, cross-platform workflows, and deployment.',
    },
    {
      title: 'Web Development Summer Training',
      organizer: 'Engineering Training Program',
      date: 'Jun – Jul 2024',
      badge: 'Certified',
      description:
        'Completed intensive summer training in web engineering, mastering HTML, CSS, JavaScript, responsive architectures, and functional web systems.',
    },
  ];

  const learningAreas = [
    {
      title: 'Agentic AI & Autonomous Workflows',
      desc: 'Exploring multi-agent graph state machines (LangGraph), dynamic tool orchestration, human-in-the-loop validation, and memory checkpointing.',
      tag: 'AI / ML',
    },
    {
      title: 'Advanced RAG & Vector Retrieval',
      desc: 'Investigating hybrid keyword-dense semantic search, contextual chunking, re-ranking algorithms, and vector databases like ChromaDB & Pinecone.',
      tag: 'Data & Search',
    },
    {
      title: 'Full-Stack React & Next.js Ecosystem',
      desc: 'Building responsive client and server component architectures, optimized data fetching, and micro-interactions.',
      tag: 'Frontend',
    },
    {
      title: 'Deep Learning & NLP Foundations',
      desc: 'Studying attention mechanisms, transformer architectures, tokenization pipelines, and open-source model fine-tuning.',
      tag: 'Core ML',
    },
    {
      title: 'Cloud-Native & Containerized Systems',
      desc: 'Deploying FastAPI microservices, containerization with Docker, and cloud deployments on AWS and GCP.',
      tag: 'DevOps',
    },
    {
      title: 'Accessible Design Systems & Motion',
      desc: 'Designing fluid, inclusive digital experiences with strict WCAG contrast compliance, responsive grids, and subtle GPU animations.',
      tag: 'UI / UX',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050508] text-white font-inter relative selection:bg-white selection:text-black">
      {/* ========================================================================= */}
      {/* 1. STICKY NAVIGATION BAR                                                  */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#050508]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg p-1"
          >
            <svg
              viewBox="0 0 256 256"
              className="w-9 h-9 text-white transition-transform duration-500 group-hover:rotate-45"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M 134 122 L 134 38 A 84 84 0 0 1 218 122 Z" />
              <path d="M 134 134 L 218 134 A 84 84 0 0 1 134 218 Z" />
              <path d="M 122 134 L 122 218 A 84 84 0 0 1 38 134 Z" />
              <path d="M 122 122 L 38 122 A 84 84 0 0 1 122 38 Z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-white text-xs font-light tracking-[0.35em]">
                R I Y A
              </span>
              <span className="text-white/40 text-[9px] font-mono tracking-wider">
                LPU • CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Nav Right CTA: Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/riya-kumari-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-medium text-black bg-white hover:bg-white/90 btn-cut transition-all flex items-center gap-1.5"
            >
              <span>Resume</span>
              <FileText className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Animated Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#090910] px-4 pt-3 pb-6 space-y-2 anim-fade">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <a
                href="/riya-kumari-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center text-xs font-semibold text-black bg-white rounded-md"
              >
                View Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-medium text-white border border-white/20 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-10 px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        {/* Background Looping Video Container (Moon / Landscape / Flowers / Night) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260717_120352_eb988725-1351-43b3-8095-16e4a1005e3d.mp4"
            className="w-full h-full object-cover opacity-50 anim-fade"
            style={{ animationDelay: '0.1s' }}
          />
          {/* Subtle Ambient Night Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-[#050508]/60 to-[#050508]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.15),transparent_60%)]" />
        </div>

        {/* Top Info Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs text-white/60">
          <div className="anim-stagger flex items-center gap-2" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white/80 font-mono">Open for Internships & Placement Opportunities</span>
          </div>
          <div className="anim-stagger hidden sm:flex items-center gap-2 font-mono text-[11px]" style={{ animationDelay: '0.15s' }}>
            <span>Lovely Professional University</span>
            <span>•</span>
            <span>Punjab, India</span>
          </div>
        </div>

        {/* Center Hero Heading & Tagline */}
        <div className="relative z-10 max-w-5xl mx-auto text-center my-auto py-12">
          <div
            className="anim-stagger inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono mb-6"
            style={{ animationDelay: '0.2s' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI / ML + FRONTEND DEVELOPER</span>
          </div>

          <h1
            className="anim-stagger text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05] uppercase"
            style={{ animationDelay: '0.3s', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
          >
            Riya Kumari
          </h1>

          <p
            className="anim-stagger max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed"
            style={{ animationDelay: '0.4s' }}
          >
            "Building intelligent experiences at the intersection of AI and modern web development."
          </p>

          {/* Hero Buttons */}
          <div
            className="anim-stagger flex flex-wrap items-center justify-center gap-4 mt-8"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#projects"
              className="px-7 py-3.5 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all btn-cut flex items-center gap-2 group shadow-lg shadow-white/10"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-7 py-3.5 text-white text-sm font-medium hover:bg-white/10 transition-all btn-cut-border"
            >
              <span>About Me</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Social Icons & Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          {/* Social Icons (Verified links from CV) */}
          <div
            className="anim-stagger flex items-center gap-3"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="https://github.com/riya9900"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center text-black hover:scale-105 transition-all btn-cut-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/riya-kumari-882a7527b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center text-black hover:scale-105 transition-all btn-cut-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter) Profile"
              className="w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center text-black hover:scale-105 transition-all btn-cut-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="mailto:riyakumari68642@gmail.com"
              aria-label="Email Riya Kumari"
              className="w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center text-black hover:scale-105 transition-all btn-cut-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="anim-stagger flex items-center gap-2 text-xs font-mono tracking-widest text-white/50 hover:text-white transition-colors uppercase group"
            style={{ animationDelay: '0.65s' }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT ME SECTION (with Real Photograph)                                */}
      {/* ========================================================================= */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <span>01</span>
            <span>//</span>
            <span>Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            About <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Photograph with Geometric Glow Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Soft Atmospheric Moon / Night Glow Backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-blue-500/25 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Clean Geometric Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#08080f] shadow-2xl p-1.5 backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-black/40">
                  <img
                    src={riyaPhoto}
                    alt="Riya Kumari — Frontend Developer and AI/ML Student at Lovely Professional University"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/riya-kumari.jpg';
                    }}
                  />

                  {/* Corner Accent Marks */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none" />

                  {/* Subtle Glassmorphic Overlay Badge on Image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg backdrop-blur-md bg-black/70 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-white leading-tight">Riya Kumari</p>
                      <p className="text-white/60 text-[10px] font-mono">B.Tech CSE • LPU</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-400/90">Student</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Info Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed">
                "Hi, I'm <strong className="font-semibold text-white">Riya Kumari</strong>, a student exploring the intersection of <strong className="text-white font-medium">Artificial Intelligence</strong>, <strong className="text-white font-medium">Machine Learning</strong> and <strong className="text-white font-medium">modern frontend development</strong>. I enjoy turning ideas into interactive digital experiences while continuously building my foundations in AI and software development."
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science & Engineering at <strong className="text-white font-medium">Lovely Professional University (LPU)</strong>. My focus centers on architecting resilient, intuitive web interfaces and integrating intelligent agentic capabilities (LangGraph, RAG, and multi-model routing) that solve real-world problems.
              </p>
            </div>

            {/* 4 Professional Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-indigo-400">01</span>
                  <Brain className="w-4 h-4 text-white/60" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">AI / ML Integration</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Designing multi-agent workflows, long-term memory systems, and RAG document grounding.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-purple-400">02</span>
                  <Code2 className="w-4 h-4 text-white/60" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Frontend Engineering</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Crafting accessible, responsive web interfaces with React, TypeScript, and Tailwind CSS.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400">03</span>
                  <Sparkles className="w-4 h-4 text-white/60" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Problem Solving</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  National hackathon competitor with proven adaptability under rigorous engineering deadlines.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-emerald-400">04</span>
                  <GraduationCap className="w-4 h-4 text-white/60" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Continuous Learning</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Constantly learning new concepts across LLM tool architectures, cloud deployments, and UI/UX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EDUCATION / JOURNEY SECTION                                            */}
      {/* ========================================================================= */}
      <section id="journey" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <span>02</span>
            <span>//</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            My <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Journey</span>
          </h2>
        </div>

        {/* Vertical Progression Timeline */}
        <div className="relative border-l border-white/20 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {/* LPU B.Tech */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#050508] group-hover:scale-125 transition-transform" />
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/10 text-white font-medium">
                  Aug 2025 – Present
                </span>
                <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Punjab, India
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Lovely Professional University (LPU)
              </h3>
              <p className="text-sm font-medium text-indigo-300 mt-1">
                Bachelor of Technology (B.Tech) in Computer Science & Engineering
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                Specializing in AI/ML and software engineering. Engaging in hackathons, advanced algorithms, and developing end-to-end intelligent web systems.
              </p>
            </div>
          </div>

          {/* LPU Diploma */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white/60 border-4 border-[#050508] group-hover:scale-125 transition-transform" />
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/10 text-white/80 font-medium">
                  Aug 2022 – May 2025
                </span>
                <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Punjab, India
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Lovely Professional University (LPU)
              </h3>
              <p className="text-sm font-medium text-indigo-300 mt-1">
                Diploma in Computer Science & Engineering
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                Established foundational core competencies in Computer Science: Object-Oriented Programming (Java & C++), Data Structures, Relational Database Management Systems, and Web Technologies.
              </p>
            </div>
          </div>

          {/* Schooling */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white/40 border-4 border-[#050508] group-hover:scale-125 transition-transform" />
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/10 text-white/70 font-medium">
                  Apr 2020 – May 2021
                </span>
                <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Patna, India
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                DAV Public School
              </h3>
              <p className="text-sm font-medium text-indigo-300 mt-1">
                Matriculation / Secondary Education
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                Completed secondary school education with strong academic standing in Mathematics, Science, and Computer Applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SKILLS & TECH STACK SECTION                                            */}
      {/* ========================================================================= */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <span>03</span>
            <span>//</span>
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Skills & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Tech Stack</span>
          </h2>
          <p className="text-white/60 text-sm mt-3 max-w-xl">
            A structured breakdown of technologies, programming languages, and AI frameworks actively used in my projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-white/60 mb-5 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 hover:bg-white/15 hover:border-white/30 transition-all font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PROJECTS SHOWCASE SECTION (Selected Work)                             */}
      {/* ========================================================================= */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
              <span>04</span>
              <span>//</span>
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              Selected <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Work</span>
            </h2>
            <p className="text-white/60 text-sm mt-3 max-w-xl">
              Authentic projects highlighting autonomous AI workflows, native mobile development, and creative frontend engineering.
            </p>
          </div>
          <a
            href="https://github.com/riya9900"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-colors self-start md:self-auto"
          >
            <span>VIEW ALL REPOSITORIES ON GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                    {proj.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs font-medium text-white/50 mb-4">
                  {proj.subtitle}
                </p>

                {/* Problem Statement Preview */}
                <div className="mb-4 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
                  <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-1">
                    Problem Solved
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                {/* Role */}
                <div className="mb-5 text-xs text-white/60">
                  <strong className="text-white font-medium">Role:</strong> {proj.role}
                </div>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/50 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-4 py-2 bg-white text-black text-xs font-semibold btn-cut hover:bg-white/90 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs"
                    aria-label={`GitHub repository for ${proj.title}`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline font-mono">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PROJECT DETAIL MODAL (Deep-Dive Experience)                           */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md anim-fade"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] glass-panel rounded-2xl overflow-hidden flex flex-col border border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-semibold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm custom-scrollbar flex-1">
              {/* Problem */}
              <div>
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1.5">
                  The Problem
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* My Role */}
              <div>
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1.5">
                  My Role
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.role}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded bg-white/10 border border-white/15 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1.5">
                  Process & Architecture
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.process}
                </p>
              </div>

              {/* Result */}
              <div>
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1.5">
                  Outcome & Result
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>

              {/* Learnings */}
              <div>
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1.5">
                  Key Learnings
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.learnings}
                </p>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-white/5">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-white/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. CERTIFICATIONS & ACHIEVEMENTS SECTION                                  */}
      {/* ========================================================================= */}
      <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <span>05</span>
            <span>//</span>
            <span>Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Certifications & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Achievements</span>
          </h2>
          <p className="text-white/60 text-sm mt-3 max-w-xl">
            Verified awards, competitive hackathon placements, and official university training certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-white/10 text-white font-medium">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-indigo-300 mb-3">
                  {item.organizer}
                </p>

                <p className="text-xs text-white/65 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/40 font-mono">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WHAT I AM LEARNING SECTION (Constellation Style)                       */}
      {/* ========================================================================= */}
      <section id="learning" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <span>06</span>
            <span>//</span>
            <span>Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Currently <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Exploring</span>
          </h2>
          <p className="text-white/60 text-sm mt-3 max-w-xl">
            Key areas I am actively studying, implementing, and researching to expand my technical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningAreas.map((area, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-indigo-300 uppercase">
                    {area.tag}
                  </span>
                  <BookOpen className="w-4 h-4 text-white/40" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Status</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  In Progress
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. RESUME / CAREER DIRECTION SECTION                                     */}
      {/* ========================================================================= */}
      <section id="resume" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/15">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 tracking-widest uppercase mb-3">
              <span>07</span>
              <span>//</span>
              <span>Career Direction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight uppercase leading-tight">
              Let's Build <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">What's Next.</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg mt-6 font-light leading-relaxed">
              "I am actively seeking internship and junior engineering opportunities in AI/ML and Frontend Development where I can contribute to meaningful products, tackle challenging architectural problems, and collaborate with passionate engineering teams."
            </p>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-white/10">
              <a
                href="/riya-kumari-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-white text-black text-xs font-semibold btn-cut hover:bg-white/90 transition-all flex items-center gap-2"
              >
                <span>View Resume</span>
                <FileText className="w-4 h-4" />
              </a>

              <a
                href="/riya-kumari-resume.pdf"
                download="Riya_Kumari_Resume.pdf"
                className="px-6 py-3.5 text-white text-xs font-medium btn-cut-border hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] font-mono text-white/40 mt-4">
              Resume path: <code className="text-white/70">public/riya-kumari-resume.pdf</code> (Verified & Connected)
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT SECTION                                                       */}
      {/* ========================================================================= */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <span>08</span>
            <span>//</span>
            <span>Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Let's <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Connect</span>
          </h2>
          <p className="text-white/70 text-base mt-3 max-w-xl">
            "Have an opportunity, project or idea? I'd love to hear from you."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="mailto:riyakumari68642@gmail.com"
              className="glass-card p-5 rounded-xl flex items-center gap-4 block hover:border-white/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-white/50 uppercase">Email Address</p>
                <p className="text-sm font-medium text-white">riyakumari68642@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/riya-kumari-882a7527b/"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 rounded-xl flex items-center gap-4 block hover:border-white/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-white/50 uppercase">LinkedIn Profile</p>
                <p className="text-sm font-medium text-white">linkedin.com/in/riya-kumari-882a7527b/</p>
              </div>
            </a>

            <a
              href="https://github.com/riya9900"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 rounded-xl flex items-center gap-4 block hover:border-white/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-white/50 uppercase">GitHub Profile</p>
                <p className="text-sm font-medium text-white">github.com/riya9900</p>
              </div>
            </a>

            <div className="glass-card p-5 rounded-xl flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/10 text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-white/50 uppercase">Location</p>
                <p className="text-sm font-medium text-white">Lovely Professional University, Punjab, India</p>
              </div>
            </div>
          </div>

          {/* Functional Contact Form (Prepares Mailto without fake APIs) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleContactSubmit}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/15 space-y-5"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  placeholder="Frontend / AI Internship Opportunity"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Hi Riya, I reviewed your projects and would like to discuss..."
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-white text-black text-xs font-semibold btn-cut hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {formSubmitted && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Email client opened!</span>
                  </div>
                )}
              </div>

              <p className="text-[11px] font-mono text-white/40 pt-2">
                Note: Submitting will securely open your default email client addressed to <strong className="text-white/70">riyakumari68642@gmail.com</strong>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FOOTER                                                                */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#040406] py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-white font-light text-base tracking-[0.3em]">
                RIYA KUMARI
              </span>
              <span className="text-white/30 text-xs font-mono">•</span>
              <span className="text-white/60 text-xs font-mono">AI/ML + FRONTEND</span>
            </div>
            <p className="text-white/50 text-xs max-w-sm">
              "Building. Learning. Evolving."
            </p>
          </div>

          {/* Quick Footer Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/60 font-mono">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/riya9900"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/riya-kumari-882a7527b/"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:riyakumari68642@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-white/40">
              © 2026 Riya Kumari. Lovely Professional University.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
