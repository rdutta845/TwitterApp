import React, { Component } from 'react';

import Card from './cardComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotFound from './notFound';
const CardList = (props) => {
    return (<React.Fragment>
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
        {props.data.map((val, ind) =>{
            return(<Card info={val} key={ind}/>)
        })}
    </React.Fragment>)
   
}
export default class RightComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardinfo:[
                {
                    name: 'acs',
                    date: '1 may 2016',
                    description: "sldslkdlajsld skladjaslkdj lkajsd",
                    imgsrc: "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg"
                },
                {
                    name: 'acs',
                    date: '1 may 2016',
                    description: "sldslkdlajsld skladjaslkdj lkajsd",
                    imgsrc: "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg"
                },
                {
                    name: 'acs',
                    date: '1 may 2016',
                    description: "sldslkdlajsld skladjaslkdj lkajsd",
                    imgsrc: "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg"
                },
                {
                    name: 'acs',
                    date: '1 may 2016',
                    description: "sldslkdlajsld skladjaslkdj lkajsd",
                    imgsrc: "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg"
                }
            ]
        }
    }
    render(){
        return(
            // <Router history={hashHistory}>
            //     <Route path='/' component={HeaderComponent} />
            //     <Route path='/address' component={LeftComponent} />
            // </Router>
            <div className="rightSideontainer">

               
               <Route exact path="/" render={(routerProps) => (
                   <CardList data = {this.state.cardinfo} />
               )} /> 
                <Route path="/following" component={NotFound} />
                <Route path="/followers" component={NotFound} />
                <Route path="/link2" component={NotFound}/>
                <Route path="/link3" component={NotFound}/>
            </div>
        )
    }
}
