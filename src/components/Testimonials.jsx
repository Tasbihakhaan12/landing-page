const reviews = [
  { name: "Ayesha Khan", role: "Boutique owner", text: "My page went live in a single day, and orders started growing within the first week." },
  { name: "Usman Ali", role: "Freelance developer", text: "Presenting demos to clients is now effortless. Both the speed and the design are excellent." },
  { name: "Sara Ahmed", role: "Marketing lead", text: "The analytics show exactly what is working. It has saved our team a great deal of time." },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2>What our customers say</h2>
        <div className="grid-3">
          {reviews.map((r) => (
            <figure key={r.name} className="card quote">
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="avatar">{r.name[0]}</span>
                <span><b>{r.name}</b><br /><small>{r.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
