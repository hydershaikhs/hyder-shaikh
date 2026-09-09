import { useState } from 'react';
import { 
  Megaphone, Search, PenTool, Clapperboard, Palette, Share2, 
  Check, ExternalLink, Globe, Target, BarChart3, LineChart, 
  Layers, Sparkles, FileText, ArrowUpRight, Filter, ShieldCheck,
  CalendarClock, Users, Wrench
} from 'lucide-react';
import './Projects.css';
import Reveal from '../components/Reveal';

const projects = [
  {
    id: 'pepvial-seo',
    title: 'PepVial â€” SEO Audit & Search Optimization',
    category: 'SEO',
    categoryLabel: 'SEO Case Study',
    client: 'PepVial',
    icon: <Globe size={24} className="text-accent" />,
    role: 'SEO Specialist & Analyst',
    description: 'Comprehensive SEO analysis and website optimization for PepVial. Conducted structured keyword discovery, audited technical performance, refined meta architecture, and formulated an organic growth roadmap.',
    deliverables: [
      'Targeted commercial and informational keyword research',
      'On-page content optimization and meta tags restructuring',
      'Technical site audit and Core Web Vitals evaluation',
      'Competitor backlink profile analysis'
    ],
    tags: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Performance Audit'],
    tools: ['Semrush', 'Google Search Console', 'PageSpeed Insights'],
  },
  {
    id: 'planetcert-seo',
    title: 'PlanetCert â€” Competitive SEO & Visibility Strategy',
    category: 'SEO',
    categoryLabel: 'SEO Case Study',
    client: 'PlanetCert',
    icon: <Search size={24} className="text-accent" />,
    role: 'SEO Specialist & Auditor',
    description: 'Competitive SEO benchmarking and organic reach enhancement for PlanetCert. Evaluated ranking opportunities, internal linking hierarchy, competitor keyword positioning, and backlink health.',
    deliverables: [
      'In-depth competitor keyword gap analysis',
      'Website architecture and internal linking optimization',
      'Search intent mapping for key landing pages',
      'Backlink profile quality assessment'
    ],
    tags: ['Competitor Analysis', 'Backlink Audit', 'SEO Architecture', 'Organic Traffic'],
    tools: ['Semrush', 'Google Keyword Planner', 'Ubersuggest'],
  },
  {
    id: 'meta-ads-campaigns',
    title: 'Conversion-Driven Meta Ads Campaigns',
    category: 'Meta Ads',
    categoryLabel: 'Paid Advertising',
    client: 'Israin Solution / Client Accounts',
    icon: <Target size={24} className="text-accent" />,
    role: 'Meta Ads Specialist',
    description: 'Full-funnel Facebook & Instagram paid advertising campaigns focused on conversions, lead generation, and maximizing return on ad spend (ROAS).',
    deliverables: [
      'Laser-targeted audience segmentation and demographic research',
      'Scroll-stopping visual ad creatives and primary copy hooks',
      'Continuous A/B split-testing of creative angles and headlines',
      'In-depth CPM, CPC, CTR, frequency, and ROAS reporting'
    ],
    tags: ['Audience Targeting', 'Creative Testing', 'ROAS Optimization', 'Performance Analytics'],
    tools: ['Meta Ads Manager', 'Meta Business Suite', 'Meta Ads Library'],
  },
  {
    id: 'marketing-insight-smm',
    title: 'Marketing Insight â€” Brand Growth & Community Management',
    category: 'Social',
    categoryLabel: 'Social Media Management',
    client: 'Marketing Insight',
    icon: <Share2 size={24} className="text-accent" />,
    role: 'Social Media Manager & Strategist',
    description: 'Actively running complete social presence across Instagram and Facebook. Crafting cohesive aesthetic visuals, scheduling regular value-driven posts, and driving community engagement.',
    deliverables: [
      'Strategic monthly content calendar and story planning',
      'Custom branded feed graphics and carousel infographics',
      'Proactive DM handling, comment moderation, and outreach',
      'Weekly engagement analytics and content iteration'
    ],
    tags: ['Instagram Growth', 'Facebook Strategy', 'Community Management', 'Content Scheduling'],
    tools: ['Meta Business Suite', 'Canva', 'Social Analytics'],
  },
  {
    id: 'video-editing-reels',
    title: 'High-Retention Video Editing & Short-Form Reels',
    category: 'Creative',
    categoryLabel: 'Video Production',
    client: 'Social Brands & Creators',
    icon: <Clapperboard size={24} className="text-accent" />,
    role: 'Video Editor & Motion Creator',
    description: 'Fast-paced, hook-driven short-form video editing for Instagram Reels, TikTok, and YouTube Shorts. Optimized for maximum watch time, engagement, and virality.',
    deliverables: [
      'First 3-second hook curation to stop the scroll',
      'Dynamic jump-cuts, speed ramps, and smooth transitions',
      'Animated subtitles, kinetic text, and trending sound design',
      'Product review edits, showcase reels, and promo snippets'
    ],
    tags: ['Instagram Reels', 'TikTok / Shorts', 'Sound Design', 'Hook Curation'],
    tools: ['CapCut', 'Adobe Premiere Pro'],
  },
  {
    id: 'social-design-branding',
    title: 'Brand Creatives & Social Media Post Design',
    category: 'Creative',
    categoryLabel: 'Visual Design',
    client: 'Various Clients',
    icon: <Palette size={24} className="text-accent" />,
    role: 'Visual Designer',
    description: 'Eye-catching, brand-aligned graphic design assets crafted for Instagram, Facebook, and LinkedIn to build authority and convert audience into leads.',
    deliverables: [
      'Multi-slide educational carousel designs',
      'High-CTR promotional ad banners and story graphics',
      'Minimalist, recognizable logo and vector assets',
      'Consistent color palettes and typography hierarchies'
    ],
    tags: ['Carousel Posts', 'Ad Creatives', 'Visual Identity', 'Social Banners'],
    tools: ['Adobe Photoshop', 'Canva'],
  },
];

