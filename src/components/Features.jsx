const features = [
  { icon: "⚡", title: "Fast performance", text: "Pages load in under two seconds, so visitors stay and engage." },
  { icon: "📱", title: "Mobile responsive", text: "Every layout adapts automatically to phones, tablets and desktops." },
  { icon: "🔍", title: "SEO ready", text: "Essential search engine settings are configured from the start." },
  { icon: "🎨", title: "Easy customization", text: "Change colors, text and images in minutes, with no coding required." },
  { icon: "📊", title: "Live analytics", text: "Track visitors and conversions in real time." },
  { icon: "🔒", title: "Secure hosting", text: "Free SSL and daily backups keep your data protected." },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>Everything you need to go online</h2>
        <p className="section-sub">All the essentials for a professional web presence, built in from day one.</p>

        <div className="grid-3">
          {features.map((f) => (
            <article key={f.title} className="card">
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
