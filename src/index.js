import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Restaurant</h1>
    </header>
  );
}
function Menu() {
  const newPizzaData = pizzaData;
  if (newPizzaData.length <= 0) return <p>No Available pizzas, Now!</p>;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {newPizzaData.map((p) => (
          <Pizza pizzaObj={p} key={p.name} />
        ))}
      </ul>
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (props.pizzaObj.soldOut === true) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="spinaci pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span
          style={pizzaObj.soldOut ? { textDecoration: "line-through" } : {}}
        >
          {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openning = 1;
  const closing = 10;
  console.log(hour);
  let isOpen = hour >= openning && hour < closing;
  if (!isOpen) return <p> We 're sorry, we closed Now!</p>;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openning={openning} />
      ) : (
        <p>We 're Sorry as we closed Now!</p>
      )}
    </footer>
  );
}
function Order({ openning }) {
  return (
    <div className="order">
      <p> {openning}:00 Am we 're currently opening!</p>
      <button className="btn">order now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
