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
let myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log('myFavoriteNumber', myFavoriteNumber)
myFavoriteNumber = 7;
console.log('myFavoriteNumber', myFavoriteNumber)


// 2、类型断言
// 类型断言有两种形式:第一种是“尖括号”语法：
// @ts-ignore
let someValue: any = "this is a string";
// @ts-ignore
let strLength: number = (<string>someValue).length;
console.log('strLength', strLength)
// 第二种为as语法：两种形式是等价的。然而当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
// @ts-ignore
let someValue: any = "this is a string";
// @ts-ignore
let strLength: number = (someValue as string).length;
console.log('strLength', strLength)


// 3、数据类型

// any类型(默认类型)
let number:any = 12
number +="5"
console.log('number', number)


// symbol类型的值是通过Symbol构造函数创建的
let sym1 = Symbol();
Symbol("key");
// 可选的字符串key
// Symbols是不可改变且唯一的。
let sym2 = Symbol("key");
let sym3 = Symbol("key");
console.log('symbols',sym2 === sym3);


// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser()


// 定义数组有两种方式:
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list1: number[] = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
let list2: Array<number> = [1, 2, 3];
console.log('list1',list1);
console.log('list2',list2);


// 使用枚举类型可以为一组数值赋予友好的名字
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log('枚举c', c);


// 元祖定义一对值分别为 string和number类型的元组
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error


// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}


// 使用object类型，就可以更好的表示像Object.create这样的API,如下
declare function create(o: object | null): void;
// create({ prop: 0 })// OK
// create("string")


// 联合类型
// @ts-ignore
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log('myFavoriteNumber', myFavoriteNumber);
myFavoriteNumber = 7;
console.log('myFavoriteNumber', myFavoriteNumber);

