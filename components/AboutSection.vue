<template>
  <section
    class="Section"
    id="Section__About"
  >
    
    <!-- <div class="decor-1">
        <img src="/images/decor-01-132x283.png" alt="" width="132" height="283">
      </div> -->
    <div class="Container__AboutFull md:flex md:flex-wrap">
        <div class="Container__Description1">
          <div class="FullName">
            Neil Seidel
          </div>
          <div class="SubTitle">
            Artistic Director, Composer, Guitarist
          </div>
          <p class="Paragraph">
            Neil Seidel performed with L.A.’s top studio musicians for many
            years, as well as producing Special Events for Fortune 500
            companies.
            <a
              href="http://www.SeidelEventProductions.com"
              class="text-blue-600"
            >
              SeidelEventProductions.com
            </a>
          </p>
          <p class="Paragraph">
            A master guitarist and composer, Seidel is currently scoring films,
            commercials, and documentaries at his studio,
            <span class="font-medium">Independent Creative Sources</span>, in
            Los Angeles and Palm Springs, California.
          </p>
        </div>
        <div
          class="Container__AboutRight"
        >
          <div class="Container__AboutImage">
            <img
              src="/images/nsstjames300.jpg"
              alt=""
              class="AboutImage"
            />
          </div>
          <div class="mb-3" style="">
            <a
              class="ContactButton"
              href="mailto:guitarflight@aol.com"
            >
              Contact
            </a>
          </div>
        </div>
        <div class="Container__Description2">
          <p class="Paragraph">
            His expertise spans many musical genres. A former member of the
            critically acclaimed Indian world music group “Shanti", the hit
            rock-n-roll band “Gary Lewis & the Playboys", and is listed in
            Kingsbury’s “Who’s Who in Country Western Music" for his innovative
            guitar playing.
          </p>
          <p class="Paragraph">
            Recent projects include the release of his current CD, "My Nova
            Scotia Home" as well as "Dreams of Mexico" and "Princess Pukalani’s
            Hula" all based on his inspiring world travels.
          </p>
          <p class="Paragraph">
            The Independent Creative Sources Studio is fully equipped to produce
            a wide variety of orchestral, world, and library background music
            for film, commercials, video, and theatre projects.
          </p>
          <p class="Paragraph">
            Sample CD available upon request.
          </p>
        </div>
      <br />
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  props: []
};
</script>

<style lang="scss" scoped>
.FullName {
  @apply text-2xl sm:text-4xl font-bold text-gray-700 mb-3;
}

.SubTitle {
  @apply text-lg sm:text-xl font-light uppercase mb-4;
}



.Container__Description1 {
  @apply md:w-7/12 mx-auto mb-3;
}

.Container__Description2 {
  @apply  md:w-11/12 mx-auto;
}

.Container__AboutRight {
  @apply h-auto md:w-auto text-center mx-auto my-auto;

  .Container__AboutImage {
    @apply h-auto max-h-72 overflow-hidden w-auto mb-2;
  }

  .AboutImage {
    @apply h-60 w-auto mx-auto rounded-md ;
  }
}


.ContactButton {
  @apply bg-gray-800 h-auto text-gray-200 py-2 px-4 rounded-md shadow-md text-sm w-auto;
  @apply hover:shadow-xl;
  @apply sm:text-base ;
  @apply md:block md:font-medium md:rounded-xl md:py-2 md:px-4 md:uppercase;
}
</style>
