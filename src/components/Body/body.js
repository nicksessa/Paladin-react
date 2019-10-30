import React, { Component } from 'react';
import Story from './Story/story'

// Main App
class Body extends Component {
 state = {
     flag1: true
 }
    

    render() {
        return (
            <div className="myBlueBorder">
                <h1>
                    main body
            </h1>

                <Story />
                <div className={this.flag1 == true ? "bg-success" : "bg-danger"}>  fffffffff</div>
            </div>
        )
    }

}

export default Body;
