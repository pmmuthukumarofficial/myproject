import React from "react";

export default class StateExample extends React.Component{

    constructor()
    {
        super();

        this.state = {
            studentRecords:[
                {
                    studentId:1001,
                    studentName:'Jai',
                    std:10
                },
                {
                    studentId:1002,
                    studentName:'kumar',
                    std:10
                },
                {
                    studentId:1003,
                    studentName:'Raj',
                    std:10
                },
            ],
            sclname:"BPS"
        }
        
        // this.state.sclname ="GPS"
    }



    render(){

        this.setState.sclname = "GPS";
        return (
            <div>
                {
                    this.state.studentRecords.map( (student) =>{
                        return (
                            <>
                                <h4>Rollno : {student.studentId}</h4>
                                <h4>NAme : {student.studentName}</h4>
                                <h4>class : {student.std}</h4>
                            </>
                        );
                    })
                }     

                {
                    console.log(this.state.sclname)
                    
                }            
            </div>
        );
    }
}