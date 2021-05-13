import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <a className="header-button" href={props.anchor} style={{
            color: props.inverse ? "#2EE59D" : "white",
            backgroundColor: props.inverse ? "transparent" : "#2EE59D",
            boxShadow: props.inverse ? "none" : "0px 15px 20px rgba(46, 229, 157, 0.4)",
            }}>{props.label}
        </a>
    )
}
