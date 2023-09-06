import { Component } from "react";


class SimpleForm extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            name:"",
            city:"",
            gender:""
        }

        this.handleName = this.handleName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleName(e) {
        
        this.setState({
            name:e.target.value
        })
    }

    handleCity(e) {
        this.setState({city:e.target.value}) 
    }

    handleGender(e){
        this.setState({ gender:e.target.value})
        
    }

    submitForm(e){
        e.preventDefault();

        console.log(this.state);
    }

    render ()
    {
        return (
            <>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="Name" onChange={this.handleName}/> <br></br>
                    <input type="text" placeholder="city" onChange={this.handleCity}/> <br></br>                
                    <select value={this.state.gender} onChange={this.handleGender}>
                        <option>Select</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Others</option>
                    </select> <br></br>
                    <input type="submit" value="Signup" />
                </form>

            </>
        )
    }
}

export default SimpleForm;