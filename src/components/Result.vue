<template>
  <div>
    
        <div class="container table-responsive py-5">
          <table class="">
            <thead class="thead-dark">
              <tr>
                 <th scope="col">Artist</th>
                 <th scope="col">Låt</th>
                  <th scope="col">Queue</th>
              </tr>
            </thead>

            <tbody  v-for="item in song.content" :key="item.videoId">
                <tr >
                <td @click="playSong(item)"><p>{{item.album.name}}</p></td>
                <td @click="playSong(item)"><p>{{item.name}}</p></td>
                <td @click="addSongToQueue(item)"><i class="fas fa-plus-circle"></i></td>
           </tr>
            </tbody>
          </table>
        </div>
      
   
  </div>
</template>

<script>
  export default {
    
    computed:{
      song(){
        return this.$store.state.song
      }
    },
    methods:{
      playSong(id){
        window.player.loadVideoById(id)
        let playSong = {name: id.name, artist: id.artist, videoId:id.videoId}
        // let data = {name: id.name, artist: id.artist, id:id.videoId}
        let credentials = {name: id.name, artist: id.artist.name}
        this.$store.dispatch('playSong', playSong)
        this.$store.dispatch('currentSong', credentials)
        },
      addSongToQueue(id){
        let credentials = {videoId: id.videoId, name: id.name, artist: id.artist.name}
        
        this.$store.dispatch('addSongToQueue', credentials) 
      }
      },
      
    }
  
</script>

<style>
*{
  color:white;
}
table{
  height:10px;
  width:100%
}

tr:hover{
  background-color:black;
  opacity:0.5;
}


</style>