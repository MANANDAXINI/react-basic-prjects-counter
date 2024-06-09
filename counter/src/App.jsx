import { useState } from "react"


function App() {
  const[count,setcount]=useState(5);

  const upcounter = () =>{
    setcount(count+1);
  }

  const deccounter =()=>{
    setcount(count-1)
  }
  return (

   
    <div>
      <h1>
        Counter
      </h1>
      <h1>
        count:{count}
      </h1>

      <button onClick={upcounter}>
        add
      </button>

      <button onClick={deccounter}>
        remove
      </button>

    </div>
  )
}

export default App
