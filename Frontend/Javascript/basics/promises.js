// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4 ) {
//         resolve("success : data was saved");
//     } else {
//         reject("failure : weak connection");
//     }
//     })
// }

// savetoDb("Apna College")
//     .then((result) => {
//         console.log("data1 saved");
//         console.log("result of promise: ", result);
//         return savetoDb("helloWorld");
//     })
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promise: ", result);
//         return savetoDb("Avreet");
//     })
//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result of promise: ", result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of promise: ", error);
//     });



let url = "https://catfact.ninja/fact";

// One way

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data.fact);
    })
    .catch((err) => {
        console.log("Error -- ", err);
    });


// Calling API'S using async

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.js0n();
        console.log(data2.fact);
    } catch (e) {
        console.log("error -- ", e);
    }

    console.log("bye");
}


// More easy way to fetch data using axions

async function getFacts() {
    try {
        let res = await axions.get(url);
        console.log(res.data);
    } catch(e) {
        console.log("error - ", e);
    }
}