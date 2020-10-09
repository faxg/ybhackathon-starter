<script>
    import ProfileCard from "../components/ProfileCard.svelte";
    import QRCard from "../components/QRCard.svelte";

    export let userInfo = undefined; // injected on page mount (see App.svelte)
</script>
{#if userInfo}

<style>
    .col,
   .col-sm-12,
  .col-md-6,
  .col-lg-4,
  .col-xl-4 {
    padding-top: 10px;
  }
</style>


<div class="row">
    <div class="col">
        <ProfileCard {userInfo} />
    </div>
    <div class="col">
        <QRCard {userInfo} />
    </div>

</div>
{:else}Sorry, you need to log in first.{/if}
