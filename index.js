"use strict";
// // const greeting: string = "Hello from TypeScript!";
// // console.log(greeting);
// // const h1 = document.createElement("h1");
// // h1.textContent = greeting;
// // document.body.appendChild(h1);
// // let age: number = 25;
// // let fname: string = "Kate";
// // let isStudent: boolean = true;
// // function greet(name: string): string {
// //     return "Hello, " + name;
// // }
// // console.log(greet("Kate"));
// // filter: מחזיר מערך חדש עם אלמנטים שעוברים את התנאי שניתן
// // const numbers = [1, 2, 3, 4, 5];
// // // map: יוצר מערך חדש על ידי ביצוע פעולה על כל אלמנט במערך
// // const doubledNumbers = numbers.map(num => num * 2);
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// // const numbers = [1, 2, 3, 4, 5];
// // const newNumber = numbers.map(num => num + 3);
// // console.log(newNumber);
// // const kidsNames = ["Dan", "Michel", "Kate", "Emma"];
// // const welcomeKids = kidsNames.map(kids => "Welcome " + kids);
// // console.log(welcomeKids);
// // const cars = [
// //     {
// //         "manufacturer": "Mazda",
// //         "model": "6",
// //         "year": 2020,
// //         "plate": "abc123"
// //     },
// //     {
// //         "manufacturer": "Ford",
// //         "model": "Focus",
// //         "year": 2020,
// //         "plate": "aaagb5"
// //     },
// //     {
// //         "manufacturer": "Toyota",
// //         "model": "Rav4",
// //         "year": 2014,
// //         "plate": "ghk111"
// //     },
// //     {
// //         "manufacturer": "Mazda",
// //         "model": "3",
// //         "year": 2020,
// //         "plate": "hse73j"
// //     },
// //     {
// //         "manufacturer": "Subaru",
// //         "model": "Outback",
// //         "year": 2018,
// //         "plate": "kdyb72"
// //     },
// //     {
// //         "manufacturer": "Toyota",
// //         "model": "Rav4",
// //         "year": 2016,
// //         "plate": "dzdi64"
// //     },
// //     {
// //         "manufacturer": "Ford",
// //         "model": "Focus",
// //         "year": 2020,
// //         "plate": "atg5aa"
// //     },
// //     {
// //         "manufacturer": "Subaru",
// //         "model": "Outback",
// //         "year": 2019,
// //         "plate": "oxt63c"
// //     },
// //     {
// //         "manufacturer": "Toyota",
// //         "model": "Rav4",
// //         "year": 2014,
// //         "plate": "eswi77"
// //     },
// //     {
// //         "manufacturer": "Ford",
// //         "model": "Focus",
// //         "year": 2020,
// //         "plate": "osr3h6"
// //     },
// //     {
// //         "manufacturer": "Mazda",
// //         "model": "3",
// //         "year": 2020,
// //         "plate": "wwjyx4"
// //     },
// //     {
// //         "manufacturer": "Toyota",
// //         "model": "Rav4",
// //         "year": 2018,
// //         "plate": "22i64d"
// //     }
// // ];
// // // year > 2018
// // const manufacturerCars = cars.map(manufacturer => manufacturer['year'] > 2018);
// // console.log(manufacturerCars);
// // // log all cars manufacturer - model - year
// // // const manufacturerCars = cars.map(manufacturer => `${manufacturer['manufacturer']} ${manufacturer['model']} ${manufacturer['year']}`);
// // // console.log(manufacturerCars);
// // // Return Substring Ber/ber
// // function showResult() {
// //     const cities = ["London", "Berlin", "Paris", "Hulon", "Lyon", "Ontario", "Bern", "Beer Sheva", "Bermington"];
// //     const lookFor = (document.getElementById("searchTyping") as HTMLInputElement).value;
// //     const subUl = (document.querySelector("#showCurr") as HTMLElement);
// //     const subli = document.createElement("li");
// //     subUl.innerHTML = "";
// //     const citiesWithBer = cities.filter(ber => (ber.toUpperCase().includes(lookFor.toUpperCase()) && lookFor !== ""));
// //     for (let index = 0; index < citiesWithBer.length; index++) {
// //         const subli = document.createElement("li");
// //         subli.textContent = citiesWithBer[index];
// //         subUl.appendChild(subli);
// //     }
// // }
// // // Flex function that can get random amount of numbers
// // function sum(...numbers: number[]): number {
// //     return numbers.reduce((acc, num) => acc + num, 0);
// // }
// // console.log(sum(1, 2, 3, 4, 5)); // 15
// // Type script excercises
// // // 1)
// // const boolVar: boolean = true;
// // const numberVar: number = 15;
// // const stringVar: string = "hello";
// // // console.log(boolVar, numberVar, stringVar);
// // // 2)
// // function sumOf2Numbers(num1: number, num2: number) {
// //     return num1 + num2;
// // };
// // // console.log(sumOf2Numbers(15, 50));
// // // 3)
// // function filterArray() {
// //     const numbers = [15, 25, 56, 10, 8, 9, 7, 6, 2, 1];
// //     const filterdNumbers = numbers.filter(num => num < 10);
// //     console.log(filterdNumbers);
// // }
// // // filterArray();
// // // 4)
// // function defalutValue(srt: string = "hello world") {
// //     return srt;
// // }
// // // console.log(defalutValue());
// // // 5)
// // class Book {
// //     bookName: string = "NA";
// //     author: string = "NA";
// //     numOfPages: number = 0;
// //     constructor(book: string, author: string, pages: number) {
// //         this.bookName = book;
// //         this.author = author;
// //         this.numOfPages = pages;
// //     }
// //     getSummaty() {
// //         return `${this.bookName} is written by ${this.author} and has ${this.numOfPages} pages`;
// //     }
// // }
// // const book1 = new Book("The jungle", "Haim Huber", 30);
// // // console.log(book1.getSummaty());
// // // 6)
// // function multiBy3() {
// //     const numbers = [10, 60, 58, 2, 3, 4, 6, 9, 25];
// //     const multiNumbers = numbers.map(num => num * 3);
// //     return multiNumbers;
// // }
// // //console.log(multiBy3());
// // // 7)
// // function reduceMethod() {
// //     const numbers = [10, 60, 58, 2, 3, 4, 6, 9, 25];
// //     const multiNumbers = numbers.reduce((acc, num) => acc * num, 1);
// //     return multiNumbers
// // }
// // //console.log(reduceMethod());
// // //8)
// // function avg(...numbers: number[]): number {
// //     const sunMunbers = numbers.reduce((acc, num) => acc + num, 0);
// //     return sunMunbers / numbers.length;
// // }
// // //console.log(avg(1, 5, 6, 9, 100));
// // //9)
// // class Product {
// //     name?: string;
// //     constructor(name: string = "NA") {
// //         this.name = name;
// //     }
// //     getProductName() {
// //         return this.name;
// //     }
// // }
// // const product1 = new Product();
// // console.log(product1);
// // //10)
// // const product = (document.querySelector("#productNum") as HTMLElement);
// // const showProduct = document.createElement('h3');
// // showProduct.textContent = `This is your Product: ${product1.name}`;
// // product.appendChild(showProduct);
// // // <----------------------------------------------->
// // // Classes 
// // class MarathonRun {
// //     name: string = "";
// //     city: string = "";
// //     year: number = 0;
// //     month: number = 0;
// //     day: number = 0;
// //     bestResult: number = 0;
// //     secondBestResult: number = 0;
// //     thirdBestResult: number = 0
// //     firstPlaceRunnerName: string = "";
// //     secondPlaceRunnerName: string = "";
// //     thirdPlaceRunnerName: string = "";
// //     diffBetweenBestAndSecond() : number {
// //         return this.bestResult - this.secondBestResult;
// //     } 
// //     diffBetweenThisRunBestResultAndOtherRunBestResult(otherRun: MarathonRun) : number {
// //         return this.bestResult - otherRun.bestResult;
// //     }
// // }
// // const marathon1 = new MarathonRun();
// // const marathon2 = new MarathonRun();
// // marathon1.name = "Haim";
// // marathon1.city = "Haifa";
// // marathon1.year = 2025;
// // marathon1.month = 6;
// // marathon1.day = 29;
// // marathon1.bestResult = 23;
// // marathon1.secondBestResult = 25;
// // marathon1.thirdBestResult = 27;
// // marathon1.firstPlaceRunnerName = "Haim";
// // marathon1.secondPlaceRunnerName = "Yotam";
// // marathon1.thirdPlaceRunnerName = "Joohny";
// class Car {
//     howManyDoors: number;
//     manufacturer: string;
//     modelName: string;
//     year: number;
//     plate: string;
//     price: number;
//     constructor(
//         howManyDoors?: number,
//         manufacturer?: string,
//         modelName?: string,
//         year?: number,
//         plate?: string,
//         price?: number) {
//         this.howManyDoors = howManyDoors ?? 0;
//         this.manufacturer = manufacturer ?? "";
//         this.modelName = modelName ?? "";
//         this.year = year ?? 0;
//         this.plate = plate ?? "String";
//         this.price = price ?? 0;
//     }
//     priceReduction(discountPercentage: number): void {
//         if (discountPercentage >= 10 && discountPercentage <= 25) {
//             this.price *= (discountPercentage / 100);
//         } else {
//             this.price = this.price; // No discount if out of range
//         }
//     }
//     toString(): string {
//         return `${this.manufacturer} - ${this.modelName} has ${this.howManyDoors} doors. The year is ${this.year}, plate name: ${this.plate} and the price is: ${this.price}`;
//     }
// }
// class Truck extends Car {
//     howManyAxles: number;
//     maxLoadWeight: number;
//     currLoadWeight: number;
//     constructor(howManyDoors: number, manufacturer: string, modelName: string, year: number, plate: string, price: number, howManyAxles?: number, maxLoadWeight?: number, currLoadWeight?: number)
//      {
//         super(howManyDoors, manufacturer, modelName, year, plate, price);
//         this.howManyAxles = howManyAxles ?? 0;
//         this.maxLoadWeight = maxLoadWeight ?? 0;
//         this.currLoadWeight = currLoadWeight ?? 0;
//     }
//     howMuchCanLoadMore(): string {
//         const avalibleLoad = Math.abs(this.currLoadWeight - this.maxLoadWeight);
//         return `Avalible load: ${avalibleLoad}`;
//     }
//     toString(): string {
//         return super.toString() + " " + `Number of axels: ${this.howManyAxles}, Max load: ${this.maxLoadWeight}, Current load: ${this.currLoadWeight}`;
//     }
// }
// const truck1 = new Truck(5, "Suzuki", "Super Swift", 2024, "30211205", 120000, 8, 5000, 2500);
// console.log(truck1.howMuchCanLoadMore());
// console.log(truck1.toString());
// const car1 = new Car(5, "Suzuki", "Super Swift", 2024, "30211205", 120000);
// // const car2 = new Car(5, "Kia", "Nero", 2024, "36521204", 150000);
// console.log(car1.toString());
// // <----------------------------------------->
// class Repository<T> {
//     private items: T[] = [];
//     add(item: T): void {
//         this.items.push(item);
//     }
//     getAll(): T[] {
//         return this.items;
//     }
// }
// class Person {
//     name: string;
//     birthYear: number;
//     constructor(name: string, birthYear: number) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }
//     greet() {
//         return `Hello, my name is ${this.name} and i'm ${this.birthYear} year old`;
//     }
// }
// const numbersRepo = new Repository<Person>();
// numbersRepo.add(new Person('Haim', 34));
// numbersRepo.add(new Person('Or', 36));
// numbersRepo.add(new Person('Diana', 37));
// console.log(numbersRepo.getAll().map(p => p.greet()));
// < Person excerise >
// class Person {
//     static bodyTemp: Number = 36.5;
//     fname: string;
//     lname: string;
//     bYear: number;
//     constructor(fmane: string, lname: string, bYear: number) {
//         this.fname = fmane;
//         this.lname = lname;
//         this.bYear = bYear;
//     }
//     toString() {
//         return `My name is: ${this.fname} ${this.lname}. My age is ${this.bYear}. My body temp is ${Person.bodyTemp}`
//     }
// }
// console.log(Person.bodyTemp);
// const p1 = new Person('Haim', 'Huber', 1991);
// console.log(p1.toString());
// <------------------------------------------------------------------------------------>
// class Person {
//     public name: String;
//     private id: number;
//     protected birthYear: number;
//     constructor(name: string, id: number, birthYear: number) {
//         this.name = name;
//         this.id = id;
//         this.birthYear = birthYear;
//     }
//     get personId(): number {
//         return this.id;
//     }
// }
// class Student extends Person {
//     private studentId: number;
//     private grades: number[];
//     constructor(name: string, id: number, birthYear: number, studentId: number, grades: number[]) {
//         super(name, id, birthYear);
//         this.studentId = studentId;
//         this.grades = grades;
//     }
//     get studId() {
//         return this.studentId;
//     }
//     set studentGrades(grade: number) {
//         if (grade >= 0 && grade <= 100) {
//             this.grades.push(grade);
//         }
//     }
//     getAvgGrade() {
//         let sumGrades = this.grades.reduce((prevSum, curr) => prevSum + curr, 0);
//         let avgGrades = sumGrades / this.grades.length;
//         if (avgGrades > 0) {
//             return avgGrades;
//         }
//         else {
//             return 0;
//         }
//     }
//     getSummary() {
//         return `${this.name}, ${this.birthYear}, ${this.getAvgGrade()}`
//     }
// }
// let p1 = new Student("Haim", 305062428, 1991, 200144568, [100, 50, 85, 95, 78]);
// console.log(p1, p1.getSummary());
// <--- Horasha --->
// Task 1: Create a base class called POI with private fields:
// name: string, latitude: number, longitude: number - DONE
// Task 2: Add public getters and setters for each field in POI
// Add basic validation where appropriate - DONE
// Task 3: Add a method toString() in POI that returns a string with all fields - DONE
// Task 4: Create a class RestaurantPOI that extends POI
// Add private fields: cuisineType: string, rating: number (0–5)
// Task 5: Add getters and setters for RestaurantPOI fields with validation
// Task 6: Override toString() in RestaurantPOI to include the extra fields
// Task 7: Create a class VistaPointPOI that extends POI
// Add a private field: viewDescription: string
// Task 8: Add getter and setter for viewDescription
// Implement toString() accordingly
// Task 9: Create a class NaturalReservePOI that extends POI
// Add private fields: protectedArea: boolean, entryFee: number
// Task 10: Add getters/setters with validation + override toString()
// Create at least one instance of each class and print their details using toString()
class POI {
    constructor(name, latitude, longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    get checkName() {
        return this.name || "Invalid name";
    }
    set checkLat(lat) {
        // Set latitude only if it hasn't been set yet
        if (this.latitude === undefined || this.latitude === null) {
            this.latitude = lat;
        }
        else {
            throw new Error("Lat must be positive");
        }
    }
    set checkLon(lon) {
        // Set latitude only if it hasn't been set yet
        if (this.longitude === undefined || this.longitude === null || this.longitude > 0) {
            this.longitude = lon;
        }
        else {
            throw new Error("Lon must be positive");
        }
    }
    get name1() {
        return this.name;
    }
    get latitude1() {
        return this.latitude;
    }
    get longitude1() {
        return this.longitude;
    }
    toString() {
        return `${this.name}, ${this.latitude}, ${this.longitude}`;
    }
}
class RestaurantPOI extends POI {
    constructor(name, latitude, longitude, cuisineType, rating) {
        super(name, latitude, longitude);
        this.cuisineType = cuisineType;
        this.rating = rating;
    }
}
let poi1 = new POI("Haifa", -5, -56);
