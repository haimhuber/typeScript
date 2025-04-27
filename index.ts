
// const greeting: string = "Hello from TypeScript!";
// console.log(greeting);

// const h1 = document.createElement("h1");
// h1.textContent = greeting;
// document.body.appendChild(h1);



// let age: number = 25;
// let fname: string = "Kate";
// let isStudent: boolean = true;


// function greet(name: string): string {
//     return "Hello, " + name;
// }
// console.log(greet("Kate"));


// filter: מחזיר מערך חדש עם אלמנטים שעוברים את התנאי שניתן
// const numbers = [1, 2, 3, 4, 5];


// // map: יוצר מערך חדש על ידי ביצוע פעולה על כל אלמנט במערך
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// const newNumber = numbers.map(num => num + 3);
// console.log(newNumber);

// const kidsNames = ["Dan", "Michel", "Kate", "Emma"];
// const welcomeKids = kidsNames.map(kids => "Welcome " + kids);
// console.log(welcomeKids);



// const cars = [
//     {
//         "manufacturer": "Mazda",
//         "model": "6",
//         "year": 2020,
//         "plate": "abc123"
//     },
//     {
//         "manufacturer": "Ford",
//         "model": "Focus",
//         "year": 2020,
//         "plate": "aaagb5"
//     },
//     {
//         "manufacturer": "Toyota",
//         "model": "Rav4",
//         "year": 2014,
//         "plate": "ghk111"
//     },
//     {
//         "manufacturer": "Mazda",
//         "model": "3",
//         "year": 2020,
//         "plate": "hse73j"
//     },
//     {
//         "manufacturer": "Subaru",
//         "model": "Outback",
//         "year": 2018,
//         "plate": "kdyb72"
//     },
//     {
//         "manufacturer": "Toyota",
//         "model": "Rav4",
//         "year": 2016,
//         "plate": "dzdi64"
//     },
//     {
//         "manufacturer": "Ford",
//         "model": "Focus",
//         "year": 2020,
//         "plate": "atg5aa"
//     },
//     {
//         "manufacturer": "Subaru",
//         "model": "Outback",
//         "year": 2019,
//         "plate": "oxt63c"
//     },
//     {
//         "manufacturer": "Toyota",
//         "model": "Rav4",
//         "year": 2014,
//         "plate": "eswi77"
//     },
//     {
//         "manufacturer": "Ford",
//         "model": "Focus",
//         "year": 2020,
//         "plate": "osr3h6"
//     },
//     {
//         "manufacturer": "Mazda",
//         "model": "3",
//         "year": 2020,
//         "plate": "wwjyx4"
//     },
//     {
//         "manufacturer": "Toyota",
//         "model": "Rav4",
//         "year": 2018,
//         "plate": "22i64d"
//     }
// ];

// // year > 2018
// const manufacturerCars = cars.map(manufacturer => manufacturer['year'] > 2018);
// console.log(manufacturerCars);

// // log all cars manufacturer - model - year
// // const manufacturerCars = cars.map(manufacturer => `${manufacturer['manufacturer']} ${manufacturer['model']} ${manufacturer['year']}`);
// // console.log(manufacturerCars);

// // Return Substring Ber/ber
// function showResult() {
//     const cities = ["London", "Berlin", "Paris", "Hulon", "Lyon", "Ontario", "Bern", "Beer Sheva", "Bermington"];
//     const lookFor = (document.getElementById("searchTyping") as HTMLInputElement).value;
//     const subUl = (document.querySelector("#showCurr") as HTMLElement);
//     const subli = document.createElement("li");
//     subUl.innerHTML = "";
//     const citiesWithBer = cities.filter(ber => (ber.toUpperCase().includes(lookFor.toUpperCase()) && lookFor !== ""));
//     for (let index = 0; index < citiesWithBer.length; index++) {
//         const subli = document.createElement("li");
//         subli.textContent = citiesWithBer[index];
//         subUl.appendChild(subli);
//     }

// }


// // Flex function that can get random amount of numbers
// function sum(...numbers: number[]): number {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // 15



// Type script excercises

// // 1)
// const boolVar: boolean = true;
// const numberVar: number = 15;
// const stringVar: string = "hello";
// // console.log(boolVar, numberVar, stringVar);

// // 2)
// function sumOf2Numbers(num1: number, num2: number) {
//     return num1 + num2;
// };
// // console.log(sumOf2Numbers(15, 50));

