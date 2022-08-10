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
  <a {href} class={`p-4 ${isScrolled ? "text-white" : ""}`}>{text}</a>
{/if}
