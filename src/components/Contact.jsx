import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', isSuccess: true });

  const emailAddress = 'mittalhardik2007@gmail.com';
  const phoneNumber = '+91 9817068911';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message, isSuccess) => {
    setToast({ visible: true, message, isSuccess });
    setTimeout(() => {
      setToast({ visible: false, message: '', isSuccess: true });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    showToast('📋 Email address copied to clipboard!', true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('9817068911');
    setCopiedPhone(true);
    showToast('📋 Phone number copied to clipboard!', true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    try {
      const data = new FormData();
      data.append('access_key', 'YOUR_ACCESS_KEY');
      data.append('subject', `Portfolio Contact from ${name}`);
      data.append('from_name', name);
      data.append('name', name);
      data.append('email', email);
      data.append('message', message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        showToast('✅ Message sent successfully!', true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
          `Portfolio Contact from ${name}`
        )}&body=${encodeURIComponent(
          `Hello Hardik,\n\n${message}\n\nBest regards,\n${name}\n${email}`
        )}`;
        window.location.href = mailtoUrl;
        showToast('✉️ Opening email client to send message...', true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        `Portfolio Contact from ${name}`
      )}&body=${encodeURIComponent(
        `Hello Hardik,\n\n${message}\n\nBest regards,\n${name}\n${email}`
      )}`;
      window.location.href = mailtoUrl;
      showToast('✉️ Opening email client to send message...', true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">
            <i className="fa-solid fa-paper-plane"></i> Reach out
          </p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let's Connect</h3>
            <p>
              Open to engineering roles, data science projects, internships, and research collabs. Tell me what you're building — I'll tell you how I can help.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-card-body">
                  <h4>Email</h4>
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  <i className={`fa-solid ${copiedEmail ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-card-body">
                  <h4>Phone</h4>
                  <a href="tel:9817068911">{phoneNumber}</a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyPhone}
                  title="Copy phone to clipboard"
                >
                  <i className={`fa-solid ${copiedPhone ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-card-body">
                  <h4>Location</h4>
                  <p>Panipat, Haryana, India</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="contact-card-body">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Codewithmittalhardik/" target="_blank" rel="noopener noreferrer">
                    Codewithmittalhardik
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper reveal reveal-delay-1">
            <h3>Send Me a Message</h3>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="form-message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                id="submit-btn"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>

            <div
              id="form-toast"
              className={`form-toast ${toast.isSuccess ? 'toast-success' : 'toast-error'} ${
                toast.visible ? 'show' : ''
              }`}
            >
              {toast.message}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
