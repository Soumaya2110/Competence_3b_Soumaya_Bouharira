<template>
  <div>
    <navbar></navbar>
    <carrousel></carrousel>
    <card></card>
    <formul></formul>
    <footerv></footerv>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import CarrouselBibli from './CarrouselBibli.vue';
import FormContact from './FormContact.vue';
import FooterVa from './FooterVa.vue';
import CardArt from './CardArt.vue';





export default {
  name: 'HelloWorld',
  components:{
    'navbar': NavBar,
    'carrousel': CarrouselBibli,
    'formul': FormContact,
    'footerv': FooterVa,
    'card': CardArt
    

  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
