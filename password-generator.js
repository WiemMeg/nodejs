const crypto = require('crypto');
const passwordLenght = 8;
function generatePassword (lenght){
const caracters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-*/+.?,!';
let password ='';
for (let i =0; i<lenght;i++){
    password += characters[Math.floor(Math.random()* characters.lenght)];
}
return password;
}
const password = generatePassword(passwordLenght);
console.log(`your random password is: ${password}`);
