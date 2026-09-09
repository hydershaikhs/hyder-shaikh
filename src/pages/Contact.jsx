import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { InstagramIcon, LinkedInIcon, FacebookIcon, WhatsAppIcon } from "../components/SocialIcons";
import "./Contact.css";
import Reveal from "../components/Reveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("_subject", `Portfolio Inquiry - ${form.subject} (${form.name})`);
    data.append("Subject", form.subject);
    data.append("message", form.message);
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
                Let us work <span className="contact-heading-accent">together</span>
              </h2>
              <p className="contact-subtext">
                Open to freelance projects and collaborations. Whether it is Meta Ads, SEO, or social media growth, tell me what you need and I will get back to you within 24 hours.
              </p>

              <div className="contact-social-row">
                <a href="https://wa.me/923266739989" target="_blank" rel="noreferrer" className="contact-icon-btn" title="WhatsApp" aria-label="WhatsApp">
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
                  <p>Thank you, <strong>{form.name}</strong>. I will get back to you shortly.</p>
                  <button className="contact-submit-btn" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="cf-field">
                    <input type="text" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="cf-field">
                    <input type="email" name="email" placeholder="you@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="cf-field">
                    <input type="text" name="subject" placeholder="Subject" required value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="cf-field">
                    <textarea name="message" rows="5" placeholder="Your message" required value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="contact-submit-btn" disabled={sending}>
                    {sending ? <span>Sending...</span> : <><span>Send via Email</span><Send size={16} /></>}
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
