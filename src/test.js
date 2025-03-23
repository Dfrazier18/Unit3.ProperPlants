const cart = [
  { name: "cactus", id: 1, image: "image_cactus", quantity: 0 },
  { name: "fern", id: 2, image: "image_fern", quantity: 0 },
];
function addToCart(plant) {
  if (plant.quantity === 0) {
    plant.quantity += 1;
    cart.push(plant);
  } else {
    plant.quantity += 1;
  }
}
addToCart();
