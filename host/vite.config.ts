import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        HarryPotter: "http://localhost:3001/assets/remoteEntry.js",
        RickAndMorty: "http://localhost:3002/assets/remoteEntry.js",
      },
      exposes: {
        "./I18NPublisher": "./src/infra/i18n/i18n-publisher.ts",
        "./GridCard": "./src/components/GridCard/GridCard.tsx",
        "./Card": "./src/components/Card/Card.tsx",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
