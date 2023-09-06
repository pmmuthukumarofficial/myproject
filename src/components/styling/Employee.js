import './Employee.css';

function Employee(){

    const myStyle= {
        color:"white", 
        background:'green',
        padding:'20px',
        
    }

    return (
        <>
            <div className="container">
            <h1>Employee Details</h1>
            <p style={
                        {
                        color:"white", 
                        background:'green',
                        padding:'20px'
                        }
                    }
                    >This is sample text for React styling</p>

            <h3 style={myStyle}>Another sample text</h3>
            </div>
        </>
    );
}

export default Employee 