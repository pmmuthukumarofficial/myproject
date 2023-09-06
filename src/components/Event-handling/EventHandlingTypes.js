
import React from "react";

export default class EventHandlingTypes extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            userid:"infycle"
        }        

//        this.changeUsername = this.changeUsername.bind(this);
    }

    // changeUsername()
    // {
    //         this.setState({userid:'muthu'});
    // }

    changeUsername= (newUser) =>
    {
            this.setState({userid: newUser});
    }
    render(){

        return (
            <div>
            <h1>Active username : {this.state.userid}</h1>

            {/* <div>
                <button onClick={this.changeUsername.bind(this)} >Change username</button>
            </div> */}

            {/* <div>
                <button onClick={this.changeUsername} >Change username</button>
            </div> */}

            {/* <div>
                <button onClick={this.changeUsername} >Change username</button>
            </div> */}

            <div>
                <button onClick={()=>{this.changeUsername("jai")}} >Change username</button>
            </div>
            </div>
        );
        
    }
}