import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
var person = {
  name : "Rahadul Haq",
  job : "singer"
}
var person2 = {
  name : "Hasibul",
  job : "Islam"
}
var style={
  color: 'red',
  backgroundColor:'yellow'
}
function App() {
  const nayoks = ['Anwar','Jafor','Alomgir','Salman']
  const products = [
    {name: 'Photoshop',price:'$90,99'},
    {name: 'Illustrator',price:'$60,99'},
    {name: 'PDF  Reader',price:'$10,99'}
  
  ]

  const productNames = products.map( product => product.name)
  return (
    <div className="App">
      <header className="App-header">
        <p>Reasonable React</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <product product={pd}></product>)
        }
        <product product={products[0]}></product>
        <product product={products[1]}></product>
        <Person name="Rahadul Haq" age= "24"></Person>
        <Person  name="Dirilis Ertugul" age="44"></Person>
        <Person name={nayoks[0]}></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(props){
const productStyle ={
  border:"1px solid gray",
  margin: "10px",
  padding:"30px",
  color:"tomato",
  borderRadius: "5px",
  width:"200px",
  height: "200px",
  float: "left",
  backgroundColor: 'lightgray'
}
console.log(props)

  return (
    <div style={productStyle}>
    <h1>Name: {props.name}</h1>
    <h3>How are you?</h3>
  </div>
  )
}

function Counter()
{
    const [count, setCount] = useState(10);
 
  return(
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={ () =>  setCount(count + 1)}>Increase</button>
    </div>
    
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
      setUsers(data);
     
    })
  },[])
  console.log(users)
  return(
    <div>
      <h3>Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
