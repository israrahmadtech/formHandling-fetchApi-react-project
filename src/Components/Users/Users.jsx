import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Posts from '../Posts/Posts'
import './Users.css'
import Comments from '../Comments/Comments'
import Albums from "../Albums/Albums"
import Todos from "../Todos/Todos"

function Users({apiData, dataUrl}) {
  
  const [userId, setUserId] = useState(1)
  return (
    <section id="users">
        <Sidebar apiData={apiData} setUserId={setUserId} dataUrl={dataUrl} />
        {dataUrl === 'users' && <Posts userId={userId}/> }
        {dataUrl === 'comments' && <Comments userId={userId}/>}
        {dataUrl === 'albums' && <Albums userId={userId}/>}
        {dataUrl === 'todos' && <Todos userId={userId}/>}
    </section>
  )
}

export default Users