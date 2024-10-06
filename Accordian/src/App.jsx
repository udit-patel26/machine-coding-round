import React,{useState} from 'react'
import of from'./dummy.json'
import Accordian from './component/Accordian'

function App() {
const[showIndex,setShowIndex]= useState(-1)

function handleFaq(index){
  setShowIndex((prev)=>{
    if(prev === index){
      return -1;
    }
    return index;
  })
}
  return (
      <div className="mx-auto max-w-[1200px]">
        {of.map((quest,index)=>(
          <Accordian key={index} accord={quest} showAns={index===showIndex} handleFaq={()=>handleFaq(index)}/>
        ))}
      </div>

  )
}

export default App