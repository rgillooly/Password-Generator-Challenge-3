function generate() {

let Capital = window.confirm("Do you want to include capital letters?");
let Lower = window.confirm("Do you want to include lowercase letters?");
let num = window.confirm("Do you want to include numbers?");
let spec = window.confirm("Do you want to include special characters?");
let length = window.prompt("How long do you want your password to be?(Must be between 8 and 128 characters)");

var chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lchars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numchars = ['0','1','2','3','4','5','6','7','8','9'];
var symchars = ['(',')','!','@','#','$','%','&','*','/','?','+','-','%'];

if (Capital = 1);

var chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

if (Lower = 1)

chars.concat(lchars);

if (num = 1)

chars.concat(numchars);

if (spec = 1);

else chars = [];

chars.concat(symchars)

  function passGen(chars) {
    for (let i = 0; i < length; i++) {
    (Math.random(chars));
    }
    return
  }
  var password = passGen(chars)
  window.alert(password);
}