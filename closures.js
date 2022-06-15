// JavaScript Closures

let subject = 'JavaScript' // Block Scoped Variable - Window Block

function homework(student){
    console.log(`${student}, did you finish your ${subject} homework?`)
}

homework('Brian');
// console.log(student); // ReferenceError: student is not defined

// Scopes can be nested

let hometown = 'Chicago'; // Block Scope

{
    var state = 'Illinois'; // Globally scoped
    let hometown = 'Champaign' // Block scoped
    {
        console.log(`I am from ${hometown}, ${state}`)
    }
}
console.log(`I am from ${hometown}, ${state}`)


// Function Scopes can also be nested

// function outer(){
//     let outerMessage = 'This is the outer message!';
//     function inner(){
//         // let innerMessage = 'This is the inner message'
//         console.log(outerMessage);
//     }

//     inner()
// }

// outer()



// Return a function from a function
function outer(){
    let outerMessage = 'This is the outer message!';
    function inner(){
        console.log(outerMessage);
    }

    return inner
}

let outerReturn = outer();

console.log(outerReturn);
outerReturn();


// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope


// A more practical example

function multiplier(x){
    function times(y){
        return x * y
    }
    return times
}

const double = multiplier(2);

console.log(double)

console.log(double(3))
console.log(double(5))

const triple = multiplier(3);

console.log(triple);

console.log(triple(3))
console.log(triple(5))


// // Setting up a "hidden" scope

// var cache = {}
// function fib(num){
//     if (num < 2){
//         return 1
//     } if(num in cache){
//         return cache[num]
//     } else {
//         answer = fib(num-1) + fib(num-2)
//         cache[num] = answer
//         return answer
//     }
// }


// console.log(fib(40))
// console.log(cache)

function makeFib(){
    var cache = {}
    return function(num){
        if (num < 2){
            return 1
        } if(num in cache){
            return cache[num]
        } else {
            answer = fib(num-1) + fib(num-2)
            cache[num] = answer
            return answer
        }
    }
}

const fib = makeFib();

console.log(fib(10))
console.log(fib(40))
console.log(fib(100))


// IIFE - Immediately Invoked Function Expression

let myName = (function formatName(first, last){
    return first + ' ' + last
})('Brian', 'Stanton')

console.log(myName);


let stepByFive = (function(step){
    let count = 0
    return function(){
        return count += step
    }
})(5)

console.log(stepByFive)
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());


// In Class Exercise
// Create an IIFE that has a hidden array of names (starts as an empty array) but will add users to the list every time the function is called




