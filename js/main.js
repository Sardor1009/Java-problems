// let n = 54;
// let k = 12;
// let i;
// let r;
// while() {
//   i = parseInt(n / k);
//   r = n % k;
// }
// console.log("Butun qismi: ", i)
// console.log("qoldiq qismi: ", r)

// classwork

// let n = 2;

// for (let i = n; i >= 1; i--) {
//   let stars = "";
//   // adding space
//   for (let k = 1; k <= n - i; k++) {
//     stars += " ";
//   }
//   // adding stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     stars += "*";
//   }
//   console.log(stars);

// let a = 8;
// let b = 4;

// for (let i = a; i >= 1; i--){
//     let stars = "";
//     for (let j = 1; j < i;  j++){
//         stars += "*"
//     }
// }
// console.log(stars)

// let a = 23;
// let c = 0;

// for (let i = 1; i <= a; i++) {
//   if (a % i === 0) {
//     c = c + 1;
//   }
// }

// if (c === 2) {
//   console.log("Tub");
// } else {
//   console.log("Tub emas");
// }

// pr1

// let a = 23;
// let b = 25;
// let c = 0;
// if(b > a){
//    for(let i = a; i <= b; i++){
//     console.log(i)
//     c++;
//    }
//console.log("sonlar soni", c, "ta")
// }
// else {
//console.log( "b should be bigger than a")
// }

// pr2

// let a = 21;
// let b = 25;
// let c = 0;
// if(b > a){
//    for(let i = b; i >= a; i--){
//     console.log(i)
//     c++;
//    }
//    console.log("sonlar soni", c, "ta")
// }
// else {
//    console.log( "b should be bigger than a")
// }

// pr3

// let kg = 200;

// for(let i = 1; i <= 10; i++){
//     console.log(kg * i)
// }

// pr4

// let kg = 1000;

// for(let i = 12; i <= 20; i += 2){
//     console.log(kg * i / 10)
// }

// pr5

// let a = 1;
// let b = 9;
// let sum = 0;
// if(b > a){
//    for(let i = b; i >= a; i--){
//     sum += i;
//    }
//    console.log("Yigindisi", sum)
// }
// else {
//    console.log( "b should be bigger than a")
// }

// pr6

// let a = 1;
// let b = 5;
// let sum = 1;
// if(b > a){
//    for(let i = b; i >= a; i--){
//     sum *= i;
//    }
//    console.log("Kopaytmasi", sum)
// }
// else {
//    console.log( "b should be bigger than a")
// }

// pr7

// let a = 1;
// let b = 4;
// let sum = 0;
// if(b > a){
//    for(let i = b; i >= a; i--){
//     sum += i ** 2;
//    }
//    console.log("Kvadratlari Yigindisi", sum)
// }
// else {
//    console.log( "b should be bigger than a")
// }

// pr8

// let n = 11;
// sum = 0;
// for( let i = 10; i <= n * 10; i++){
//     sum += i;
// }
// console.log(sum);

// pr9

// let n = 11;
// sum = 1;
// for( let i = 10; i <= n * 10; i++){
//     sum *=  (i / 10);
// }

// console.log(sum);

// pr10

// let  n = 11;
// sum = 0;
// for (i = 1; i <= 2 * n - 1; i += 2){
//     sum += i;
// }
// console.log(sum)

// pr11

//  let a = +prompt("Enter a real number");
//  let n = +prompt("Enter an integer");

// let sum = 1;
// if (parseInt(n) === n && n > 0) {
//   for (let i = 1; i <= n; i++) {
//     sum = sum * a;
//   }
//   console.log(sum);
// } else if (parseInt(n) === n && n < 0) {
//   for (let i = n; i < 0; i++) {
//     sum = sum / a;
//   }
//   console.log(sum);
// }
// else if ( n === 0){
//     console.log(1);
// }
// else {
//   console.log("Wrong insertion:");
// }

// pr12

// let a = 12;
// let n = 3;
// let sum = 1;

// if (n > 0 && parseInt(n) === n){

//     for(let i = 1; i <= n; i++ ){
//         sum *= a;
//         console.log(sum)
//     }
// }
// else{
//     "Wrong insertion: "
// }

// pr13

// let a = 12;
// let n = 2;
// let mul = 1;
// sum = 0;

// if (n > 0 && parseInt(n) === n){

//     for(let i = 1; i <= n; i++ ){
//         mul *= a;
//         sum += mul;
//     }
//     console.log(sum)
// }
// else{
//     "Wrong insertion: "
// }

// pr14

// let n = 4;
// sum = 0;
// mul = 1;
// if(n > 0){
//     for(let i = 1; i <= n; i++){
//         mul *= i;
//         sum += mul;
//     }
//     console.log(sum)
// }
// else{
//     "Wrong insertion: "
// }

// pr15

// let N = 4;
// let K = 5;
// let res;
// let sum = 0;

// for (let i = 10; i <= N * 10; i += 10){
//     res = (i / 10) / K;
//     sum += res;
// }
// console.log(sum)

// PR16

// let N = -3;
// if (N > 0){
//     let sum = 0;
//     for (let i = 1; i <= N; i++){
//         sum += i ** 2;
//     }
//     console.log(sum)
// }
// else{
//     console.log("Wrong insertion...")
// }

// pr17

// let A = 21;
// let B = 24;
// if (B > A && parseInt(A) === A && parseInt(B) === B) {
//  for (i = A; i <= B; i++){
//     for(j = 0; j< 1; j++ ){
//         console.log(i)
//     }
//  }

// } else {
//   console.log("Wrong insertion...");
// }
// function chiqarButunSonlar(A, B) {
//     for (i = A; i <= B; i++) {
//         for (j = 0; j < i; j++) {
//             console.log(i);
//         }
//     }
// }

// // Misol:
// chiqarButunSonlar(1, 3);

// pr18
