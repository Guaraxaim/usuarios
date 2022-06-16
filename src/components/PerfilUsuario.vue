<template>
  <div>

    <div class="group9">
        <div class="retpeq"></div>
        <div class="group8">
          <div class="group7"></div>
        
        </div>
        </div>

        

        <div class="ret2">
          <img v-bind:src="retImage" />
          <div class="ret3">
            <div class="ret_icons"></div>
            <div class="ret_perfil"></div>
          </div>
        </div>

      </div>



</template>

<script>
export default {
    name: "PerfilUsuario"
}
</script>

<style scoped>



.retpeq {
  position: relative;
  width: 4px;
  height: 20px;
  left: 0px;
  top: 20px;
  background: #000000;
  z-index: 10;
  display: flex;
}

.group9 {
  position: absolute;
  width: 592px;
  height: 120px;
  top: 208px;
  left: 352px;
  border: 1px solid #fff;;
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
  border: 1px solid #fff;
}




</style>