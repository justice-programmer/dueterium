<script lang="ts">
  export let value: string = "";
  export let placeholder: string = "Enter text";
  export let type: string = "text";
  export let onInput: (value: string) => void = () => {};
</script>

<input
  {type}
  {placeholder}
  bind:value
  on:input={(e) => onInput((e.target as HTMLInputElement).value)}
/>

<style>
  input {
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
    width: 100%;
  }

  input:focus {
    border-color: rgb(105, 71, 168); /* Dueterium purple! */
    box-shadow: 0 0 0 2px rgba(105, 71, 168, 0.2);
  }
</style>
