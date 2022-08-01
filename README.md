# lcctanauan.edu.ph

Welcome to the lcctanauan repository, this repository contains the newly proposed lcctanauan site, that will replace the old wordpress one.
## Project Structure ⚙

Inside of the project, you'll see the following folders and files:

```
├──public/
|    ├──Poppins-Bold.ttf
|    ├──favicon.ico
|    ├──Poppins-BoldItalic.ttf
|    ├──Poppins-Light.ttf
|    ├──Poppins-LightItalic.ttf
|    ├──Poppins-Medium.ttf
|    ├──Poppins-MediumItalic.ttf
|    ├──Poppins-Regular.ttf
|    ├──Poppins-SemiBold.ttf
|    └──Poppins-SemiBoldItalic.ttf
└──src/
    ├──assets/
    ├──components/
    |  ├──Btn.astro
    |  ├──Card.astro
    |  ├──Footer.astro
    |  ├──Navbar.astro
    |  └──NavItem.astro
    ├──layouts/
    |  └──Default.astro
    ├──pages/
    |  └──index.astro
    └──styles/
        └──globals.css

```
Astro uses the file routing structure and looks for the `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components. In this project, you can basically use whatever framework you want as long as it doesn't really don't go complicated.

Any static assets, like images, can be placed in the `public/` directory.
## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install` or `yarn` or `pnpm install`     | Installs dependencies                        |
| `npm run dev` or `yarn dev` or `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build` or `yarn build` or `pnpm build`   | Build your production site to `./dist/`      |
| `npm run preview` or `yarn preview` or `pnpm preview` | Preview your build locally, before deploying |

## 👀 Want to learn more about the project and astro?

Feel free to check [the official documentation](https://docs.astro.build) or jump into the Astro [Discord server](https://astro.build/chat).
