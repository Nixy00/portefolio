import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base relative : le site fonctionne aussi bien sur https://nixy00.github.io/portefolio/
// que sur un domaine personnel ou Vercel.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
