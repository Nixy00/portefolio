import { useEffect, useState } from "react";

// Fait défiler une liste de mots, un toutes les `interval` ms.
// Sans animation si l'utilisateur préfère réduire les mouvements.
export default function RotatingWord({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span className="rotating" aria-live="polite">
      <span key={`${words[index]}-${index}`} className="rotating-word">
        {words[index]}
      </span>
    </span>
  );
}
