import { useState } from 'react';
import { profile } from '../data/profile';

const EMAIL = profile.email;

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container-sm">
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
        <div className="contact-card">
          <p className="contact-desc">Have a project or want to connect? Send me a message.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="input"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="input"
              style={{ resize: 'vertical' }}
            />
            <button type="submit" className="btn-submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };
