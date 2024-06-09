<template >
  <div>
    <div class="juegos">
    <header class="text-center py-5">
      <h1 class="text-principal">Tienda 32 Bits</h1>
    </header>
    <main class="container text-white">
      <section class="">
        <h2 class="text-center my-5">Lista de juegos</h2>
        <div class="table-container bg-dark table-striped ">
          <table class=" table-bordered  ">
            <thead class="text-center">
              <tr>
                <th scope="col">Código</th>  
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th> 
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(juego, index) in juegos" :key="index">
                <th scope="row">{{ juego.codigo }}</th>

                <td>{{ juego.nombre }}</td>
                <!-- saldra agotado si contador llega a 0 -->
                <td>{{ juego.stock > 0 ? juego.stock : "Agotado" }}</td>
                <td>${{ juego.precio }}</td>
                <td>
                  <div class="btn-group gap-3">
                    <button
                      class="btn btnmas btn-sm"
                      @click="agregar(juego.codigo)"
                    >
                      <i class="bi bi-plus-circle"></i>
                    </button>
                    <button
                      class="btn btnmenos btn-sm"
                      @click="onDisminuir(juego.codigo, juego.stock)"
                    >
                      <i class="bi bi-dash-circle"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div></div>
  
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "JuegosView",
  components: {},
  dat() {
    return {};
  },
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["setJuegos", "incrementar", "onDisminuir"]),
    agregar(codigo) {
      this.incrementar(codigo);
    },
    disminuir(codigo, stock) {
      //si el stock es mayor que cero se dismunuye
      if (stock > 0) {
        this.onDisminuir(codigo);
      }
    },
  },
  //mounted
  created() {
    //inicia o modifica datos
    this.setJuegos();
  },
};
</script>
<style scoped>
.juegos{
  background-image:url("../assets/fondoprod.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
.btnmas {
  border: 1px solid black;

  background-color: #1545e4;
  font-weight: bolder;
  font-size: 15px;
  box-shadow: 0px 0px 1px;
  transform: all 2s esase;
  transition-duration: 0.3s;
  color: antiquewhite;
}

.btnmas:hover {
  transform: translateY(-10px);
  box-shadow: 0px 7px 1px rgb(0, 0, 0);
  border: 1px solid black;
}

.btnmas:active {
  transform: translateY(10px);
  box-shadow: 0px 0px 1px;
}
.btnmenos {
  border: 1px solid black;

  background-color: #ff0707;
  font-weight: bolder;
  font-size: 15px;
  box-shadow: 0px 0px 1px;
  transform: all 2s esase;
  transition-duration: 0.3s;
  color: antiquewhite;
}

.btnmenos:hover {
  transform: translateY(-10px);
  box-shadow: 0px 7px 1px rgb(0, 0, 0);
  border: 1px solid black;
}

.btnmenos:active {
  transform: translateY(10px);
  box-shadow: 0px 0px 1px;
}

.table-container {
  width: 100%;
  overflow-x: auto;

}
table{
  width: 100%;
  border-collapse: collapse;
  min-width: 400px;
 

}
</style>