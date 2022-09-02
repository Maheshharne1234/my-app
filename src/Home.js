import { useState } from 'react'
import './Home.css'

function Home() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='container'>
            <h1>{count}</h1>
            <button onClick={increment}>count ++ </button>
            <button onClick={decrement}>count -- </button>
        </div>
    )
}

export default Home