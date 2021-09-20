
<template>
  <div>
    <router-view>  </router-view>
    <div class="artist">
       <div v-for="item in SongArtistAlbum.content" :key="item.videoId" class="test">
         <div v-if="item.type=='artist'" class="artistResult" >
            <img :src="item.thumbnails[0].url" class="artist-image" @click.prevent="searchArtist(item.name)">
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
import router from '../router'
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
         console.log(item)
         this.$store.dispatch('fetchSong', item)
         router.push("/result")
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

.artist{
  column-count:2;
}
.artist>div{
  margin-left: 5vw;
  text-align: center;
}


</style>

