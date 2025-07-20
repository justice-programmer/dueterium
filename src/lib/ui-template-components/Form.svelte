<script lang="ts">
  import { writable } from "svelte/store";
  import Input from "$lib/Input.svelte";
  import Button from "$lib/Button.svelte";
  interface TemplateProps {
    placeholder1: string;
    placeholder2: string;
    type1: "email" | "text" | "color" | "date" | "tel";
    type2: "email" | "text" | "color" | "date" | "tel";
    submit: string;
    onSubmit: (data: { input1: string; input2: string }) => void;
  }

  function handleSubmit() {
    onSubmit({
      input1: $input1,
      input2: $input2,
    });
  }

  let {
    placeholder1,
    placeholder2,
    type1,
    type2,
    submit,
    onSubmit,
  }: TemplateProps = $props();
  const input1 = writable("");
  const input2 = writable("");
</script>

<div class="form-wrapper">
  <form
    onsubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
  >
    <Input type={type1} placeholder={placeholder1} bind:value={$input1}></Input>
    <br />
    <Input type={type2} placeholder={placeholder2} bind:value={$input2}></Input>
    <br />
    <Button
      type="primary"
      size="horizontal-large"
      clickHandler={() => handleSubmit()}>{submit}</Button
    >
  </form>
</div>

<style>
  .form-wrapper {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: #f4f4f4; /* soft contrast against white form */
    padding: 32px;
    gap: 24px; /* or 24px, for comfortable spacing */
  }

  form {
    border: 1px solid #ccc; /* 🔲 give the form structure */
    border-radius: 8px;
    padding: 24px;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  form:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  }

  form:focus-within {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
</style>
