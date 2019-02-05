import React, { Component } from 'react';
import HeaderComponent from './headerComponent';
import LeftComponent from './leftContent';
import RightComponent from './rightContent';

export default class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            socialInfo: {
                tweets:4099,
                following:195,
                followers:8013,
                likes: 8837,
                moments:0
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <HeaderComponent source="http://bostoncolumn.com/wp-content/uploads/2018/10/header-background-image-background-header-1.jpg" socialInfo = {this.state.socialInfo}/>
                <LeftComponent/>
                <RightComponent/>
              

            </React.Fragment>
        )
    }
}