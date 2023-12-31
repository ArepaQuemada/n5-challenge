import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "HarryPotter",
      filename: "remoteEntry.js",
      remotes: {
        Host: "http://localhost:3000/assets/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/App",
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
