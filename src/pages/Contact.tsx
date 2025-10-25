import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";

// ✅ Your EmailJS credentials
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

// (Optional) mailto fallback target used by the fallback link
const EMAIL_TO = "info@enhancedbadminton.ca";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
    _honey: "", // honeypot: must stay empty
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form._honey.trim() !== "") return; // spam bot trap

    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
      setForm({ user_name: "", user_email: "", subject: "", message: "", _honey: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section page-banner" style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2a4d7c 100%)",
        color: "white",
        padding: "5rem 2rem 4rem 2rem",
        textAlign: "center",
        minHeight: "auto"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            padding: ".5rem 1rem",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "999px",
            fontSize: ".85rem",
            fontWeight: 700,
            letterSpacing: ".1em",
            marginBottom: "1.5rem"
          }}>
            GET IN TOUCH
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 900,
            margin: "0 0 1.5rem 0",
            lineHeight: 1.1
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Questions about programs, private lessons, or court rentals? Send us a message — we'll get back to you soon.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>

        <div className="contact-grid">
          {/* LEFT: Form */}
          <div className="info-card" style={{
            background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)",
            border: "2px solid #e2e8f0",
            padding: "2.5rem"
          }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Send us a Message</h3>

            <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="_honey"
                value={form._honey}
                onChange={onChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="user_name">Name</label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    placeholder="Your full name"
                    value={form.user_name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="user_email">Email</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.user_email}
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

              <button className="cta-button" type="submit" disabled={status === "sending"}>
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Thanks — we’ll reply shortly"}
                {status === "error" && "Something went wrong — try again"}
              </button>

              <div style={{ marginTop: "0.75rem", fontSize: "0.95rem", color: "var(--fg-muted)" }}>
                Having trouble?{" "}
                <a
                  href={`mailto:${EMAIL_TO}?subject=${encodeURIComponent(form.subject || "Inquiry")}&body=${encodeURIComponent(
                    `Name: ${form.user_name}\nEmail: ${form.user_email}\n\n${form.message || ""}`
                  )}`}
                >
                  Email us directly
                </a>
                .
              </div>
            </form>
          </div>

          {/* RIGHT: Info card */}
          <aside className="info-card" style={{
            background: "linear-gradient(135deg, #fefcfb 0%, #ffffff 100%)",
            border: "2px solid #e2e8f0",
            padding: "2.5rem"
          }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Contact & Info</h3>
            <p><strong>Email:</strong> info@enhancedbadminton.ca</p>
            <p><strong>Phone:</strong> (604) 834-6433</p>
            <p><strong>WeChat:</strong> coachjkf</p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/enhancedbadminton/" target="_blank" rel="noopener noreferrer">
                @enhancedbadminton
              </a>
            </p>
            <p><strong>Address:</strong> Unit 115, 1751 Savage Road, Richmond BC V6V 3A9</p>
            <p><strong>Hours:</strong><br />Mon–Sun 10:00–22:00</p>

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
              title="Enhanced Badminton Location"
            />
          </aside>
        </div>
        </div>
      </section>
    </main>
  );
}