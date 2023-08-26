import Nav from "./components/nav"
import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-2 text-2xlg border-b bg-blue-900 text-white h-10 items-center' >
        <p className="adress">adress 24, oslo, norway</p>
        <p className="contact align-self-center">email@email.com</p>
      </div>
      <Nav/>


      
    </>
  )
}

export default App
