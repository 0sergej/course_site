import React, { useState, useContext } from 'react'
import { ThemeContext }from '../App'

export default function CounterHooks({initailCount})
{
    // console.log('Render CounterHooks')
    const [count, setCount] = useState(initailCount)

    const style = useContext(ThemeContext)
    
return (<div>
    <button style={style} onClick={() => setCount(prevCount => prevCount - 1)} >-</button>
            <span>{count}</span>
    <button style={style} onClick={() => setCount(prevCount => prevCount + 1)} >+</button>
  </div> )
}