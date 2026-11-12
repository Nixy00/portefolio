import { useLang } from "../i18n.jsx";
import { butSkills, languages, projects, stack, ui } from "../data.js";
import Section from "./Section.jsx";

const projectTitle = (id, t) => {
  const p = projects.find((x) => x.id === id);
  return p ? t(p.title) : id;
};

export default function Skills() {
  const { t } = useLang();

  return (
    <Section id="competences" index="02" title={t(ui.skillsTitle)} intro={t(ui.skillsIntro)}>
      <div className="but-grid">
        {butSkills.map((s, i) => (
          <article key={s.id} className={`but-card${s.core ? " is-core" : ""}`}>
            <div className="but-top">
              <span className="but-num">C{i + 1}</span>
              {s.core && <span className="badge">{t(ui.coreBadge)}</span>}
            </div>
            <h3>{t(s.title)}</h3>
            <p>{t(s.text)}</p>
            <ul className="but-projects">
              {s.projects.map((id) => (
                <li key={id}>{projectTitle(id, t)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="stack-grid">
        {stack.map((g) => (
          <div key={g.title.fr} className="stack-group">
            <h3>{t(g.title)}</h3>
            <ul className="tags">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="stack-group">
          <h3>{t(ui.languagesTitle)}</h3>
          <ul className="lang-list">
            {languages.map((l) => (
              <li key={l.name.fr}>
                <span>{t(l.name)}</span>
                <span className="muted">{t(l.level)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
