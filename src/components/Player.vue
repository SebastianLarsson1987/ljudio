<template>
  <div>
     
     <div class="top">
       <h1>Ljudio</h1>
      <div id="yt-player"></div>
       <div class="player-controls">
          <i class="fas fa-play-circle" @click="play()" ></i>
          <i class="fas fa-stop-circle" @click="stop()"></i>
          <i class="fas fa-pause-circle" @click="pause()"></i>
          <i class="fas fa-chevron-circle-right"></i>
       </div>

     </div>
  </div>
</template>

<script>
export default {
  
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    stop(){
      window.player.stopVideo()
    },
  }
}
</script>
<style>

.top{
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3vh;
  border-bottom: 1px solid black;
  justify-content: space-around
}
.top>h1{
  font-size:200%;
  margin:0 0 2vh 0;
  
  
}
i{
  font-size:200%;
  cursor:pointer;
}
</style>