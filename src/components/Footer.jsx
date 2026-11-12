import { useLang } from "../i18n.jsx";
import { ui } from "../data.js";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-main">
        <p>
          © {new Date().getFullYear()} · {t(ui.footer)}
        </p>
        <a href="#top">{t(ui.backToTop)} ↑</a>
      </div>
      <p className="credits">
        {t(ui.credits)}{" "}
        <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">
          Claude Code
        </a>
        .
      </p>
    </footer>
  );
}