const categories = [
  { key: 'All', label: 'All Projects' },
  { key: 'Meta Ads', label: 'Meta Ads' },
  { key: 'SEO', label: 'SEO Case Studies' },
  { key: 'Social', label: 'Social Media' },
  { key: 'Creative', label: 'Video & Design' },
];

const metaAdsFramework = [
  { icon: <Target size={18} />, title: 'Objective Selection', desc: 'Choosing precise conversion goals aligned with bottom-line business outcomes.' },
  { icon: <Users size={18} />, title: 'Audience Segmentation', desc: 'Finding high-intent prospects via demographics, behaviors, and custom audiences.' },
  { icon: <Sparkles size={18} />, title: 'Ad Creative Strategy', desc: 'Visual hooks and dynamic creatives built specifically to stop scroll fatigue.' },
  { icon: <FileText size={18} />, title: 'Direct Response Copy', desc: 'Persuasive headlines, benefits-focused copy, and friction-free CTAs.' },
  { icon: <Layers size={18} />, title: 'Campaign Architecture', desc: 'Clean, scaleable campaign structure with organized ad sets and naming.' },
  { icon: <LineChart size={18} />, title: 'Performance Monitoring', desc: 'Continuous tracking of live metric fluctuations and ad delivery health.' },
  { icon: <BarChart3 size={18} />, title: 'ROAS Optimization', desc: 'Reallocating budgets to winning ad variants and pruning underperforming sets.' },
  { icon: <ShieldCheck size={18} />, title: 'Efficiency Analysis', desc: 'Systematic analysis of CPM, CPC, CTR, Frequency, and Customer Acquisition Cost.' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">PORTFOLIO &amp; DELIVERABLES</span>
            <h2 className="page-title">Featured Projects &amp; Case Studies</h2>
            <p className="text-muted">
              A detailed look at real-world projects, organic SEO case studies, high-performing Meta ad funnels, and creative campaigns I've delivered.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Pills */}
        <Reveal>
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn ${activeCategory === cat.key ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 80}>
              <div className="project-card">
                <div className="project-card-top">
                  <div className="project-category-badge">
                    {proj.categoryLabel}
                  </div>
                  <div className="project-icon-box">
                    {proj.icon}
                  </div>
                </div>

                <div className="project-client-name">{proj.client}</div>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-role">{proj.role}</div>

                <p className="project-desc">{proj.description}</p>

                <div className="project-deliverables">
                  <div className="project-deliverables-title">Key Deliverables:</div>
                  <ul>
                    {proj.deliverables.map((d, i) => (
                      <li key={i}>
                        <Check size={14} className="text-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="project-tag-chip">{t}</span>
                  ))}
                </div>

                <div className="project-tools">
                  <span className="project-tools-label"><Wrench size={13} /> Tools:</span>
                  {proj.tools.map((tl) => (
                    <span key={tl} className="project-tool-badge">{tl}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Meta Ads Strategy Blueprint Highlight */}
        <Reveal>
          <div className="meta-blueprint-card">
            <div className="meta-blueprint-header">
              <div className="meta-blueprint-icon">
                <Target size={28} />
              </div>
              <div>
                <span className="section-tag">METHODOLOGY</span>
                <h3 className="meta-blueprint-title">My Meta Ads Execution Framework</h3>
                <p className="text-muted">
                  How I systematically turn ad spend into profitable conversions and measurable business returns.
                </p>
              </div>
            </div>

            <div className="meta-framework-grid">
              {metaAdsFramework.map((step, i) => (
                <div key={i} className="meta-step-card">
                  <div className="meta-step-num">0{i + 1}</div>
                  <div className="meta-step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;