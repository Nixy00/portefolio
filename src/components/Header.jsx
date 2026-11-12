import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";
import { useTheme } from "../theme.jsx";
import { ui } from "../data.js";
import { MoonIcon, SunIcon } from "./Icons.jsx";

const links = [
  { id: "projets", label: ui.nav.projects },
  { id: "competences", label: ui.nav.skills },
  { id: "parcours", label: ui.nav.education },
];

// Renvoie l'id de la section actuellement à l'écran.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const mark = window.innerHeight * 0.35;
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mark) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}

const ids = links.map((l) => l.id);

export default function Header() {
  const { lang, toggle: toggleLang, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ferme le menu mobile avec Échap ou si l'écran s'élargit
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 720 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`topbar${scrolled || open ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <a href="#top" className="brand" aria-label="Matteo Godart" onClick={() => setOpen(false)}>
        MG<span>.</span>
      </a>

      <nav id="main-nav" aria-label="Navigation">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? "is-active" : ""}
            aria-current={active === l.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
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
        <button
          className="icon-btn menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={t(open ? ui.menuClose : ui.menuOpen)}
        >
          <span className="burger" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
