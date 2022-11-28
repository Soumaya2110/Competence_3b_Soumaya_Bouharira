<template>
  <div>
    <navbar></navbar>
    <carrousel></carrousel>
    <card></card>
    <card></card>
    <test></test>
    <formul></formul>
    <footerv></footerv>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import CarrouselBibli from './CarrouselBibli.vue';
import CardArt from './CardArt.vue';
import FormContact from './FormContact.vue';
import FooterVa from './FooterVa.vue';
import TestJso from './TestJso.vue';



export default {
  name: 'HelloWorld',
  components:{
    'navbar': NavBar,
    'carrousel': CarrouselBibli,
    'card': CardArt,
    'formul': FormContact,
    'footerv': FooterVa,
    'test': TestJso

  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
