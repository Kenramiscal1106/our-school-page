import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5007,
  },
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  experimental: {
    assets: true,
  },
});
