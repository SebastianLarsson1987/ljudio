<template>
  <div class="main">
    <div class="artist1">
      <img src="https://geo-media.beatport.com/image_size/500x500/8c6899ae-76f5-4ff4-a1b2-008fd9ad1532.jpg" @click.prevent="searchArtist('Andrew Bayer')">
      <h1>Andrew Bayer</h1>
    </div>
    <div class="artist2">
      <img src="https://lh3.googleusercontent.com/proxy/gsFr-WNqWheCYmAIjClzAMoJqmU8TxXw_nWH3dx9Y9dJx2QiEhyTfyHQwUC1eXPt8Aef77kg4LawB_MnPBeo285aEMf_t5f13swxQOq6Lqp-aTXPTRHudFUCuuEmr0l1TaQppVO9LXB5RTUz" @click.prevent="searchArtist('Younger Brother')">
      <h1>Younger Brother</h1>
    </div>
    <div class="artist3">
      <img src="https://blogs-images.forbes.com/lisakocay/files/2018/01/AB-Common-Ground-Press-Pic_preview-1200x675.jpeg" @click.prevent="searchArtist('Above & Beyond')">
      <h1>Above & Beyond</h1>
    </div>
    <div class="artist4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Eli_%26_Fur_%28cropped%29.jpg" @click.prevent="searchArtist('Elif & Fur')">
      <h1>Eli & Fur</h1>
    </div>
    <div class="artist5">
      
    </div>
    <div class="artist6">
      
    </div>  
  </div>
</template>


<script>
import router from '../router'
  export default {
    methods:{
      searchArtist(item){
         console.log(item)
         this.$store.dispatch('fetchSong', item)
         router.push("/result")
       }
    }
  }
  
</script>

<style>
.main{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 1vw;
  row-gap:1vh;
  height: 100vh;
}
img{
  height:100%;
  width:100%;
  margin:0 1vw 0 1vw;
}
.artist1{
  grid-row: 1/2;
  grid-column:1/2;
  position: relative;
}

.artist1>h1{
  position: absolute;
  bottom:0;
  
}
.artist2{
 grid-row: 1/2;
  grid-column:2/3;
  position: relative;
} 
.artist2>h1{
    position: absolute;
  bottom:0;
  
}
.artist3{
  grid-row:2/3;
  grid-column:1/3;
  position: relative;
}
.artist3>h1{
    position: absolute;
  bottom:0;
  
}
.artist4{
  grid-row:3/4;
  grid-column:1/3;
  position: relative;
}
.artist4>h1{
    position: absolute;
    bottom:0;
  
}
</style>