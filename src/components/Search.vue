<template>
  <div>
    <form @submit.prevent="welcome()">
      <label for="searchTerm">Enter your search</label>
      <input class="u-full-width" type="text" v-model="searchTerm">
      <button type="submit">Search</button>
    </form>
    <h3>{{searchTerm}}</h3>
    
    <button @click.prevent="helloWorld()">Tryck mig</button>
  </div>
</template>

<script>
  export default {
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