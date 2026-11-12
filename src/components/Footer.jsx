import { useLang } from "../i18n.jsx";
import { ui } from "../data.js";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} · {t(ui.footer)}
      </p>
      <a href="#top">{t(ui.backToTop)} ↑</a>
    </footer>
  );
}
