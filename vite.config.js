import { defineConfig } from "vite";

export default defineConfig({
  base: "",

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        main: "index.html",
        signin: "src/html/signin.html",
        signup: "src/html/signup.html",
      },
    },
  },
});
