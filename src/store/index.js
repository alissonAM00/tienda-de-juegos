import { createStore } from 'vuex'

export default createStore({
  state: //llamamos a los estado  para definirlos globalmente aqui se guarda toda la informacion
  {
    juegos:[]
  },
  getters:
  //obtiene y calcula propiedades derivadas del estado son parecidas a las propiedades computadas
  
   {
  },
  mutations: 
  //aqui consumir json  se crea una funcion para cambiar el estado
  {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos
    },
    INCREMENTAR(state, index) {
      return state.juegos[index].stock++
    },

    DISMINUIR(state, index) {
      return state.juegos[index].stock--
    },

  
  },
  actions: {
    //aqui se llama a la funcion que puede ser asincrona para cambiar el estado se usa el commit
    async setJuegos(context) {
      console.log(context)
      try {
        let response = await fetch("/juegos.json");
        let data = await response.json();
        context.commit('SET_JUEGOS', data)
      } catch (error) {
        console.log(error)
      }
    },
    //aqui puedes poner el @click
    incrementar(context, codigo) {
      try {
        let index = context.state.juegos.findIndex((juego) => juego.codigo == codigo)
        context.commit('INCREMENTAR', index)
      } catch (error) {
        console.log(error)
      }

    },
    onDisminuir(context, codigo) {

      try {
        let index = context.state.juegos.findIndex((juego) => juego.codigo == codigo)
        context.commit('DISMINUIR', index)
      } catch (error) {
        console.log(error)
      }

    }

  },

  modules: 
  //permite dividir el store en partes mas pequeñas y manejables 
  {
  }
})
