<template>
  <section>
    <div class="mb-6 ">
      <h3 class="SectionTitle">
        Albums
      </h3>
    </div>
    <div class="flex flex-wrap justify-around">
      <album-comp
        :album="album"
        v-for="(album, i) in albums"
        :key="i"
      ></album-comp>
    </div>

    <!-- <div class="decor-3">
      <img
        src="/images/decor-03-1343x1845.png"
        alt=""
        width="1343"
        height="1845"
      />
    </div> -->
    <!-- <div class="decor-4">
        <img src="./images/decor-04-146x121.png" alt="" width="146" height="121">
      </div> -->
  </section>
</template>

<script>
import AlbumsData from "@/static/js/AlbumsData.js";

export default {
  name: "AlbumsSection",
  data() {
    return {
      albums: AlbumsData
    };
  }
};
</script>

<style lang="scss" scoped></style>
