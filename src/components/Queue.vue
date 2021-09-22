<template>
  <div>
    <div class="titel-thrashcan">
    <h1>Queued songs</h1>
    <th><i class="fas fa-trash-alt" @click.prevent="emptyQueue()"></i></th>
    </div>
    
    <div class="container table-responsive py-2">
          <table class="">
            <thead class="thead-dark">
              <tr>
                 <th scope="col">Artist</th>
                 <th scope="col">Track</th>
                 <th scope="col1">+/-</th>
                 <th scope="col">Remove</th>
              </tr>
            </thead>

            <tbody  v-for="item in songQueue" :key="item.videoId">
                <tr >
                <td @click="playSong(item)"><p>{{item.artist}}</p></td>
                <td @click="playSong(item)"><p>{{item.name}}</p></td>
                <td><i class="fas fa-arrow-up" @click.prevent="moveUp(item)"></i><i class="fas fa-arrow-down" @click.prevent="moveDown(item)"></i></td>
                <td @click="removeSongFromQueue(item)" class="removeFromQueue"><i class="fas fa-minus-circle"></i></td>
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
      },
      moveUp(item){
        let number = this.songQueue.indexOf(item)
        this.songQueue.splice(number, 1)
        this.songQueue.splice(number-1, 0, item)
      },
      moveDown(item){
       let number = this.songQueue.indexOf(item)
       this.songQueue.splice(number, 1)
       this.songQueue.splice(number+1, 0, item)
      },
      emptyQueue(){
        this.$store.dispatch("emptyQueue")
      }
    },
  computed:{
    songQueue(){
      return this.$store.state.songQueue;
    }
  },
 
  
  }
</script>

<style scoped>
table{
  border:0;
}

i{
  font-size:150%;
}
.removeFromQueue{
  text-align:center;
}

table>thead>tr>th>i{
  font-size: 50%;
}
.titel-thrashcan{
  display:flex;
  align-items:center;
  justify-content:center;
}
.titel-thrashcan>h1{
  flex-grow: 1
}

</style>