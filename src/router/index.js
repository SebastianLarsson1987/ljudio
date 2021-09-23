import { createRouter, createWebHashHistory } from 'vue-router'
import Queue from '/src/components/Queue.vue'
import PopularSongs from '/src/components/PopularSongs.vue'
import Search from '/src/components/Search.vue'
import Home from '/src/components/views/Home.vue'
import Result from '/src/components/Result.vue'
import NewResult from '/src/components/NewResult.vue'
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
    path: "/result",
    name: "Result",
    component: Result
  },
  
  {
    path: "/search",
    name: "Search",
    component:Search,
    children: [
      {
        path: "/newResult",
        name: "NewResult",
        component: NewResult,
        
      }

    ]
  },
  {
    path: "/",
    name: "Home",
    component:Home,
    children:[
      
    ]
  }
  
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
