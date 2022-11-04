import { defineConfig } from "astro/config";
import tailwindIntegration from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
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
