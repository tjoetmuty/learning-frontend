import { useState } from "react"

function App(){
  const obj = {
    name: 'muty',
    age: 19,
  }
  const [people, setPeople] = useState(obj)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return(
    <>
    <h1>{people.name? people.name : "Anonymous"}</h1>
    <p>{people.age? people.age : "nothing happen"}</p>
    <input placeholder="Name" type="text" onChange={(event)=> setName (event.target.value)}/>
    <input placeholder="Age" type="text" onChange={(event)=> setAge (event.target.value)}/>
    <button onClick={() => setPeople({name: name, age: age})}>
      Change
    </button>
    </>
  )
}

export default App