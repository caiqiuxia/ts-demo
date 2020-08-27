"use strict";
// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = "Jane User";
//
// document.body.innerHTML = greeter(user);
// 数据类型
// js
// let number = 12
// ts
// 1、类型推论
// @ts-ignore
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log('myFavoriteNumber', myFavoriteNumber);
myFavoriteNumber = 7;
console.log('myFavoriteNumber', myFavoriteNumber);
// 2、类型断言
// 类型断言有两种形式:第一种是“尖括号”语法：
// @ts-ignore
var someValue = "this is a string";
// @ts-ignore
var strLength = someValue.length;
console.log('strLength', strLength);
// 第二种为as语法：两种形式是等价的。然而当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
// @ts-ignore
var someValue = "this is a string";
// @ts-ignore
var strLength = someValue.length;
console.log('strLength', strLength);
// 3、数据类型
// any类型(默认类型)
var number = 12;
number += "5";
console.log('number', number);
// symbol类型的值是通过Symbol构造函数创建的
var sym1 = Symbol();
Symbol("key");
// 可选的字符串key
// Symbols是不可改变且唯一的。
var sym2 = Symbol("key");
var sym3 = Symbol("key");
console.log('symbols', sym2 === sym3);
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
// 定义数组有两种方式:
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
var list1 = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
var list2 = [1, 2, 3];
console.log('list1', list1);
console.log('list2', list2);
// 使用枚举类型可以为一组数值赋予友好的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log('枚举c', c);
// 元祖定义一对值分别为 string和number类型的元组
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// create({ prop: 0 })// OK
// create("string")
// 联合类型
// @ts-ignore
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log('myFavoriteNumber', myFavoriteNumber);
myFavoriteNumber = 7;
console.log('myFavoriteNumber', myFavoriteNumber);
