<template>
  <div>
    <h1>New Search</h1>
    <form @submit.prevent="searchAll()">
      <div class="md-form mt-0">
        <label for="searchTerm">Enter you"r search</label>
        <input class="form-control" type="text" v-model="searchTerm">
        <button type="submit">search</button>
      </div>
    </form>
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
      searchAll(){
        this.$store.dispatch('fetchAll', this.searchTerm)
      }
    },
    
    
  }
</script>

<style lang="scss" scoped>

</style>