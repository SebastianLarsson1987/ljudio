<template>
  <div>
    <h1>Här är din kö</h1>
    <div class="container table-responsive py-5">
          <table class="table table-bordered table hoover">
            <thead class="thead-dark">
              <tr>
                 <th scope="col">Artist</th>
                 <th scope="col">Låt</th>
                  <th scope="col">VideoID</th>
                  <th scope="col">Lägg till i kö</th>
              </tr>
            </thead>

            <tbody  v-for="item in songQueue" :key="item.videoId">
                <tr >
                <td @click="playSong(item)"><p>{{item.artist}}</p></td>
                <td @click="playSong(item)"><p>{{item.name}}</p></td>
                <td><p>{{item.videoId}}</p></td>
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
    songQueue(){
      return this.$store.state.songQueue;
    }
  }
  
  }
</script>

<style lang="scss" scoped>

</style>