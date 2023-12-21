import './App.css';
import SaleItem from "./Components/saleItem";
import { useState } from "react";

function App() {
  const person1={
    firstName:'Doe',
    lastName:"Jane",
    age:45,
    hairColor:"Black"
  }
  const person2={
    firstName:'Smith',
    lastName:"John",
    age:88,
    hairColor:"Brown"
  }
  const person3={
    firstName:'Fillmore',
    lastName:"Millard",
    age:50,
    hairColor:"Brown"
  }
  const person4={
    firstName:'Smith',
    lastName:"Maria",
    age:62,
    hairColor:"Brown"
  }
  return (
      <div className="App">
          <SaleItem prop={person1} />
          <SaleItem prop={person2} />
          <SaleItem prop={person3} />
          <SaleItem prop={person4} />
      </div>
  );
}

export default App;


// console.log("Button clicked"): quand on met juste cettle foction, le serveur va juste la lire
// () => console.log("Button clicked"): en mettant le arrow function, le serveur à ce niveau va l'exécuter
