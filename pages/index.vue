<template>
  <div class="pt-6 Container">
    <about-section class="Section" id="about-section"></about-section>
    <projects-section class="Section" id="projects-section"></projects-section>
    <albums-section class="Section" id="albums-section"></albums-section>
    <pictures-section class="Section" id="pictures-section"></pictures-section>
    
    <section class="Section py-5" id="playlist-section">
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

    <embed-section class="Section" id="embed-section"></embed-section>
    <book-section class="Section" id="book-section"></book-section>
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
