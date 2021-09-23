<template>
  <div class="home">
    <div class="header">
      <Header/>
    </div>
    
      <div class="router">

       <router-view></router-view>

      </div>
    <div class="footer">
      <Player/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Player from './components/Player.vue'
import Header from './components/Header.vue'

export default{

  data(){
    return{
    }
  },

  components:{
    Footer,
    Player,
    Header,
  },
  created(){
    
  }
}

</script>

<style>
body{
  margin-top:-4vh !important;
}
 .footer{
   position: fixed;
   bottom: 0;
 }

 div>h1{
   text-align: center;
   color:white;
 }
 .router{
   width:100vw;
   margin-bottom: 24vh;
 }
.home{
  width:100vw;
}
@media (min-width: 1024px)  { 
  .router{
    margin-bottom:40vh;
  }
 
}
@media (max-width: 673px)  { 
  .router{
    margin-bottom:0vh;
    
  }
}
@media (min-width: 1200px)  { 
  .router{
    margin-bottom:40vh;
  }
 
}
</style>