// Please try to guess, test, and then understand following examples:

//1.1
let a1 = {
  valueOf: function () {
    return "hello"; 
  },
};

//1.2
let a2 = {
    valueOf: function () {
      return this.valueOf;
    },
  };


console.log(a1);
console.log(a2);
console.log(valueOf);


let b = {
  valueOf: function () {
    return b;
  },
};
let c = {
  valueOf: function () {
    return new Number(3);
  },
};
let d = {
  toString: function () {
    return 123;
  },
};
let e = {
  toString: function () {
    return new Number(3);
  },
};

// console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
