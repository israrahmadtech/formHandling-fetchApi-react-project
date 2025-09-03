import React, { useState } from 'react'
import Header from "./Components/Header/Header"
import Users from './Components/Users/Users'
import Data from './Components/Data'
import Contact from "./Components/Contact/Contact"

function App() {

  const [dataUrl, setDataUrl] = useState('contact')
  const [apiData, setApiData] = useState(null)
  return (
    <>
    <Header dataUrl={dataUrl} setDataUrl={setDataUrl} />
    {
      dataUrl === 'contact' ? <Contact/> :
      <Users apiData={apiData} dataUrl={dataUrl}/>
    }
    <Data dataUrl={dataUrl} setApiData={setApiData} />
    </>
  )
}

export default App