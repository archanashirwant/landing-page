import React, { useState, useContext } from 'react';
import { AppContext } from './App';

const LoginWindow = () => {
    
    let email;
    let password;
    
    const [state, setState] =  useContext(AppContext);

    const [localState, setLocalState] =  useState({
        successMessage:false,
        errorMessage:false
    });


    const loginUser = () => {
        let formData = {
            email: email.value,
            password: password.value
        }

        //Use fetch  retieve JWT
        fetch(
            //URL
            'http://localhost:5000/auth/login',
            //Data
            {
                method: 'POST',
                body:JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(async res=>{
            if(res.status== "400") {
                // Handle the error
                setLocalState({
                    ...localState,
                    successMessage:false,
                    errorMessage:true
                })
            }
            else {
                //Parse json data
                //res.json()
                let userInfo = await res.json();
                console.log(userInfo);
                
                localStorage.setItem('userToken' , userInfo.token);

                //show success message
                setLocalState({
                    ...localState,
                    successMessage:true,
                    errorMessage:false
                })

                //Close the signup window on login
                setState({ ...state,loginForm:false });        
            } 
           
           
          }) //parse json data
        .catch(err => console.log('err',err) ) // change the state of the component
    }

    const closeLogin = () => {
        setState({ ...state,loginForm:false });

    }
    

    return (
        <div className="LoginWindow">
            <div className="container">
                
                <label className="">Email</label>
                <input ref={comp => email = comp} type="text" className="form-control" />
                
                <label className="">Password</label>
                <input ref={comp => password = comp} type="password" className="form-control" />
                
                <button onClick={loginUser} className="btn btn-primary">Login</button>

                <button onClick={closeLogin} className="btn btn-danger">Cancel</button>

                {
                    localState.errorMessage &&
                    <div className="alert alert-danger">
                        Invalid email/password.Try again.
                    </div>
                }
                {    
                    localState.successMessage && 
                    <div className="alert alert-success">
                        Logged in successfully.
                    </div>
                }

            </div>
        </div>
    )    

}
export default LoginWindow;