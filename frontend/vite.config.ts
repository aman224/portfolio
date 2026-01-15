import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@contexts", replacement: "/src/contexts" },
      { find: "@constants", replacement: "/src/constants.tsx" },
    ],
  },
});
