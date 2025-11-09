import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const todos = ["დავალება 1", "დავალება 2", "დავალება 3"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header title="მოგესალმები ჩემს აპში!" />

      <Card>
        <h3>პროდუქტები:</h3>
        <Product price={49.99} inStock={true} />
        <Product price={120} inStock={false} />
      </Card>

      <Card>
        <h3>დავალებების სია:</h3>
        <TodoList todos={todos} />
      </Card>

      <Card>
        <h3>ღილაკის მაგალითი:</h3>
        <Button onClick={() => alert("ღილაკი დაჭერილია!")} />
      </Card>
    </div>
  );
}

export default App;
