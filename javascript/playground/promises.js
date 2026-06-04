/**
 * 
 * Promises in Js
 * 
 * A promise is an object that represents the result of an asynchronous operation (something that takes time).
 * 


>> >> Before Promises existed, we used callbacks

getData(function(result) {
    getMoreData(result, function(result2) {
        getEvenMoreData(result2, function(result3) {
            console.log(result3)
        })
    })
})

>> >> This becomes a callback hell. so promises fixs this...

 */

// Lets create a promise

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operations successful!")
    } else {
        reject("Something went wrong!")
    }
})

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})