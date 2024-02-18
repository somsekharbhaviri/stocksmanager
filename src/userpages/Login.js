import React from 'react'
import 'C:/Users/adnan shariff/OneDrive/Desktop/4th Semester/MSWD/SDP/stocksmanager/src/style.css'
import {useNavigate} from 'react-router-dom'
import RegistrationForm from './UserRegistration';


export default function Login() {
    const navigate=useNavigate();

    const handleLogin = () => {
        navigate('/registration');
        
    }
return (
    <div>
             <h2 align="center" style={{marginTop:240}}>Enter Your Credentials</h2>
             <form method="get" action="/">
                    <input placeholder="Enter Username" type="email" name="emailid" required/><br/>
                    <input placeholder="Enter Password" type="password" name="pwd" required/><br/>
                    <input type="submit" className="button" value="Login"/>
                    <input type="reset" className="button"value="Clear"/>
             </form>


             <p style={{textAlign:"center",color:"white"}}>
                    New User ? <button className="button" value="Submit" onClick={handleLogin}>Register Here</button></p>
    </div>
)
}
