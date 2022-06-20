<template>
  <div>
  <HomeDesafio msg="Usuários Home Desafio"/>
  <FundoPerfil style="position:absolute; top:0px; left:25px;"/>
   <FundoPerfil style="position:absolute; top:135px; left:25px;"/>
   <FundoPerfil style="position:absolute; top:270px; left:25px;"/>
   <FundoPerfil style="position:absolute; top:405px; left:25px;"/>
   <FundoPerfil style="position:absolute; top:540px; left:25px;"/>
   <TesteComponente />
   <p> Teste inserindo {{inserir}}</p>
   </div>
</template>

<script>
import HomeDesafio from '@/components/HomeDesafio.vue'
import TesteComponente from '@/components/TesteComponente.vue'
import FundoPerfil from '@/components/FundoPerfil.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HomeDesafio,
    TesteComponente,
    FundoPerfil
  },
    created() {
        axios.get('https://reqres.in/api/users')
        .then((response) => {
          (this.content = response.data);
          console.table(response.data);
        
        });
    },
    mounted() {
        console.log('Componente montado');
    },
  data() {
    return {
      inserir: 'Dados'
    }
  },
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