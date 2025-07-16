<script lang="ts">
  export let type: string = "primary";
  export let size: "small" | "large" | "large-horizontal" = "large";
  export let onClick: () => void = () => {
    console.log("Default button click");
  };
</script>

<button class={`${type} ${size}`} on:click={onClick}>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    transition:
      background 0.3s ease,
      transform 0.2s ease;
  }

  .primary {
    background: rgb(105, 71, 168);
    color: white;
  }

  .primary:hover {
    background: rgb(126, 84, 197);
    transform: scale(1.02);
  }

  .large {
    padding: 30px 18px;
    font-size: 1rem;
  }

  .large-horizontal {
    padding: 30px 190px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .small {
    padding: 18px 8px;
    font-size: 0.8rem;
  }
</style>
