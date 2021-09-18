<template>
  <other-layout
    :title="title"
    :notes="notes"
    :album_thumbs="album_thumbs"
  >
    <template v-slot:description>
      A variety of World Music instrumental guitar music from many countries.
    </template>
    <template v-slot:notes>
      Neil Seidel is a former lead guitarist in the World Music band "Shanti"
      Neil's eclectic mix of musical styles from around the world makes an
      interesting musical journey.
    </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "World Music Traveler",
      notes: {
        title: "Album Notes"
      },
      album_thumbs: {
        lg: "/images/world-traveler-cover400.jpg",
        sm: "/images/world-traveler-cover.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
