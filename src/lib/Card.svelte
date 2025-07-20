<script lang="ts">
  import { type Snippet } from "svelte";

  interface Props {
    variant: "elevated" | "flat";
    children: Snippet;
  }

  let { variant, children }: Props = $props();
</script>

<div
  class="card"
  class:card-elevated={variant === "elevated"}
  class:card-flat={variant === "flat"}
>
  {@render children()}
</div>

<style>
  .card {
    border-radius: 8px;
    padding: 16px;
    transition:
      box-shadow 0.3s ease,
      transform 0.2s ease;
    background: white;
  }

  .card-elevated {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }

  .card-elevated:hover {
    transform: scale(1.01);
  }

  .card-flat {
    box-shadow: none;
    border: 1px solid #eee;
  }
</style>
