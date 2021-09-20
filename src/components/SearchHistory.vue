<template>
  <div>
    <h1>Search History</h1>
    <p v-for="(search, i) in searchHistory" :key="i">{{search}}</p>
  </div>
</template>

<script>
  export default {
    data(){
     return{

     }
    },
    computed:{
      searchHistory(){
        return this.$store.state.searchHistory;
      }
    }
    
  }
</script>

<style>
p{
  color:white;
}
</style>