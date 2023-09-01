import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@ampt/sveltekit";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    files: {
      assets: "assets",
    },
    adapter: adapter(),
  },
};

export default config;
