import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    imagetools({
      defaultDirectives: () => {
        return new URLSearchParams({
          as: "picture",
          format: `avif;webp;jpg`,
          w: "400;640;1280",
        });
      },
    }),
    react(),
  ],
});
