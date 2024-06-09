import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  const changeColor = (newColor) => () => setColor(newColor)

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <button onClick={changeColor("green")}>
        green
      </button>
      <button onClick={changeColor("red")}>
        red
      </button>
      <button onClick={changeColor("blue")}>
        blue
      </button>
    </div>
  )
}

export default App
