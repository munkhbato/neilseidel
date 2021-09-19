<template>
  <other-layout :title="title" :notes="notes" :album_thumbs="album_thumbs">
    <template v-slot:description> </template>
    <template v-slot:notes>
      <!-- For all you fans of the music of Shlomo Carlebach, 
      here is a release by Neil Seidel, an amazing musician 
      who was Shlomo's favorite guitarist.  
      This is an all instrumental CD of popular Shlomo Carlebach 
      melodies by a master guitarist who spent 23 years with Shlomo.  
      The CD will bring back fond memories to those who were with Shlomo, 
      and inspire those who are new to the music. -->
    </template>
  </other-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Neil 'Lopaka' Seidel",
      notes: {
        title: "",
         
      },
      album_thumbs: {
        lg: "princess.jpg",
        sm: "princess.jpg"
      }
    };
  }
};
</script>
<style lang="scss"></style>
