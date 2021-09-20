<template>
  <div>
     <div class="top">
        <div class="player-controls">
          <i class="fas fa-play-circle" @click="play()" ></i>
          <i class="fas fa-stop-circle" @click="stop()"></i>
          <i class="fas fa-pause-circle" @click="pause()"></i>
          <i class="fas fa-chevron-circle-left" @click="playLastSongPlayed(this.playedSongs[this.playedSongs.length - 1])"></i>
          <i class="fas fa-chevron-circle-right" @click="playNexSongInQueue(this.songQueue[0])"></i>
           <i class="fas fa-chevron-circle-down" ></i>
 
          
          
          <!-- <router-link to="/queue"><i class="fas fa-chevron-circle-down"></i></router-link> -->
       </div>
 



       <div class="nowPlaying">
         <p class="currentSong" v-if="!currentSong.length>=1"> {{currentSong.artist}}  {{currentSong.name}}</p>
       </div>
       
      <div id="yt-player"></div>
     </div>
  </div>
</template>

<script>




export default {
  ready(){
document.querySelector(".Click-here").on('click', function() {
  document.querySelector(".custom-model-main").addClass('model-open');
}); 
document.querySelector(".close-btn, .bg-overlay").click(function(){
  document.querySelector(".custom-model-main").removeClass('model-open');
});


  },
  
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
      this.emptySong()
    },
    emptySong(){
      this.$store.dispatch('emptyCurrentSong')
    },
    playNexSongInQueue(id){
      window.player.loadVideoById(id.videoId)
      this.$store.dispatch('playNextSongAndRemoveFromQueu', id)
      
    },
    playLastSongPlayed(id){
      window.player.loadVideoById(id.videoId)

    }
    
  },
  computed:{
    currentSong(){
      return this.$store.state.currentSong;
    },
    songQueue(){
      return this.$store.state.songQueue;
    },
    playedSongs(){
      return this.$store.state.playedSongs;
    },

  }
}
</script>
<style>

.top{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin:0;
  align-items: center;
  border-top:1px solid grey;
  width:100vw;
  height:12vh;
}
.top>h1{
  font-size:200%;
  margin:0 2vw 2vh 0;
}
i{
  font-size:200%;
  cursor:pointer;
  margin-left:1vw;
}
.currentSong{
  font-weight: bold;
}
.nowPlaying>p{
  color:white;
  text-align: center;
  
}
.player-controls{
  display:flex;
  justify-content:space-evenly;
  
}


</style>