<template>
    <div class="navbar1">
       <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <img id="logo" src="images/nvxlogo.png" alt="logo"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Livre</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mon compte
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mes commandes</a></li>
            <li><a class="dropdown-item" href="#">Mes informations</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Contact</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Panier</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button id="buttvue" class="btn btn-outline-success" type="submit">Recherche</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  </template>
  
  <script>
  
  
  
  export default {
    name: 'NavBar'
    
    
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .navbar1 {
    margin-bottom: 20px;
    color: blue;
  }

  li {
    color: blue;
  }

  #buttvue {
    color: rgba(0, 194, 203);
    border: solid 1px rgba(0, 194, 203);
  }
  #buttvue:hover {
    background-color: #ff5757;
  }
  
  </style>