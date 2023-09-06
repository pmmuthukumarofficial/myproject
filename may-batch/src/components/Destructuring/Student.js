import {Component} from 'react'

// export const Student = (props) =>{

//     const {rollno, name, location} = props

//     return (
//         <div>
//             <h1>Id : {rollno}</h1>
//             <h1>Name: {name}</h1>
//             <h1>City : {location}</h1>
//         </div>
//     );
// }

class Student extends Component
{

    

    render(){
        const {rollno, name, location} = this.props
        return (
            <div>
            <h1>Id : {rollno}</h1>
             <h1>Name: {name}</h1>
             <h1>City : {location}</h1>
         
            </div>
        )
    }
}

export default Student