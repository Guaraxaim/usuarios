<template>
  <HomeDesafio msg="Usuários Home Desafio"/>
  <PerfilUsuario style="position:absolute; top:0px; left:25px;"/>
   <PerfilUsuario style="position:absolute; top:135px; left:25px;"/>
   <PerfilUsuario style="position:absolute; top:270px; left:25px;"/>
   <PerfilUsuario style="position:absolute; top:405px; left:25px;"/>
   <PerfilUsuario style="position:absolute; top:540px; left:25px;"/>
</template>

<script>
import HomeDesafio from './components/HomeDesafio.vue'
import PerfilUsuario from './components/PerfilUsuario.vue'

export default {
  name: 'App',
  components: {
    HomeDesafio,
    PerfilUsuario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
}
</style>
