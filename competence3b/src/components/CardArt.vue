<template>
  <br>
  <h1>Les classiques</h1>
    <div id="app">
<div id="carte" v-for="item of items" :key="item.id">
    <div class="card" style="width: 18rem;">
  <img src="images/Bel-ami-guy-de-maupaant.jpeg" class="card-img-top" alt="livre">
  <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <p class="card-text">{{item.texte}}</p>
    <a href="#" class="btn btn-primary">Acheter</a>
  </div>
</div>
</div>
</div>
  </template>


  <script>
  import axios from "axios";
  export default {
    name: "App",
    data() {
      return {
        items: [],
      };
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/items`);
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>

  
<style scoped>

h1 {
  text-align: center;
}
#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
  padding: 30px;
}
.card {
  margin: 20px;
  padding: 10px;
}
</style>