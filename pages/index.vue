<template>
  <div class="pt-6">
    <about-section></about-section>
    <projects-section></projects-section>
    <albums-section></albums-section>
    <pictures-section></pictures-section>
    
    <section class="Section py-5 " id="Section__Playlist">
      <div class="mb-6 ">
        <h3 class="SectionTitle">
          Sample Music
        </h3>
      </div>
      <music-playlist
        :tracks_data="tracks_data"
        :album_thumbs="album_thumbs"
      ></music-playlist>
    </section>

    <embed-section></embed-section>
    <book-info></book-info>
  </div>
</template>

<script>
import TracksData from "@/static/js/TracksData.js";

export default {
  data() {
    return {
      tracks_data: TracksData["index"],
      album_thumbs: {
        lg: "/images/world-traveler-cover400.jpg",
        sm: "/images/world-traveler-cover.jpg"
      }
    };
  }
};
</script>
<style></style>
