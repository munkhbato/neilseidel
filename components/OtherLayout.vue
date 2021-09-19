<template>
  <div class="Other__Layout">
    <section class="Section">
      <div class="w-full mb-3 text-center">
        <h3 class="text-xl sm:text-2xl font-medium text-gray-800 mb-3 ">
          {{ title }}
        </h3>
        <hr class="h-0.5 w-16 mx-auto bg-gray-200 mb-3" />
        <p class="Paragraph">
          {{ description }}
          <slot name="description"></slot>
        </p>
        <!-- <div class="text-center w-full">
            <img class="mx-auto h-60 w-auto" src="@/static/images/world-traveler-cover400.jpg" style="max-width: 100%;" alt=""/>
          </div> -->
      </div>
      <div class="text-left my-2">
        <nuxt-link to="/#albums-section" class="text-blue-600 font-medium">&lt;&lt; Home</nuxt-link>
      </div>
      <music-playlist
        :tracks_data="tracks_data"
        :album_thumbs="album_thumbs"
        class="w-full"
      ></music-playlist>
    </section>
    <section class="Section">
      <div
        class="text-base sm:text-lg font-medium text-gray-800 uppercase mb-3"
      >
        {{ notes.title }}
      </div>
      <p class="Paragraph ">
        {{ notes.text }}
        <slot name="notes"></slot>
      </p>
      <div class="text-left mt-5">
        <nuxt-link to="/#albums-section" class="text-blue-600 font-medium">&lt;&lt; Home</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import TracksData from "@/static/js/TracksData.js";

export default {
  data() {
    return {
      tracks_data: TracksData[this.$nuxt.$route.name]
    };
  },
  props: [
    "title",
    "description",
    "notes",
    "album_thumbs",
  ]
};
</script>

<style lang="scss"></style>
