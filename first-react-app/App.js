
import './App.css';
import {useState} from 'react';
// import {User} from './User';

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count+1)
  }
  const countDecrease = () => {
    setCount(count-1)
  }
  const countToZero = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <button onClick={countIncrease}> Increase</button>
      <button onClick={countDecrease}> Decrease</button>
      <button onClick={countToZero}> Set to Zero</button>
      {count}
      </div>
  )
}

export default App;





// function App() {
//   const [textColor, setTextColor] = useState("black");
//   return (
//     <div className="App">
//       <button
//         onClick = {()=> {
//           setTextColor(textColor==="black"?"white":"black")
//         }}

//       >
//         Show/Hide
//       </button>
//       <h1 style={{color:textColor}}> Hi I am Tirth Hihoriya</h1>

//     </div>
//   )
// }


// function App() {

//   const name = "Tirth";
//   return (
//     <div className="App">
//       <User name="Tirth" age={21}/>
//       <User name="Rohit" age={20}/>
//       <User name="Khushal" age={16}/>
//     </div>
//   );
// }

// const User = (props) => {

//   return(
//     <div> 
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   )
// }

// export default App;




// function App() {

//   const age = 15;
//   const isGreen = true;

//       return (
//         <div>
//         {age >=18 ? <h1>Above age</h1> : <h1> Under age</h1>}
//         <h1 style={{color: isGreen?"green": "red"}}> Hi this is color</h1>
//         {isGreen && <button>This is button</button>}
//         </div>
//       );


// }



// function App(){
//   // const names = ['Tirth', 'Rohit', 'Virat'];
//   const usernames = [
//     {name:"Tirth",age:21},
//     {name:"Rohit",age:15},
//     {name:"Virat",age:1}
//   ]
//   return (
//     <div className="App">
//       {/* {names.map((value, key)=>{
//         return <h1> {value}  {key}</h1>

//       })} */}

//       {usernames.map((user, key) => { return  <User name={user.name} age= {user.age} />}) }
   
//     </div>
//   )


// }





// function App() {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age+1);
//   }

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }
  

//   const [inputValue, setInputValue] = useState("");
//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange}/>
//       <h1>{inputValue}</h1>
//       {/* {age}
//       <button onClick={increaseAge}>increage age</button> */}
//     </div>
//   )
// }