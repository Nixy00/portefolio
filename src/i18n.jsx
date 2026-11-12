import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { load, save } from "./storage.js";

const LangContext = createContext(null);
const KEY = "portfolio-lang";

function initialLang() {
  const saved = load(KEY);
  if (saved === "fr" || saved === "en") return saved;
  const nav = (navigator.language || "fr").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    save(KEY, lang);
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);

  // t({ fr: "...", en: "..." }) renvoie le texte dans la langue courante.
  // Une simple chaîne est renvoyée telle quelle (noms propres, technos...).
  const t = useCallback(
    (value) => (value && typeof value === "object" ? value[lang] ?? value.fr : value),
    [lang]
  );

  return <LangContext.Provider value={{ lang, toggle, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
