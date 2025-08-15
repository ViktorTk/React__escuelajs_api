'use client';

import logo from './logo.svg';
import './App.css';



const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]


async function asss () {
  let arrObj = await fetch("https://fakestoreapi.in/api/products");
  let dataArObj = await arrObj.json();

  console.log(dataArObj.products.title);
  return dataArObj.products.map(el => {
    <div>
      <p>{el.title}</p>
    </div>
  })
}  

// let arrObj = await fetch("https://fakestoreapi.in/api/products");
// let dataArObj = await arrObj.json();


function Ppp() {
let asd = "dseas"
fetch("https://fakestoreapi.in/api/products").then(v => v.json()).then(v => asd = v)


return <p>
    {asd}
  </p>
}


// console.log(Object.keys(data[0]))
// let headTable = Object.keys(data[0])

function App() {
  return (
    <div className="App">
      {/* <table>
        <thead>
          {headTable.map(key => (
            <th>{key}</th>
          ))}
        </thead>
        <tbody>
          {data.map(el => (
            <tr>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.gender}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <Ppp/>

      <div className='grid-card'>
        <asss />
      </div> 
    </div>
  );
}

export default App;
