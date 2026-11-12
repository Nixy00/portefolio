// Bascule FR / EN. Par défaut : français, ou la langue du navigateur si elle est anglaise.
(function () {
  var root = document.documentElement;
  var key = "portfolio-lang";

  function read() {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(key, v); } catch (e) { /* stockage indisponible : on ignore */ }
  }

  var saved = read();
  var browserEn = (navigator.language || "fr").toLowerCase().indexOf("en") === 0;
  var lang = saved || (browserEn ? "en" : "fr");
  root.setAttribute("lang", lang);
  document.title = lang === "en"
    ? "Matteo Godart — Portfolio"
    : "Matteo Godart — Portfolio";

  var btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("lang") === "fr" ? "en" : "fr";
      root.setAttribute("lang", next);
      write(next);
    });
  }
})();
