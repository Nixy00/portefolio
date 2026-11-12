import { useLang } from "../i18n.jsx";
import { education, ui } from "../data.js";
import Section from "./Section.jsx";

export default function Education() {
  const { t } = useLang();
  return (
    <Section id="parcours" index="03" title={t(ui.educationTitle)}>
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.when}>
            <span className="when">{e.when}</span>
            <div>
              <strong>{t(e.title)}</strong>
              <p>{t(e.where)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
