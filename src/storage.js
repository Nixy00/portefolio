// Petit wrapper autour de localStorage : il peut être indisponible
// (navigation privée, cookies bloqués), le site doit fonctionner sans.
export function load(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function save(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* stockage indisponible : on ignore */
  }
}
