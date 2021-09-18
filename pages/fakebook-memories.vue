<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      A fun, nostalgic trip to the 1920's & the 1940's.<br />
      Traditional jazz with vocals and acoustic guitar, uke and rhythm section.
    </template>
    <template v-slot:notes>
      <p class="mb-2">
        The so called &ldquo;Fakebook&rdquo; is a shorthand version of sheet
        music used by musicians to have a large collection of popular songs
        available for use on &ldquo;gigs&rdquo;
      </p>
      <p class="mb-2">
        The format is 3 songs per page with just the melody, lyrics and basic
        chords names. The Fakebook #1 cover songs from 1900&rsquo;s through the
        end of the 1940&rsquo;s and contains about 1000 songs. The Fakebook got
        it&rsquo;s name due to the fact that it was illegally published as
        royalties to the writers and publishers of the songs contained in it
        were not paid. This was a book printed by musicians for musicians who
        generally couldn&rsquo;t afford to buy each individual song sheet.
      </p>
      <p class="mb-2">
        My guitar career began at age 7 where I received 2nd hand lessons from
        my brother who was given guitar lessons and expected to teach me what he
        learned. By 10 years old it was obvious that I had the natural musical
        talent and my father arranged private lessons for me at a store front
        music shop in Bayside, NY.
      </p>
      <p class="mb-2">
        Mike Widmer was a banjo-guitar teacher who introduced me to the
        Fakebook. My weekly lesson was simply to learn one page of the Fakebook
        (3 songs) reading the melody, transposing an octave higher and playing
        the chords in a rhythmic style. At our lesson, I would alternate these
        tasks with Mike playing the opposite parts.
      </p>
      <p class="mb-2">
        This simple but practical lesson plan served me well throughout my
        musical career. Knowing the &ldquo;old standards&rdquo; as they are
        sometimes referred to, allowed me to work with older experienced
        musicians to whom I owe much in the on going pursuit of musical
        knowledge.
      </p>
      <p class="mb-2">
        Fakebook Memories explores several of these tunes and it is my hope that
        they will bring a smile to your face and joy to your heart.
      </p>
      <p class="mb-2">
        All the parts were played by me using uke, banjo ,snare drum and a
        variety of guitars. Trombone, piano, harmonica, and bass were generated
        with synthesizer guitar.
      </p>
      <p class="mb-2 text-right">
        <em>
          <strong>Neil Seidel</strong><br />
          Palm Springs, California <br />
          February 2015
        </em>
      </p>
    </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Fakebook Memories",
      notes: {
        title: "Album Notes",
      },
      album_thumbs: {
        lg: "/images/fakebookmemories.jpg",
        sm: "/images/fakebookmemories.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
