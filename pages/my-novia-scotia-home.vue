<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      All Songs composed by Neil Seidel <br />
      (* except Paddy Lay Back)<br />
      ** Sung by Peter Romero<br />
      Acoustic, rhythm &amp; lead guitars by Neil Seidel
    </template>
    <template v-slot:notes> </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "My Nova Scotia Home",
      notes: {
        title: "",
         
      },
      album_thumbs: {
        lg: "/images/ns-home-cover400.jpg",
        sm: "/images/ns-home-cover150.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
