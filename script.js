function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === productName);
  if (index > -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ name: productName, price: productPrice, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " 장바구니에 담김!");
}
