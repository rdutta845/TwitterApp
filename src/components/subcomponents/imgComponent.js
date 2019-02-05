import React from 'react';
import '../../main.css'
export default function Imgcomp(props) {
    return(
    <img src={props.src} alt="" className={props.class}/>
    
    )
}