<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      Neil Seidel: Acoustic Rhythm & Lead Guitar/Synthesizer <br />
      Produced by Neil Seidel and Dick Winograde. <br />
      A 1929 Gibson L-5 wasused on all selections
    </template>
    <template v-slot:notes> </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Vintage Guitar II",
      notes: {
        title: ""
      },
      album_thumbs: {
        lg: "/images/vintageguitar2cover.jpg",
        sm: "/images/vintageguitar2cover.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
