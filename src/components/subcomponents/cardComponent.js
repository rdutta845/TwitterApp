import React from 'react';
import Imgcomp from './imgComponent';
export default function Card(props) {
    return(
        <div className="card">
            <div className="leftCardSec">
                <Imgcomp src={props.info.imgsrc} class="leftSmallImg"/>
                </div>
                <div className="rightCardSec">
                    <p>
                        <span>{props.info.name}</span>
                        <span>{props.info.date}</span>
                    </p>
                    <p>{props.info.description}</p>
                    <p>{props.info.description}</p>
                    <p>{props.info.description}</p>
                    <p>{props.info.description}</p>
                    <p>{props.info.description}</p>
                    <p>{props.info.description}</p>
            </div>
        </div>
    )
}