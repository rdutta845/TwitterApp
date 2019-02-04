import React, { Component } from 'react';
import HeaderComponent from './headerComponent';
import LeftComponent from './leftContent';
import RightComponent from './rightContent';
export default class MainComponent extends Component {
    render(){
        return(
            <React.Fragment>
                <HeaderComponent/>
                <LeftComponent/>
                <RightComponent/>
              

            </React.Fragment>
        )
    }
}