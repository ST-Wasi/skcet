function proceedToPayment() {
  console.log("Payment Done");
}

function checkout() {
  console.log("Please Sleect the payment method");
  proceedToPayment();
}
function addTocart() {
  console.log("Item Added to cart");
  checkout();
}

addTocart();
