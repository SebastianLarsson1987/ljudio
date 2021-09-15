<template>
  <div>
   
  <Player/>
 
   

  </div>
  
  <Search/>
  <Result/>
</template>

<script>
import Player from "/src/components/Player.vue"
import Search from "/src/components/Search.vue"
import Result from "/src/components/Result.vue"

export default{
  components:{
    Player,
    Search,
    Result
  },
  created(){
    this.$store.dispatch('fetchArtist')
    this.$store.dispatch('fetchSong')
    this.$store.dispatch('welcome')
  }
}

</script>

<style>

body{
  margin:0;
  padding: 0;
}
</style>