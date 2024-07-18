import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:5173/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-redux", "redux", "redux-saga"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
