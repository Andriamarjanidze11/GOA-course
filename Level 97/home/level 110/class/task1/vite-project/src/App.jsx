import React from 'react'
import './App.css'

function WrongClass() {
  return (
    <div class="box">
      {/*  JSX-ში class არ მუშაობს*/}
      <p>ეს არ იმუშავებს სწორად</p>
    </div>
  );
}

function CorrectClass() {
  return (
    <div className="box">
      {/* JSX-ში ვიყენებთ 'className' */}
      <p>ეს იმუშავებს</p>
    </div>
  );
}

function SelfClosingExamples() {
  return (
    <div>
      <img src="logo.png" alt="₾ოგო" />
      <input type="text" /> 
      <br /> 
      <hr /> 
      <meta charSet="UTF-8" />
    </div>
  );
}

function CurlyBraceExamples() {
  const name = "Dudu";
  const age = 25;
  const isLoggedIn = true;
  const styles = { color: "blue" };
  const greet = () => "გამარჯობა!";

  return (
    <div>
      <p>{name}</p>
      <p>{age + 5}</p>
      <p>{age+2}</p>
      <p style={styles}>text</p>
      <p>{greet()}</p>
    </div>
  );
}

function VariableExamples() {
  const city = "tbilisi";
  const temp = 18;
  const user = { name: "Dudu", age: 25 };
  const items = ["apple", "watermelon"];

  return (
    <div>
      <h1>City: {city}</h1>
      <p>Weather: {temp}°C</p>
      <p>User: {user.name}</p>
      <p>item: {items[0]}</p>
      <p>item2: {items[1]}</p>
    </div>
  );
}



export default App
