<script lang="ts">
  interface Props {
    value: string;
    placeholder: string;
    type: "email" | "text" | "color" | "date" | "tel";
  }
  let { value = $bindable(), placeholder, type }: Props = $props();
</script>

<input {type} {placeholder} bind:value />

<style>
  input {
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0.75rem;
  }

  input:focus {
    border-color: rgb(105, 71, 168); /* Dueterium purple! */
    box-shadow: 0 0 0 2px rgba(105, 71, 168, 0.2);
  }
</style>
