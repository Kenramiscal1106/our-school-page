<script lang="ts">
  import { inview } from "svelte-inview";
  let visible: boolean = false;
  import { scale } from "svelte/transition";
  type Options = Parameters<typeof scale>[1];
  export let delay: number = 0;
  export let options: Options = {
    duration: 500,
    start: 0.3,
    delay,
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
    <div in:scale={options}>
      <slot />
    </div>
  {/if}
</div>
