import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './page.module.css'

function Project(props) {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedBackToFront='0.2' flipSpeedFrontToBack='0.2'>
            <div className ={styles.front} onClick={() => setFlip(!flip)}>
                <h2>{props.title}</h2>
                <p>Check it out <a href={props.link}>here</a>!</p>
                <img src={props.source}></img>
            </div>
            <div className ={styles.front} onClick={() => setFlip(!flip)}>
                <h2>What is {props.title}?</h2>
                <p>{props.description}</p>
            </div>
        </ReactCardFlip>
    );
}

export default Project;