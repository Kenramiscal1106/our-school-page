import { defineConfig } from "astro/config";
import tailwindIntegration from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

export default defineConfig({
  server: {
    port: 5007,
  },
  integrations: [
    tailwindIntegration({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
