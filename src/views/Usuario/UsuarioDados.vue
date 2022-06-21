<template>
  <div class="container">
     
  <div class="group15">
    <IncluirDados />
      <button type="submit" @click="mudaBotao" class="btn" 
    v-on:click ="clicked = !clicked">Voltar</button>
      <div class="group1">
        <p class="titulo">#1</p>
      </div>
  <div class='image'>
     
        <img class="img" src="../../assets/img/george.svg" /> 
    <div>

        <div class="name-container"> 
                 <span class="firstName">Primeiro nome</span>
                 <span class="lastName">Último nome</span>   
                 <span class="primeiro">George</span>
                 <span class="ultimo">Bluth</span>  
                  <span class="email">Endereço de e-mail</span>
                   <span class="emaild">george.bluth@reqres.in</span>
                  <span class="avatar">Link do avatar</span>
                 <span class="jpg">https://reqres.in/img/faces/2-image.jpg</span>   
                 <span class="suport">Link de suporte</span>
                 <span class="link"> https://reqres.in/#support-heading</span>  
                  <span class="tit_descricao">Descrição do usuário</span>
                   <span class="descricao">To keep ReqRes free, contributions towards server costs are appreciated!</span>   
        </div> 
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "UsuarioDados",
    data() {
        return {
            clicked: false,
            list:[]

        };
    },
    methods: {
      mudaBotao() {
        this.clicked = !this.clicked
        if(this.btn ) {
          this.textoBotao = 'Voltar'
        } else{
          this.textoBotao = 'Cancelar';
          
        }
      }
    }

};
</script >

<style scoped>
.titulo {
  position: absolute;
  right: 90px;
}

button {
  background: #F7F7F7;
   color: black;
   border: none;
}
.img {
position: absolute;
width: 120px;
height: 120px;
right: 472px;
top: 98px;
border-radius: 5px;
}

.firstName {
position: absolute;
width: 108px;
height: 17px;
right: 302px;
top: 132px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #797979;
}

.lastName {
position: absolute;
width: 96px;
height: 17px;
left: 356px;
top: 132px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.2px;

color: #797979;

}

.primeiro {
position: absolute;
width: 62px;
height: 20px;
left: 185px;
top: 156px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;

color: #000000;
}
.ultimo {
position: absolute;
width: 47px;
height: 20px;
left: 358px;
top:  156px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;

color: #000000;
}
.email {
position: absolute;
width: 141px;
height: 17px;
left: 0px;
top: 248px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.2px;
}
.emaild {
position: absolute;
width: 200px;
height: 20px;
left: 0px;
top: 272px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;

color: #000000;
}

.avatar {
position: absolute;
width: 102px;
height: 17px;
left: 0px;
top: 312px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.2px;

color: #797979;
}
.jpg {
position: absolute;
width: 530px;
height: 20px;
left: -96px;
top: 336px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;

color: #000000;
}

.suport {
position: absolute;
width: 113px;
height: 17px;
left: 0px;
top: 376px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.2px;

color: #797979;
}

.link {
position: absolute;
width: 393px;
height: 20px;
left: -48px;
top: 400px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

letter-spacing: 0.2px;

color: #000000;
}

.tit_descricao {
position: absolute;
width: 151px;
height: 17px;
left: 0px;
top: 440px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.2px;

color: #797979;
}

.descricao {
position: absolute;
width: 816px;
height: 20px;
left: -96px;
top: 464px;

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
