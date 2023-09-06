import './App.css';
import React from 'react';
import StudentDetails from './components/StudentDetails';
import StateExample from './components/StateExample';
import Welcome from './components/Event-handling/WelcomeMsg';
import EventHandlingTypes from './components/Event-handling/EventHandlingTypes';
import Employee from './components/styling/Employee';
import ConditionalStyling from './components/styling/ConditionalStyling';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
// import About from './components/ReactRouter/About';
// import Home from './components/ReactRouter/Home';
// import Contact from './components/ReactRouter/Contact';
import NotFound from './components/ReactRouter/NotFound';
import Student from './components/react-hooks/Student';
import MyToDo from './components/ToDoApp/MyToDo';
import StudentDetailsHook from './components/react-hooks/StudentDetailsHook';
import BootstarpButton from './components/ReactBootstrap/BootstrapButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from './components/formhandling/SimpleForm';
import Login from './components/ReactRouter/Login';
import ClassGetAPI from './components/axios/ClassGetAPI';
import FunctionalGetAPI from './components/axios/FunctionalGetAPI';
import GetAPI from './components/CRUD/GetAPI';
import PostAPI from './components/CRUD/PostAPI';
import DeleteAPI from './components/CRUD/DeleteAPI';
import LifecycleComponent from './components/Component-lifecycle/LifecycleComponent';
import SignupForm from './components/form-validation/SignupForm';
import ComponentA from './components/react-context/props-drilling/ComponentA';
import { AppProvider } from './components/react-context/props-drilling/AppContext';
import { Provider } from 'react-redux';
import {Store} from './components/redux/Store';

import Home from './components/redux/Home';
import Profile from './components/redux/Profile';
import Contact from './components/redux/Contact';


// function App(){
//   const name="hari";
//   const age=29;
  
//   return <>
  
//     <h1 className="App">Infylce tech</h1>
//           <h3>OMR</h3>
//           <h1>{2+2}</h1>
//           <p>{name}</p>
//           {/* <h4  style={(age>18)? { backgroundColor:'green'} : {backgroundColor : 'red'}>dsfi</h4> */}
          
//           <h3 style={
//             (age>18)? { backgroundColor:'green'} : {backgroundColor : 'red'} }>
              
//               {
//                 (age>18)? "you are eligible to vote":"you are not eligible to vote"
//               }
//             </h3>

//             <h4>{add(6,7)}</h4>
          

//           </>
// }
// export default App;

// function add(a,b)
// {
//   return a+b;
// }



const App = () =>{
  
  return <>
{/*     
    <h1>Infylce tech</h1>
          <h3>OMR</h3>

          <StudentDetails />
          <StateExample /> */}

          {/* <Student rollno='101' name="muthu" location="chennai" />
*/}
         {/* <Welcome />  */}

          {/* <EventHandlingTypes />

          <Employee /> */}

          {/* <ConditionalStyling classType="fail" /> */}
          


          {/* React Router Example  */}
         
                {/* <Link to="/"> Home </Link>
                <Link to="/about"> About Us </Link>
                <Link to="/contact"> Contact Us </Link> */}
            {/* <Router>
                <NavLink to="/" className = { ({isActive}) => isActive?"active-link":"nav-link"}> Home </NavLink>
                <NavLink to="/about" className = { ({isActive}) => isActive?"active-link":"nav-link"}> About Us </NavLink>
                <NavLink to="/contact" className = { ({isActive}) => isActive?"active-link":"nav-link"}> Contact Us </NavLink>
                <NavLink to="/login" className = { ({isActive}) => isActive?"active-link":"nav-link"}> Login</NavLink>
                <NavLink to="/axios" className = { ({isActive}) => isActive?"active-link":"nav-link"}>Axios example(CLass component)</NavLink>
                <NavLink to="/get-api" className = { ({isActive}) => isActive?"active-link":"nav-link"}>API Get example</NavLink>
                <NavLink to="/post-api" className = { ({isActive}) => isActive?"active-link":"nav-link"}>API Post example</NavLink>
                <NavLink to="/delete-api" className = { ({isActive}) => isActive?"active-link":"nav-link"}>API Delete example</NavLink>
                
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/axios' element={<FunctionalGetAPI />} />
              <Route path='/get-api' element={<GetAPI />} />
              <Route path='/post-api' element={<PostAPI />} />
              <Route path='/delete-api' element={<DeleteAPI />} />
              <Route path='*' element={ <NotFound /> } />
          </Routes>
        </Router> */}

                {/* <Student /> */}
          {/* <MyToDo /> */}

          {/* <StudentDetailsHook /> */}
          {/* <BootstarpButton /> */}
{/* <MyToDo /> */}
                {/* <SimpleForm /> */}

          {/* <LifecycleComponent /> */}
          {/* <SignupForm /> */}

          {/* <ComponentA status="online" /> */}

{/* 
            <AppProvider value="online">
              <ComponentA />
            </AppProvider> */}
          
                   
          {/* <AppProvider value={{name:'ajay', age:20}}>
              <ComponentA />
            </AppProvider> */}



{/* ---------------Redux Example----------------- */}

            <Provider store={Store}>
              <Router>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/contact'>Contact</Link>


                <Routes>
                  <Route path='/' element={<Home />} /> 
                  <Route path='/profile' element={<Profile />} /> 
                  <Route path='/contact' element={<Contact />} /> 
                </Routes>
              </Router>
            </Provider>



          </>

          
}
export default App;


// export const App = () =>{
  
//     return React.createElement('h1', null, ' Infylce Tech')      

                      
//   }
