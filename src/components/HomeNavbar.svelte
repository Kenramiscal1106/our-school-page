<script>
  import { onMount } from "svelte";
  let isScrolled = false;
  import NavItem from "./NavItem.svelte";
  import logo from "../assets/logo.svg";
  /* onMount(() => {
    if (window.scrollY > 0) {
      isScrolled = true;
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        isScrolled = true;
        return;
      }
      isScrolled = false;
    });
  }); */
</script>

<!-- /* `transition-[background-color] duration-200 ${
    isScrolled
      ? "fixed bg-secondary text-white slide-in-styledown"
      : "bg-transparent absolute"
  }  top-0 left-0 w-full` */ -->
<nav class="z-40 fixed items-center top-0 text-black py-4 px-3 flex w-full">
  <div class="mr-auto">
    <div class="p-3 flex items-center">
      <a href="/" class="text-2xl gap-1 flex items-center">
        <img src={logo} alt="logo" class="h-8" />
        <span class="text-3xl font-bold">LCCT</span>
      </a>
    </div>
  </div>
  <div>
    <div class="flex">
      <NavItem href="/academic-programs" text="Academics" />
      <NavItem href="/events-activities" text="Events & activites" />
      <NavItem href="/contacts" text="Contacts" />
      <NavItem href="https://preregis.lcctanauan.edu.ph/" text="Preregis" />
    </div>
  </div>
</nav>

<style>
  @keyframes slide-in-down {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  .slide-in-down {
    animation: slide-in-down 0.3s ease-in-out;
  }
</style>
