// ===============================
// 1️⃣ GROCERY BILL CALCULATOR
// ===============================

function calculateBill() {
    let items = Number(prompt("Enter number of items:"));
    let total = 0;

    for(let i = 1; i <= items; i++){
        let price = Number(prompt("Enter price of item " + i));
        total += price;
    }

    if(total > 5000){
        total = total - (total * 0.10);
        alert("10% Discount Applied");
    }

    alert("Final Bill: " + total);
}

calculateBill();


// ===============================
// 2️⃣ STUDENT RESULT SYSTEM
// ===============================

function calculateGrade(avg){
    if(avg >= 80) return "A";
    else if(avg >= 60) return "B";
    else if(avg >= 40) return "C";
    else return "Fail";
}

function studentResult(){
    let name = prompt("Enter student name:");
    let total = 0;

    for(let i = 1; i <= 5; i++){
        let marks = Number(prompt("Enter marks of subject " + i));
        total += marks;
    }

    let average = total / 5;
    let grade = calculateGrade(average);

    alert("Name: " + name +
          "\nTotal: " + total +
          "\nAverage: " + average +
          "\nGrade: " + grade);
}

studentResult();


// ===============================
// 3️⃣ ATM WITHDRAWAL SYSTEM
// ===============================

function withdrawMoney(){
    let balance = 10000;

    for(let i = 1; i <= 3; i++){
        let amount = Number(prompt("Enter amount to withdraw:"));

        if(amount > balance){
            alert("Insufficient Balance");
        } else {
            balance -= amount;
            alert("Withdrawal Successful\nRemaining Balance: " + balance);
            break;
        }
    }
}

withdrawMoney();


// ===============================
// 4️⃣ RESTAURANT ORDER SYSTEM
// ===============================

function calculateOrder(){
    let burger = 500;
    let pizza = 1200;
    let drink = 200;

    let item = prompt("Enter item (burger/pizza/drink):").toLowerCase();
    let quantity = Number(prompt("Enter quantity:"));

    let price = 0;

    if(item === "burger") price = burger;
    else if(item === "pizza") price = pizza;
    else if(item === "drink") price = drink;
    else{
        alert("Invalid item");
        return;
    }

    let total = price * quantity;

    if(total > 2000){
        total = total - (total * 0.15);
        alert("15% Discount Applied");
    }

    alert("Final Bill: " + total);
}

calculateOrder();


// ===============================
// 5️⃣ EMPLOYEE SALARY CALCULATOR
// ===============================

function calculateSalary(hours){
    let rate = 500;
    let salary;

    if(hours > 40){
        salary = (40 * rate) + ((hours - 40) * rate * 1.5);
    } else {
        salary = hours * rate;
    }

    return salary;
}

function employeeSystem(){
    for(let i = 1; i <= 3; i++){
        let name = prompt("Enter employee name:");
        let hours = Number(prompt("Enter hours worked:"));

        let salary = calculateSalary(hours);

        alert("Employee: " + name + "\nSalary: " + salary);
    }
}

employeeSystem();