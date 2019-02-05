import React, { Component } from 'react';
import Imgcomp from './imgComponent';
export default class LeftComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgArr:[
                "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg",
                "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg",
                "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg",
                "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg",
                "http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg"
            ]
        }
    }
    render(){
        return(
            <div className="leftSideContainer">
                <Imgcomp src="http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg" class="leftSideImg"/>
                <div className="leftSideDatasec">
                    <p>Abcd fds</p>
                    <p>@fdshd</p>
                    <p>Partner @reactjstraining. Developer</p>
                    <p>Partner @reactjstraining. Developer</p>
                    <p>Partner @reactjstraining. Developer</p>
                </div>
                <div className="imgGrp">
                    {this.state.imgArr.map((val, ind) => {
                        return(<Imgcomp src={val} class="" key={ind}/>)
                    })}
                </div>
            </div>
        )
    }
}