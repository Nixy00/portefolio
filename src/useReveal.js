import { useEffect, useRef } from "react";

// Ajoute la classe "is-visible" quand l'élément entre dans l'écran.
// Sans IntersectionObserver (vieux navigateurs), l'élément est affiché tout de suite.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
