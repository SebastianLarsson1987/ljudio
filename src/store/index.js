import { createStore } from 'vuex'


export default createStore({
  state: {
    currentSong:[],
    song:[],
    songQueue:[],
    playedSongs:[],
    SongArtistAlbum:[],
    title: "Ljudia",
    searches:[]
  },
  mutations: {
    addToSearches(state, data){
      state.searches = data
    },
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
    },
    updateAllSongArtistAlbum(state, data){
      state.SongArtistAlbum = data
      
    },
    addSongToPlayedsongs(state, data){
      state.playedSongs = data.song
      console.log(data)
    },
    removeSongFromQue(state, data){
        let number = state.songQueue.indexOf(data) 
        state.songQueue.splice(number, 1)
      }
  },
  actions: {
    async fetchSong({commit}, searchString){
      console.log(searchString)
      let response = await fetch("https://yt-music-api.herokuapp.com/api/yt/songs/" +searchString);
      let data = await response.json();
      commit('updateSong', data)
    },
    async fetchAll({commit}, searchTerm){
        let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/search/' +searchTerm);
        let data = await response.json()
        
        commit('updateAllSongArtistAlbum', data )
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
    playSong(data ){
      console.log("detta är senaste låten att spelas")
      console.log(data)
    },
    addSearchToSearches({commit} ,data){
      commit('addToSearches', data)
    },
    removeQueuedSong({commit}, data){
      
      commit('removeSongFromQue', data)
    }
  },
    

  modules: {
  }
})
