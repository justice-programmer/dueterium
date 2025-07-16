<script lang="ts">
  // Slot-based form wrapper — no built-in inputs or buttons
  export let onSubmit: () => void;
  export let heading: string = "Sign in";
  export let width: string = "400px"; // For layout control
</script>

<form class="dueterium-form" on:submit|preventDefault={onSubmit}>
  <h2>{heading}</h2>
  <slot />
</form>

<style>
  .dueterium-form {
    max-width: var(--form-width, 400px);
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 0 0 20px rgba(105, 71, 168, 0.2);
    font-family: system-ui, sans-serif;
  }
</style>
