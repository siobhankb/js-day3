// JavaScript Callbacks


// Create a function to filter out any non odd numbers
function filter(anArr){
    let output = [];
    for (const element of anArr){
        if (element % 2 != 0){
            output.push(element)
        }
    }
    return output
}

let numbers = [5, 10, 15, 20, 25, 30]
console.log(filter(numbers))


// Create a function to filter out any true condition we specify
function filterWithCallback(anArr, fn){
    let output = [];
    for (const element of anArr){
        if (fn(element)){
            output.push(element)
        }
    }
    return output
}

function isEven(num){
    return num % 2 === 0
}


console.log(filterWithCallback(numbers, isEven))


function isDivByThree(num){
    return num % 3 === 0
}

console.log(filterWithCallback(numbers, isDivByThree))

// isEven and isDivByThree are considered callback functions. 
// filterWithCallback is a higher-order function (b/c it accepts func as arg)

// Write the function right into the argument
console.log(filterWithCallback(numbers, function(num){
    return num % 10 === 0
}))

// Often written with arrow functions
console.log(filterWithCallback(numbers, (num) => num % 10 === 0))



// Async Example

// function first(){
//     console.log('First started')
//     setTimeout(
//         () => {console.log('First')}, 
//         3000
//     )
// }

// function second(){
//     console.log('Second Started')
//     console.log('Second')
// }

// first();
// second();


// Real life example
// function downloadSong(songName){
//     console.log(`Starting download of ${songName}...`)
//     setTimeout(() => {
//         // Script to download the song
//         console.log(`Finished downloading ${songName}`)
//         return songName
//     }, 2000)
// }


// function playSong(song){
//     console.log(`Playing ${song}...`)
// }


// let song = downloadSong('Single Ladies');
// playSong(song);


// function downloadSong(songName, callback){
//     console.log(`Starting download of ${songName}...`)
//     setTimeout(() => {
//         // Script to download the song
//         console.log(`Finished downloading ${songName}`)
//         // Execute callback once finished downloading
//         callback(songName)
//     }, 3000)
//     return songName
// }


// function playSong(song){
//     console.log(`Playing ${song}...`)
// }


// // downloadSong('Single Ladies', playSong);

// // downloadSong('Hey Ya!', (s) => {console.log(`Sending ${s} to friend`)});



// let song1 = 'Wonderwall';
// let song2 = 'Brown-Eyed Girl';
// let song3 = 'Dreams';


// // downloadSong(song1, (s) => {
// //     console.log(`Saving ${s} to file`);
// //     downloadSong(song2, (s) => {
// //         console.log(`Saving ${s} to file`);
// //         downloadSong(song3, (s) => {
// //             console.log(`Saving ${s} to file`)
// //         })
// //     })
// // })

/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷
                })
            })
        })
    })
*/

// Handling Errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Starting download of ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)

        // Fake error simulation
        let isValid = songName.length != 0;
        // Execute callback once finished downloading
        isValid ? callbackSuccess(songName) : callbackFail(songName)
    }, 3000)
    return songName
}


downloadSong2('What Is Life', 
    (s) => {console.log('Downloaded!!', s)}, 
    (s) => {console.log('Failure', s)}
)


// In-class Exercise
// Create a map function that takes in an array and a callback function and returns a new array with that function applied

