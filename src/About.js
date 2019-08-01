import React ,{ useContext }from 'react';
import NavBar from './NavBar';
import { AppContext } from './App';
import RegisterLogin from './RegisterLogin';

const About = () => {
    
    const [state, setState] = useContext(AppContext);
    
    return (
        <div className="About">
            <NavBar />
            <div className="container">
                <h1> The About Page</h1>
                <p>We are ABC Company....</p>
            </div>
            {state.signUpForm && <RegisterLogin />}
        </div>
    )
}

export default About;

