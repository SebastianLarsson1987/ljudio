import { createRouter, createWebHashHistory } from 'vue-router'
import Queue from '/src/components/Queue.vue'
import PopularSongs from '/src/components/PopularSongs.vue'
import Search from '/src/components/Search.vue'

const routes = [
  {
    path:"/queue",
    Name: "Queue",
    component:Queue
  },
  {
    path: "/popular-songs",
    name: "PopularSongs",
    component:PopularSongs
  },
  {
    path: "/search",
    name: "Search",
    component:Search
  }
  
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
