<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      Produced by Neil Seidel<br />
      Digital Remastering - Dick Winograde <br />
      <p class="my-2 font-semibold">
        <i>
          Dedicated to the memory of Yacov (Jacques) Harosh O.B.M. 1946-1999
        </i>
      </p>
      Jacques Harosh, Vocals <br />
      Neil Seidel, Guitar <br />
      Oud Mike Asher, Piano/DX7 Keyboard <br />
      Terry Harrington, Flute, Oboe, Recorder <br />
      Chuck Flores, Drums <br />
      Harvey Newmark, Upright Bass
    </template>
    <template v-slot:notes> </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Music from the Heart - Jacques Harosh",
      notes: {
        title: "",
      },
      album_thumbs: {
        lg: "/images/jacques400.jpg",
        sm: "/images/jacques150.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
