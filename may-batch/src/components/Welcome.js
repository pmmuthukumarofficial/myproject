import React from "react";

//functional component or stateless component
//class component or statefull component

function Welcome(props){
    return (
        <>
        <h2>Welcome {props.name} Location {props.location} </h2>
        </>
    );
}

export default Welcome;


// class Welcome extends React.Component
// {
//     // constructor(props)
//     // {
//     //     super(props);
//     //     console.log(this.props.name);
//     // }

//     render(){
//         return (
//             <h2>WElcome  {this.props.name} Location {this.props.location}</h2>
//         ); 
                
//         }
// }

// export default Welcome;