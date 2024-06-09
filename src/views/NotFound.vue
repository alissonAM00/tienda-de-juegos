<template >
    <div class="fondo">
      <div >
        <header class="py-3">
          <div class="d-flex justify-content-center">
            <h1 class="text-danger">
              Juego no encontrado
            </h1>
          </div>
        </header>
        <main class="row">
            <div class="col-md-6">
               <img class="fantasma" src="../assets/fantasma.png" alt="">
            </div>
            <div class="col-md-6 burbuja">
               <img src="../assets/burbuja.png" alt="">
            </div>
          

         
        </main>
      </div>
    </div>
  </template>

  <style scoped>
.fondo {
    background-image:url("../assets/notfound.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;

  }
.burbuja{
    height: 50%;
}
.fantasma{
    width: 90%;
}
  </style>