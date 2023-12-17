"use client"
import { buttonType } from "@/app/types/commonTypes";

export default function Button(props:buttonType) {
  return (
            <button onClick={props.onClickHandler} style={{backgroundColor:"goldenrod", padding:"20px 20px", borderRadius:"60px", color:"lightyellow"}}>{props.title}</button>
    )
}
