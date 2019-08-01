import React, { useState,useContext } from 'react';
import { AppContext } from './App';

const SignUpWindow = () => {
    let name;
    let email;
    let password;
    let gender;

    
    const [localState, setLocalState] =  useState({
        successMessage:false,
        errorMessage:false
    });

    const [state, setState] =  useContext(AppContext);

    const registerUser = () => {
        let formData = {
            name : name.value,
            password: password.value,
            gender: gender.value,
            email: email.value

        }
        fetch(
            //URL
            'http://localhost:5000/auth/register',
            //Data
            {
                method: 'POST',
                body:JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res=>{
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
                res.json()

                //show success message
                setLocalState({
                    ...localState,
                    successMessage:true,
                    errorMessage:false
                })
            }    
          }) //parse json data
        .catch(err => console.log('err',err) ) // change the state of the component
    }

    const closeSignUp = () => {
        setState({ signUpForm:false });

    }

    return (
        <div className="SignUpWindow">
            <div className="container">
                
                <label className="">Name</label>
                <input ref={comp => name = comp} type="text" className="form-control" />
                
                <label className="">Password</label>
                <input ref={comp => password = comp} type="password" className="form-control" />
                
                <label className="">Email</label>
                <input ref={comp => email = comp} type="text" className="form-control" />
                
                <label className="">Gender</label>
                <input ref={comp => gender = comp} type="text" className="form-control" />

                <button onClick= {registerUser} className="btn btn-primary">Register</button>

                <button onClick= {closeSignUp} className="btn btn-danger">Cancel</button>
                
                {
                    localState.errorMessage &&
                    <div className="alert alert-danger">
                        Email already exists.
                    </div>
                }
                {    
                    localState.successMessage && 
                    <div className="alert alert-success">
                        Congratulation! You've been successfully signed up.
                    </div>
                }

            </div>
        </div>
    )    

}
export default SignUpWindow;