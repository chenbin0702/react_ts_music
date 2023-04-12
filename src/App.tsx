import React, { memo,Suspense } from 'react'
import {useRoutes,Link} from 'react-router-dom'
import routes from '@/router'

const App = memo(() => {
  return (
    <div>
      <div className="APP">
        <div className="nav">
          <Link to='/discover'>发现音乐</Link>
          <Link to='/mine'>我的音乐</Link>
          <Link to='/focus'>关注</Link>
          <Link to='/download'>下载客服端</Link>
        </div>
      </div>
      <Suspense fallback="loading....">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
     
    </div>
  )
})

export default App

