<template>
  <div>
    <form @submit.prevent="welcome()">
      <div class="md-form mt-0">
      <label for="searchTerm">Enter your search</label>
      <input class="form-control" type="text" v-model="searchTerm">
      <button type="submit" class="searchButton">Search</button>
      </div>
    </form>
    <h3>{{searchTerm}}</h3>
    
    <Result/>
    
  </div>
</template>

<script>
import Result from '/src/components/Result.vue'
  export default {
    components:{
      Result
    },
    data(){
      return{
        searchTerm: ""
      }
    },
    methods:{
      welcome(){
        this.$store.dispatch("fetchSong", this.searchTerm);
      }
    },
    helloWorld(){
      this.$store.dispatch("hello")
    },
      
    // computed:{
    //   song(){
    //     return this.$store.state.song
    //   }
    // }
    
  
  }
</script>

<style lang="scss" scoped>

</style>