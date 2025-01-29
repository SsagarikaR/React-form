import './App.css'
import Form from './components/Form'
import StateProvider from './components/StateManager'
import Table from './components/Table'

function App() {
  return (
    <>
      <StateProvider>
        <Form/>
        <Table/>
      </StateProvider>
    </>
  )
}

export default App
