import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Equity-anchor/"   // 👈 must match your repo name exactly
});

