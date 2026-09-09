import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from '../components/SocialIcons';
import './Contact.css';
import Reveal from '../components/Reveal';

const serviceOptions = [
  'Meta Ads Campaigns',
  'Search Engine Optimization (SEO)',
  'Content & Ad Copywriting',
  'Short-Form Video Editing',
  'Social Media Management',
  'Social Media Post Design',
  'Comprehensive Digital Marketing Strategy',
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: serviceOptions[0], message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('_subject', `Project Inquiry - ${form.service} (${form.name})`);
    data.append('Service Needed', form.service);
    data.append('message', form.message);
    data.append('_captcha', 'false');
    data.append('_template', 'table');

    try {
      await fetch('https://formsubmit.co/hydershaikhsahab875@gmail.com', {
        method: 'POST',
        body: data,
      });
      setSent(true);
    } catch (err) {
      console.error('FormSubmit error:', err);
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">START A CONVERSATION</span>
            <h2 className="page-title">Let's Build Something That Scales.</h2>
            <p className="text-muted">
              Have a brand to grow, ad campaigns to optimize, or an SEO project to launch? Reach out today for a consultation.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">
          {/* Left: Direct Info */}
          <Reveal>
            <div className="contact-info-panel">
              <h3 className="contact-info-title">
                Get In <span className="text-accent">Touch</span>
              </h3>
              <p className="contact-info-desc">
                Whether you need high-ROAS Meta Ads, organic SEO rankings, engaging short-form video reels, or full social media handling â€” send a message and I'll respond within 24 hours.
              </p>

              <div className="contact-items-wrap">
                <div className="contact-item">
                  <div className="contact-item-icon"><Mail size={20} /></div>
                  <div>
                    <div className="contact-item-label">Direct Email</div>
                    <a href="mailto:hydershaikhsahab875@gmail.com" className="contact-item-val">
                      hydershaikhsahab875@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><Phone size={20} /></div>
                  <div>
                    <div className="contact-item-label">Call / WhatsApp</div>
                    <a href="https://wa.me/923266739989" target="_blank" rel="noreferrer" className="contact-item-val">
                      +92 32 66739989
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><Clock size={20} /></div>
                  <div>
                    <div className="contact-item-label">Availability</div>
                    <span className="contact-item-val" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      Mon â€“ Sat â€¢ Response within 24h
                    </span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><Sparkles size={20} /></div>
                  <div>
                    <div className="contact-item-label">Follow &amp; Connect</div>
                    <div className="contact-socials">
                      <a className="contact-social" href="https://www.linkedin.com/in/hydershaikhofficial" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon size={18} /></a>
                      <a className="contact-social" href="https://www.instagram.com/hafizhydershaikh" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon size={18} /></a>
                      <a className="contact-social" href="https://www.facebook.com/profile.php?id=61577739728113" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FacebookIcon size={18} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Interactive Form */}
          <Reveal delay={120}>
            <div className="contact-card">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>Message Dispatched!</h3>
                  <p>
                    Thank you for reaching out, <strong>{form.name}</strong>. I have received your message and will get back to you shortly.
                  </p>
                  <button 
                    className="btn btn-primary-glow btn-pill" 
                    onClick={() => { setSent(false); setForm({ name: '', email: '', service: serviceOptions[0], message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="contact-form-title">Send a Message</h3>

                  <div className="form-group">
                    <label htmlFor="cf-name">Your Full Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf-email">Email Address</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      placeholder="e.g. john@business.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf-service">Service Needed</label>
                    <div className="select-wrapper">
                      <select
                        id="cf-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf-msg">Project Details / Message</label>
                    <textarea
                      id="cf-msg"
                      name="message"
                      rows="4"
                      placeholder="Tell me about your brand, goals, target audience, and current timeline..."
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary-glow btn-submit"
                    disabled={sending}
                  >
                    {sending ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;