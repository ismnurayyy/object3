// TASK 1
// setInterval(() => {
//   let brithday = new Date("03-28-2024");
//   let now = new Date();
//   between = now - brithday;
//   gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//   saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//   saniye = Math.trunc((between / 1000) % 60);
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
// //   let color = Math.floor(Math.random() * 1000000);
//   console.log(
//     `%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,
//     `color: #${color}`
//   );
// }, 1000);

// [green, blue, red]
// #FFFFFF
// rgb(255, 255, 255)

// TASK 2
// h he hel hell hello
// hell hel he h

// let text = prompt("Enter text: ");
// let i = 0;
// let direction = true;
// // hello i === o
// let interval = setInterval(() => {
//   if (i === text.length) {
//     direction = false;
//   }

//   if (i === 1) {
//     direction = true;
//   }

//   if (direction) {
//     i++;
//   } else {
//     // hello -- hell -- hel -- he -- h
//     i--;
//     if (i === 1) {
//       clearInterval(interval);
//     }
//   }

//   console.log(text.slice(0, i));
// }, 200);

// []
// sum =

// TASK 3
// let products = [
//   {
//     id: 1,
//     name: "Iphone 14 Pro",
//     price: 900,
//   },
//   {
//     id: 2,
//     name: "BMW",
//     price: 20000,
//   },
//   {
//     id: 3,
//     name: "Samsung A70",
//     price: 600,
//   },
//   {
//     id: 4,
//     name: "Iphone 15 Pro Max", // iphone 15 pro max
//     price: 1500,
//   },
// ];

// // console.log(products);
// let search = prompt("Search: ").toLowerCase(); //Ip = ip
// let bosArray = [];
// let productFilter;
// // products.map((product)=> console.log(product.name))
// if (search === "baha") {
//   productFilter = products.filter((product) => product.price > 1000);
// } else if (search === "ucuz") {
//   productFilter = products.filter((product) => product.price < 1000);
// } else {
//   productFilter = products.filter((product) => {
//     product.name.toLowerCase().includes(search);
//   });
// }

// productFilter.map((a) => bosArray.push(a.name));
// console.log(bosArray.join(", ") + ".");
// console.log(productFilter);


// https://tap.az/database
