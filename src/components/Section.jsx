import { useReveal } from "../useReveal.js";

export default function Section({ id, index, title, intro, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section reveal" ref={ref}>
      <header className="section-head">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
      </header>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  );
}
