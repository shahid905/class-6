import { CardPropsTypes, tagType } from "@/app/types/commonTypes";
import Tag from "../tag/tag";

export default function Card (props:CardPropsTypes) {
    return (
        
        <div  style={{background: props.showDescription? 'green' : 'red'}}>
            <h1>{props.coursTitle} - {props.tag}</h1>
       {props.showDescription?<p>{props.description}</p>:""} 
           {props.tag ? <Tag tagText="Tag1" /> :"No Tag is showing"} 
        <span>{props.date}</span>
        </div>
        
    )
}