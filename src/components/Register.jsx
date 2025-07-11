import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Register() {

    const [user,setUser]=useState({})
    const [error, setError]=useState()
    const Navigate = useNavigate()
    const API_URL = import.meta.env.VITE_API_URL

    const handleSubmit =async()=>{
        try{
            const url=`${API_URL}/api/users/register`
            const result = await axios.post(url,user);
            setError("Registration successful!");
            Navigate("/login")

        }catch(err){

         console.log(err);
         setError("Failed to register. Please try again later.");
        }   
    }

  return (
    <div>
        <h2>Registration Form</h2>
        {error}
        <p>
            <input type="text"
            placeholder="First Name" 
            onChange={(e)=>setUser({...user, firstName: e.target.value})}/>
        </p>
        <p>
            <input type="text"
            placeholder="Last Name"
            onChange={(e)=>setUser({...user, lastName: e.target.value})} />
        </p>
        <p>
            <input type="email"
            placeholder="Email Address"
            onChange={(e)=>setUser({...user, email: e.target.value})} />
        </p>
        <p>
            <input type="password"
             placeholder="New Password"
             onChange={(e)=>setUser({...user, password: e.target.value})} />
        </p>
        <button onClick={handleSubmit}>Submit</button>
        <hr />
        <Link to="/login"> Already a member? Login Here...</Link>
    </div>
  )
}
