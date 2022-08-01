import { defineConfig } from "astro/config";
import tailwindIntegration from "@astrojs/tailwind";

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
  ],
});
