import React from "react";
import "./Post.css";
const Post = (props) =>{
    return (
        <div className="todo-holder">
        {props.time}:{props.post}
        <button className = {props.time} onClick ={()=>props.clear(props.time)}>clear</button>
        <button className = {props.time} onClick = {props.update}>update</button>
        </div>
    )
}
export default Post;