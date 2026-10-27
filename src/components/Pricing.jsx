const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "For getting started",
    items: ["1 website", "Launchly subdomain", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "$12",
    note: "For growing businesses",
    items: ["10 websites", "Custom domain", "Advanced analytics", "Priority support"],
    featured: true,
  },
  {
    name: "Team",
    price: "$39",
    note: "For larger teams",
    items: ["Unlimited websites", "5 team members", "Custom branding", "Dedicated support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section alt">
      <div className="container">
        <h2>Simple, transparent pricing</h2>
        <p className="section-sub">No hidden fees. Cancel anytime.</p>

        <div className="grid-3">
          {plans.map((p) => (
            <article key={p.name} className={`card plan ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="badge">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="plan-note">{p.note}</p>
              <p className="price">{p.price}<small>/month</small></p>
              <ul>
                {p.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
              <a href="#contact" className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
