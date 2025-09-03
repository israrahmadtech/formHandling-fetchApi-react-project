import React from 'react'
import "./Header.css"

function Header({ dataUrl, setDataUrl }) {

  function handleClick(e) {
    const btnText = e.currentTarget.innerText.toLowerCase();

    setDataUrl(
      btnText === 'contact' ? "contact" :
      btnText === 'users' ? "users" :
      btnText === 'comments' ? "comments" :
      btnText === 'albums' ? "albums" :
      "todos"
    )
  }

  return (
    <header id="header">
      <div className="logo">
        <h1>React Js</h1>
      </div>
      <nav>
        <ul>
          <li><button onClick={handleClick} className={dataUrl === 'contact' ? "active" : ""}>Contact</button></li>
          <li><button onClick={handleClick} className={dataUrl === 'comments' ? "active" : ""}>Comments</button></li>
          <li><button onClick={handleClick} className={dataUrl === 'users' ? "active" : ""}>Users</button></li>
          <li><button onClick={handleClick} className={dataUrl === 'albums' ? "active" : ""}>Albums</button></li>
          <li><button onClick={handleClick} className={dataUrl === 'todos' ? "active" : ""}>Todos</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
