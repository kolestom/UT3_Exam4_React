import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import getData from './util/getData';

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("");
  const [data, setData] = useState();


  useEffect(() => {
    const init = async() =>{
      setData(await getData())
    }
    init()
  }, [])
  
  console.log(data);
  // const getData = async () => {
  //   const response = await axios.get("https://api.github.com/users")
  //   return response.data
  // }

  

  return (
    <div className="App">
        <input type="text" placeholder='input' value={input} onInput={(e) => setInput(e.target.value)}/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </div>
  )
}

export default App
