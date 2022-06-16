<template>

  <div class="home">
    <!-- <h1>{{ name}}</h1> -->
    <div class="group15">
      <button>Novo Usuário</button>
      <div class="group1">
        <p class="titulo">Usuários</p>
      </div>

     
          <div class="group7">
            <img class="george" src="../assets/img/george.svg" />
            <div class="dados">
              <p class="num">1#</p>
              <p class="nome">George Bluth</p>
              <p class="email">george.bluth@reqres.in</p>
            </div>
            
              <img src="../assets/img/edit.svg" alt="" class="edit">
              <img src="../assets/img/trash.svg" alt="" class="trash">
              <img src="../assets/img/view.svg" alt="" class="view">
          </div>
       
            <div class="group8">
            <img class="janet" src="../assets/img/janet.svg" />
            <div class="dadosj">
              <p class="num">2#</p>
              <p class="nome">Janet Weaver</p>
              <p class="email">janet.weaver@reqres.in</p>
            </div>
            
              <img src="../assets/img/edit.svg" alt="" class="editj">
              <img src="../assets/img/trash.svg" alt="" class="trashj">
              <img src="../assets/img/view.svg" alt="" class="viewj">
          </div>

            <div class="group8emma">
            <img class="emma" src="../assets/img/emma.svg" />
            <div class="dadose">
              <p class="num">3#</p>
              <p class="nome">Emma Wong</p>
              <p class="email">emma.wong@reqres.in </p>
            </div>
            
              <img src="../assets/img/edit.svg" alt="" class="edite" >
              <img src="../assets/img/trash.svg" alt="" class="trashe">
              <img src="../assets/img/view.svg" alt="" class="viewe">
          </div>

            <div class="group8eve">
            <img class="eve" src="../assets/img/eve.svg" />
            <div class="dadosev">
              <p class="num">5#</p>
              <p class="nome">Eve Holt</p>
              <p class="email">eve.holt@reqres.in </p>
            </div>
              <img src="../assets/img/edit.svg" alt="" class="editev" >
              <img src="../assets/img/trash.svg" alt="" class="trashev">
              <img src="../assets/img/view.svg" alt="" class="viewev">
          </div>
       
        <div class="group8charc">
            <img class="char" src="../assets/img/charles.svg" />
            <div class="dadosc">
              <p class="num">6#</p>
              <p class="nome">Charles Morris </p>
              <p class="email">charles.morris@reqres.in </p>
            </div>
  
              <img src="../assets/img/edit.svg" alt="" class="editc" >
              <img src="../assets/img/trash.svg" alt="" class="trashc">
              <img src="../assets/img/view.svg" alt="" class="viewc">
          </div>
      </div>

    </div>

</template>

<script>

