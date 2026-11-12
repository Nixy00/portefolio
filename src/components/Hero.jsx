import { useLang } from "../i18n.jsx";
import { profile, ui } from "../data.js";
import { GitHubIcon } from "./Icons.jsx";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <p className="eyebrow">
        <span className="dot" aria-hidden="true" />
        {t(profile.role)}
      </p>
      <h1>
        {profile.name.split(" ")[0]}
        <br />
        <span className="accent">{profile.name.split(" ").slice(1).join(" ")}</span>
      </h1>
      <p className="lead">{t(profile.intro)}</p>
      <ul className="hero-meta">
        <li>{t(profile.location)}</li>
        <li>{profile.school}</li>
      </ul>
      <div className="hero-actions">
        <a href="#projets" className="btn btn-primary">
          {t(ui.heroCta)}
        </a>
        <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
          <GitHubIcon /> GitHub
        </a>
      </div>
    </section>
  );
}
