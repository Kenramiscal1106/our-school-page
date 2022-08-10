<script>
  import { onMount } from "svelte";
  let isScrolled = false;
  import NavItem from "./NavItem.svelte";
  import logo from "../assets/logo.svg";
  onMount(() => {
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
  });
</script>

<nav
  class={`transition-[background-color] duration-200 ${
    isScrolled
      ? "fixed bg-secondary text-white slide-in-down"
      : "bg-transparent absolute"
  }  top-0 left-0 w-full flex`}
>
  <div class="flex-1 flex items-center justify-center">
    <a href="/" class="text-2xl  flex items-center">
      <img src={logo} alt="logo" class="h-8" />
      <span class="text-3xl font-bold">LCCT</span>
    </a>
  </div>
  <div class="flex-1 flex">
    <NavItem text="Academic programs" href="/academic-programs" {isScrolled} />
    <NavItem
      text="Events & activities"
      href="/events-activities"
      {isScrolled}
    />
    <NavItem text="Contacts" href="/contacts" {isScrolled} />
  </div>
  <div class="flex-1" />
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
