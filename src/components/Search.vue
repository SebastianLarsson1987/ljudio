<template>
  <div>
    <form @submit.prevent="fetchSong()">
      <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="searchTerm">
          <div class="input-group-append">
            <button type="submit" class="btn btn-outline-secondary" >Search</button>
         </div>
    </div>
    </form>
    
      <router-view></router-view>
  </div>
</template>

<script>
import router from "../router";


  export default {
    components:{
    },
    data(){
      return{
        searchTerm: ""
      }
    },
    methods:{
      fetchSong(){
        this.$store.dispatch("fetchAll", this.searchTerm);
        this.$store.dispatch('addSearchToSearches', this.searchTerm)
        router.push("/newResult")
      }
    },
    computed:{
      currentSong(){
        return this.$store.state.currentSong;
      },
      playedSongs(){
        return this.$store.state.playedSongs;
      }
    }
  
  }
</script>

<style>
.input-group{
  margin: 0 1vw 0 1vw;
}
.form-control{
  margin-left:2vw;
}
.btn-outline-secondary{
  margin-right: 2vw;
}
</style>