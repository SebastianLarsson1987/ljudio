<template>
  <div class="headerTop">
        <i class="fas fa-arrow-left" @click="$router.go(-1)"></i>
          <h1>{{title}}</h1>
        <i class="fas fa-arrow-right" @click="$router.go(1)"></i>
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.state.title;
      },
      playedSongs(){
        return this.$store.state.playedSongs;
      }
    }
  }
</script>

<style>

.headerTop{
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  height: 7vh;
 
}
.headerTop>h1{
  margin-bottom:0;
  
}
i{
  margin:0 2vw 0 2vw;
}


</style>