const input = require('sync-input');


console.log("Welcome to Currency Converter!");
let curValueUSD = 1;
let currenciesUSD = new Map();
currenciesUSD.set("USD", 1.0);
currenciesUSD.set("JPY", 113.5);
currenciesUSD.set("EUR", 0.89);
currenciesUSD.set("RUB", 74.36);
currenciesUSD.set("GBP", 0.75);

let cur_set = new Set(["USD", "JPY", "EUR", "RUB", "GBP"]);

for (let [key, value] of currenciesUSD){
    console.log(`${curValueUSD} USD equals  ${value} ${key}`);
}

while (true) {

    console.log("What do you want to do?");

    let variant = input("1-Convert currencies 2-Exit program\n");

    if (variant === "2"){
        console.log("Have a nice day!");
        break;
    }
    else if (variant !== "1"){
        console.log("Unknown input");
        continue;
    }
    let from_cur;
    while (true) {
        console.log("What do you want to convert?");
        from_cur = input("From: ");
        if (!cur_set.has(from_cur.toUpperCase())) {
            console.log("Unknown currency")
        }
        else break;
    }
    let to_cur;
    while (true) {
        to_cur = input("To: ");
        if (!cur_set.has(to_cur.toUpperCase())) {
            console.log("Unknown currency");
        }
        else break;
    }
    while (true) {
        let amount = input("Amount: ");
        amount = Number(amount);
        if (!Number.isInteger(amount)) {
            console.log("The amount has to be a number");
        } else {
            if (amount > 0 && cur_set.has(to_cur.toUpperCase())) {
                console.log(`Result: ${amount} ${from_cur.toUpperCase()} equals ${(amount / currenciesUSD.get(from_cur.toUpperCase()) * currenciesUSD.get(to_cur.toUpperCase())).toFixed(4)} ${to_cur.toUpperCase()}`);
                break;
            } else if (amount <= 0) {
                console.log("The amount can not be less than 1");
            }
        }
    }
}


