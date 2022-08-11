<script>
  export let text;
  export let dropdown;
  export let href;
  export let isScrolled;
</script>

{#if dropdown}
  <button class="p-4">{text}</button>
  <div class="p-4">
    <slot />
  </div>
{:else}
  <a
    {href}
    target={href.includes("http") ? "_blank" : ""}
    class={`p-4 ${
      isScrolled ? "text-white" : ""
    } hover:font-medium active:font-bold`}>{text}</a
  >
{/if}
