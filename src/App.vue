<template>
  <div>
    <h1>Ljudio</h1>

    
    <Player/>
    <NewSearch></NewSearch>
    <div>
      <NewResult></NewResult>
    <router-view/>
    </div>

    
    <!-- <Search/> -->
   
    
    <aside>
      <router-link to="/queue">Queue</router-link>
      <router-link to="/popular-songs">Popular Songs</router-link>
      <router-link to="/search">Search</router-link>
   </aside>
  </div>
  
</template>

<script>
import Player from "/src/components/Player.vue"
import NewSearch from "/src/components/NewSearch.vue"
import NewResult from "./components/NewResult.vue"

export default{
  components:{
    Player,
    NewSearch,
    NewResult
    
  },
  created(){
    
  }
}

</script>

<style>
aside{
  position:fixed;
  top: 40vh;
  height:50vh;
  width:5vw;
  background-color:black;
  border-radius:0 20px 20px 0;
  
}
aside>p{
  color:white;
}
body{
  margin:0;
  padding: 0;
}
</style>