import { CustomerEx } from './exampleInterface';
import { Observable } from 'rxjs';

console.log("Hellow World");
let x: number = 3;
let ys: Array<number>  = [ 1, 2, 3 ]; 
let yz = [5, 6, 7, ...ys, 66, 77];

console.log(yz);

let napis = `liczba x = ${x}`
console.log(napis);

let napis2 = `liczba x = ${x}, ${ys[1] + 8}`
console.log(napis2);

function Welcome(name: string, age?: number, high = 170): string{
    return `Welcome ${name}, ${age}, ${high}`;
}
console.log(Welcome("Jan", 35));

function WelcomeAll(...names: string[]): string{
    return `Welcome ${names.join(", ")}`;
}
console.log(WelcomeAll("Jan", "Bodo"));

function GetWelcome(name: string): string{
    return `Welcome ${name}`;
}
let welcomes: Array<string> = ["Bodo", "Jan"].map(GetWelcome)
console.log(welcomes);

let welcomesArrow: Array<string> = ["Bodo", "Jan"].map(n => `Welcome ${n}`);
console.log(welcomesArrow);

for (let item of ys){    // for (let item in ys) -iteruje po index arraya, problemy po zmodyfifkowaniu arraya, lepiej nie używać
    console.log(item);
}

let jan = new CustomerEx("Jan", 48);
console.log(jan);