// // 3)
// function filterArray() {
//     const numbers = [15, 25, 56, 10, 8, 9, 7, 6, 2, 1];
//     const filterdNumbers = numbers.filter(num => num < 10);
//     console.log(filterdNumbers);
// }
// // filterArray();

// // 4)
// function defalutValue(srt: string = "hello world") {
//     return srt;
// }

// // console.log(defalutValue());

// // 5)
// class Book {
//     bookName: string = "NA";
//     author: string = "NA";
//     numOfPages: number = 0;
//     constructor(book: string, author: string, pages: number) {
//         this.bookName = book;
//         this.author = author;
//         this.numOfPages = pages;
//     }

//     getSummaty() {
//         return `${this.bookName} is written by ${this.author} and has ${this.numOfPages} pages`;
//     }
// }

// const book1 = new Book("The jungle", "Haim Huber", 30);
// // console.log(book1.getSummaty());

// // 6)
// function multiBy3() {
//     const numbers = [10, 60, 58, 2, 3, 4, 6, 9, 25];
//     const multiNumbers = numbers.map(num => num * 3);
//     return multiNumbers;
// }
// //console.log(multiBy3());


// // 7)
// function reduceMethod() {
//     const numbers = [10, 60, 58, 2, 3, 4, 6, 9, 25];
//     const multiNumbers = numbers.reduce((acc, num) => acc * num, 1);
//     return multiNumbers
// }

// //console.log(reduceMethod());


// //8)
// function avg(...numbers: number[]): number {
//     const sunMunbers = numbers.reduce((acc, num) => acc + num, 0);
//     return sunMunbers / numbers.length;
// }

// //console.log(avg(1, 5, 6, 9, 100));


// //9)

// class Product {
//     name?: string;
//     constructor(name: string = "NA") {
//         this.name = name;
//     }

//     getProductName() {
//         return this.name;
//     }
// }

// const product1 = new Product();
// console.log(product1);


// //10)
// const product = (document.querySelector("#productNum") as HTMLElement);
// const showProduct = document.createElement('h3');
// showProduct.textContent = `This is your Product: ${product1.name}`;
// product.appendChild(showProduct);


// // <----------------------------------------------->
// // Classes 

// class MarathonRun {
//     name: string = "";
//     city: string = "";
//     year: number = 0;
//     month: number = 0;
//     day: number = 0;
//     bestResult: number = 0;
//     secondBestResult: number = 0;
//     thirdBestResult: number = 0
//     firstPlaceRunnerName: string = "";
//     secondPlaceRunnerName: string = "";
//     thirdPlaceRunnerName: string = "";

//     diffBetweenBestAndSecond() : number {
//         return this.bestResult - this.secondBestResult;
//     } 

//     diffBetweenThisRunBestResultAndOtherRunBestResult(otherRun: MarathonRun) : number {
//         return this.bestResult - otherRun.bestResult;
//     }
// }

// const marathon1 = new MarathonRun();
// const marathon2 = new MarathonRun();

// marathon1.name = "Haim";
// marathon1.city = "Haifa";
// marathon1.year = 2025;
// marathon1.month = 6;
// marathon1.day = 29;
// marathon1.bestResult = 23;
// marathon1.secondBestResult = 25;
// marathon1.thirdBestResult = 27;
// marathon1.firstPlaceRunnerName = "Haim";
// marathon1.secondPlaceRunnerName = "Yotam";
// marathon1.thirdPlaceRunnerName = "Joohny";


class Car {
    howManyDoors: number;
    manufacturer: string;
    modelName: string;
    year: number;
    plate: string;
    price: number;

    constructor(howManyDoors: number, manufacturer: string, modelName: string, year: number, plate: string, price: number) {
        this.howManyDoors = howManyDoors;
        this.manufacturer = manufacturer;
        this.modelName = modelName;
        this.year = year;
        this.plate = plate;
        this.price = price;
    }

    priceReduction(discountPercentage: number): number {
        if (discountPercentage >= 10 && discountPercentage <= 25) {
            return this.price * (1 - discountPercentage / 100);
        } else {
            return this.price; // No discount if out of range
        }
    }

    toString(): string {
        return `${this.manufacturer} - ${this.modelName} has ${this.howManyDoors} doors. The year is ${this.year}, plate name: ${this.plate} and the price is: ${this.price}`;
    }

}


const car1 = new Car(5, "Suzuki", "Super Swift", 2024, "30211205", 120000);
const car2 = new Car(5, "Kia", "Nero", 2024, "36521204", 150000);

console.log(car1.toString());











