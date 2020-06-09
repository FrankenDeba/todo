import React from "react";
import "./Input.css";
const Input = (props) =>{
    return (
        <div>
                <form onSubmit= {props.submit}>

                    <input className = {props.className} type = "text" placeholder={props.place} id = "inp"/>
                    <button onSubmit = {props.submit} type = "submit">{props.place}</button>
                </form>
    
            
            
    
            
        </div>
    )
}
export default Input;