<template>
  <div class="footerContainer">
    <div class="footerButton">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/search"><i class="fas fa-search"></i></router-link>
      <router-link to="/queue"><i class="fas fa-music"></i></router-link>
      
      
    </div>
    <div class="footerText">
        <p>Home</p>
        <p>Search</p>
        <p>Queue</p>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>

.footerButton {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  width:100vw;
  
  margin:0;
}

i{
  font-size:5vh;
  color:white;
  margin-top: 1vh;;
  margin-bottom: 0;
 

}
.footerText{
  display: flex;
  justify-content: space-evenly;
  width:100vw;
  
}
.footerText>p{
  color:white;
  margin:0;
}
.footerContainer{
  display: flex;
  flex-direction: column;
  border-top: 1px solid grey;
  background-color:black;
  width:100vw;
  height: 12vh;
  justify-content:center;
}
</style>