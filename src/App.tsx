import { useEffect, useState } from 'react';
import { Award, ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Business Operations Analyst with experience in strategy consulting, market analysis, business operations, and cross-functional project management. Skilled in SQL, Excel, Power BI, market sizing, and operational analytics, with experience driving revenue growth, process optimization, and executive-level business recommendations.";

  const experience = [
    {
      company: "U.S. Chamber of Commerce",
      role: "Student Consultant",
      location: "United States",
      dates: "Jan 2026 - Mar 2026",
      highlights: [
        "Structured a hypothesis-driven go-to-market strategy across 40 U.S. states, synthesizing 10+ market variables into a tiered opportunity framework for national expansion planning.",
        "Built a quantitative market opportunity model using demographic and competitive datasets, producing 5-year revenue projections and scenario analyses for executive-level capital allocation."
      ]
    },
    {
      company: "lululemon",
      role: "Specialist",
      location: "Ottawa, Canada",
      dates: "Nov 2024 - Jun 2025",
      highlights: [
        "Identified root-cause gaps in sales conversion, basket size, and upsell penetration through structured data analysis, driving a 20% revenue increase within one quarter.",
        "Reduced stockouts by 15% by improving inventory flow and demand forecasting inputs across high-revenue SKUs."
      ]
    },
    {
      company: "Nokia",
      role: "HR Project Manager I",
      location: "Ottawa, Canada",
      dates: "May 2023 - Dec 2023",
      highlights: [
        "Managed 5+ cross-functional workstreams tied to workforce transformation priorities, maintaining VP-level accountability and on-time delivery across distributed business units.",
        "Built analytics infrastructure using Excel, SQL, and Power BI to track hiring funnel conversion, time-to-fill, and productivity data, improving recruitment efficiency by 15%.",
        "Redesigned operational processes across 4 stakeholder groups, improving system uptime by 30%, generating $30K in annualized cost savings, and increasing employee satisfaction by 25 points."
      ]
    },
    {
      company: "Avansys Software Solutions",
      role: "HR Executive Intern",
      location: "Hyderabad, India",
      dates: "May 2022 - Apr 2023",
      highlights: [
        "Analyzed 500+ applicant profiles and supported 100+ hires using structured scoring rubrics and data-informed selection criteria, improving placement rates by 30%.",
        "Optimized recruitment workflows by removing redundant handoffs, reclaiming 25+ hours per week and improving hiring pipeline visibility for managers.",
        "Improved candidate-role matching processes, increasing offer acceptance, reducing time-to-placement, and generating $25K in incremental revenue."
      ]
    }
  ];

  const projects = [
    {
      title: "MangeSafe App",
      subtitle: "Founder",
      category: "Health-Tech Strategy",
      introduction: "Founded a B2C mobile health app focused on dietary compliance, defining the product roadmap, target users, go-to-market strategy, and monetization model.",
      problem: "Consumers managing dietary restrictions need clearer tools for compliance, product choice, and habit support, while early-stage health-tech products need a validated market entry plan.",
      objective: "Build the business case, product positioning, and launch strategy for a scalable dietary compliance mobile app.",
      methodology: [
        "Defined target users, product roadmap, and monetization model.",
        "Developed user acquisition strategy and health-tech product positioning.",
        "Mapped market validation needs and customer adoption pathways."
      ],
      results: [
        "Built a business case for a projected $50K+ Year 1 revenue opportunity.",
        "Created a go-to-market strategy to support customer adoption and scalable growth.",
        "Established the foundation for product validation and early commercialization."
      ],
      conclusion: "MangeSafe demonstrates founder-led product strategy, market validation planning, and business model development for a consumer health-tech concept."
    },
    {
      title: "Happily Ever Gowns",
      subtitle: "Co-Founder",
      category: "Marketplace Strategy",
      introduction: "Co-founded a peer-to-peer bridal rental marketplace, building the business model, pricing strategy, unit economics, and customer acquisition approach.",
      problem: "Bridal wear is expensive, underutilized, and difficult to monetize after purchase, creating an opportunity for a trusted peer-to-peer rental model.",
      objective: "Design a marketplace growth strategy and revenue model that supports bridal rental adoption and sustainable unit economics.",
      methodology: [
        "Built pricing strategy, unit economics, and revenue model.",
        "Designed customer acquisition approach for bridal rental users.",
        "Mapped marketplace growth levers and adoption assumptions."
      ],
      results: [
        "Projected a $70K Year 1 revenue opportunity.",
        "Projected a 25% year-over-year growth trajectory across bridal rental users.",
        "Created a business model for a peer-to-peer fashion rental marketplace."
      ],
      conclusion: "The project highlights marketplace strategy, revenue modeling, and customer growth planning for a consumer rental business."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Technical Tools',
      skills: ['Advanced Excel', 'Pivot Tables', 'Financial Modeling', 'SQL', 'Tableau', 'Power BI', 'Python', 'PowerPoint']
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      skills: ['Market Sizing', 'Competitive Analysis', 'Financial Forecasting', 'Data Analysis', 'Process Optimization', 'Operational Analysis']
    },
    {
      icon: Users,
      title: 'Strategy & Operations',
      skills: ['Market Entry Strategy', 'Growth Strategy', 'Hypothesis-Driven Analysis', 'Data-Driven Decision Making', 'Business Operations']
    },
    {
      icon: Lightbulb,
      title: 'Leadership & Communication',
      skills: ['Executive Presentations', 'Stakeholder Management', 'Cross-Functional Leadership', 'Executive Communication', 'Storytelling']
    }
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Management Studies",
      location: "United States",
      dates: "May 2026",
      details: "Graduate business education focused on management, strategy, analytics, and business operations."
    },
    {
      school: "Carleton University, Sprott School of Business",
      degree: "Bachelor of Commerce, Honors",
      location: "Canada",
      dates: "Jun 2024",
      details: "Undergraduate business education with applied experience in operations, analytics, and student leadership."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  const leadership = [
    {
      title: "Duke University - Diversity Chair",
      platform: "Leadership & Volunteering",
      description: "Led DEI strategy for a 200+ member cohort, coordinating student engagement initiatives and inclusion-focused programming across cross-functional committees."
    },
    {
      title: "Carleton University Student Associations - President & Vice President",
      platform: "Ottawa, Canada",
      description: "Led and executed 15+ workshops, networking sessions, and student events with 100+ attendees, collaborating with industry professionals and alumni across 10+ countries. Developed partnerships with organizations and local businesses, increasing student association membership growth by up to 30%."
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">

            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Janvi Krishna Lingala"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              JANVI KRISHNA LINGALA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              BUSINESS OPERATIONS ANALYST
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              NORTH CAROLINA, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'MARKETS ANALYZED', value: '40', detail: 'U.S. States for GTM Strategy' },
              { label: 'REVENUE INCREASE', value: '20%', detail: 'Retail Operations Impact' },
              { label: 'WORKSTREAMS MANAGED', value: '5+', detail: 'Cross-Functional Projects' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Operations and strategy professional connecting market analysis, data-driven process improvement, and cross-functional execution to measurable business outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Market Strategy',
                detail: 'Structure market entry and go-to-market recommendations using hypothesis-driven analysis, competitive research, market sizing, and revenue projections.'
              },
              {
                icon: Rocket,
                title: 'Operations Execution',
                detail: 'Improve sales conversion, inventory flow, recruiting operations, and stakeholder processes through analytics-backed execution and process redesign.'
              },
              {
                icon: Lightbulb,
                title: 'Executive Analytics',
                detail: 'Use SQL, Excel, Power BI, Tableau, Python, and PowerPoint to build dashboards, forecasts, and executive-ready recommendations.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Strategy consulting, business operations, market analysis, retail operations, and workforce transformation experience.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} | {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Founder-led product strategy and marketplace business modeling projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in project strategy, market sizing, or operating model details?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical tools, business analytics, strategy, operations, leadership, and communication strengths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} | {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {papers.length > 0 && (
        <section id="papers" className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
              <p className="text-lg text-brown max-w-2xl mx-auto font-light">
                Research and publications in operations, strategy, and analytics.
              </p>
            </div>
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">LEADERSHIP</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-brown mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{item.title}</h3>
                    <p className="text-brown font-medium">{item.platform}</p>
                    <p className="text-brown leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss business operations, market strategy, analytics, or cross-functional project opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19843353943"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (984) 335 3943
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/janvi-kl-94a147253/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:kljanvi11@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                kljanvi11@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Janvi Krishna Lingala | Business Operations & Strategy Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
