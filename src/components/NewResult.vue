
<template>
  <div class="resultContainer">
    <router-view>  </router-view>
      <h1>Related Artists</h1>
    <div class="artist">
       <div v-for="item in SongArtistAlbum.content" :key="item.videoId" class="test">
         <div v-if="item.type=='artist'" class="artistResult" >
            <img :src="item.thumbnails[1].url" class="artist-image" @click.prevent="searchArtist(item.name)">
            <p @click="fetchArtistInfo(item)" >{{item.name}}</p>
            
         </div>
       </div>
    </div>
    
    <div class="songs">
      <h1>Most popular songs</h1>
      <table>
      <tbody v-for="item in SongArtistAlbum.content" :key="item.videoId" class="PlaySongAddToQueue">
        <td  @click="playSong(item)"> <p v-if="item.type=='song'" class="songResult" >{{item.artist.name}} {{item.name}}  </p></td>
        <td><i v-if="item.type=='song'" @click="addSongToQueue(item)" class="fas fa-plus-circle"></i></td>
         
       </tbody>
       </table>
    </div>

     <div class="playlists-albums">
      <h1>Popular playlists and albums</h1>
       <div v-for="item in SongArtistAlbum.content" :key="item.videoId" >
         
         <p v-if="item.type==='album'" @click="loadPlayList(item)" class="albumResult">{{item.artist}} {{item.title}}{{item.name}}
           <img :src="item.thumbnails[3].url" class="albumImage">
         </p>

       </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
  export default {
    methods:{
       playSong(id){
        window.player.loadVideoById(id)
        let credentials = {name: id.name, artist: id.artist.name, videoId:id.videoId}
        this.$store.dispatch('currentSong', credentials)
        this.$store.dispatch('addSong', credentials)
       },
       addSongToQueue(item){
         let credentials = {name: item.name, artist: item.artist.name}
         this.$store.dispatch('addSongToQueue', credentials) 
       },
       searchArtist(item){
         
         this.$store.dispatch('fetchSong', item)
         router.push("/result")
       },
       fetchArtistInfo(item){
          console.log(item.browseId)
          this.$store.dispatch('fetchArtistInfo', item.browseId)
       },
       loadPlayList(playlistId){
         let credentials = {name: playlistId.name, artist: playlistId.artist, playlistId:playlistId.playlistId}
         console.log(credentials)
         window.player.loadPlaylist({list: credentials.playlistId, index: 0, startSeconds: 0,suggestedQuality: "small"});
       }
    },
      computed:{
      SongArtistAlbum(){
        return this.$store.state.SongArtistAlbum
      },
      setArtistInfo(){
        return this.$store.state.artistInfo
      }
    },
    
    
  }
</script>

<style>
.albumResult{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.albumImage{
  width:20%;
  
}
.artist{
  column-count:2;
}
.artist>div{
  margin-left: 5vw;
  text-align: center;
}
.resultContainer{
  margin-bottom:25vh;
}
.artist-image{
  padding-right:2vw;
  margin:0;
}
.songResult{
  /* margin-left:2vw; */
  margin: 0 0 0 2vw;
}
@media (min-width:560px){
  .artist{
   column-count:2
  }
  .artist-image{
    width:75%
  }
}
@media (min-width:1024px){
  p{
    font-size: 200%;
  }
}
</style>

