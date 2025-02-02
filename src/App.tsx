import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import StateProvider from './components/StateManager'
import Table from './components/Table'
import Notification from './components/Notification'
import Weather from './components/Weather'

function App() {

  const [message,setMessage]=useState<string>("");
  const [showMessage,setShowMessage]=useState<boolean>(false);

  useEffect(()=>{
    if(showMessage===true){
      setTimeout(()=>{
        setShowMessage(!showMessage);
      },5000)
    }
  },[showMessage])

  const showNotification=(message:string)=>{
    setMessage(message)
    setShowMessage(true);
  }

  return (
    <>
      <StateProvider>
        <Weather/>
        {showMessage && <Notification message={message}/>}
        <Form onSubmit={showNotification}/>
        <Table/>
      </StateProvider>
    </>
  )
}

export default App
