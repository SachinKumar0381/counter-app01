import React from 'react'

const Counter = () => {
    const [count,setCount]=React.useState(0);


    const hoook=(value)=>{
        setCount(count+value)
    }
    const multy=()=>{
        setCount(count*2)
    }
    const resett=()=>{
        setCount(count*0)
    }
    if(count%2==0)
    {
        var style1={
            color: 'green'
        }
    }
    else
    {
        var style1={
            color: 'red'
        }
    }
  
  return (
      <>
    <div>Counter</div>
    <h1 style={style1}>{count}</h1>
    <button onClick={()=>{hoook(1)}}>Increase</button>
    <button onClick={()=>{hoook(-1)}}>Decrease</button>
    <button onClick={()=>{multy()}}>Double</button>
    <button onClick={()=>{resett()}}>Reset.</button>
    </>
  )
}

export default Counter
