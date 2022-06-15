console.log('Callbacks!!!')
console.log('Checkout the website, "callbackhell.com"')

/*

JavaScript Callbacks

*/

function filter(anArray) {
    let output = [];
    for (let element of anArray) {
        if (element % 2 !== 0) {
            output.push(element);
        };
    };
    return output;
}

let numbers = [5, 10, 15, 20, 25, 30]
console.log(filter(numbers));




// create a function to filter out based on any tru condition from a function

function filterWithCallback(anArray, callbackFn) {
    let output = [];
    for (let element of anArray) {
      if (callbackFn(element)) { // instead of hard-coding a filter, can set callback function to determine the filtered
        output.push(element);
        };
    };
    return output;
}
    

function isEven(num) {
  return num % 2 === 0;
}

// now execute the filterWithCallback passing in the filtering function
console.log(filterWithCallback(numbers, isEven));


// often see callback functions written right into argument
console.log(filterWithCallback(numbers, function (num) {
    return num % 10 === 0;
}))

// even more common with arrow functions
console.log(filterWithCallback(numbers, num => num % 10 === 0))

//Async example

// function first() {
//     console.log('First started')
//     setTimeout(() => {
//         console.log('First')
//     }, 3000)
// }

// function second() {
//     console.log('second')
// }

// first();
// second();

//Real life example
// create a function that 
// -takes in a song name
// -downloads the song,
// -plays the downloaded song

function downloadSong(songName){
    console.log(`Starting download of ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)
        return songName
    }, 2000)
}


function playSong(song){
    console.log(`Playing ${song}...`)
}


let song = downloadSong('Single Ladies');
playSong(song);


// function downloadSong(songName, downloadTime, callback) {
//     console.log(`Downloading ${songName}...`)
//     setTimeout(() => {
//         // script to download song
//         console.log(`Finished Downloading!`)
//         // execute callback once finished downloading
//         callback(songName)
//     }, downloadTime)
// }

// function playSOng(song){
//     console.log(`${song} is playing`)
// }

// downloadSong("Grrrls", 3000, playSong)

// // Download a song and then send it to a friend
// downloadSong("It's About Damn TIme", (s) => console.log(`Sending ${s} to a friend`))


// downloadSong(song1, 3000, s => {
//     console.log( )
// })



//Handling errors

function downloadSong2(songName, callbackSuccess, callbackFail) {
    console.log(`Searching for ${songName} in our database...`)
    setTimeout(() => {
        //simulate a valid song choice
        if (songName.length > 3) {
            callbackSuccess(songName)
        } else {
            callbackFail(songName)
        }
    }, 3000)
}

let mySong = 'Miss Ohio'
downloadSong2(mySong, s => `${s} has successfully downloaded and is now playing`, s => `${s} is not valid`);


let mySong2 = 'Happy'
downloadSong2(
  mySong2,
  (s) => `${s} has successfully downloaded and is now playing`,
  (s) => `${s} is not valid`
);
// Is there something wrong? it takes a loooong time :/ 