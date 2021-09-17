
<template>
    <h1>New Result</h1>
  <div class="container">

    <div class="artist">
      <h1>Popular artists</h1>
       <div v-for="item in SongArtistAlbum.content" :key="item.videoId" class="test">
         <div v-if="item.type=='artist'" class="artistResult" @click="searchArtist(item)" >
            <img :src="item.thumbnails[0].url" class="artist-image">
            <p >{{item.name}}</p>
         </div>
       </div>
    </div>

    <div class="songs">
      <h1>Most popular songs</h1>
      <table>
      <tbody v-for="item in SongArtistAlbum.content" :key="item.videoId" class="PlaySongAddToQueue">
        <td  @click="playSong(item)"> <p v-if="item.type=='song'" >{{item.artist.name}} {{item.name}}  </p></td>
        <td><i v-if="item.type=='song'" @click="addSongToQueue(item)" class="fas fa-plus-circle"></i></td>
         
       </tbody>
       </table>
    </div>

    <div class="playlists-albums">
      <h1>Popular playlists and albums</h1>
       <div v-for="item in SongArtistAlbum.content" :key="item.videoId" >
         <p v-if="item.type.includes('playlist') || item.type=='album'">{{item.artist}} {{item.title}}{{item.name}}</p>
       </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    methods:{
       playSong(id){
         window.player.loadVideoById(id)
         let credentials = {name: id.name, artist: id.artist.name}
        this.$store.dispatch('playSong', credentials)
        this.$store.dispatch('currentSong', credentials)
       },
       addSongToQueue(item){
         let credentials = {name: item.name, artist: item.artist.name}
         this.$store.dispatch('addSongToQueue', credentials) 
       },
       searchArtist(item){
         let credentials = {name:item.name}
         console.log(credentials);
         this.$store.dispatch('fetchSong', credentials)
          
       }


       
    },
      computed:{
      SongArtistAlbum(){
        return this.$store.state.SongArtistAlbum
      }
    },
    
    
  }
</script>

<style>


.container{
  display:grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 50% 50%;

}
.artists{
  grid-column: 1/2;
  grid-row: 1/2;
  
}
.artistResult{
  width:50%;
  text-align:center;
  column-count:2;
  
}
.artist-image{
  height:7vh;
  width:7vw;
}
.songs{
  grid-column: 2/3;
  grid-row: 1/2;
}
.playlists-albums{
  grid-row:2/3;
  grid-column: 1/3;
  text-align: center;
}
.songs>div>p{
  color:black;
}
.songs>div>p:hover{
background-color:black;
  opacity:0.5;
  color:white;
}
i{
  float:right;
}



</style>

