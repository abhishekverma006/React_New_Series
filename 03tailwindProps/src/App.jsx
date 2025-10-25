
import './App.css'
import Card from './components/Card.jsx'

function App() {
  
  const name = {
    ky : "value",
    nm : "abhishek"
  }

  return (
    <>
      <h1 className='bg-amber-400 text-black p-6 rounded-sm m-4'>Tailwind</h1>
      <Card username="AKV"  newObject = {name}/>
      <Card username="Royal"/>
      <Card />
      
    </>
  )
}

export default App
