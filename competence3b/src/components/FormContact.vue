<template>
    <div id="formvue">
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

            <section id="seccontact">
                <p id="textcontact">Une question ? Des livres qui prennent la poussière dans votre bibliothèque ? 
                    N’hésitez pas à nous contacter, nous serons heureux de répondre à toutes vos questions? </p>
            </section>
        </div>
</template>
  
  <script>
  
  
  
  export default {
    name: 'FormContact'
    
    
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    #h1contact {
            text-align: center;
        }
        #form {
            margin: 10px;
            width: 600px;
            height: 360px;
            background-color: rgba(0, 194, 203, 0.1);
            padding: 15px;
            border-radius: 15px;
        }
        
        #contact {
            display: flex;
            flex-direction: row;
            justify-content: center;  
            margin: 30px;
            
           
        }   

        #formvue {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
  
  </style>