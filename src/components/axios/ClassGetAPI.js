import { Component } from "react";
import axios from "axios";


class ClassGetAPI extends Component{

    constructor(){
        super();

        this.state = {
            catInfo:''
        }

        axios.get('https://catfact.ninja/fact')
        .then((res)=>{
          //  console.log(res.data.fact);
          this.setState({
            catInfo: res.data.fact
          })
        })

    }

    render(){
        return (
            <>
            <h1>{this.state.catInfo}</h1>
            </>
        )
    }
}

export default ClassGetAPI