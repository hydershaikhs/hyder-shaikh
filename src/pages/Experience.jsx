import { Target, Search, PenTool, Clapperboard, Palette, Share2, Check, Briefcase, TrendingUp, Calendar, Award } from 'lucide-react';
import './Experience.css';
import Reveal from '../components/Reveal';

const experiences = [
  {
    role: 'Meta Ads Specialist & Content Creator',
    company: 'Israin Solution',
    period: '2 Months Internship',
    type: 'Internship',
    highlight: true,
    description: 'Executed high-ROI paid ad campaigns on Facebook & Instagram, crafted persuasive ad creatives, conducted audience research, and optimized CPM, CPC, and ROAS while assisting with technical SEO activities.',
    achievements: [
      'Structured conversion-focused Meta Ads campaigns targeting targeted demographics',
      'Tested multi-variant creatives (visuals, headlines, copy) to lower cost-per-click',
      'Conducted on-page and off-page SEO evaluations for client web properties',
      'Developed high-retention social media content and short-form video reels'
    ]
  },
  {
    role: 'Social Media Growth Manager',
    company: 'Marketing Insight',
    period: 'Active Project',
    type: 'Client & Community Project',
    highlight: false,
    description: 'Managing end-to-end digital presence across Instagram and Facebook: publishing schedule, audience engagement, custom brand creatives, and video content production.',
    achievements: [
      'Established cohesive visual brand identity across feed posts and stories',
      'Maintained consistent content calendar and direct community messaging',
      'Tracked engagement analytics to iterate on top-performing post themes'
    ]
  }
];

const expertiseDomains = [
  {
    icon: <Target size={26} />,
    title: 'Meta Ads Campaigns',
    desc: 'Plan, launch, and optimize high-converting Facebook & Instagram ad funnels engineered for maximum ROAS.',
    items: [
      'Campaign Structure & Strategy',
      'Sales & Lead Generation Goals',
      'Laser-Focused Audience Targeting',
      'High-CTR Ad Creative Creation',
      'Continuous Split-Testing (A/B)',
      'CPM, CPC, CTR & ROAS Analysis',
    ],
    tools: ['Meta Ads Manager', 'Meta Business Suite', 'Meta Ads Library'],
  },
  {
    icon: <Search size={26} />,
    title: 'Search Engine Optimization',
    desc: 'Improve website search visibility and rankings through structured technical, on-page, and off-page SEO.',
    items: [
      'Comprehensive Keyword Research',
      'Search Intent & Gap Analysis',
      'On-Page SEO & Meta Architecture',
      'Backlink Analysis & Link Building',
      'Technical SEO & Speed Auditing',
      'Actionable SEO Performance Reports',
    ],
    tools: ['Semrush', 'Google Search Console', 'Ubersuggest', 'Google Keyword Planner', 'PageSpeed Insights'],
  },
  {
    icon: <PenTool size={26} />,
    title: 'Content & Copywriting',
    desc: 'Craft clear, persuasive words that rank on Google, stop the scroll, and compel readers into paying customers.',
    items: [
      'Persuasive Ad Copywriting',
      'SEO-Optimized Blog Writing',
      'Scroll-Stopping Social Captions',
      'High-Converting Headlines & CTAs',
      'Brand Messaging & Positioning',
    ],
    tools: ['Claude', 'Copy.ai', 'QuillBot', 'Grammarly'],
  },
  {
    icon: <Clapperboard size={26} />,
    title: 'Video Editing & Reels',
    desc: 'Edit fast-paced, high-retention short-form video content tailored to modern social algorithms and feeds.',
    items: [
      'Viral Instagram Reels Editing',
      'Engaging Product & Review Videos',
      'Short-Form TikTok & Shorts Cuts',
      'Pacing, Sound Design & Subtitles',
      'Promotional Video Production',
    ],
    tools: ['CapCut', 'Adobe Premiere Pro'],
  },
  {
    icon: <Palette size={26} />,
    title: 'Social Media Design',
    desc: 'Design scroll-stopping, brand-aligned visual assets for every platform â€” from carousel graphics to logos.',
    items: [
      'Instagram Post & Story Design',
      'Facebook & LinkedIn Banner Creatives',
      'High-Converting Ad Graphics',
      'Minimalist Logo & Identity Design',
      'Consistent Visual Aesthetics',
    ],
    tools: ['Canva', 'Adobe Photoshop'],
  },
  {
    icon: <Share2 size={26} />,
    title: 'Social Media Management',
    desc: 'Manage social channels end-to-end: strategic scheduling, community interaction, and growth metrics.',
    items: [
      'Content Calendar & Planning',
      'Multi-Platform Publishing',
      'Active Community Management',
      'DM & Comment Response Flow',
      'Follower Growth & Reach Analysis',
    ],
    tools: ['Meta Business Suite', 'Canva'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">HANDS-ON BACKGROUND</span>
            <h2 className="page-title">Experience &amp; Expertise</h2>
            <p className="text-muted">
              Practical digital marketing experience combining analytical ad strategy, technical SEO execution, and high-impact creative production.
            </p>
          </div>
        </Reveal>

        {/* Work Timeline / Highlights */}
        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.role} delay={idx * 120}>
              <div className={`exp-card ${exp.highlight ? 'exp-card-featured' : ''}`}>
                <div className="exp-card-header">
                  <div className="exp-card-title-group">
                    <span className="exp-badge">
                      <Briefcase size={14} /> {exp.type}
                    </span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-divider">â€¢</span>
                      <span className="exp-period"><Calendar size={13} /> {exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-achievements">
                  <span className="exp-achievements-title">Key Responsibilities &amp; Impact:</span>
                  <ul className="exp-achievements-list">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>
                        <Check size={15} className="text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core Competencies Grid */}
        <Reveal>
          <div className="exp-subhead">
            <span className="section-tag">CORE COMPETENCIES</span>
            <h3 className="section-title">What I Bring to the Table</h3>
            <p className="text-muted">
              Deep expertise across the key pillars of modern digital growth.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {expertiseDomains.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 3) * 90}>
              <div className="skill-card">
                <div className="skill-card-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p className="skill-card-desc">{skill.desc}</p>

                <div className="skill-list-title">Core Skills</div>
                <ul className="skill-list">
                  {skill.items.map((it) => (
                    <li key={it}><Check size={15} /> {it}</li>
                  ))}
                </ul>

                <div className="skill-tools">
                  {skill.tools.map((t) => (
                    <span className="skill-tool-chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;