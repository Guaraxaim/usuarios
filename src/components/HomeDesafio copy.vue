<template>

  <div class="home">
    <!-- <h1>{{ name}}</h1> -->
    <div class="group15">
      <button>Novo Usuário</button>
      <div class="group1">
        <p class="titulo">Usuários</p>
      </div>

      <div class="group9">
        <div class="retpeq"></div>
        <div class="group8">
          <div class="group7">
            <img class="george" src="../assets/img/george.svg" />
            <div class="dados">
              <p class="num">1#</p>
              <p class="nome">George Bluth</p>
              <p class="email">george.bluth@reqres.in</p>
            </div>
            <div class="icones"></div>
              <img src="../assets/img/edit.svg" alt="" class="edit">
              <img src="../assets/img/trash.svg" alt="" class="trash">
              <img src="../assets/img/view.svg" alt="" class="view">
          </div>
        </div>
        <div class="ret1">
          <img v-bind:src="retPeq" />
        </div>
        <div class="ret2">
          <img v-bind:src="retImage" />
          <div class="ret3">
            <div class="ret_icons"></div>
            <div class="ret_perfil"></div>
          </div>
        </div>
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home {
  position: relative;
  width: 1280px;
  height: 1102px;
  background: #ffffff;
  border: 1px solid green;
  margin: 0 auto;
}
/*.group14 {
width: 185px;
height: 55px;
left: 751px;
top: 99px;
} */

.group15 {
  position: relative;
  height: 761px;
  width: 592px;
  margin: 0 auto;
  top: 96px;
  border: 2px solid red;
}
/*.retpeq {
  position: relative;
  width: 4px;
  height: 20px;
  left: 0px;
  top: 20px;
  background: #000000;
  z-index: 10;
  display: flex;
}
*/
.group1 {
  position: absolute;
  width: 229px;
  height: 61px;
  top: 0px;
  border: 1px solid yellow;
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
  border: 1px solid blue;
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
/*.group9 {
  position: absolute;
  width: 592px;
  height: 120px;
  top: 98px;
  border: 1px solid black;
}

.group8 {
  position: relative;
  width: 588px;
  height: 120px;
  left: 4px;
  top: -20px;
  background: #f7f7f7;
  border-radius: 5px;
}
.group7 {
  position: relative;
  align-items: center;
  width: 528px;
  height: 80px;
  margin: 0 auto;
  top: 15%;
  border: 1px solid purple;
} */

.george {
  position: relative;
  right: 224px;
  display: inline-block;
}
.dados {
  position: absolute;
  top: 2px;
  width: 194px;
  height: 75px;
  right: 224px;
  border: 1px solid orange;
  display: inline-block;
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

/*.icones {
position:relative;
right: 100px;
width: 85px;
height: 17px;
border: 1px solid #f7ab07;
color:#f7ab07;
}*/ 

.edit{
position: absolute;
width: 17px;
height: 17px;
right: 98px;
bottom: 33px;
}
.trash{
position: absolute;
width: 17px;
height: 17px;
right: 65px;
bottom: 33px;
}

.view{
position: absolute;
width: 17px;
height: 17px;
right: 31px;
bottom: 33px;
}
</style>
