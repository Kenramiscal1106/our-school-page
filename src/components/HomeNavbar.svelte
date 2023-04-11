<script lang="ts">
  export let fixed: boolean;
  import NavItem from "./NavItem.svelte";
  import logo from "../assets/logo.svg";
</script>

<nav
  class="z-40 {fixed
    ? 'fixed'
    : 'absolute'} items-center top-0 text-black py-4 px-3 flex w-full"
>
  <div class="mr-auto">
    <div class="p-3 flex items-center">
      <a href="/home" class="text-2xl gap-1 flex items-center text-white">
        <img src={logo.src} alt="logo" class="h-8" />
        <span class="text-3xl font-bold">LCCT</span>
      </a>
    </div>
  </div>
  <div>
    <div class="flex">
      <NavItem dropdown={false} href="/academic-programs" text="Academics" />
      <NavItem
        dropdown={false}
        href="/events-activities"
        text="Events & activites"
      />
      <NavItem dropdown={false} href="/contacts" text="Contacts" />
      <NavItem
        dropdown={false}
        href="https://preregis.lcctanauan.edu.ph/"
        text="Preregis"
      />
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
