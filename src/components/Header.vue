<template>
  <div class="headerTop">
    
        <i class="fas fa-arrow-left"></i>
        <i class="fas fa-arrow-right"></i>

 
    <h1>{{title}}</h1>

 
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.state.title;
      }
    }
  }
</script>

<style>

.headerTop{
  border-bottom: 1px solid grey;
}


</style>