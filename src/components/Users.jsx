import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function Users() {
    const [users,setUsers]=useState([])
    const [error, setError]=useState(null)
    const API_URL=import.meta.env.VITE_API_URL

    const fetchUsers = async()=>{
      try{
        setError("Loading...")
        const url=`${API_URL}/api/users/showusers`
        const result = await axios.get(url)
        setUsers(result.data);
        setError()
      }catch(err){
        console.log(err)
        setError("Failed to fetch users. Please try again later.")
      }
    };

    useEffect(()=>{
        fetchUsers();
    },[])

    const handleDelete = async (id) => {
    try {
      const url = `${API_URL}/api/users/${id}`;
      const result = await axios.delete(url);
      setError("User deleted successfully");
      fetchUsers();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

    return (
    <div>
          {error && <p>{error}</p>}
     <ul>
         {users.map(user => (
         <li key={user._id}>{user.firstName} 
         <button onClick={() => handleDelete(user._id)}>Delete</button>
         </li>
          ))}
     </ul>
    </div>
  )
}
