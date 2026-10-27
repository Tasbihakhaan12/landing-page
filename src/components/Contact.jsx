import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <section id="contact" className="section cta">
      <div className="container cta-inner">
        <div>
          <h2>Ready to get started?</h2>
          <p className="section-sub">Leave your details and our team will respond within 24 hours.</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your full name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
          <button className="btn btn-primary" type="submit">Contact me</button>
          {sent && <p className="success" role="status">Thank you. We will be in touch shortly.</p>}
        </form>
      </div>
    </section>
  );
}
