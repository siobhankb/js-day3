console.log('Promises, promises...')

// Callback Hell Problem is solved with Promises! 

/* In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now. Has three states: 1. Pending: initial state, neither fulfilled nor rejected 2. Fulfilled: meaning that the operation was completed successfully 3. Rejected: meaning that the operation failed */

// // more often than not, you'll be using already-created, promised-based functions
// // in other words, you're more likely to be a "user" than a "creator" of a promised function

// function downloadSong(songName) {
//     console.log(`Searching for ${songName} in our database...`)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (songName.length > 4) {
//                 resolve(`${songName}.mp4`)
//             } else {
//                 reject(`${songName} is not valid`)
//             }
//         }, 3000)
//     })
// }

// let mySong = "It's About Damn Time"
// console.log(mySong)
// downloadSong('Grrrls').then(s => console.log(`We are now playing ${s}`))
// downloadSong('Rumors').then(s => console.log(`We are now playing ${s}`)).catch(e => console.warn(e))



// function playSong(songFile) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`${songFile} is playing...`)
//         }, 2000)
//     })
// }

// let mySong2 = downloadSong('Everything is Free')
// console.log(mySong)

// downloadSong('Some Song').then((s) => {
//     console.log(`${s} has downloaded`)
//     return playSong(s)
// }).then(message => console.log(message)).catch(err => console.warn(err))


// Real life example
// Get price of user's orders based on user_id
// userId -> user -> user's orders -> calculate order total

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Searching for user #${userId} in database...`);
    setTimeout(() => {
      //set up some fake rule for if a user does not exist
      if (userId >= 100) {
        let user = {
          id: userId,
          username: "One Cool User",
        };
        resolve(user);
      } else {
        reject(`No user with id #${userId}`);
      }
    }, 2000);
  });
}

function getUserOrder(user) {
    console.log(`Getting the orders for ${user.username}`)
    return new Promise((res, rej) => {
        setTimeout(() => {
            let orders = [
              { prodName: "computer", price: 1000 },
              { prodName: "monitor", price: 179 },
              { prodName: "printer", price: 250 },
            ]
                res(orders);
        }, 2000)
    })
}

function getOrderTotal(order) {
    console.log(`Calculating order total..`)
    return new Promise((res, rej) => {
        setTimeout(() => {
            let total = 0
            order.forEach(p => total += p.price)
            res(total)
        }, 1000)
    })
}

// getUser(123).then(user => getUserOrder(user)).then(o => getOrderTotal(o)).then(total => console.log(`The total for your order is ${total}`)).catch(err => console.warn(err))


// function getUsersTotalFromUserId(userId) {
//     getUser(userId)
//       .then((user) => getUserOrder(user))
//       .then((order) => getOrderTotal(order))
//       .then((total) => console.log(`The total for your order is ${total}`))
//       .catch((err) => console.warn(err));
// }


//Async / Await -- alows us to write our code to look more synchronous.
// **It's just syntactical sugar for Promises

/// vvv same function as above ^^^function getUsersTotalFromUserId(userId) {
function getUsersTotalFromUserId(userId) {
  getUser(userId)
    .then((user) => getUserOrder(user))
    .then((order) => getOrderTotal(order))
    .then((total) => console.log(`The total for your order is ${total}`))
    .catch((err) => console.warn(err));
}

// // what it would look like in Python:
// def get_user_total_from_id(user_id):
//     user = getUser(user_Id)
//     order = guetUserOrder(user)
//     total = getOrderTotal(order)
//     print(f"Your total is {total}"")

// // vvv this won't work bc it's returning promises 
// function getUserTotal(userId) {
//     let user = getUser(userId);
//     let order = getUserOrder(user);
//     let total = getOrderTotal(order);
//     console.log(`Your order total is %{total}`)
// }

// so we use 'async' -->
async function getUserTotal(userId) {
    try {
        let user = await getUser(userId);
        let order = await getUserOrder(user);
        let total = await getOrderTotal(order);
        console.log(`Your total is ${total}`)
    } catch (err) {
        console.warn(err)
    }
}

getUserTotal(123)