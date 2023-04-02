<script lang="ts">
  export let text: string;
  export let href: string;
  export let dropdown: boolean;
</script>

{#if dropdown}
  <button class="p-3">{text}</button>
  <div class="p-3">
    <slot />
  </div>
{:else}
  <a
    {href}
    target={href.includes("http") ? "_blank" : ""}
    class={`p-3 font-normal hover:font-medium text-white active:font-bold transition-colors`}
    >{text}</a
  >
{/if}
