// setTimeout Function 
setTimeout( () => {
    console.log('Hello')
}, 5000)

const logHello = () => {
    (console.log('Beauty'))
}
setTimeout(logHello, 2000);


const names = ['Raya', 'Jayden', 'Maxwell', 'Tom', 'Claire']
names.forEach((name) => {
    (console.log(name))
});


const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number) => {
    console.log(`Number ${number}`)
})

const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Tne', body:'This is post two'},
];
function myPosts() {
    setTimeout(() =>  {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 6000)
}

function createPostII() {
    console.log('Post Three')
}


myPosts();

createPostII();

const myNmaes = ['Ra', 'Ba', 'Ca', 'Za']
myNmaes.forEach((name) => {
    console.log(`${name} is my name`)
})


setTimeout(() => {
    const date = new Date ();
    console.log(date)
}, 7000);

//HOW TO: function that is passed as an argument/parameter to another so that it can be executed in that other function
//create callback function
function myCallback(){
    console.log('This is a Callback')
}

//Create a function by passing the callback as its argument
function mainFunction (name, callback){             //As in the callBackOrMatchingParameter
    console.log(`Hello ${name}!`)
    callback();
}

//Pass the callback method as an argument
mainFunction('Raya', myCallback);

// CALLBACK FUNCTION: A JavaScript callback is a function which is to be executed after another function has finished execution.
//     A more formal definition would be - Any function that is passed as an argument/parameter to another function so that it can be executed in that other function is called as a callback function.
//     A callback function is a function in JavaScript that is called (or invoked) by the first function after the first function has completed its task. It's a function that receives input from another function. 
//     TYPES: There are two types of callback functions: synchronous and asynchronous.

// SYNCHRONOUS vs Asychronous:
// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. Each task requires an answer before moving on to the next iteration.

//setInterval Function
//The main difference between setTimeout and setInterval is that setTimeout executes the code only once after the specified delay, while setInterval executes the code repeatedly at the specified interval.
const todaysDate = new Date();
setInterval(() => {
    console.log(todaysDate)
}, 60000);


setInterval(() =>{
    let thisDate = new Date();
    const currentDate = thisDate.toLocaleString('default', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
    console.log(currentDate)
}, 60000);

const no = [1, 2, 3, 4, 5];
no.forEach((num) => {
    console.log(num);
})

// const myForEach = (arr, cb) =>{
//     for (let mynum = 0; mynum < arr.length; mynum++)
// };
for (let myL = 0; myL <= 10; myL++) {
        console.log(myL);   
}
//Generally the i in for loops stands for iterator, that's why most of programmers use i instead of other names. i and j are just a variable name, you can use any variable name like a, b, c,x, y or number, length etc.
//i++ is just a shortcut for i += 1 , which itself is a shortcut for i = i + 1 . These all do the same thing, and it's just a question of how explicit you want to be

function evenNo () {
    for ( let i = 1; i <= 20; i += 4)
        console.log(i);
}
evenNo();