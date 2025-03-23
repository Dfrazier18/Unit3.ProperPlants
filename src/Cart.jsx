/*import { useState } from "react";
import Counter from "./counter";

export default function Cart() {
  return (
    <section className="cart">
      <h1>Cart</h1>
      {plants.image}
      {plants.name}
      <button>-</button>
      <Counter />
      <button>+</button>
    </section>
  );
}

[cart, setCart]= useState([])?

function addToCart(){
  
}

function removeFromCart(){}
*/

import CartItem from "./CartItem";
import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
