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

const name = 'ゆと';
const age = 21;

const myProfile = {
  name,
  age,
};
console.log(myProfile); // { name: 'ゆと', age: 21 }
