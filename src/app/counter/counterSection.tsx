"use client"
import { useState } from "react";
import Button from "../components/button/button"

export default function CounterSection() {
  const nameList = ["Shahid" , "Rukhsana", "Abdullah" , "Adan" , "Maryam" ]
   var count:number = 0;
   const [countState, setCountState] = useState (0)
   const [nameState, setNameState] = useState(0)
  const onClickAddHandler = () => {
      count = count + 1
      setCountState(countState + 1)
  }
      const onClickMinHandler = () => {
        count = count - 1
        setCountState(countState - 1)
  }

      const resetHandler = () => {
          setCountState(0)
      }

        const onNameNextHandler = () => {
          setNameState((preIndex)=>(preIndex + 1) % nameList.length);
        }

        const onNamePreHandler = () => {
          setNameState((preIndex)=> preIndex === 0 ?nameList.length - 1 : preIndex - 1);
        }

  return (
    <div>
            <Button title="+" onClickHandler={onClickAddHandler}/>
            <span>{nameState}</span>
            <Button title="-" onClickHandler={onClickMinHandler}/>
            <br/>
            <Button title="Reset" onClickHandler={resetHandler}/>
<br/>
<br/>
<div>
          <Button title="Next Name" onClickHandler={onNameNextHandler}/>
            <span>{nameList[nameState]}</span>
            <Button title="Previous Name" onClickHandler={onNamePreHandler}/>
            <br/>
            <Button title="Reset" onClickHandler={resetHandler}/>
</div>
    </div>
  )
}
