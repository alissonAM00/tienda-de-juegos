<template>

  <NavbarComp/>

  <router-view/>

  <FooterView/>

</template>


<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterView from '@/components/FooterView.vue'
export default {
  name: "App",
  components: {
    NavbarComp,
    FooterView
  },
}
</script>
<style lang="scss">
#app {
  font-family: 'PixGamer', sans-serif;
  
}


</style>
