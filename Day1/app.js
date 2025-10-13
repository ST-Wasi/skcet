// function step1(callback) {
//   // Add to cart
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   // Checkout
//   setTimeout(() => {
//     console.l0g("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   // proceed to payment
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

// setTimeout(() => {
//   console.log("AFter 5 sec");
// }, 5000);

// 1. When code starts depending on callbacks
// 2. We have Nested callbacks OR Function inside a function
// 3. It Creates a structure like Pyramid of Doom

// 1. Promise is a Constructor Function
// 2. used with "new" Keyword
// 3. Promise accepts one parameter -> Callback Function
// 4. Callback function accepts 2 parameters -> resolve, reject

let promise = new Promise((resolve, reject) => {
  console.log("asd");
  resolve();
});

// 5. Promise returns an Object {
// .then()
// .catch()
// }
promise
  .then(() => {
    console.log("Promise is Resolved");
  })
  .catch(() => {
    console.log("Promise is Rejected");
  });