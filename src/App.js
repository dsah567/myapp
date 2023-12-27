import './App.css'
import {useState} from 'react'

function App() {

  const [count,setCount]=useState(0)

  function clic(){
    setCount(()=>count +1)
  }

  return (
    <div className="App">
      <Button onClick={clic} count={count}/><br/>
      <Button onClick={clic} count={count}/>
    </div>
  );
}

function Button({onClick,count}){
  return(<button onClick={onClick}> Button clicked {count}</button>)
}

export default App;