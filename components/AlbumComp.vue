<template>
  <div class="Container__Album">
    <nuxt-link :to="album.link">
      <div class="Container__Image ">
        <img :src="album.src" alt="" />
      </div>
      <div class="Album__Title">
        {{ album.title }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "AlbumComp",
  props: ["album"]
};
</script>

<style lang="scss" scoped>
.Container__Album {
  @apply mr-4 mb-6 overflow-hidden border border-gray-200 shadow rounded-lg px-2 py-2 w-24 sm:w-36 sm:h-auto;

  &:hover {
    @apply shadow-lg border;

    // .Container__Image {
    //   @apply shadow-md border-2;
    // }

    .Album__Title {
      @apply text-blue-700;
    }
  }
  .Album__Title {
    @apply text-xs sm:text-base text-center leading-tight mt-2;
  }
}

.Container__Image {
  @apply w-full h-24 sm:h-36 overflow-hidden rounded;
  & > img {
    @apply h-full mx-auto;
    object-fit: fill;
  }
}
</style>
