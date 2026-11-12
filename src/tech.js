// Registre des technologies : lien vers le site officiel et logo (Simple Icons).
// Pour ajouter une techno : une entrée ici, puis utiliser son nom dans data.js.
// Les logos absents de Simple Icons (Power BI, Access, Twig...) n'ont que le lien.
import {
  siClaude,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siGithubactions,
  siGithubpages,
  siGitlab,
  siHtml5,
  siJavascript,
  siMysql,
  siPandas,
  siPhp,
  siPlotly,
  siPytest,
  siPython,
  siReact,
  siStreamlit,
  siSymfony,
  siUbuntu,
  siVite,
} from "simple-icons";

const tech = {
  Python: { url: "https://www.python.org", icon: siPython },
  Streamlit: { url: "https://streamlit.io", icon: siStreamlit },
  Plotly: { url: "https://plotly.com/python/", icon: siPlotly },
  pandas: { url: "https://pandas.pydata.org", icon: siPandas },
  pytest: { url: "https://docs.pytest.org", icon: siPytest },
  Docker: { url: "https://www.docker.com", icon: siDocker },
  "GitHub Actions": { url: "https://github.com/features/actions", icon: siGithubactions },
  Symfony: { url: "https://symfony.com", icon: siSymfony },
  PHP: { url: "https://www.php.net", icon: siPhp },
  Twig: { url: "https://twig.symfony.com" },
  MySQL: { url: "https://www.mysql.com", icon: siMysql },
  Codeception: { url: "https://codeception.com" },
  Git: { url: "https://git-scm.com", icon: siGit },
  GitHub: { url: "https://github.com", icon: siGithub },
  GitLab: { url: "https://about.gitlab.com", icon: siGitlab },
  JavaScript: { url: "https://developer.mozilla.org/docs/Web/JavaScript", icon: siJavascript },
  HTML: { url: "https://developer.mozilla.org/docs/Web/HTML", icon: siHtml5 },
  CSS: { url: "https://developer.mozilla.org/docs/Web/CSS", icon: siCss },
  "SQL Developer": { url: "https://www.oracle.com/database/sqldeveloper/" },
  PowerAMC: { url: "https://www.sap.com/products/technology-platform/powerdesigner-data-modeling-tools.html" },
  "Power BI": { url: "https://www.microsoft.com/power-platform/products/power-bi" },
  Access: { url: "https://www.microsoft.com/microsoft-365/access" },
  "Microsoft Office": { url: "https://www.microsoft.com/microsoft-365" },
  Ubuntu: { url: "https://ubuntu.com", icon: siUbuntu },
  React: { url: "https://react.dev", icon: siReact },
  Vite: { url: "https://vite.dev", icon: siVite },
  "GitHub Pages": { url: "https://pages.github.com", icon: siGithubpages },
  "Claude Code": { url: "https://claude.com/claude-code", icon: siClaude },
};

// Variantes d'écriture qui pointent vers la même techno.
const aliases = {
  "Symfony 7.3": "Symfony",
  "Linux (Ubuntu)": "Ubuntu",
};

export function getTech(name) {
  if (typeof name !== "string") return null;
  return tech[name] ?? tech[aliases[name]] ?? null;
}

// Couleur trop sombre (ou trop claire) pour un thème : on utilise la couleur du texte.
export function iconTone(hex) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (lum < 0.06) return "dark";
  if (lum > 0.6) return "light";
  return "";
}
