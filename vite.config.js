import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && screenGraphPlugin(),
  ].filter(Boolean),
  publicDir: "./static",
  base: "./",
}));
