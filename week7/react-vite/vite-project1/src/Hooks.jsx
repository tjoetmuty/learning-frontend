import { useEffect, useState } from "react"

const Hooks = () => {
    const [name, setName] = useState(false)

    useEffect{() => {
        console.log(name)
    }, []}

    return (
        <div>
            <button onClick={()=> setName(!name)}>klik</button>
        </div>
    )
}

export default Hooks