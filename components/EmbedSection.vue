<template>
  <section>
    <div class="mb-6 ">
      <h3 class="SectionTitle">
        More Music
      </h3>
    </div>

    <div class="flex flex-wrap justify-around">
      <div class="Container_EmbedItem">
        <iframe
          class=""
          src="https://www.youtube.com/embed/ebwSvJw5yUw"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p class="Simple__Text">
          Shanti featuting Zakir Hussain,<br />
          Ashish Khan and Neil Seidel
        </p>
      </div>
      <div class="Container_EmbedItem">
        <iframe
          class=""
          src="https://www.youtube.com/embed/GYFs50HrIYs"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p class="Simple__Text">Groundhog day video</p>
      </div>
      <div class="Container_EmbedItem">
        <iframe
          class=""
          src="https://www.youtube.com/embed/gdd1Ql6a_ks"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p class="Simple__Text">I wish i could write a song</p>
      </div>
    </div>
    <div class="mt-3">
      <a
        href="https://www.youtube.com/user/guitarflight"
        target="_blank"
        class="block"
      >
        <img
          src="images/youtube_btn.png"
          width="131"
          height="50"
          class="mx-auto"
          alt="Follow Neil on YouTube"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "EmbedSection"
};
</script>

<style scoped>
.Container__EmbedItem {
  @apply w-auto mb-3 mr-3 text-center;
}
</style>
