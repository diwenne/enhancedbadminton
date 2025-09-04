import React, { useState } from "react";
import "../index.css";

const EMAIL_TO = "contact@enhancedbadminton.ca"; // ← change to your address

export default function Contact() {
  // Keep all your existing intro/details ABOVE the grid if you already had them.
  // (You can move them into the right column card below if you prefer.)

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <main>
      <section className="container">
        <div className="page-header">
          <h1 className="section-heading">Contact Us</h1>
          <p className="page-subtitle">
            Questions about programs, private lessons, or court rentals? Send us a message — we’ll get back to you soon.
          </p>
        </div>

        {/* Two-column grid: Form (left) • Info (right) */}
        <div className="contact-grid">
          {/* LEFT: Form */}
          <div className="info-card">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Program inquiry, court rental…"
                  value={form.subject}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a bit more…"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit" className="cta-button">Send Email</button>
            </form>
          </div>

          {/* RIGHT: Keep/merge your previous details here */}
          <aside className="info-card">
            <h3>Enhanced Badminton — Contact & Info</h3>
            <p><strong>Email:</strong> info@enhancedbadminton.ca</p>
            <p><strong>Phone:</strong> (604) 834-6433</p>
            <p><strong>Address:</strong> 1234 Kingsway Ave, Port Moody, BC</p>
            <p><strong>Hours:</strong><br/>Mon–Sun 10:00–22:00</p>

            <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1.25rem 0" }} />

            <h4>Find Us</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.949677927829!2d-123.06296352336179!3d49.201514176498435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867559bd04ceed%3A0x1fb97edcc0a504c!2sEnhanced%20Badminton!5e0!3m2!1sen!2sca!4v1756855183058!5m2!1sen!2sca"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}