import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" => GitHub Pages par kisi bhi repo name ke sath chalega
export default defineConfig({
  plugins: [react()],
  base: "./",
});
