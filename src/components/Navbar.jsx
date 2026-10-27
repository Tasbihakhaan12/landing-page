import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">L</span> Launchly
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <ThemeSwitcher />
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Get started
          </a>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
