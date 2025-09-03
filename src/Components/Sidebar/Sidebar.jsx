import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
function Sidebar({apiData, setUserId, dataUrl}) {
  
  function handleClick(e){
    const btn = e.target
    const buttons = btn.parentElement.querySelectorAll('button')
    buttons.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')

    setUserId(btn.id)
  }

  const [users, setUsers] = useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .catch(() => console.log("Something went wrong..."))
    }, [])

  return (
    <aside id='sidebar'>
      <ul>
        { 
          users?.map((user) => (
            <button key={user.id} id={user.id} onClick={handleClick} className={user.id === 1 ? "active" : ""}>{user.id}. {user.name}</button>
          ))
        }
      </ul>
    </aside>
  )
}

export default Sidebar