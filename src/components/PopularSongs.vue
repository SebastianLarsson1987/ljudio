<template>
    <h1>Most played artists this week</h1>
  <div class="main">
    <div class="artist1">
      <img src="https://geo-media.beatport.com/image_size/500x500/8c6899ae-76f5-4ff4-a1b2-008fd9ad1532.jpg" @click.prevent="fetchArtistById('Andrew Bayer')">
      <h1>Andrew Bayer</h1>
    </div>
    <div class="artist2">
      <img src="https://alchetron.com/cdn/younger-brother-481bae3e-09f2-4829-9619-4c1386a1de8-resize-750.jpeg" @click.prevent="fetchArtistById('Younger Brother')">
      <h1>Younger Brother</h1>
    </div>
    <div class="artist3">
      <img src="https://blogs-images.forbes.com/lisakocay/files/2018/01/AB-Common-Ground-Press-Pic_preview-1200x675.jpeg" @click.prevent="fetchArtistById('Above & Beyond')">
      <h1>Above & Beyond</h1>
    </div>
    <div class="artist4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Eli_%26_Fur_%28cropped%29.jpg" @click.prevent="fetchArtistById('Eli & Fur')">
      <h1>Eli & Fur</h1>
    </div>
   
   
    
  </div>
</template>


<script>
import router from '../router'
  export default {
    methods:{
      fetchArtistById(item){
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
  left:1vw;
  
}
.artist2{
 grid-row: 1/2;
  grid-column:2/3;
  position: relative;
} 
.artist2>h1{
    position: absolute;
  bottom:0;
  left:1vw;
  
}
.artist3{
  grid-row:2/3;
  grid-column:1/3;
  position: relative;
}
.artist3>h1{
    position: absolute;
  bottom:0;
  left:1vw;
  
}
.artist4{
  grid-row:3/4;
  grid-column:1/3;
  position: relative;
}
.artist4>h1{
    position: absolute;
    top:0;
    left:1vw;
    color:lightgray;
}
@media (max-width: 673px)  { 
  .main{
    display: flex;
    flex-direction: column;
    
  }
}
@media (max-width: 493px)  { 
    .main{
    margin-bottom: 60vh;
  }
  
}
</style>