<template>
  <div class="group21">
    <span class="nome">Nome do Usuário</span>
    <input v-model="message" placeholder="adicione um nome" class="inputNome">
     <span class="fun_use">Função do usuário</span>
    <select v-model="selected" class="funcao">
        <option disabled value="">Selecione uma função</option>
         <option>Desenvolvedor</option>
         <option>Gerente de Projetos</option>
        <option>Tech Lead</option>
        <option>UI/UX Designer</option>

        <button class="salvarDados">Salvar Dados do Usuário</button>
</select>
  </div>
</template>

<script>
export default {
    name: "IncluirDados"
}
</script>

<style scoped>
.group21 {
position: absolute;
width: 584px;
height: 277px;
left: 348px;
top: 197px;
border: 1px solid yellow;
z-index: 40;
}

.nome {
position: flex;;
width: 145px;
height: 20px;
left: 348px;
top: 197px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;
z-index: 41;
color: #000000;
}

.salvarDados {
position: absolute;
width: 584px;
height: 55px;
left: 348px;
top: 419px;
background: #000000;
color: white;
border-radius: 5px;
z-index: 43;
}

.inputNome {
box-sizing: border-box;

position: absolute;
width: 584px;
height: 55px;
left: 348px;
top: 229px;

border: 1px solid #E5E5E5;
border-radius: 5px;
}

.funcao {
position: absolute;
width: 156px;
height: 20px;
left: 348px;
top: 308px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;

color: #000000;
}

.fun_use {
position: absolute;
width: 156px;
height: 20px;
left: 348px;
top: 308px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;
}
</style>