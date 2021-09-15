<template>
  <div>
    <h1>Resultaten ska komma här</h1>
    ---------
    <section v-for="item in song.content" :key="item.videoId">
        <table>
            <thead>
          <tr>
            <td>Artist</td>
            <td>Låt</td>
            <td>videoId</td>
            <td>knappar</td>
          </tr>
            </thead>
          <tr>
            <td>{{item.album.name}}</td>
            <td> {{item.name}}</td>
            <td> {{item.videoId}}</td>
            <td><button @click="playSong(item)"><i class="fas fa-play"></i></button></td>
          </tr>
        </table>

      
    </section>
    ---------
    <button @click="helloWorld()">tryck mig</button>
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
        console.log(id)
        window.player.loadVideoById(id)
      }
      }
    }
  
</script>

<style>
body{
  
}

</style>