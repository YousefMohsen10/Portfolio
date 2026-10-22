import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/projects';

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'sending' | null

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setStatus('error');
      return;
    }
    setErrors({});

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: contactInfo.email,
        },
        { publicKey: emailJsConfig.publicKey },
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's Work <span className="gold-text">Together</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info reveal reveal-delay-1">
            <h3>
              Have a Project <span className="highlight">in Mind?</span>
            </h3>
            <p>
              Let's connect and explore how we can build something great
              together. Feel free to reach out through any of the channels below
              or use the contact form.
            </p>

            <div className="contact-channels">
              <a href={`mailto:${contactInfo.email}`} className="contact-channel">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-channel-info">
                  <span>Email</span>
                  <p>{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
              >
                <div className="contact-channel-icon">
                  <Github size={20} />
                </div>
                <div className="contact-channel-info">
                  <span>GitHub</span>
                  <p>View my repositories</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
              >
                <div className="contact-channel-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-channel-info">
                  <span>LinkedIn</span>
                  <p>Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form side */}
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
                <span className="error-text">{errors.name}</span>
              </div>
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <span className="error-text">{errors.email}</span>
              </div>
            </div>

            <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Project idea, collaboration, or just saying hello"
                value={form.subject}
                onChange={handleChange}
              />
              <span className="error-text">{errors.subject}</span>
            </div>

            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
              />
              <span className="error-text">{errors.message}</span>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && <Send size={18} />}
              </button>
            </div>

            {status === 'success' && (
              <div className="form-message success">
                Your message has been sent successfully!
              </div>
            )}

            {status === 'error' && Object.keys(errors).length > 0 && (
              <div className="form-message error">
                Please fill in all required fields correctly.
              </div>
            )}

            {status === 'error' && Object.keys(errors).length === 0 && (
              <div className="form-message error">
                Your message could not be sent. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
