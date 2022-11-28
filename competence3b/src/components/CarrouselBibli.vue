<template>
<div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="img-carou1" src="images/bibli.carou.jpg" class="d-block w-100" alt="">
      <p class="maintext">Offrez une nouvelle vie à toute vos bibliothèques !</p>
      <button class="mainbuttons" type="button" id="btn btn-primary">J'achète !</button>
    </div>
    <div class="carousel-item">
      <img id="img-carou2" src="images/bibli2.jpg" class="d-block w-100" alt="">
      <p class="maintext">Offrez une nouvelle vie à toute vos bibliothèques !</p>
      <button class="mainbuttons" type="button" id="btn btn-primary">J'achète !</button>
    </div>
    <div class="carousel-item">
      <img id="img-carou3" src="images/bibli4.jpg" class="d-block w-100" alt="">
      <p class="maintext">Offrez une nouvelle vie à toute vos bibliothèques !</p>
      <button class="mainbuttons" type="button" id="btn btn-primary">J'achète !</button>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
      
    
  </template>
  
  <script>
  
  
  
  export default {
    name: 'CarrouselBibli'
    
    
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  #img-carou1 {
    height: 600px;
    width: 1440px;
  }

  #img-carou2 {
    height: 600px;
    width: 1440px;
  }

  #img-carou3 {
    height: 600px;
    width: 1440px;
  }
  
  </style>