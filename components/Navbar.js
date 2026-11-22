"use client";
import { useEffect, useState } from "react";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">&lt;HJ /&gt;</a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle light and dark theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
