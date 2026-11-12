import { useLang } from "../i18n.jsx";
import { getTech, iconTone } from "../tech.js";

// Bulle d'une technologie : logo + nom, cliquable vers le site officiel si connu.
export default function TechTag({ name }) {
  const { t } = useLang();
  const label = t(name);
  const info = getTech(name);

  const icon = info?.icon && (
    <svg
      className="tech-icon"
      data-tone={iconTone(info.icon.hex)}
      style={{ color: `#${info.icon.hex}` }}
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <path fill="currentColor" d={info.icon.path} />
    </svg>
  );

  if (!info)
    return (
      <li className="tag">
        <span>{label}</span>
      </li>
    );

  return (
    <li className="tag">
      <a href={info.url} target="_blank" rel="noopener noreferrer" title={info.url.replace(/^https?:\/\/(www\.)?/, "")}>
        {icon}
        {label}
      </a>
    </li>
  );
}