export default {
    name: "HomeDesafio",
    data() {
        return {
            name: "Usuários",
            //retImage: require("../assets/img/ret1.png"),
            // retPeq: require("../assets/img/retpeq.png")
            components: {
               
            }
        };
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  ,  style scoped-->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

.home {
  position: relative;
  width: 1280px;
  height: 1102px;
  background: #ffffff;
  border: 1px solid white;;
  margin: 0 auto;
}
.group15 {
  position: relative;
  height: 761px;
  width: 592px;
  margin: 0 auto;
  top: 96px;
  border: 2px solid white;;
}
.group1 {
  position: absolute;
  width: 229px;
  height: 61px;
  top: 0px;
  border: 1px solid white;;
}
.titulo {
  position: relative;
  width: 229px;
  height: 61px;
  top: -50px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  /* identical to box height */
  border: 1px solid white;;
  letter-spacing: 0.2px;

  color: #000000;
}
button {
  position: absolute;
  display: inline-block;
  width: 185px;
  right: 0px;
  height: 55px;
  top: 0px;
  color: #fff;
  font-family: "Montserrat";
  background: #000000;
  border-radius: 5px;
}

/* Dados George */
.george {
  position: absolute;
  right: 478px;
  top: 121px;
  display: inline-block;
  z-index:20;
}
.dados {
  position: absolute;
  top: 122px;
  width: 194px;
  height: 75px;
  left: 139px;
  border: 1px solid white;;
  display: inline-block;
  z-index:19;
}

.num {
  position: relative;
  text-align: left;
  top: -15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.2px;
  color: #797979;
}
.nome {
  position: absolute;
  top: 15px;
  font-family: "Montserrat";
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 0.2px;

  color: #000000;
}

.email {
  position: absolute;
  top: 40px;
  font-family: "Montserrat";
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.2px;

  color: #797979;
}

.edit{
position: absolute;
width: 17px;
height: 17px;
right: 98px;
top: 153px;
z-index: 18;
}
.trash{
position: absolute;
width: 17px;
height: 17px;
right: 65px;
top: 153px;
z-index: 17;
}

.view{
position: absolute;
width: 17px;
height: 17px;
right: 31px;
top: 154px;
z-index: 16;
}
/* Dados Janet */
.janet {
  position: absolute;
  right: 478px;
  top: 256px;
  display: inline-block;
  z-index:15;
}
.dadosj {
  position: absolute;
  top: 257px;
  width: 194px;
  height: 75px;
  left: 139px;
  border: 1px solid white;;
  display: inline-block;
  z-index:14;
}

.editj{
position: absolute;
width: 17px;
height: 17px;
right: 98px;
top: 288px;
z-index: 14;
}
.trashj{
position: absolute;
width: 17px;
height: 17px;
right: 65px;
top: 288px;
z-index: 13;
}

.viewj{
position: absolute;
width: 17px;
height: 17px;
right: 31px;
top: 288px;
z-index: 12;
}
/* */

/* Dados Emma */
.emma {
  position: absolute;
  right: 478px;
  top: 391px;
  display: inline-block;
  z-index:11;
}
.dadose {
  position: absolute;
  top: 392px;
  width: 194px;
  height: 75px;
  left: 139px;
  border: 1px solid white;
  display: inline-block;
  z-index:10;
}
.edite{
position: absolute;
width: 17px;
height: 17px;
right: 98px;
top: 423px;
z-index: 14;
}
.trashe{
position: absolute;
width: 17px;
height: 17px;
right: 65px;
top: 423px;
z-index: 13;
}

.viewe{
position: absolute;
width: 17px;
height: 17px;
right: 31px;
top: 423px;
z-index: 12;
}

/* Dados Eve */
.eve {
  position: absolute;
  right: 478px;
  top: 526px;
  display: inline-block;
  z-index:11;
}
.dadosev {
  position: absolute;
  top: 527px;
  width: 194px;
  height: 75px;
  left: 139px;
  border: 1px solid white;;
  display: inline-block;
  z-index:10;
}


.editev{
position: absolute;
width: 17px;
height: 17px;
right: 98px;
top: 558px;
z-index: 14;
}
.trashev{
position: absolute;
width: 17px;
height: 17px;
right: 65px;
top: 558px;
z-index: 13;
}

.viewev{
position: absolute;
width: 17px;
height: 17px;
right: 31px;
top: 558px;
z-index: 12;
}

/* DADOS CHARLES */

.char {
  position: absolute;
  right: 478px;
  top: 661px;
  display: inline-block;
  z-index:11;
}
.dadosc {
  position: absolute;
  top: 662px;
  width: 194px;
  height: 75px;
  left: 139px;
  border: 1px solid white;
  display: inline-block;
  z-index:10;
}
.editc{
position: absolute;
width: 17px;
height: 17px;
right: 98px;
top: 693px;
z-index: 33;
}
.trashc{
position: absolute;
width: 17px;
height: 17px;
right: 65px;
top: 693px;
z-index: 13;
}

.viewc{
position: absolute;
width: 17px;
height: 17px;
right: 31px;
top: 693px;
z-index: 12;
}
</style>
