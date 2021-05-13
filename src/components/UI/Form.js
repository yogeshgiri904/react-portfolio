import React from 'react';

export default function Form(props) {
    return (
        <div>
        <p>{props.ftitle}</p>
        {props.fort ? 
            <input 
            type={props.ftype} 
            name={props.fname} 
            placeholder={props.fplaceholder} 
            /> : 
            <textarea 
            name={props.fname} 
            placeholder={props.fplaceholder} 
            cols="20" 
            rows="8">
            </textarea> 
            }
        </div>
    )
}
