<template>
  <div>
    <navbar></navbar>
    <carrousel></carrousel>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import CarrouselBibli from './CarrouselBibli.vue';



export default {
  name: 'HelloWorld',
  components:{
    'navbar': NavBar,
    'carrousel': CarrouselBibli

  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
