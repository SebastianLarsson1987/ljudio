import { createStore } from 'vuex'

export default createStore({
  state: {
    song:[]
  },
  mutations: {
    updateSong(state, data){
        state.song = data;
        console.log(this.song)
    }
  },
  actions: {
    async fetchSong({commit}, searchString){
        console.log(searchString);
      let response = await fetch("https://yt-music-api.herokuapp.com/api/yt/songs/" +searchString);
      var data = await response.json();
      console.log(data)
      
      commit('updateSong', data)
        
    }
  },
  hello(){
    alert("funkar det")
  },
  modules: {
  }
})
