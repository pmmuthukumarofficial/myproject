import { Component } from "react";


class LifecycleComponent extends Component
{

    componentDidMount(){
        alert('componentDidMount invoked...')
    }

    constructor()
    {
        super()
        alert('constructor invoked...')
    }

    static getDerivedStateFromProps(){
        alert('getDerivedFromProps invoked..')
    }

   

    render(){
        return (
            <>
            {
                alert('render method invoked....')
            }
            </>
        )
    }
}


export default LifecycleComponent