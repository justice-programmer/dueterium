<script lang="ts">
  export let type: string = "primary";
  export let size: string = "large";
</script>

<div class={`${type} ${size}`}>
  <slot></slot>
</div>

<style>
  div {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
  }

  .primary {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-left: solid 3px rgb(105, 71, 168);
  }

  .primary:hover {
    transform: scale(1.02);
  }

  .sucsess {
    border-left: solid 3px rgb(81, 192, 100);
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
