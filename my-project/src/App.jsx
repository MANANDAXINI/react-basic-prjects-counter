import { useState, useCallback, useEffect,useRef} from "react"

function App() {
  const [len, setLen] = useState(8);
  const [char, setChar] = useState(true);
  const [num, setNum] = useState(true);
  const [pass, setPass] = useState("");

   const passref = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let password = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (num) {
        str += "0123456789"
      }
      if (char) {
        str += "()./'#$%^*!~?"
      }
      for (let i = 0; i < len; i++) {
        let charIndex = Math.floor(Math.random() * str.length)
        password += str.charAt(charIndex)
      }
      setPass(password)
    },
    [len, char, num],
  )
  const copyPasswordToClipboard = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  useEffect(() => {
    passwordGenerator();
  }, [num, char, len, passwordGenerator]);
  
  return (
    <> 
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={pass} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passref}/>
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "> Copy</button>
          
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={len}
            className="cursor-pointer" 
            onChange={(e)=>{setLen(e.target.value)}}/>

            <label >length:{len}</label>

          </div>

          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
          </div>

       
      </div>

    </>
  ) 
}

export default App
