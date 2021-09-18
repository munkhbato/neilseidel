<template>
  <div>
      <Nuxt />
      <footer-comp></footer-comp>
  </div>
</template>


<style lang="scss">
div {
  box-sizing: border-box;
}
.Section {
  @apply py-5 mx-auto w-full px-5 sm:px-10 lg:w-2/3 2xl:w-1/2;
}
.SectionTitle {
  @apply text-xl sm:text-2xl italic text-gray-200 bg-gray-800 w-auto inline-block px-2;
}
.Paragraph {
  @apply mb-2 text-gray-800 text-sm sm:text-base leading-relaxed sm:leading-loose;
}
</style>