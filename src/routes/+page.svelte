<script lang="ts">
  import Button from "$lib/Button.svelte";
  import Card from "$lib/Card.svelte";
  import NavBar from "$lib/Card.svelte";
  import Input from "$lib/Input.svelte";
  import Form from "$lib/ui-template-components/Form.svelte";
  import ProfileCard from "$lib/ui-template-components/ProfileCard.svelte";
  let name: string;
  let desc: string;
  function click(data: string) {
    console.log(`whatever ${data}`);
  }

  function updData(data: { input1: string; input2: string }) {
    name = data.input1;
    desc = data.input2;
  }
</script>

<Form
  type1="text"
  type2="text"
  placeholder1="Name"
  placeholder2="Description"
  submit="Sumbit"
  onSubmit={(data) => updData(data)}
  title="Example Form"
></Form>

<br />

<ProfileCard
  profileTitle={name}
  profileDescription={desc}
  profileImgUrl="/image.png"
></ProfileCard>

<style>
  :root {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
</style>
