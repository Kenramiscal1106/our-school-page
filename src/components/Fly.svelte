<script lang="ts">
  import { inview } from "svelte-inview";
  let visible: boolean = false;
  import { fly } from "svelte/transition";
  type Options = Parameters<typeof fly>[1];
  export let options: Options = {
    duration: 500,
    y: -200,
  };
</script>

<div
  use:inview={{
    threshold: 1,
    rootMargin: "-20% 0px -30% 0px",
  }}
  on:inview_enter={(event) => {
    visible = true;
  }}
>
  {#if visible}
    <div in:fly={options}>
      <slot />
    </div>
  {/if}
</div>
