import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";
import { useTheme } from "../theme.jsx";
import { ui } from "../data.js";
import { MoonIcon, SunIcon } from "./Icons.jsx";

const links = [
  { href: "#projets", label: ui.nav.projects },
  { href: "#competences", label: ui.nav.skills },
  { href: "#parcours", label: ui.nav.education },
];

export default function Header() {
  const { lang, toggle: toggleLang, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Matteo Godart">
        MG<span>.</span>
      </a>
      <nav aria-label="Navigation">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {t(l.label)}
          </a>
        ))}
      </nav>
      <div className="topbar-actions">
        <button
          className="icon-btn"
          onClick={toggleTheme}
          aria-label={t(theme === "dark" ? ui.themeLight : ui.themeDark)}
          title={t(theme === "dark" ? ui.themeLight : ui.themeDark)}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="lang-btn" onClick={toggleLang} aria-label={t(ui.langLabel)} title={t(ui.langLabel)}>
          <span className={lang === "fr" ? "is-active" : ""}>FR</span>
          <span className="sep">/</span>
          <span className={lang === "en" ? "is-active" : ""}>EN</span>
        </button>
      </div>
    </header>
  );
}
