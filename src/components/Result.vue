<template>
  <div>
      <div class="artistInfo">
         {{artist.description}}

      </div>
        <div class="container table-responsive py-2">
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
                <td @click="playSong(item)"><p>{{item.artist.name}}</p></td>
                <td @click="playSong(item)"><p>{{item.name}}</p></td>
                <td @click="addSongToQueue(item)" class="addSongToQueue"><i class="fas fa-plus-circle"></i></td>
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
      },
      artist(){
        return this.$store.state.artist
      }
    },
    methods:{
      playSong(id){
        window.player.loadVideoById(id)
        let credentials = {name: id.name, artist: id.artist.name, videoId:id.videoId}
        this.$store.dispatch('currentSong', credentials)
        this.$store.dispatch('addSong', credentials)
        },
      addSongToQueue(id){
        let credentials = {name: id.name, artist: id.artist.name, videoId:id.videoId}
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
.fa-plus-circle{
  font-size:150%;
}
.addSongToQueue{
  text-align:center;
}
table>thead>tr>th:nth-child(3){
  text-align:center;
}
@media (min-width:1024px){
  p{
    font-size: 200%;
  }
}
</style>