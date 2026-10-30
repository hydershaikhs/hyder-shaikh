import { useState } from "react";
import { Send, CheckCircle2, Calendar } from "lucide-react";
import { InstagramIcon, LinkedInIcon, FacebookIcon, WhatsAppIcon } from "../components/SocialIcons";
import "./Contact.css";
import Reveal from "../components/Reveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedSubject = form.subject.trim() || "General Inquiry";
    const trimmedMessage = form.message.trim();

    // Note: Subject is now OPTIONAL, only name, email and message are required
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMsg("Please fill out your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setSending(true);
    const data = new FormData();
    data.append("name", trimmedName);
    data.append("email", trimmedEmail);
    data.append("_subject", `Portfolio Inquiry: ${trimmedSubject} - ${trimmedName}`);
    data.append("Selected Service", trimmedSubject);
    data.append("message", trimmedMessage);
    data.append("_captcha", "false");
    data.append("_template", "table");
    try {
      await fetch("https://formsubmit.co/hydershaikhsahab875@gmail.com", { method: "POST", body: data });
      setSent(true);
    } catch (err) {
      console.error(err);
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-layout">

          {/* LEFT COLUMN */}
          <Reveal>
            <div className="contact-left">
              <span className="contact-eyebrow">GET IN TOUCH</span>
              <h2 className="contact-heading">
                Let's discuss your <span className="contact-heading-accent">project</span>
              </h2>
              <p className="contact-subtext">
                Available for freelance video editing projects, UGC ad creative packs, and monthly retainers worldwide (US, UK, Pakistan &amp; Gulf). Have a specific deadline or question? Reach out directly via WhatsApp for the fastest reply.
              </p>

              {/* Direct Quick Action CTAs */}
              <div className="contact-quick-actions">
                <a
                  href="https://wa.me/923292061421"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-quick-btn wa-quick-btn"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp (+92 329 2061421)</span>
                </a>

                <a
                  href="https://wa.me/923292061421?text=Hi%20Hyder,%20I%20would%20like%20to%20schedule%20a%20free%2015-minute%20call%20with%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="contact-quick-btn call-quick-btn"
                >
                  <Calendar size={17} />
                  <span>Schedule a Free 15-Min Call</span>
                </a>
              </div>

              <div className="contact-social-row">
                <a href="https://wa.me/923292061421" target="_blank" rel="noreferrer" className="contact-icon-btn" title="WhatsApp" aria-label="WhatsApp">
                  <WhatsAppIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hydershaikhofficial" target="_blank" rel="noreferrer" className="contact-icon-btn" title="LinkedIn" aria-label="LinkedIn">
                  <LinkedInIcon size={20} />
                </a>
                <a href="https://www.instagram.com/hafizhydershaikh" target="_blank" rel="noreferrer" className="contact-icon-btn" title="Instagram" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577739728113" target="_blank" rel="noreferrer" className="contact-icon-btn" title="Facebook" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT COLUMN - FORM */}
          <Reveal delay={100}>
            <div className="contact-right">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon"><CheckCircle2 size={48} /></div>
                  <h3>Message Sent!</h3>
                  <p>Thank you, <strong>{form.name}</strong>. I will get back to you shortly regarding your project.</p>
                  <button className="contact-submit-btn" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); setErrorMsg(""); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-field-group">
                    <label htmlFor="contact-name" className="contact-label">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="contact-input"
                      placeholder="e.g. John Smith"
                      value={form.name}
                      onChange={handleChange}
                      disabled={sending}
                      autoComplete="name"
                    />
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="contact-email" className="contact-label">Your Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className="contact-input"
                      placeholder="e.g. john@yourbrand.com"
                      value={form.email}
                      onChange={handleChange}
                      disabled={sending}
                      autoComplete="email"
                    />
                  </div>

                  {/* Service dropdown is now explicitly OPTIONAL */}
                  <div className="contact-field-group">
                    <label htmlFor="contact-subject" className="contact-label">
                      Select a Service <span className="contact-optional-pill">(Optional)</span>
                    </label>
                    <div className="contact-select-wrap">
                      <select
                        id="contact-subject"
                        name="subject"
                        className="contact-input contact-select"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={sending}
                      >
                        <option value="">-- Choose a service (optional) --</option>
                        <option value="Short-Form Video Editing (Reels / TikTok)">Short-Form Video Editing (Reels / TikTok)</option>
                        <option value="UGC-Style Ad Creative Production">UGC-Style Ad Creative Production</option>
                        <option value="Meta Ads Setup &amp; Delivery (Add-on)">Meta Ads Setup &amp; Delivery (Add-on)</option>
                        <option value="Monthly Video Retainer Package">Monthly Video Retainer Package</option>
                        <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="contact-message" className="contact-label">Your Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      className="contact-textarea"
                      placeholder="Tell me about your brand, video ideas, or project deadlines..."
                      value={form.message}
                      onChange={handleChange}
                      disabled={sending}
                    />
                  </div>

                  {errorMsg && <p className="contact-error-msg">{errorMsg}</p>}

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={sending}
                  >
                    <span>{sending ? "Sending..." : "Send Message"}</span>
                    <Send size={16} />
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
