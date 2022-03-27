

// interface Address {
//     street: string
//     city: string
// };

// enum CustomerType {
//     Standard,
//     Premium = 7,
//     VIP
// };

//console.log(`Welcome ${CustomerType.Premium}`)  // wynik 7
//console.log(`Welcome ${CustomerType[CustomerType.Premium]}`)  //zwraca Premium

export class CustomerEx {

    constructor (public name: string, public age: number){};

    welcome() :string
    {
        return `Hello ${ this.name}, ${this.age}`;
    }
}

let customer = new CustomerEx("Bodo", 45);
console.log(customer.welcome());

let imiona: Array<string> = ["Bodo", "Jan", "Beata"];

let customers: Array<CustomerEx> = [new CustomerEx("Bodo", 45)];
