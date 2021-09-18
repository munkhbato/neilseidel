<template>
  <section class="py-5 ">
    <div class="mb-6 ">
      <h3 class="SectionTitle">
        Pictures
      </h3>
    </div>

    <div class="Container__Pictures">
      <div class="flex flex-wrap justify-around">
        
        <div class="Container__PictureItem Simple__Text">
          <img src="/images/shanti.jpg" alt="">
          <div>Neil with Shanti Atlantic Records recording artists</div>
        </div>
        <div class="Container__PictureItem Simple__Text">
          <img src="/images/dalilamans300.jpg" alt="">
          <div>Dalai Lama and Neil Seidel</div>
        </div>
        <div class="Container__PictureItem Simple__Text">
          <img src="/images/tonybennet400.jpg" alt="">
          <div>Tony Bennett performs at Seidel Event Productions</div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
    name: 'PicturesSection'
}
</script>

<style scoped>
.Container__PictureItem {
  @apply w-48 mb-3 mr-3 text-center self-center;
}
</style>