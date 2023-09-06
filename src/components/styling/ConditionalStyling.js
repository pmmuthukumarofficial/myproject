
function ConditionalStyling(props){

//     const status = true;
 
const status = props.classType==="success"?true:false   

const success = { color:'white',backgroundColor:'green',} 
const fail =  { color:'white',backgroundColor:'red',}

    return (
        <>
            <div>
                <p style={status?success : fail }>  {status?"Login successfully..":"Username or Password is invalid "}</p>
            </div>
        </>
    );
}

export default ConditionalStyling