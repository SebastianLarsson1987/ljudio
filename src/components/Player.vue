<template>
  <div>
     <div class="top">
       <h1>Ljudio</h1>
       <div class="nowPlaying">
         <p class="currentSong" v-if="!currentSong.length>=1"> Nu spelas: {{currentSong.name}}  {{currentSong.artist}}</p>
       </div>
        <div class="player-controls">
          <i class="fas fa-play-circle" @click="play()" ></i>
          <i class="fas fa-stop-circle" @click="stop()"></i>
          <i class="fas fa-pause-circle" @click="pause()"></i>
          <i class="fas fa-chevron-circle-left" @click="playLastSongPlayed(this.playedSongs[this.playedSongs.length - 1])"></i>
          <i class="fas fa-chevron-circle-right" @click="playNexSongInQueue(this.songQueue[0])"></i>
          <router-link to="/queue"><i class="fas fa-chevron-circle-down"></i></router-link>
       </div>
       <p v-if="songQueue.length>=1">{{songQueue}}</p>
       <p v-else>{{playedSongs}}</p>
      <div id="yt-player"></div>
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
  flex-direction: row;
  align-items: center;
  margin-bottom: 3vh;
  border-bottom: 1px solid black;
  justify-content:center;
  align-items: center;
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
.nowPlaying{
  width: 70%;
  display:flex;
  flex-direction: row;
  
}
.player-controls{
  margin:0;
  
}
</style>