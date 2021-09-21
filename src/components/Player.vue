<template>
  <div>
     <div class="top">
        <div class="player-controls">
          <i class="fas fa-play-circle" @click="play()" ></i>
          <i class="fas fa-stop-circle" @click="stop()"></i>
          <i class="fas fa-pause-circle" @click="pause()"></i>
          <i class="fas fa-chevron-circle-left" @click="playLastSongPlayed(this.playedSongs[this.playedSongs.length - 1])"></i>
          <i class="fas fa-chevron-circle-right" @click="playNexSongInQueue(this.songQueue[0])"></i>
          <i class="fas fa-chevron-circle-down" data-toggle="modal" data-target="#myModal"></i>
       </div>
        
        <!-- The Modal -->
        <div class="modal" id="myModal">
          <div class="modal-dialog modal-dialog-centered" >
            <div class="modal-content">

              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Share your favorite music</h4>
                
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <h4>Link to song </h4>
                <p>{{currentSong.artist}} - {{currentSong.name}}</p>
                <a :href="songUrl+currentSong.videoId" target="_blank">{{songUrl + currentSong.videoId}}</a>
               
                <h4>Artist</h4>
                <a :href="artistUrl+currentSong.artist" target="_blank">{{currentSong.artist}}</a>
                <!-- <p>{{currentSong.artist}}</p> -->

              </div>

              <!-- Modal footer
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div> -->

            </div>
          </div>
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
  data(){
    return{
      songUrl: "https://www.youtube.com/watch?v=",
      artistUrl: "https://www.youtube.com/results?search_query="
    }
  },
  methods:{
    play(id){
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
      this.$store.dispatch('playLastSong')
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
.modal-backdrop.show{
  z-index:-1;
  position:fixed;
  bottom:0;
}
.modal-dialog{
 align-items:center;
 color:black;
}
h4{
  color:black;
}
.modal-body>p{
  color:black;
}
.top{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin:0;
  align-items: center;
  border-top:1px solid grey;
  width:100vw;
  height:12vh;
  background-color:black;
}
.player-controls>i{
  margin-top: 1vh;
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
  background-color:black;
}


</style>