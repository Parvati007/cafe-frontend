import React from "react";
// export default function Temp({flag}){

//     // return flag ? <h1>Flag is true</h1> : <h1>Flag is false</h1>;

//     // if(flag) return <h1>Flag is true</h1>;
//     // else return <h1>Flag is false</h1>;

//     // return flag && <h1>Flag is true</h1>;
// }

//EVENTS----------------------------------------------------------------------

// export default function Temp() {

//      const handleClick =()=>{
//         alert("Hello World!");
//      }
//      const handleSubmit=(name)=>{
//         alert(`Hello ${name}`);
//      }
//   return (
//     <div>
//         <button onClick={handleClick}>Click</button>
//         {/* passing the arguments to handleSubmit function */}
//         <button onClick={()=>handleSubmit("John")}>Submit</button>
//     </div>
//   )
// }

//HOOKS---------------------------------------------------------------------
import {useState} from'react';
export default function Temp() {
    
  const [score,setScore]= useState(0);
  
  const updateScore =()=>{
    setScore(score+1);
  }
  const Decrease=()=>{
    setScore(score-1);
  }

  return (
  <div>
    {score}
    <p>
    <button onClick = {updateScore}>UpdateScore</button>
    <button onClick ={Decrease}>Decrease</button>
    </p>
  </div>

  );
}



