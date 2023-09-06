import { useDispatch, useSelector } from "react-redux";

function Contact() 
{
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            <h1> Contact Details <br></br>{username}</h1>
        </div>
    );

}

export default Contact
