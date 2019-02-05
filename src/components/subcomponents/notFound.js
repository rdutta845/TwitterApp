import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function NotFound(props) {
    return(
    <React.Fragment>
        <ul>
         <li>
                        <Link to="/">
                            link1
                        </Link>
                    </li>
                    <li>
                    <Link to="/link2">
                            link2
                        </Link>
                    </li>
                    <li>
                    <Link to="/link3">
                            link3
                        </Link>
                    </li>
                </ul>
        Not Found
    </React.Fragment>
    )
}