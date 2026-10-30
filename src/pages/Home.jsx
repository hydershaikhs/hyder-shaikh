import { useState, useRef } from 'react';
import { ArrowRight, Film, Sparkles, Volume2, Calendar, Phone, CheckCircle2, Clapperboard, Camera, Play, Pause } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import './Home.css';
import heroImg from '../assets/hero.png';
import Reveal from '../components/Reveal';

const heroReels = [
  {
    id: "reel-1",
    src: "videos/ve-premiere-1.mp4",
    title: "Short-Form Video Edit",
    tool: "Premiere Pro",
    tag: "Hook & Sound Design",
    desc: "Kinetic subtitles, dynamic cuts & custom sound FX"
  },
  {
    id: "reel-2",
    src: "videos/ugc-ads-video-1.mp4",
    title: "Direct-Response UGC Ad",
    tool: "UGC Ad Creative",
    tag: "High Conversion",
    desc: "Scroll-stopping hook built for TikTok & Meta feeds"
  },
  {
    id: "reel-3",
    src: "videos/ve-ai-capcut.mp4",
    title: "AI Video & CapCut",
    tool: "AI + CapCut",
    tag: "Bilingual Creative",
    desc: "Generative AI motion & retention-first pacing"
  }
];

const HeroReelCard = ({ reel, rawBase }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="hero-reel-card" onClick={togglePlay}>
      <div className="hero-reel-speaker" />
      <div className="hero-reel-top">
        <span className="hero-reel-badge">{reel.tool}</span>
        <span className="hero-reel-dot" />
      </div>

      <div className="hero-reel-video-wrap">
        <video
          ref={videoRef}
          src={`${rawBase}${reel.src}`}
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          preload="metadata"
          className="hero-reel-video"
        />

        <button
          type="button"
          className="hero-reel-mute-btn"
          onClick={toggleMute}
          title={isMuted ? "Click for Sound" : "Mute Sound"}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          <Volume2 size={13} />
          <span>{isMuted ? "Sound Off" : "Sound On"}</span>
        </button>

        {!isPlaying && (
          <div className="hero-reel-play-overlay">
            <Play size={28} />
          </div>
        )}
      </div>

      <div className="hero-reel-bottom">
        <div className="hero-reel-title">{reel.title}</div>
        <div className="hero-reel-desc">{reel.desc}</div>
      </div>
    </div>
  );
};

