<template>
  <div>
    <div>
      <Header/>
    </div>
      <router-view></router-view>
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
  background-color:black;
}
 .footer{
   position: fixed;
   bottom: 0;
 }

 div>h1{
   text-align: center;
   color:white;
 }
 .router-view{
   height:70vh;
 }
 

</style>