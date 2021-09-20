<template>
  <div>
    <h1>Queued songs</h1>
    <div class="container table-responsive py-5">
          <table class="">
            <thead class="thead-dark">
              <tr>
                 <th scope="col">Artist</th>
                 <th scope="col">Låt</th>
                  <th scope="col">Remove</th>
              </tr>
            </thead>

            <tbody  v-for="item in songQueue" :key="item.videoId">
                <tr >
                <td @click="playSong(item)"><p>{{item.artist}}</p></td>
                <td @click="playSong(item)"><p>{{item.name}}</p></td>
                <td @click="removeSongFromQueue(item)"><i class="fas fa-minus-circle"></i></td>
           </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
  export default {
    methods:{
      removeSongFromQueue(item){
       this.$store.dispatch("removeQueuedSong", item)
      }
    },
  computed:{
    songQueue(){
      return this.$store.state.songQueue;
    }
  },
 
  
  }
</script>

<style>
table{
  border:0;
}


</style>