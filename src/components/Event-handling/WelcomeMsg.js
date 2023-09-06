
// function Welcome(){

import React from "react";


//     function showMsg(){
//         alert(" Infycle Welcomes you")
//     }

//     return (
//         <div>
//             <button onClick={showMsg}>Click Here</button>
//         </div>
//     );

// }
// export default Welcome;

export default class Welcome extends React.Component{

    // constructor(){
    //     super()
    // }

    showMsg()
    {
        alert(" Infycle Welcomes you")   
    }

    render(){
        return (
            <div>
                <button onClick={this.showMsg}>Click Here</button>
            </div>
        );
    }
}