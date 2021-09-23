<template>
  <div>
    <h1>Search History</h1>
    <div class="searchHistory">
      <p v-for="(search, i) in searches" :key="i" @click.prevent="fethArtistFromSearchHistory(search)">{{search}}</p>
    </div>
  </div>
</template>

<script>
import router from '../router'
  export default {
    data(){
     return{

     }
    },
    methods:{
      fethArtistFromSearchHistory(item){
        console.log(item)
        this.$store.dispatch('fetchSong', item)
         router.push("/result")
      }
    },
    computed:{
      searches(){
        return this.$store.state.searches;
      }
    }
    
  }
</script>

<style>
p{
  color:white;
  margin-left:2vw;
}
.searchHistory{
  height:auto;
  width:100vw;
  column-count:3;
}
</style>