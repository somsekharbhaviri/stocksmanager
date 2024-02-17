import React from 'react'
import 'C:/Users/adnan shariff/OneDrive/Desktop/4th Semester/MSWD/SDP/stocksmanager/src/style.css'
export default function Login() {
return (
    <div>
             <h2 align="center">Enter Your Credentials</h2>
             <form method="get" action="/">
                    <input placeholder="Enter Username" type="email" name="emailid" required/><br/>
                    <input placeholder="Enter Password" type="password" name="pwd" required/><br/>
                    <input type="submit" className="button" value="Login"/>
                    <input type="reset" className="button"value="Clear"/>
             </form>


             <p style={{textAlign:"center",color:"white"}}>
                    New User ? <a href="/registration" className="button" >Register Here</a></p>
    </div>
)
}
