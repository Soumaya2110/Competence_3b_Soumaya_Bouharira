<template>
         <section id="form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Votre prénom : </label>
                <input type="email" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Votre adresse e-mail : </label>
                <input type="email" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Votre message : </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12">
                <button id="subbuttons" class="btn btn-primary" type="submit">Envoyer</button>
            </div>
            </section>

</template>
  
  <script>
  
  
  
  export default {
    name: 'FormContact'
    
    
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>



  
  
  </style>