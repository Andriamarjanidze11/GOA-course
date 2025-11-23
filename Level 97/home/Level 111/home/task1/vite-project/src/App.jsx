import { useState } from 'react'
import './App.css'

function App1() {
  const fruits = ["ვაშლი", "მსხალი", "ატამი"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function App2() {
  const users = [
    { id: 1, name: "ნინო" },
    { id: 2, name: "გიორგი" },
    { id: 3, name: "მარიამი" }
  ];

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>გამარჯობა, {user.name}!</p>
      ))}
    </div>
  );
}

function Product({ name, price }) {
  return <div>{name} - {price} ₾</div>;
}

function App3() {
  const products = [
    { id: 101, name: "ლეპტოპი", price: 2500 },
    { id: 102, name: "ტელეფონი", price: 1200 }
  ];

  return (
    <div>
      {products.map(p => (
        <Product key={p.id} {...p} />
      ))}
    </div>
  );
}

function App4() {
  const categories = [
    { id: 1, name: "ხილი", items: ["ვაშლი", "ბანანი"] },
    { id: 2, name: "ტექნიკა", items: ["ლეპტოპი", "ტელეფონი"] }
  ];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          <ul>
            {cat.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map(n =>
        n % 2 === 0 ? <p key={n}>{n} არის ლუწი</p> : <p key={n}>{n} არის კენტი</p>
      )}
    </div>
  );
}

const items = ["ხილი", "ბოსტნეული", "პური"];
const list = items.map((item, index) => <li key={index}>{item}</li>);

const users = [{id:1,name:"Nino"}, {id:2,name:"Gio"}];
const userList = users.map(user => <li key={user.id}>{user.name}</li>);

const categories = [
  {id:1, name:"Food", items:["Apple","Bread"]},
  {id:2, name:"Tech", items:["Laptop","Phone"]}
];
const categoryList = categories.map(cat => (
  <div key={cat.id}>
    <h3>{cat.name}</h3>
    <ul>
      {cat.items.map((i, idx) => <li key={idx}>{i}</li>)}
    </ul>
  </div>
));

function Product({id, name}) {
  return <div>{name}</div>;
}
const products = [{id:101,name:"TV"}, {id:102,name:"Radio"}];
const productList = products.map(p => <Product key={p.id} {...p} />);

const messages = ["hi", "wsp", "bye"];
const msgList = messages.map((msg, i) => <p key={`msg-${i}`}>{msg}</p>);

import React from "react";

const el1 = React.createElement("div", null, "Hello React");

const el2 = React.createElement("div", { className: "box" }, "Styled Div");

const el3 = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Item 1"),
  React.createElement("li", null, "Item 2")
);

function Greeting(props) {
  return React.createElement("h1", null, `Hello, ${props.name}`);
}
const el4 = React.createElement(Greeting, { name: "Andria" });

const el5 = React.createElement(
  "div",
  { id: "container" },
  React.createElement("h2", null, "Title"),
  React.createElement("p", null, "This is a paragraph."),
  React.createElement("button", { onClick: () => alert("Clicked!") }, "Click Me")
);


export default App
