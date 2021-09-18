<template>
  <footer class=" text-base py-4 bg-gray-100 text-center w-full">
    <div class="w-full px-5 mx-auto sm:px-10 lg:w-2/3 2xl:w-1/2">
      <h3 class="text-xl sm:text-2xl font-medium mb-6">Contact</h3>
      <div class="mt-1 mb-2 ml-5 flex items-center justify-center text-sm sm:text-base">
        <div class="icon-envelope mr-2 w-4 h-4">
          <img src="/images/envelope.png" alt="">
        </div>
        <a href="mailto:guitarflight@aol.com" class="text-blue-600 w-auto">
          guitarflight@aol.com
        </a>
      </div>
      <div class="my-1 ml-5 text-sm sm:text-base">
        Developed by
        <a
          href="https://www.fiverr.com/munkhbat9"
          class="text-blue-600"
          target="_blank"
        >
          Munkhbat
        </a>
      </div>
      <div class="font-light mb-1 mt-5 text-center text-sm sm:text-base">
        Copyright &copy; 2021 Neil Seidel - All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp"
};
</script>

<style scoped>
/* .icon-envelope {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("~@/static/images/envelope.png");
} */
</style>