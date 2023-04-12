import {RouteObject,Navigate} from 'react-router-dom'
import React,{lazy} from 'react'

const Album=lazy(()=>import('@/views/discover/c-views/album'))
const Artist=lazy(()=>import('@/views/discover/c-views/artist'))
const Djradio=lazy(()=>import('@/views/discover/c-views/djradio'))
const Songs=lazy(()=>import('@/views/discover/c-views/songs'))
const Recommend=lazy(()=>import('@/views/discover/c-views/recommend'))
const Ranking=lazy(()=>import('@/views/discover/c-views/ranking'))
const Discover=lazy(()=>import('@/views/discover'))
const Download=lazy(()=>import('@/views/download'))
const Mine=lazy(()=>import('@/views/mine'))
const Focus=lazy(()=>import('@/views/focus'))
const routes:RouteObject[]=[
  {
    path:'/',
    element:<Navigate to='/discover'></Navigate>
  },
  {
    path:'/discover',
    element:<Discover />,
    children:[
      {
        path:'/discover',
        element:<Navigate to='/discover/recommend'></Navigate>
      },
      {
        path:'/discover/recommend',
        element:<Recommend></Recommend>
      },
      {
        path:'/discover/ranking',
        element:<Ranking></Ranking>
      },
      {
        path:'/discover/djradio',
        element:<Djradio></Djradio>
      },
      {
        path:'/discover/songs',
        element:<Songs></Songs>
      },
      {
        path:'/discover/album',
        element:<Album></Album>
      },
      {
        path:'/discover/artist',
        element:<Artist></Artist>
      },
    ]
  },
  {
    path:'/download',
    element:<Download />
  },
  {
    path:'/mine',
    element:<Mine />
  },
  {
    path:'/focus',
    element:<Focus />
  }
]
export default routes
