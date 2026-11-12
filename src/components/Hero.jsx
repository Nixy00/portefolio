import { useLang } from "../i18n.jsx";
import { profile, ui } from "../data.js";
import { GitHubIcon } from "./Icons.jsx";
import RotatingWord from "./RotatingWord.jsx";

export default function Hero() {
  const { t } = useLang();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section className="hero">
      <p className="eyebrow">
        <span className="dot" aria-hidden="true" />
        {t(profile.role)}
      </p>
      <h1>
        {first}
        <br />
        <span className="accent">{rest.join(" ")}</span>
      </h1>
      <p className="headline">
        {t(profile.headline)} <RotatingWord words={t(profile.headlineWords)} />
      </p>
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
      <a href="#projets" className="scroll-hint" aria-label={t(ui.heroCta)}>
        <span>{t(ui.scrollHint)}</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
