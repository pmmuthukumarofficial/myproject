import { Component } from "react";




class SignupForm extends Component{

    constructor(props){
        super(props)
       this.state = {
        username:'',
        age:0,
        email:'',
        password:'',
        cpassword:'',
        usernameErrorMsg: '',
        ageErrorMsg: '',
        emailErrorMsg: '',
        passwordErrorMsg: '',
       } 

       this.handleCheck = this.handleCheck.bind(this);
       this.formSubmit = this.formSubmit.bind(this);
    }

    handleCheck(e){
        
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }

    formSubmit(e){
        e.preventDefault();
        //console.log(this.state);

        if(!this.state.username && !this.state.age )
        {
            this.setState({
                        usernameErrorMsg:'Username is missing...'
            })  
        }

        if(this.state.username.length >=10 )
        {
            this.setState({
                usernameErrorMsg:'Username length is too long'
            })
        }

        if(this.state.age >= 40){
            this.setState({
                ageErrorMsg:'Sorry your age is not valid for registeration'
            })
        }

        if(this.state.password !== this.state.cpassword){
            this.setState({
                passwordErrorMsg:'Password and Confirm password must be same'
            })
        }

    }

    render(){
        return (
            <>
                <form onSubmit={this.formSubmit}>
                    <input type='text' name="username" placeholder="Enter name" value={this.state.name} onChange={this.handleCheck}/>
                    <span style={{color:'red'}}>{this.state.usernameErrorMsg} </span><br></br>
                    <input type='text'name="age" placeholder="Enter age" value={this.state.age} onChange={this.handleCheck}/>
                    <span style={{color:'red'}}>{this.state.ageErrorMsg} </span><br></br>
                    <input type='email' name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleCheck} />
                    <span style={{color:'red'}}>{this.state.emailErrorMsg} </span><br></br>
                    <input type='password' name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleCheck} /><br></br>
                    <input type='password' placeholder="Enter confirm password" value={this.state.cpassword} onChange={this.handleCheck} /><br></br>
                    <span style={{color:'red'}}>{this.state.passwordErrorMsg} </span>
                    <input type='submit' value='Register' />
                </form>

            </>
        )
    }
}

export default SignupForm