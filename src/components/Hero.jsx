export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Build and launch your website in a single day.</h1>
          <p className="lead">
            Launchly helps you create professional landing pages without
            writing code. Design, host and share everything in one place.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start free trial</a>
            <a href="#features" className="btn btn-ghost">Explore features</a>
          </div>
          <p className="hero-note">No credit card required. 14-day free trial.</p>
        </div>

        <div className="mock" aria-hidden="true">
          <div className="mock-bar"><i /><i /><i /></div>
          <div className="mock-body">
            <div className="mock-line w60" />
            <div className="mock-line w90" />
            <div className="mock-line w75" />
            <div className="mock-row">
              <div className="mock-card"><b>12.4k</b><span>Visitors</span></div>
              <div className="mock-card"><b>8.2%</b><span>Conversion</span></div>
              <div className="mock-card"><b>1.1s</b><span>Load time</span></div>
            </div>
            <div className="mock-chart">
              {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
