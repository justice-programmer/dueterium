<script lang="ts">
  export let value: string = "";
  export let placeholder: string = "Enter text";
  export let type: string = "text";
  export let onInput: (value: string) => void = () => {};
</script>

<input
  class="dueterium-input"
  {type}
  {placeholder}
  bind:value
  on:input={(e) => onInput((e.target as HTMLInputElement).value)}
/>

<style>
  .dueterium-input {
    transition: border-color 0.2s ease;
    width: 100%;
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .dueterium-input:focus {
    border-color: rgb(105, 71, 168); /* Dueterium purple! */
    box-shadow: 0 0 0 2px rgba(105, 71, 168, 0.2);
  }
</style>
