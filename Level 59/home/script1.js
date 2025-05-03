let age = Number(prompt('Enter your age: '));
let gender = prompt('Enter your gender: ');
let income = Number(prompt('Enter your income: '));

if(age >= 18 && gender == 'Female' && income >= 5000) {
    console.log( 'თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია')
} else if(age >= 18 && gender == 'Female' && income < 5000 && income > 3000) {
    console.log('ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.')
} else if(age >= 18 && gender == 'Female' && income < 3000) {
    console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება')
} else if(age >= 18 && gender == 'Male' && income > 6000) {
    console.log('თქვენ მზად ხართ ინვესტიციებისთვის!')
} else if(age >= 18 && gender == 'Male' && income < 6000 && income > 4000) {
    console.log('შემოსავალი სტაბილურია')
} else if(age >= 18 && gender == 'Male' && income < 4000) {
    console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება')
} else if(age < 18) {
    console.log('მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია')
}