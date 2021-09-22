import { createStore } from 'vuex'


export default createStore({
  state: {
    currentSong:[],
    song:[],
    songQueue:[],
    playedSongs:[],
    SongArtistAlbum:[],
    title: "Ljudio",
    searches:[],
    artist:[]
  },
  mutations: {
    setArtist(state, data){
      state.artist = data
    },
    addToSearches(state, data){
      state.searches.push(data)
    },
    updateSong(state, data){
        state.song = data;
    },
    updateCurrentSong(state, value){
      state.currentSong = value
      state.playedSongs.push(value)
    },
    addSongToQueue(state, data){
      state.songQueue.push(data)
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
      state.playedSongs = data
    },
    removeSongFromQue(state, data){
        let number = state.songQueue.indexOf(data) 
        state.songQueue.splice(number, 1)
    },
    removeFromLastPlayed(state){
      state.playedSongs.pop()
    },
    emptyTheQueue(state){
      state.songQueue = 0
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
    async fetchArtist({commit}, browseId){
      let response = await fetch("https://yt-music-api.herokuapp.com/api/yt/artist/" +browseId)
      let data = await response.json()
      console.log(data)
      commit('setArtist', data)
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
    addSong({commit}, data ){
      commit('addSongToPlayedsongs', data)
    },
    addSearchToSearches({commit} ,data){
      commit('addToSearches', data)
    },
    removeQueuedSong({commit}, data){
      commit('removeSongFromQue', data)
    },
    playLastSong({commit}){
      commit('removeFromLastPlayed')
    },
    emptyQueue({commit}){

      commit('emptyTheQueue')
    }
  },
    

  modules: {
  }
})
