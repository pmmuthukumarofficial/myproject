import { useNavigate } from "react-router-dom";


function Login (){

    let myNavigate = useNavigate();

    function loginCheck(){
        myNavigate("/contact")
    }

    return (
        <div>
            <h1>Login</h1>
            <input type='text' placeholder="Username" />
            <input type='password' placeholder="Password" />
            <input type='submit' value="Login" onClick={loginCheck}/>
        </div>
    );
}

export default Login;