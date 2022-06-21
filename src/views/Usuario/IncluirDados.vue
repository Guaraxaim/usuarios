<template>
  <div class="group21">
    <span class="nome">Nome do Usuário</span>
    <input v-model="message" placeholder="adicione um nome">
    <select v-model="selected">
        <option disabled value="">Selecione uma função</option>
         <option>Desenvolvedor</option>
         <option>Gerente de Projetos</option>
        <option>Tech Lead</option>
        <option>UI/UX Designer</option>

        <button class="salvar dados">Salvar Dados do Usuário</button>
</select>
  </div>
</template>

<script>
export default {
    name: "IncluirDados"
}
</script>

<style>
.group21 {
position: absolute;
width: 584px;
height: 277px;
left: 348px;
top: 197px;
border: 1px solid yellow;
}

.nome {
position: absolute;
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

color: #000000;
}
</style>