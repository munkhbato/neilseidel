<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description>
      As interpreted by Neil Seidel, Guitarist
    </template>
    <template v-slot:notes>
      For all you fans of the music of Shlomo Carlebach, here is a release by
      Neil Seidel, an amazing musician who was Shlomo's favorite guitarist. This
      is an all instrumental CD of popular Shlomo Carlebach melodies by a master
      guitarist who spent 23 years with Shlomo. The CD will bring back fond
      memories to those who were with Shlomo, and inspire those who are new to
      the music.

      <p class="font-medium mt-3 italic">
        "I was transported to those heavenly moments we shared with R. Shlomo"
      </p>

      <p class="text-right">- Rabbi Zalman Schacter Shalomi</p>
      <p class="font-medium mt-3 italic">
        "Neil Seidel expresses the soul of Reb Shlom's (z") music with both
        fidelity to his spirit and heartful artistry. Listening I was
        transported to those heavenly moments we shared with Reb Shlomo z"
      </p>
      <p class="text-right">- Reb Zalman Schachter-Shalomi</p>

      <p class="font-medium mt-3 italic">
        "Iridescent, soaring, sophisticated and opulent rendering of Shlomo's
        timeless me"
      </p>

      <p class="text-right">
        - Charles E. Vernoff, Ph.D.
      </p>
      <p class="font-normal mt-3 italic">
        "Neil Seidel, Shlomo Carlebach's premier guitar accompanist, has
        magisterially demonstrated his stature as an artist and authoritative
        interpreter of Shlomo Carlebach's immortal music on this exquisite,
        meticulously mastered CD. There is a special pleasure in surrendering to
        these sounds without words, music which carries the listener aloft into
        a resplendent world of spirit which soothes, inspires and heals. For the
        Jewish soul and those with affinities to it, one could not imagine a
        more opulent and gratifying treat than is offered to us by Neil Seidel's
        impeccable artistry. Neil reveals a whole new, exalted and sophisticated
        dimension of Shlomo Carlebach which will confirm the special status of
        Shlomo's heavenly melodies in the pantheon of immortal expressions of
        the Jewish soul."
      </p>
      <p class="font-medium mt-3 italic">
        "Extremely uplifting, deep ,inspiring & transformational!"
      </p>
      <p class="text-right">
        - Rabbi Shlomo Schwartz of the Chai Center
      </p>
      <p class="font-normal mt-3 italic">
        "I have been a big fan of R. Shlomo Carlebach since 1959. Never have I
        heard those melodies so amazingly " translated & interpreted " as on
        Neil Seidel's album . While I'm listening , I really dont want 2 do
        anything else but --- LISTEN .Seidel brings out the greatness of
        Carlebach & --- vice versa!"
      </p>
      <p class="font-medium mt-3 italic">
        "Smooth & Mellow"
      </p>
      <p class="text-right">
        - Rabbi Moshe Shur Director Hillel of Queens College New York
      </p>
    </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "The Heavenly Melodies of Shlomo Carlebach",
      notes: {
        title: "Recent Reviews",
         
      },
      album_thumbs: {
        lg: "/images/shlomocover400.jpg",
        sm: "/images/shlomocover.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
