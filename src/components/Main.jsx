import React from "react";

export default function Main(props){
    return (
        <main className={props.darkMode? "main-container-dark": "main-container"}>
            <div className="facts-title">Fun facts about React</div>
            <ul className="facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}