const Home = () => {
  const rawBase = import.meta.env.BASE_URL || "/";
  const baseUrl = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="home-hero-wrap">
      {/* ============ HERO SECTION ============ */}
      <section className="hero-section">
        <div className="abstract-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              {/* New Freelance Retainer Availability Label */}
              <span className="hero-label">
                Open for freelance projects &amp; monthly retainers
              </span>

              {/* Specific Problem-Solving Headline */}
              <h1 className="hero-title">
                Short-Form Video Editor &amp; Ad Creative Maker for{' '}
                <span className="gradient-text">E-commerce &amp; Local Brands</span>
                <span className="hero-title-sub-bilingual"> (English + Urdu)</span>
              </h1>

              {/* Clear Value Proposition Subheadline */}
              <p className="hero-description">
                I craft scroll-stopping Reels, TikToks, and UGC-style ad creatives that hook viewers in the first 3 seconds, keep retention high, and drive viewers to take action.
              </p>

              {/* Conversion-Focused CTAs */}
              <div className="hero-actions">
                <a
                  href="https://wa.me/923292061421"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary-glow btn-pill hero-btn-main btn-wa-hero"
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp Me</span>
                </a>
                <a
                  href="https://wa.me/923292061421?text=Hi%20Hyder,%20I%20would%20like%20to%20book%20a%20free%20call%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-pill hero-btn-sub"
                >
                  <Calendar size={16} />
                  <span>Book a Free Call</span>
                </a>
              </div>

              {/* Primary Focus Tags */}
              <div className="hero-tools">
                <span className="hero-tools-label">Core Focus:</span>
                <span className="hero-tool-chip">Short-Form Video Editing</span>
                <span className="hero-tool-chip">UGC-Style Ad Creatives</span>
                <span className="hero-tool-chip">Meta Ads (Add-on)</span>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="hero-visual">
              <div className="hero-ring"></div>
              <div className="hero-portrait-wrap">
                <div className="hero-portrait">
                  <img src={heroImg} alt="Hyder Shaikh - Short-Form Video Editor & Ad Creative Maker" />
                </div>
              </div>
              <div className="hero-badge badge-1">
                <Clapperboard size={18} /> Short-Form Video Editor
              </div>
              <div className="hero-badge badge-2">
                <Camera size={18} /> UGC Ad Creative Maker
              </div>
              <div className="hero-badge badge-3">
                <Sparkles size={18} /> English + Urdu Bilingual
              </div>
            </div>
          </div>

          {/* ============ HERO VIDEO SHOWCASE EMBED (DIRECTLY BELOW HERO) ============ */}
          <Reveal delay={120}>
            <div className="hero-reels-showcase-wrap">
              <div className="hero-reels-header">
                <span className="hero-reels-tag">
                  <Film size={14} /> LIVE CREATIVE SHOWCASE
                </span>
                <h2 className="hero-reels-title">Real Short-Form Edits &amp; UGC Ads</h2>
                <p className="hero-reels-subtitle">
                  Click any reel to play or pause. Audio is muted by default for a seamless browsing experience.
                </p>
              </div>

              <div className="hero-reels-grid">
                {heroReels.map((reel) => (
                  <HeroReelCard key={reel.id} reel={reel} rawBase={baseUrl} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ QUICK POSITIONING METRICS ============ */}
      <section className="quick-stats">
        <div className="container">
          <Reveal>
            <div className="quick-stats-grid">
              <div className="quick-stat">
                <div className="quick-stat-value">FR</div>
                <div className="quick-stat-label">Software Solution<br />Full-Time Marketer &amp; Editor</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">9:16</div>
                <div className="quick-stat-label">Mobile-First Content<br />Reels, TikToks &amp; Shorts</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">EN + UR</div>
                <div className="quick-stat-label">Bilingual Creatives<br />Local &amp; Overseas Diaspora</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">Meta</div>
                <div className="quick-stat-label">Campaign Setup<br />Full-Funnel Ad Creative Integration</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3 CORE SERVICES CLEANUP ============ */}
      <section className="section why-section">
        <div className="container">
          <div className="services-cleanup-header">
            <span className="section-tag">FOCUSED CAPABILITIES</span>
            <h2 className="section-title-center">What I Do Best for Your Brand</h2>
            <p className="section-subtitle-center">
              Instead of spreading thin across a dozen generic platforms, I solve one high-impact bottleneck: turning video footage and product concepts into high-converting attention assets.
            </p>
          </div>

          <div className="services-three-grid">
            {/* Service 1: Short-form Video Editing */}
            <Reveal delay={50}>
              <div className="service-three-card">
                <div className="service-three-icon">
                  <Clapperboard size={24} className="text-accent" />
                </div>
                <span className="service-three-pill">PRIMARY OFFER</span>
                <h3 className="service-three-title">Short-Form Video Editing</h3>
                <p className="service-three-desc">
                  High-retention video editing in Adobe Premiere Pro and CapCut for Instagram Reels, TikTok, and YouTube Shorts. Built around proven 3-second hook structures, smooth transitions, kinetic subtitles, and synchronized sound design.
                </p>
                <ul className="service-three-points">
                  <li><CheckCircle2 size={15} /> First 3-second visual &amp; audio hook engineering</li>
                  <li><CheckCircle2 size={15} /> Kinetic animated captions &amp; on-screen callouts</li>
                  <li><CheckCircle2 size={15} /> Layered sound design (SFX, risers, background pacing)</li>
                </ul>
              </div>
            </Reveal>

            {/* Service 2: UGC-Style Ad Creatives */}
            <Reveal delay={120}>
              <div className="service-three-card featured-service-card">
                <div className="service-three-icon">
                  <Camera size={24} className="text-accent" />
                </div>
                <span className="service-three-pill accent-pill">HIGH CONVERTING</span>
                <h3 className="service-three-title">UGC-Style Ad Creatives</h3>
                <p className="service-three-desc">
                  Authentic, creator-style direct-response video ads for e-commerce and DTC brands. Crafted in both English and Urdu to resonate deeply with domestic audiences and South Asian diaspora consumers in the US, UK, and UAE.
                </p>
                <ul className="service-three-points">
                  <li><CheckCircle2 size={15} /> Problem-agitation-solution direct-response frameworks</li>
                  <li><CheckCircle2 size={15} /> English and Urdu bilingual scripting &amp; typography</li>
                  <li><CheckCircle2 size={15} /> Creative testing variations for paid social feeds</li>
                </ul>
              </div>
            </Reveal>

            {/* Service 3: Meta Ads Setup (Add-on) */}
            <Reveal delay={190}>
              <div className="service-three-card">
                <div className="service-three-icon">
                  <Sparkles size={24} className="text-accent" />
                </div>
                <span className="service-three-pill">ADD-ON SERVICE</span>
                <h3 className="service-three-title">Meta Ads Campaign Setup</h3>
                <p className="service-three-desc">
                  An integrated technical add-on to launch your video creatives effectively. Complete campaign configuration in Meta Ads Manager for Leads and Sales objectives with proper pixel events, audience targeting, and delivery tracking.
                </p>
                <ul className="service-three-points">
                  <li><CheckCircle2 size={15} /> Advantage+ and custom campaign structuring</li>
                  <li><CheckCircle2 size={15} /> Direct WhatsApp / Messaging conversion flows</li>
                  <li><CheckCircle2 size={15} /> Transparent reporting on spend, impressions &amp; CPL</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
