import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Skill = (props) => {
    return (
        <div className="progress-container">
            <CircularProgressbar
                value={props.value}
                text={`${props.value}%`}
                styles={buildStyles({
                    rotation: 0.00,
                    strokeLinecap: 'round',
                    textSize: '15px',
                    pathTransitionDuration: 0.5,
                    pathColor: props.pathColor,
                    textColor: props.textColor,
                    trailColor: '#d6d6d6'
                })}
            />
            <div className="progress-text">
                <h4>{props.name}</h4>
                <p><small>{props.desc}</small></p>
            </div>
        </div>
    )
}

export default Skill;