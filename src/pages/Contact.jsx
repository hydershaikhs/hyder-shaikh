import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
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
    const trimmedSubject = form.subject.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setErrorMsg("Please fill out all required fields.");
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
    data.append("_subject", `Portfolio Inquiry - ${trimmedSubject} (${trimmedName})`);
    data.append("Subject", trimmedSubject);
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
                Let us work <span className="contact-heading-accent">together</span>
              </h2>
              <p className="contact-subtext">
                Open to freelance projects and collaborations. Whether it is Meta Ads, Video Editing, or Social Media Management, tell me what you need and I will get back to you within 24 hours.
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
                  <button className="contact-submit-btn" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); setErrorMsg(""); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {errorMsg && <div className="cf-error">{errorMsg}</div>}
                  <div className="cf-field">
                    <input type="text" name="name" placeholder="Your name *" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="cf-field">
                    <input type="email" name="email" placeholder="you@company.com *" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="cf-field">
                    <input type="text" name="subject" placeholder="Subject *" required value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="cf-field">
                    <textarea name="message" rows="5" placeholder="Your message *" required value={form.message} onChange={handleChange} />
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
