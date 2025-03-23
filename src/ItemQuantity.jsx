/*export default function ItemQuantity({ quantity }) {
  return (
    <>
      <button onClick={() => (quantity += 1)}>+</button>
      <p>{quantity}</p>
      <button>-</button>
    </>
  );
}*/

export default function ItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="item-quantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
