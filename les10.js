// 1 - Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.

// function timeText() {
//     let time = Math.random() * 1000;    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, time)
//     })
// }

// async function printText() {
//     let inputedStr = 'Hello world';
//     for (let i = 0; i < inputedStr.length; i++) {
//         await timeText();
//         //console.log(inputedStr[i]);
//         document.write(inputedStr[i]);
//     }
// }

// printText();


// доп таска:
// 2 - отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов

// let arr = [4, 8, 3, 6, 5, 1, 7, 2]
// for (let i of arr) {
//     setTimeout(() => {
//         console.log(i)
//     }, i);
// };


// 3 - Знайти найбільший існуючий поліндром який може утворитися завдяки добутку двох простих пятизначних чисел.

// let arr = [];
// // created to check
// let arrPolin = [];
// let maxPalin = 0;
// let palindrom = {};

// function numberPrime(min, max) {
//     for (let item = max; item >= min; item--) {
//         let flag = true;
//         for (let y = 2; y <= item; y++) {
//             if (item % y === 0 && item !== y) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) {
//             arr.push(item);
//         }
//     }
//     return arr;
// }

// let arrNum = numberPrime(10000, 99999);

// for (let i = 0; i < arr.length; i++) {
//     for (let y = i + 1; y < arrNum.length; y++) {
//         let temp = arrNum[i] * arrNum[y];
//         let strTemp = String(temp);
//         let flag = true;
//         for (let z = 0; z <= strTemp.length / 2; z++) {
//             if (strTemp[z] !== strTemp[strTemp.length - z - 1]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) {
//             if (maxPalin < temp) {
//                 palindrom.first = arrNum[i];
//                 palindrom.second = arrNum[y];
//                 palindrom.maxNumber = temp;
//                 maxPalin = temp;
//             }
//             arrPolin.push(temp);
//         }
//     }

// }


// // console.log(arrPolin.sort());
// console.log(palindrom);

// let div = document.createElement('div');
// let h2 = document.createElement('h2');
// let p = document.createElement('p');
// h2.innerText = ` max Palindrom number - ${palindrom.maxNumber}`;
// p.innerText = `first Prime number - ${palindrom.first}; second Prime number - ${palindrom.second}`; 

// div.appendChild(h2);
// div.appendChild(p);
// document.body.appendChild(div);