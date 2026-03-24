let price = 500;
let quantity = 3;

let totalPrice = price * quantity;

console.log("Total Price:", totalPrice);


//2
let amount = 1000;

let discount = amount * 0.10;
let finalPrice = amount - discount;

console.log("Final Price:", finalPrice);

//3
let bill = 2000;

let tax = bill * 0.18;
let totalBill = bill + tax;

console.log("Total Bill:", totalBill);

//4
let weight = 70;   // kg
let height = 1.75; // meters

let bmi = weight / (height * height);

console.log("BMI:", bmi);


//5
let salary = 50000;

let tax2 = salary * 0.10;
let netSalary = salary - tax;

console.log("Net Salary:", netSalary);




//6
let r1 = 4, r2 = 5, r3 = 3, r4 = 4, r5 = 5;

let average = (r1 + r2 + r3 + r4 + r5) / 5;

console.log("Average Rating:", average);
            



//7
let orderAmount = 800;
let delivery;

if(orderAmount > 1000){
    delivery = 0;
}
else{
    delivery = 100;
}

console.log("Delivery Charges:", delivery);






//8
let principal = 10000;
let rate = 5;
let time = 2;

let interest = (principal * rate * time) / 100;

console.log("Simple Interest:", interest);





//9
let balance = 5000;
let withdraw = 1500;

let remaining = balance - withdraw;

console.log("Remaining Balance:", remaining);






//10
let minutes = 130;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log(hours + " hours " + remainingMinutes + " minutes");





//11
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Successful");
}
else{
    console.log("Invalid Login");
}





//12
let age = 16;

if(age >= 18){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}




//13
let purchase = 150;

if(purchase > 200){
    console.log("20% Discount");
}
else if(purchase > 100){
    console.log("10% Discount");
}
else{
    console.log("No Discount");
}






//14
let marks = 75;

if(marks >= 80){
    console.log("Grade A");
}
else if(marks >= 60){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}




//15
let weather = "hot";

if(weather === "hot"){
    console.log("Stay cool");
}
else if(weather === "cold"){
    console.log("Wear warm clothes");
}
else if(weather === "rainy"){
    console.log("Take umbrella");
}
else{
    console.log("Normal weather");
}




