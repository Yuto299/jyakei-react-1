// function func1(str) {
//   return str;
// }

// console.log(func1('func1です'));

// const func1 = function (str) {
//   return str;
// };
// console.log(func1('func1です'));

// const func1 = (str) => {
//   return `受け取った文字は${str}です`;
// };
// console.log(func1('func1です'));

// const func2 = (a, b) => {
//   return a + b;
// };
// console.log(func2(1, 2));

// const myProfile = {
//   name: 'yuto',
//   age: 21,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['ゆと', 21]; //配列です
// const message1 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message1);

// const [name, age] = myProfile; //分割代入です
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん!`);
// sayHello('ゆと');

// const myProfile = {
//   age: 31,
// };
// const { age, name = 'ゲスト' } = myProfile;
// console.log(age); // 31
// console.log(name); // undefined

// const name = 'ゆと';
// const age = 21;

// const myProfile = {
//   name,
//   age,
// };
// console.log(myProfile); // { name: 'ゆと', age: 21 }

// const aray1 = [1, 2];
// // console.log(aray1); // [1, 2]
// // console.log(...aray1); // 1 2

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// // sumFunc(aray1[0], aray1[1]); // 3
// sumFunc(...aray1); // スプレッド構文

// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = array2;

// console.log(num1); // 1
// console.log(num2); // 2
// console.log(num3); // [3, 4, 5]

// const array3 = [10, 20];
// const array4 = [30, 40];

// const array5 = [...array3];
// // console.log(array5); // [10, 20]

// const array6 = [...array3, ...array4];
// console.log(array6); // [30, 40, [10, 20]]

// const nameArray = ['田中', '山田', '佐藤'];
// for (let index = 0; index < nameArray.length; index++) {
//   console.log(`${index + 1}番目は${nameArray[index]}です`);
// }

// nameArray.map((name) => {
//   return name;
// });
// console.log(nameArray);

// const numArry = [1, 2, 3, 4, 5];
// const newNumArry = numArry.filter((num) => {
//   return num % 2 === 0; //filterの時は条件式を書く
// });
// console.log(newNumArry); // [1, 3, 5]

// const nameArray = ['田中', '山田', '佐藤'];
// const newNameArray = nameArray.map((name) => {
//   if (name !== '佐藤') {
//     return `${name}さん、こんにちは！`;
//   } else {
//     return `${name}、こんにちは！`;
//   }
// });
// console.log(newNameArray); //配列じゃないとmapは使用できない

// const val = 1 > 0 ? 'true' : 'false'; //三項演算子
// console.log(val); // true

// const num = '1300';
// console.log(num.toLocaleString()); // 文字列の時は使用できない

// const formatNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatNum); // 数値が数字かどうかを確かめている

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲です';
};
console.log(checkSum(40, 60)); // 100を超えています
