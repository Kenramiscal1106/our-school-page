<script>
  import NavItem from "./NavItem.svelte";
  import logo from "../assets/logo.svg";
  import hBIcon from "../assets/bar-menu.svg";
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

<nav class="fixed items-center top-0 text-black flex w-full">
  <div class="mr-auto p-3 flex items-center">
    <a href="/" class="text-2xl gap-1 flex items-center">
      <img src={logo} alt="logo" class="h-8" />
      <span class="text-3xl font-bold">LCCT</span>
    </a>
  </div>
  <div class="relative">
    <button class="md:hidden"><img src={hBIcon} alt="Menu" /></button>

    <div
      class="flex absolute right-0 flex-col md:flex-row md:static w-52 md:w-auto"
    >
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
</style>
