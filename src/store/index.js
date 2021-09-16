import { createStore } from 'vuex'

export default createStore({
  state: {
    currentSong:[],
    song:[],
    songQueue:[],
    playedSongs:[]
  },
  mutations: {
    updateSong(state, data){
        state.song = data;
    },
    updateCurrentSong(state, value){
      
      state.currentSong = value
    },
    addSongToQueue(state, data){
      state.songQueue.push(data)
      //lägg till i arrayen
    },
    currentSongEmpty(state){
      state.currentSong =0
    },
    updatePlaylist(state){
      let song = state.songQueue.shift()
      state.playedSongs.push(song)
    }
  },
  actions: {
    async fetchSong({commit}, searchString){
      let response = await fetch("https://yt-music-api.herokuapp.com/api/yt/songs/" +searchString);
      var data = await response.json();
      
      commit('updateSong', data)
    },

    currentSong({commit}, credentials){
      
      commit('updateCurrentSong', credentials)
    },
    addSongToQueue({commit}, credentials){
     
      commit('addSongToQueue', credentials)
    },
    emptyCurrentSong({commit}){
      commit('currentSongEmpty')
    },
    playNextSongAndRemoveFromQueu({commit}, data){
      console.log(data)
      commit('updatePlaylist')
    },
    playSong(data){
      console.log(data)

    }

  },
    

  modules: {
  }
})
