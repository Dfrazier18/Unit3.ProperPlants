import { useState } from "react";
import PLANTS from "./data";
import Plant from "./Plant";
import "./plants.css";

export default function Plants({ addToCart }) {
  const [plants] = useState(PLANTS);

  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
