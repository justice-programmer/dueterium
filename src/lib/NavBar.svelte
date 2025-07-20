<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title?: string;
    children: Snippet;
    variant: "elevated" | "flat";
  }

  let { title, children, variant }: Props = $props();
</script>

<!--navbar-->
<div
  class="navbar"
  class:navbar-elevated={variant === "elevated"}
  class:navbar-flat={variant === "flat"}
>
  {@render children()}
</div>

<style>
  .navbar {
    position: sticky; /* or fixed */
    top: 0;
    z-index: 100; /* keeps it above page content */
    border-radius: 6px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }
</style>
