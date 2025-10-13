// let promise = new Promise((resolve, reject) => {
//   console.lg("sfsdf");
//   resolve();
// });

// promise
//   .then(() => {
//     console.log("Resolve");
//   })
//   .catch(() => {
//     console.log("Rejected");
//   })
//   .finally(() => {
//     console.log("End");
//   });

// async function Sum() {
//   return 10;
// }

// console.log(Sum());

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.lg("ad");
//     let data = await response.json();
//     console.log("✌️data --->", data);
//   } catch (err) {
//     console.log("SOme Error");
//   }
// }
// getData();

// De-Structuring from Object

let obj = {
  name: "WASI",
  age: 99,
};
let { name: n, age: B } = obj;
console.log("✌️name --->", n, B);

// let obj = {
//   name: "WASI",
//   age: 99,
// };
// console.log({
//   ...obj,
//   name: "Sagar",
// });
