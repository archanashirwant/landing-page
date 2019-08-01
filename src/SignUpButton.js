import React, { useContext } from 'react';
import Button from './Button';
import { AppContext } from './App';

/*
    use <AppContext.Consumer>  if inside JSX
    use useContext if outside JSX
*/ 

const SignUpButton =(prop) => {
    
    //useContext will give you values from context
    const [state, setState] = useContext(AppContext);

    const openWindow = () => {
        setState({ signUpForm:true });
      
    }

    const openLoginWindow = () => {
        setState({ loginForm:true });
      
    }

        
    return (
     /* Use  <AppContext.Consumer> only if we are going to use values from context in the JSX
      <AppContext.Consumer>
        { 
            (value)=><Button clickFunction={openWindow} className="link">{value[0].label}</Button>
        }
      </AppContext.Consumer>
    */
   <AppContext.Consumer>        
               { 
                (value)=> {
                    return (
                        <div>
                            <Button clickFunction={openWindow} className="link">Sign Up</Button>
                            
                        </div>  
                    )
                }
                
               }

    </AppContext.Consumer>
    )
  }

  export default SignUpButton;
  

  