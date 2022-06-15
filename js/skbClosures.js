console.log('i am here')

let subject = 'JavaScript'; 

function homework(student) {
    console.log(`${student}, did you finish your homework?`)
}

homework('Rosie');

//console.log(student); //<-------student is not defined bc it's a block variable only available in function


//Scopes (not the Monkey Trial) (I'm so tired) (I need to rest and not spend time doing random ass shit)

//Scopes can be nested (so can Monkeys - quit getting distracted)

let hometown = 'Lakewood'; // block scoped bc let

{

    var state = 'Ohio'; // global scope bc var <----global means can access inside and outside of block
    let hometown = 'Cleveland'; //block scope
    {
        console.log(`I am from ${hometown}, ${state}`) //gets hometown from block outside of this block 
    }

}
console.log(`I grew up in ${hometown}, ${state}`) //outside blocks, can access the block scope outside of {}
























//zoned out for talk of variables and scopes.
//zoned out for closures

// <------check out morning recording @ 11:30am (***end of morning session === 12:00pm)
//copied from GClassroom code:


//Setting up a hidden variable using closures
function setCounter() {
    console.log('Counter Set!')
    let count = 0; // block level scope
    function inner() {
        return count++
    }
    return inner
}

const step = setCounter();
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());


// //Another practical example -- hiding variables
// function fib(num) {
//     if (num < 2) {
//         return num
//     } else {
//         let fib_num = fib(num - 1) + fib(num - 2);
//     }
//     return fib_num
// }

// console.log(fib(20))


// //Add CACHE
// benefit of cache is that it will run FASTER 
// bc it takes the recursive and sets a block-scope callable variable
// function fib(num) {
//     var cache = {};
//         if (num < 2) {
//             return num;
//         } else if (num in cache) {
//             return cache[num]
//         } else {
//             let fib_num = fib(num - 1) + fib(num - 2);
//             cache[num] = fib_num
//         return fib_num;
//       }
// }

// console.log(fib(20))



// hide CACHE
// benefit --> you can use variable 'cache' in other parts of code
function makeFibWithCache() {
    var cache = {};
    function innerFib (num){
        if (num < 2) {
            return num;
        } else if (num in cache) {
            return cache[num]
        } else {
            let fib_num = fib(num - 1) + fib(num - 2);
            cache[num] = fib_num
        return fib_num;
        }
    }
    return innerFib
}

const fib = makeFibWithCache();
console.log(fib(10));
console.log(fib(20));
console.log(fib(100));


//IIFE - (I)mmediately (I)nvoked (F)unction (E)xpression

let myFullName = (function formatName(first, last) {
    return first + ' ' + last
})('Grace', 'Hopper')

console.log(myFullName);

// set up closures with an IIFE
let stepByFive = (function setCounter(step) {
    let count = 0;
    function inner() {
        return count += step
    }
    return inner
})(5);

console.log(stepByFive()); console.log(stepByFive()); console.log(stepByFive());


//In Class Exercise

// create an IIFE that has a hidden array of names
// array starts as empty array
// adds users to the list every time the function is called

let userArray = (function addUser(nameArray) {
    let users = [];
    let dex = 0;
    // console.log(`dex is ${dex}`);
    function inner() {
        // console.log(`inner dex is ${dex}`);
        users.push(nameArray[dex])
        dex += 1;
        return users
    }
    return inner
})(['Ada Lovelace', 'Grace Hopper', 'Edith Clark', 'Evelyn Boyd Granville', 'Sister Mary Kenneth Keller', 'Radia Perlman'])

console.log(userArray());  console.log(userArray()); console.log(userArray()); 

