import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./HomePage": "./src/pages/HomePage.jsx",
        "./store": "./src/store.js",
      },
      shared: ["react", "react-dom", "react-redux", "redux", "redux-saga"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
