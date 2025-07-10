import "./Home.css"
export default function Home({name,age}){
  let id=16766                                       //local variable
  return (
  <>
    <h1 style={{backgroundColor:"green",color:"white"}}>Hello {name} !! Age is {age} years old.</h1>
    <h2 className="App-Home-Header">Your Student id is {id}</h2>
    <p>This is a paragraph</p>
  </>
);
}