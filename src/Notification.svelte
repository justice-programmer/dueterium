<script lang="ts">
  export let type: "success" | "warning" | "error" | "info" = "info";
  export let visible: boolean = true;
  export let timeout: number = 5000; // auto-dismiss after x ms (optional)

  // Optional auto-dismiss logic
  import { onMount } from "svelte";
  onMount(() => {
    if (timeout && visible) {
      setTimeout(() => (visible = false), timeout);
    }
  });
</script>

{#if visible}
  <div class={`notification ${type}`}>
    <slot></slot>
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 14px 20px;
    border-radius: 6px;
    color: white;
    font-size: 0.95rem;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    z-index: 9999;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
    animation: pop-in 0.3s ease;
  }

  .info {
    background-color: #6178d1;
  }
  .success {
    background-color: #56a360;
  }
  .warning {
    background-color: #f5a623;
  }
  .error {
    background-color: #e04848;
  }

  @keyframes pop-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
