<script lang="ts">
  import { type Snippet } from "svelte";

  interface Props {
    type: "success" | "primary";
    clickHandler: (message: string) => void;
    children: Snippet;
    size: "horizontal-large" | "small";
  }

  let { type, clickHandler, children, size }: Props = $props();
</script>

<button
  class="btn"
  class:btn-primary={type === "primary"}
  class:btn-success={type === "success"}
  class:btn-horizontal-large={size === "horizontal-large"}
  class:btn-small={size === "small"}
  onclick={() => clickHandler(`[BUTTON]: clicked at ${Date.now().toString()}`)}
>
  {@render children()}
</button>

<style>
  .btn {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    transition:
      background 0.3s ease,
      transform 0.2s ease;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  .btn-small {
    padding: 18px 8px;
    font-size: 0.8rem;
  }

  .btn-horizontal-large {
    padding: 30px 190px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .btn-primary {
    background: rgb(105, 71, 168);
    color: white;
  }

  .btn-primary:hover {
    background: rgb(126, 84, 197);
    transform: scale(1.02);
  }

  .btn-success {
    background: rgb(79, 168, 71);
    color: white;
  }

  .btn-success:hover {
    background: rgb(79, 168, 71);
    transform: scale(1.02);
  }
</style>
