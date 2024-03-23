// For of loop
const arr = [1, 2, 3, 4, 5]
for(const num of arr) {
    // console.log(num);
}

//  For in loop for objecṭś
const obj = {
    A: "Amiel",
    B: "Buien",
    C: "Catherine"
}

for (const alpha in obj) {
    // console.log(`${alpha} for ${obj[alpha]}`);
}

// Most used for printing array
arr.forEach( (num, index, array) => {
    // console.log(num, index, array);
});

// For objects in array
const cod = [
    {
        first: "C",
        second: "C++",
    },
    {
        first: "project",
        second: "internship",
    },
    {
        first: "C",
        second: "java",
    },
    {
        first: "treewn",
        second: "saary",
    }
];

cod.forEach( (item) => {
    // console.log(item.first);
});

// Using filter to return items according to condition.
const c = cod.filter( (item) => (
    item.first === "C"
));

// console.log(c);

// Using map function for performing operations
const nmb = [1, 2, 3, 4, 5];
const sm = nmb.map( (num) => (
    num+10
));

console.log(sm);