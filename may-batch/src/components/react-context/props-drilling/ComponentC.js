import { AppConsumer } from "./AppContext";



function ComponentC(){

    return (
        <>
           <AppConsumer>
           {/* {
            (params)=>{
                return <h3>USer status : {params}</h3>
            }
           } */}

           {
            (user)=>{
                return <div>
                    <h3>Username : {user.name }</h3>
                    <h3>Age : {user.age }</h3>
                </div>
            }
           }
           </AppConsumer>
           
        </>
       
    )
}

export default ComponentC;