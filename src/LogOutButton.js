import React, { useContext } from 'react';
import Button from './Button';
import { AppContext } from './App';

/*
    use <AppContext.Consumer>  if inside JSX
    use useContext if outside JSX
*/ 

const LogOutButton =(prop) => {
    
    //useContext will give you values from context
    const [state, setState] = useContext(AppContext);

    const logOutUser = () => {
        localStorage.clear();
    }
        
    return (
    
    <AppContext.Consumer>        
               { 
                (value)=> {
                    return (
                        <div>
                            <Button clickFunction={logOutUser} className="link">Sign Out</Button>
                            
                        </div>  
                    )
                }
                
               }

    </AppContext.Consumer>
    )
  }

  export default LogOutButton;
  

  