import React from "react";

export default function Toggle(props){
    return (
        <div className= "toggle-container" >
        <p className={props.darkMode ? "grey-text" : "normal"}>Light</p>
        <div className={props.darkMode? "slider-dark" : "slider"} onClick={props.switchToDark}>
            <div className={props.darkMode? "toggle-cricle-dark": "toggle-cricle"}></div>
        </div>
        <p className={props.darkMode ? "white-text" : "normal"}>Dark</p>
    </div>
    )
}