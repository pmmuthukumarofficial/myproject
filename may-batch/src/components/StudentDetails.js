import React from "react";
import TableRow from "./TableRow";


class StudentDetails extends React.Component
{
   
    studentRecords = [
        {
          name:"muthu",
          location:"chennai"  
        },
        {
          name:"mugilan",
          location:"covai"
        },
        {
          name:"hari",
          location:"nellai"
        }
    ];

    render(){
        return (
            <div>
                <table border={2}>
                    <thead>
                        <th>name</th>
                        <th>Location</th>
                    </thead>       

                    <TableRow records={this.studentRecords} />
                    
                </table>
            </div>
        );
    }
}

export default StudentDetails