import React from 'react';
import './Subcard.css';
import FontAwesome from 'react-fontawesome';

const Subcard = (props) => {
    return (
        <>
            <div className="project-child">
            <img src={props.pimg} alt="img" />
            <section>
                <h2>{props.pname}</h2>
                <p>{props.pdesc}</p>
                <a className="main-link" href="#" target="_blank" href={props.plive}></a>
                <a className="file-link" target="_blank" title="Fork" href={props.pgit}>
                    <FontAwesome className="fa-icon" name="plus" />
                </a>
                <a className="file-link" target="_blank" title="Demo" href={props.plive}>
                    <FontAwesome className="fa-icon" name="link" /> 
                </a>
            </section>
            </div>
        </>
    )
}

export default Subcard;