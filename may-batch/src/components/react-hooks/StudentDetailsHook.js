import { useEffect, useState } from "react";


function StudentDetailsHook(){

    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(()=>{
        setStudentDetails(
            [
                {
                    name:"muthu",
                    std:10,
                    location:"chennai"
                },
                {
                    name:"Jai",
                    std:11,
                    location:"madurai"
                },
                {
                    name:"Hari",
                    std:12,
                    location:"chennai"
                },
            ]
        )
    },[])

    return (
        <div>

                <table border={2}>
                    <thead>
                        <th>Name</th>
                        <th>Standard</th>
                        <th>Location</th>
                    </thead>       

                    <tbody>
                    {
                        studentDetails.map((student)=>{
                            return <tr>
                                <td>{student.name}</td>
                                <td>{student.std}</td>
                                <td>{student.location}</td>
                            </tr>
                        })
                    } 
                   
            
                    </tbody>
                    
                </table>

        </div>
    );
}

export default StudentDetailsHook;