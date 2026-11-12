import { useCallback, useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";
import { categories, projects, ui } from "../data.js";
import Section from "./Section.jsx";
import { ArrowIcon, GitHubIcon } from "./Icons.jsx";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function Lightbox({ src, alt, onClose }) {
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label={t(ui.close)}>
        ×
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function ProjectCard({ project, onZoom }) {
  const { t } = useLang();
  const title = t(project.title);
  const hasMedia = Boolean(project.image);

  return (
    <article className={`project spotlight${hasMedia ? " has-media" : ""}`}>
      {hasMedia && (
        <button className="project-media" onClick={() => onZoom(asset(project.image), title)} aria-label={title}>
          <img src={asset(project.image)} alt={title} loading="lazy" />
        </button>
      )}

      <div className="project-body">
        <div className="project-top">
          <span className="project-kind">{t(project.kind)}</span>
          {project.year && <span className="project-year">{project.year}</span>}
        </div>
        <h3>{title}</h3>
        <p className="project-summary">{t(project.summary)}</p>

        <ul className="highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{t(h)}</li>
          ))}
        </ul>

        <ul className="tags">
          {project.tags.map((tag, i) => (
            <li key={i}>{t(tag)}</li>
          ))}
        </ul>

        {project.gallery?.length > 0 && (
          <div className="gallery">
            {project.gallery.map((src) => (
              <button key={src} onClick={() => onZoom(asset(src), title)} aria-label={title}>
                <img src={asset(src)} alt={title} loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
              <GitHubIcon /> {t(ui.viewCode)} <ArrowIcon />
            </a>
          ) : (
            <span className="muted-note">{t(ui.noRepo[project.category] ?? ui.noRepo.cours)}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const [zoom, setZoom] = useState(null);

  const onZoom = useCallback((src, alt) => setZoom({ src, alt }), []);
  const onClose = useCallback(() => setZoom(null), []);

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projets" index="01" title={t(ui.projectsTitle)} intro={t(ui.projectsIntro)}>
      <div className="filters" role="tablist">
        {categories.map((c) => {
          const count = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              className={filter === c.id ? "is-active" : ""}
              onClick={() => setFilter(c.id)}
            >
              {t(c.label)} <span className="count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projects">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} onZoom={onZoom} />
        ))}
      </div>

      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={onClose} />}
    </Section>
  );
}
