let math = require('./node_modules/simple-math/index');

let constant = 8;
let power = 3;

console.log(constant+'.pow('+power+')='+constant.pow(power))
console.log(constant+'.sqrt()='+constant.sqrt())
console.log(constant+'.sqr()='+constant.sqr())
console.log(constant+'.cbrt()='+constant.cbrt())
console.log(constant+'.sign()='+constant.sign())
console.log(-constant+'.abs()='+(-constant).abs())
console.log(constant/3+'.floor()='+(constant/3).floor())
console.log(constant/3+'.ceil()='+(constant/3).ceil())
console.log(constant/9+'.arctg()='+(constant/9).arctg())
console.log(constant/9+'.arcsin()='+(constant/9).arcsin())
console.log(constant/9+'.arccos()='+(constant/9).arccos())
console.log(constant/9+'.arcctg()='+(constant/9).arcctg())
console.log(constant+'.sin()='+constant.sin())
console.log(constant+'.cos()='+constant.cos())
console.log(constant+'.tan()='+constant.tan())
console.log(constant/9+'.round()='+(constant/9).round())

console.log('')
console.log(constant+'.sqrt().sin().abs()='+constant.sqrt().sin().abs());

