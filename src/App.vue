<template>
  <div>
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
  margin-top:-2vh !important; 
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
</style>