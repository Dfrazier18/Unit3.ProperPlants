/*export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <>
      <li>
        <figure>{item.image}</figure>
        <h3>{item.name}</h3>
      </li>
    </>
  );
}*/

import ItemQuantity from "./ItemQuantity";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <ItemQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
