<template>
  <div class="headerTop">
        <i class="fas fa-arrow-left" @click="$router.go(-1)"></i>
          <h1 class="headerTitle">{{title}}</h1>
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

@import url('https://fonts.googleapis.com/css2?family=Grechen+Fuemen&family=Permanent+Marker&display=swap');

.headerTop{
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  height: 7vh;
  align-items: center;
}
.headerTop>h1{
  margin-bottom:0;
  
}
i{
  margin:0 2vw 0 2vw;
}
.headerTitle{
  font-family: "Permanent Marker";
  font-size:250%;
}

</style>