export default function Plant({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h2>{plant.name}</h2>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
