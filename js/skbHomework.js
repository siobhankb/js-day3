// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

// // do it without a closure:
// let addEightNoClosure = function (num) {
//   return num + 8;
// };
// console.log(addEightNoClosure(10));


let addEightWithClosure = (function createAdder() {
    function inner(num) {
        return num + 8
    }
    return inner
})();


// const addEight = createAdder(8);
console.log(addEightWithClosure(10)); // 18
console.log(addEightWithClosure(17)); // 25
console.log(addEightWithClosure(50)); // 58
console.log(addEightWithClosure(100)); // 108
console.log(addEightWithClosure(92)); // 100



// // do it without a closure:
// let addThreetNoClosure = function (num) {
//   return num + 3;
// };
// console.log(addThreetNoClosure(10));


let addThreeWithClosure = (function createAdder() {
    function inner(num) {
        return num + 3
    }
    return inner
})();

// const addThree = createAdder(3);
console.log(addThreeWithClosure(10)); // 13
console.log(addThreeWithClosure(17)); // 20
console.log(addThreeWithClosure(50)); // 53
console.log(addThreeWithClosure(100)); // 103
console.log(addThreeWithClosure(92)); // 95

// Exercise 2 - Promises
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().

function getMovieInfo(movieName) {
  return new Promise((resolve, reject) => {
    if (movieName.length > 5) {
      let movie = {
        id: 123,
        title: movieName,
        director: "John Waters",
        runtime: 92,
        description: "kitch",
      };
      resolve(movie);
    } else {
      reject(`${movieName} cannot be accessed because it is too short.`);
    }
  });
}

// so we use 'async' -->
async function printMovieInfo(movieName) {
  try {
    let movieId = await getMovieId(movieId);
    let director = await getMovieDirector(director);
      let runtime = await getMovieRuntime(runtime);
      let description = await getMovieDescr(description);
      console.log(`${movieName} directed by ${director}`);
      console.log(`A ${film} that runs for ${runtime}`)
  } catch (err) {
    console.warn(err);
  }
}

printMovieInfo(123);


// Example 1
// printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
// printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short

