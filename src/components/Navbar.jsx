import React from "react";
import Toggle from "./Toggle";

export default function Navbar(props){
    return (
        <nav className={props.darkMode ? "dark" : "light"}>
            <img src="/react-logo.png" className="logo"/>
            <span className="facts blue-text">React Facts</span>
            <Toggle darkMode={props.darkMode} switchToDark={props.switchToDark}/>
        </nav>
    )
}