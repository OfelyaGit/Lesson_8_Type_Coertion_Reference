// binary + operator
let a = (b = c = d = e = f = "hi"); // if a,b,c,d,e, and  f are number types

// let x = null + undefined //0 + undefined =NaN
// let x = null + true // 0 + 1 = 1
// let x = null + false // 0 + 0 = 0
// let x = null + 3 // 0 + 3 = 3
// let x = null + NaN // NaN
// let x = null + 'hello' // 'null' + 'hello' = 'nullhello'
// let x = null + a + b + c + d + e + f// 0 + 1+1+1+1+1+1 = 6
// let x = undefined + true // /NaN + 1 = NaN
// let x = undefined + false // NaN + 0 = NaN
// let x = undefined + 5 // NaN + 5 = NaN
// let x = undefined + NaN // NaN + NaN = NaN
// let x = undefined + 'hello' // 'undefined' + 'hello' = 'undefinedhello'
// let x = undefined + a + b + c + d + e + f//NaN + any type = NaN
// let x = true + false// 1 + 0 = 1
// let x = true + 2 // 1 + 2 = 3
// let x = true + NaN // NaN
// let x = true + 'hello' = 'true' + 'hello' = 'truehello'
// let x = true + a + b + c + d + e + f //1 +1+1+1+1+1+1 = 7
// let x = false + 4 // 0 + 4 = 4
// let x = false + NaN // NaN
// let x = false + 'hello' // 'false' + 'hello' = 'falsehello'
// let x = false + a + b + c + d + e + f // 0 + 1+1+1+1+1+1 = 6
// let x = 5 + 3 // 8
// let x = 5 + NaN //NaN
// let x = 5 + 'hello' = '5' + 'hello' = '5hello'
// let x = 5 + a + b + c + d + e + f //5 + 1+1+1+1+1+1 = 11  //
// let x = 'hello' + NaN //'hello' + 'NaN' ='helloNaN'
// let x = 'hello' + a + b + c + d + e + f // 'hello' + 'a' + 'b' + 'c' + 'd' + 'e' + 'f' = 'helloabcdef'

// try the same also for binary -, *, /, %, |, &, ^, <<, >>, >>>, ==, ===, <, >, >=, <= operators as you did for binary + operator

// let x = 'hello' * a * b * c * d * e * f // NaN ('*' only for numbers)
// let x = 'hello' / a / b / c / d / e / f // NaN ('/' only for numbers)
// let x = 'hello' % a % b % c % d % e % f // NaN ('%' only for numbers)
// let x = 'hello' | a | b | c | d | e | f //1 for bitwise OR//let x = 'hello' | a || b || c || d || e || f //"hello" for logical OR
// let x = 'hello' & a & b & c & d & e & f //0 ??? for bitwise AND // let x = 'hello' && a && b && c && d && e && f //1 for logical AND
// let x = 'hello' ^ a ^ b ^ c ^ d ^ e ^ f //0 ?? for number & string types of a,b,c,d,e,f
// let x = 'hello' << a << b << c << d << e << f //0 ?? for number & string types of a,b,c,d,e,f
// let x = 'hello' >> a >> b >> c >> d >> e >> f //0 ?? for number & string types of a,b,c,d,e,f
// let x = 'hello' >>> a >>> b >>> c >>> d >>> e >>> f //0 ?? for number & string types of a,b,c,d,e,f
// let x = 'hello' == a == b == c == d == e == f // false for number and string types a,b,c,d,e,f
// let x = 'hello' === a === b === c === d === e === f//false
// let x = 'hello' < a < b < c < d < e < f // true for number type a,b,c,d,e,f,   and false for a,b,c,d,e,f = "hi"
// let x = 'hello' > a > b > c > d > e > f // false for string and number types a,b,c,d,e,f
// let x = 'hello' >= a >= b >= c >= d >= e >= f //false for string and number types a,b,c,d,e,f
// let x = 'hello' <= a <= b <= c <= d <= e <= f // true for number types a,b,c,d,e,f, and false for a,b,c,d,e,f = "hi"

// unary - operator

// let x = -null // -0 = 0
// let x = -undefined //NaN
// let x = -true //-1
// let x = -false// -0 ???? why not 0 , if -0 = 0
// let x = -5 // -5
// let x = -'hello' // NaN
// let x = -'234' // -234
// let x = -'234.32e3' // -234320 ???????
// let x = -new Number(NaN) // NaN
// let x = -new String('hello') // NaN
// let x = -(/google.com/) // NaN
// let x = -([]) // -false = -0
// let x = -([2]) // -2
// let x = -([2, 3]) // NaN
// let x = -(function() { }) // NaN
// let x = -(a) // Reference Error:  a is not defined
// test the same also for b, c, d, e and f

// try the same also for both postfix and prefix ++ and -- operators as you did for unary - operator

// postfix and prefix ++ & -- operators
// let x = --(a) //Reference Error:  a is not defined
// let x = ++(a) //Reference Error:  a is not defined

// for each one of a, b, c, d, e, f try the following console.log(a, a++, a); & console.log(a, ++a, a);
// do the same also for -- operator
// % operator

// let x = 234 % 2 // 0
// let x = 234 % 3 // 0
// let x = 23.23 % 2 === 1.23 // false
// let x = 234.23 % 2.223 // 0.8150000000000039

// try the same also for ~, !, typeof, void operators as you did for unary - operator

// let x = 234 ~ 2 // SyntaxError: Unexpected token '~'
// let x = 234 ~ 3 // SyntaxError: Unexpected token '~'
// let x = 23.23 ~ 2 === 1.23 // SyntaxError: Unexpected token '~'
// let x = 234.23 ~ 2.223 // SyntaxError: Unexpected token '~'

// let x = 234 ! 2 // SyntaxError: Unexpected token '!'
// let x = 234 ! 3 // SyntaxError: Unexpected token '!'
// let x = 23.23 ! 2 === 1.23 //SyntaxError: Unexpected token '!'
// let x = 234.23 ! 2.223 // SyntaxError: Unexpected token '!'

// ? operator

// 1 ? 234 : 32
// for each one of a, b, c, d, e, f try the following a[a.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']()
// instanceof operator

// null instanceof Object
// true instanceof Boolean
// false instanceof Boolean
// 1 instanceof Number
// NaN instanceof Number
// 'hello' instanceof String
// (function () { }) instanceof Function
// (function () { }) instanceof Object
// a instanceof Object // try the same also for b, c, d, e and f
// new Number(1) instanceof Number
// new Number(NaN) instanceof Object
// /hello/img instanceof RegExp
// /hello/img instanceof Function
// /hello/img instanceof Object
// in operator

// 'valueOf' in null
// 'valueOf' in undefined
// 'valueOf' in true
// 'valueOf' in 1
// 'valueOf' in 'toString'
// 'valueOf' in new Number(1)
// 'x' in new Number(1)
// 'valueOf' in a // try the same also for b, c, d, e and f
// 'toString' in a // try the same also for b, c, d, e and f
// 'call' in ({})
// 'call' in (function () { })
// delete operator

// delete ({}).valueOf
// delete 1
// delete 1.2
// delete 1.2.toString
// delete a.x
// a.y = 3;
// console.log(delete a.y);
// delete f
// delete z
// var x = 3;
// console.log(delete x); console.log(x);
// y = 4;
// console.log(delete y); console.log(y);

console.log(x);
