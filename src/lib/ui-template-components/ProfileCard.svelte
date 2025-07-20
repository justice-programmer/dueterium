<script lang="ts">
  import Card from "$lib/Card.svelte";
  interface TemplateProps {
    profileTitle: string;
    profileDescription: string;
    profileImgUrl?: string;
  }

  let { profileTitle, profileDescription, profileImgUrl }: TemplateProps =
    $props();
</script>

<Card variant="elevated">
  <div class="profile-header">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="pfp" src={profileImgUrl} alt="Profile picture" />
    <h1>{profileTitle}</h1>
  </div>
  <p class="profile-description">{profileDescription}</p>
</Card>

<style>
  h1 {
    font-size: 1.25rem;
    margin: 0;
  }

  .profile-description {
    font-size: 0.95rem;
    color: #444;
    margin-top: 0.25rem;
  }

  .pfp {
    width: 100px; /* Set a desired width */
    height: 100px; /* Set a desired height, should be equal to width */
    border-radius: 50%; /* This is the key for making it circular */
    object-fit: cover; /* Ensures the image fills the circular space properly */
  }

  .profile-header {
    display: flex;
    align-items: center;
    gap: 1rem; /* spacing between image and title */
    margin-bottom: 0.5rem;
  }
</style>
