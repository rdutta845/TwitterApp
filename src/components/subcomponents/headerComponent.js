import React from 'react';
import Imgcomp from './imgComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RightComponent from './rightContent';
import LeftComponent from './leftContent';
import '../../main.css'
export default function HeaderComponent(props) {
    return(
        <React.Fragment>
    <Imgcomp src={props.source} alt="" class="fulllHeader"/>
    <div className="headerNav">
    
       
        <ul>
            <li>
                <Link to="/">
                    <span>tweets</span>
                    <span>{props.socialInfo.tweets}</span>
                </Link>
            </li>
            <li>
                <Link to="/following">
                    <span>tweets</span>
                    <span>{props.socialInfo.tweets}</span>
                </Link>
            </li>
            <li>
                <Link to="/followers">
                    <span>tweets</span>
                    <span>{props.socialInfo.tweets}</span>
                </Link>
            </li>
            
        </ul>
        
       
     
    </div>
    </React.Fragment>
    )
}