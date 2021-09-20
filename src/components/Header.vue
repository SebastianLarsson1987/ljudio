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
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  margin-bottom:0;
  flex-grow: 1
}


</style>