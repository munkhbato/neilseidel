<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      Neil Seidel: Acoustic Rhythm & Lead Guitar <br />
      Bruce Lett: Upright Bass <br />
      A 1929 Gibson L-5 was used on all selections.
    </template>
    <template v-slot:notes>
      <p class="italic">
        "It's great to hear this wonderful music on an instrument that was
        contemporaneously created for it!"
      </p>
      <p class="text-right">
        - Mark Born, KXLU Radio Show Host, Los Angeles
      </p>
      <br />
      <p class="italic">
        "Mr. Seidel's smooth playing perfectly pairs his 1929 Gibson's classic
        tone with fresh versions of vintage jazz tunes from Fats Waller, Hoagie
        Carmichael, Duke Ellington and others."
      </p>
      <p class="text-right">
        - Brad Massingill, Director Austin Acoustic Music Festival
      </p>
      <br />

      <p class="italic">
        "Seidel's playing is musically solid. His leads are nicely presented and
        solos are well constructed. If you are a fan of the acoustic guitar and
        some good vintage jazz, this CD is a must!"
      </p>

      <p class="text-right">
        - Dave Ruffner, Jazz Reviewer The America Rag
      </p>
      <br />

      <p class="italic">
        "Neil Seidel emerges from the shadows for an engaging journey down
        memory lane that's lined with songs you've heard before but would like
        to hear again. . . his touch is tender and true."
      </p>
      <p class="text-right">
        - Cam Miller, Jazz Reviewer The American Rag
      </p>
      <br />
      <p class="italic">
        "Seidel gets a great sound out of his vintage unamplified Gibson, and
        his tasteful variations on some great standards make for very pleasant
        listening."
      </p>
      <p class="text-right">
        - Safford Chamberlain, Jazz Writer
      </p>

      <br />
      <p class="italic">
        "You are an excellent act for audiences worldwide with your versatile
        technique and style."
      </p>
      <p class="text-right">
        - Del Casher, Noted Guitarist
      </p>
    </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Vintage Guitar",
      notes: {
        title: "Recent Reviews",
      },
      album_thumbs: {
        lg: "/images/vintageguitar.jpg",
        sm: "/images/vintageguitar.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
