<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      <b>NEW!!! All original music by Neil Seidel</b><br />
      * Cartas Mercados co-written with Alex Flores & Dick Winograde.
    </template>
    <template v-slot:notes> </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Dreams of Mexico",
      notes: {
        title: ""
      },
      album_thumbs: {
        lg: "/images/mexcover.jpg",
        sm: "/images/mexcover.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
