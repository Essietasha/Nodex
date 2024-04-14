// alert ('Welcome to my Javascript journey');

//Logging arguments into the console//
console.log('Hello Everyone');
console.log(100);
console.log('Hello Everyone', 50, true);

//Declaring Variables//
const y = 3000;
console.log (y);
console.warn('Access denied');
console.error ('Error!!!!!');
console.table({ name: 'Essie', mail: 'essie@gmail.com'});
const myName = "Tasha";
var my1Name = "Essie";
let my2Name = "Bosee";
console.log(myName);
console.log(my1Name);
console.log(my2Name);
//Re-assigning variables with let//
my2Name = "toe";
console.log(my2Name);
my2Name = "tie";
console.log(my2Name);

//Declaring Variables without value initially//
let my3Name;
my3Name = 'Reina';
console.log (my3Name);

//Changing the value of const //
//Changing an array using the push method//
const myArr = [1, 2, 3, 4, 5];
myArr.push(6,'Esther', 'Tasha');
console.log (myArr);

//Changing objects const using the . method//
//Initial Value//
const myFoods = {
african:"Rice", continental:"Bolognese"
};
myFoods.african = "Poundoyam";
myFoods.continental = "Spaghetti";
console.log(myFoods);

//Assigning Multiple Values//
let a, b, c;
b = 200;
c = 300;
console.log (a); //undefined DATA TYPE// 
console.log (b);
console.log (c); 

let d = 10, e = 11, f = 12;
console.log (d);
console.log (e);
console.log (f);

//OR//
const i = 30;
const j = 40;
const k = 50;
console.log (i);
console.log (j);
console.log (k);

//TO GET TO KNOW THE TYPE OF DATA//
const myFirstName = 'Raspberry';
const myname = myFirstName;
console.log (myname, typeof myname);

//DATA TYPES  
// String                   [PRIMITIVE]
// NUMBER
// Boolean
// NULL
// undefined
// SYMBOL
// BIGINT
// OBJECT LITERALS       [REFERENCE TYPES]
// ARRAYS
// FUNCTIONS


//HOW DATA TYPES ARE STORED.
//PRIMITIVE: STACK
//REFERENCE : HEAP

//TYPE CONVERSION; Convert String to Number
let amount = '500';
// PARSEINT FUNCTION 
amount = parseInt(amount);
//UNARY 
amount = +amount;
//NUMBER CONSTRUCTOR
amount = Number(amount);
console.log(amount, typeof amount);

//The Number. isInteger() method returns true if a value is an integer of the datatype Number. Otherwise it returns false .

//TYPE CONVERSION; Convert Number to String
let amountt = 600;
//tostring method 
amountt = amountt.toString();
//STRING CONSTRUCTOR 
amountt = String(amountt);
console.log (amountt, typeof amountt);

//TYPE CONVERSION; Convert string to decimal
let amounttt = '99.5';
// PARSE FLOAT
amounttt = parseFloat(amounttt);
console.log (amounttt, typeof amounttt);

//TYPE CONVERSION; Convert Number to Boolean
let amountttt = 1;
//Here 0 is False while other numbers are True
amountttt = Boolean(amountttt);
console.log (amountttt, typeof amountttt);

//OPERATORS A
//1. Arithmetic Operators
let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;
x = 5.0 / 2.0;
console.log(x);

//2. Concatenation
//Plus (+) Sign does two basic things in Javascript
//One, addition. Two, concatenate strings together.
x = 'Hello' + ' ' + 'World';
console.log(x);

//3. Exponent **
//Get the result of the first operand to the power of the second operand
//Raise the result of the left operand to the power of the right operand
//Exponent operator is used to raise a base number to the power of the exponent
//i.e 2 raised power 3, 4, 5 etc
//i.e 2x2x2
x = 2 ** 3;
console.log(x);

x = 2 ** 4;
console.log(x);

x = 2 ** 5;
console.log(x);

x = 3 ** 5;
console.log(x);

//4. Increment
x = 1;
x = x + 5;
console.log (x);
//OR
x = 6;
x++;
console.log (x);

//5. Decrement
x = 5;
x = 5 - 1; //or x-1
console.log (x);
//OR
x = 9;
x--;
console.log (x);

//OPERATORS 
//ASSIGNMENT OPERATORS


//CONCATENATING STRINGS
let about;
const name = 'Tasha';
const age = 30;
about =  'Hello, my name is ' + name + ' and i am ' + age + 'years old';
console.log(about);

//Templtae Literals //Backticks
let aboutme;
const namie = 'Reina';
const myage = 32;
aboutme = `Helo, my name is ${namie} and i am ${myage} years old`;
console.log(aboutme);

let me;
me = `My name is Rosie and i am ${15+5} years old;`
console.log(me);

//String PROPERTIES AND METHODS
//Calculating LENGTH
const myVar = 'Hello Beautiful People';
console.log(myVar);
console.log(myVar.length);
// OR console.log('Hello Beautiful People'.length);

//ANOTHER WAY TO DO THIS
const myvar = 'Hello Beauty';
newVar= myvar.length;
console.log(myvar);
console.log(newVar);

//FINDING CHARACTERS IN A STRING //bracket syntax
const myNewName = 'Charles';
const findName = myNewName[0];
console.log(findName);

//OR
const nwName = 'Raymond';
console.log(nwName[4]);

//OR USE THE CHARAT METHOD
const heyVar = 'Beautiful';
hiVar = heyVar.charAt(0);
console.log(hiVar);
console.log(heyVar.charAt(0));

//Accessing Prototype
const myProto = 'Proto';
const findmyproto = myProto.__proto__;
console.log(findmyproto); //Displays different properties/methods on the screen

//To Change the Case of a string
const myCase = 'Hello';
changeCase = myCase.toUpperCase();
// changeCase = myCase.toLowerCase();
console.log(changeCase);

//Get the INDEX of Characters
const myIndex = 'Hello Mine';
findIndex = myIndex.indexOf('M');
console.log(findIndex);

//Search for a string specified value
const myString = 'Hello Mine';
findString = myString.substring(0, 8);
// findString = myString.substring(3, 8);
console.log(findString);

//TRIM Trims out unneccessary spacing 
//myVar.trim();

//REPLACE A STRING WITH ANOTHER WORD
const myreplace = 'Esther Reina';
replacestring = myreplace.replace('Esther', 'Tasha');
console.log(replacestring);

//INCLUDES to return true/false if a word is found within a string
const myinclude = 'Esther Reina';
findinclude = myinclude.includes('sther');
console.log(findinclude);

//To get the TYPE OF .typeOf();
const myType = 'Woman';
console.log(myType, typeof myType);

//To get the PRIMITIVE VALUE OF .valueOf();
const myValue = 'Hadassah';
findMyValue = myValue.valueOf();
console.log(findMyValue);

//TO SPLIT A STRING INTO AN ARRAY
//1. Splits all words into a single array
const myStringg = 'The World is Large';
arraySplit = myStringg.split();
console.log(arraySplit);

//2. Splits each words into individual arrays in a sinle block
const myArrayy = 'The World is Large';
arrayySplit = myArrayy.split(' ');
console.log(arrayySplit);

//2. Splits each aplhabeth into individual array in a sinle block
const myArrayyy = 'The World is Large';
arrayyySplit = myArrayyy.split('');
console.log(arrayyySplit);

// CHALLENGE //
//Capitalize the first letter of the testString variable value 'developer'
const testString = 'developer';
let myNewString;
myNewString = testString.charAt(0).toUpperCase() + testString.substring(1);
console.log (myNewString);

//OR
const getString = 'software';
let mygetString;
mygetString = getString[0].toUpperCase() + getString.substring(1);
console.log (mygetString);

//OR Use Template Literals
const gtString = 'technology';
let mygtString;
mygtString = `${gtString[0].toUpperCase()}${gtString.substring(1)}`;
console.log (mygtString);

//OR Slice
const gtStrin = 'information';
let mygtStrin;
mygtStrin = `${gtStrin[0].toUpperCase()}${gtStrin.slice(1)}`;
console.log (mygtStrin);


//// NUMBERS ////
//Convert Numbers to String
let myNum ;
const num = new Number (5);
myNum = num.toString();
console.log (num, typeof num);

//TO GET THE LENGTH OF A NUM
// let thisnum;
const thismynum = 52;
// thisnum = thismynum.toString().length;
console.log(thismynum.toString().length);

//TO SPECIFY THE NO OF DECIMAL
const decimall = 5.887685;
myDecimal = decimall.toFixed(2);
console.log(myDecimal);

//TO SPECIFY DECIMAL PRECISELY 
const deccimal = 5.887665;
myDeccimal = deccimal.toPrecision(2);
console.log(myDeccimal);

//THE MATH OBJECT
//console.log(Math);
//To get the Square Root of a number
let myMath;
myMath = Math.sqrt(9);

//To get the absolute no
myMath = Math.abs(-9);

//To round a no
myMath = Math.round(6.6);

//To round a no up
myMath = Math.ceil(5.2);

//To round down a no
myMath = Math.floor(4.9);

//To get the value of a no raised to a power
myMath = Math.pow(2, 4);

// //To get the smallest no in a row
myMath = Math.min(5, 8, 2);

// //To get the maximum  no in a row
myMath = Math.max(5, 9, 6);

// //To get random numbers. 0-1
//Keep reloading the page to get more random numbers
myMath = Math.random();

// //To get random numbers between 0-9. 
//Keep reloading the page to get more random numbers
myMath = Math.random() * 10;

// //To get random numbers between 1-10. 
//Keep reloading the page to get more random numbers
myMath = Math.random() * 10 + 1;

// //To now make this decimal random numbers whole. 
myMath = Math.floor (Math.random() * 10 + 3);
console.log(myMath);

//MATH CHALLENGE
//Create a variablr called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.
//Create a variable for the sum, difference, product, quotient and remainder of x and y. 
//Log the output in a string that show the two numbers of x qand y along with the operator and result.
let xx;
xx = Math.floor(Math.random() * 100 + 1);

let yy;
yy = Math.floor(Math.random() * 50 + 1);

sum = xx + yy;
difference = xx - yy;
product = xx * yy;
productOutput = `${xx} * ${yy} = ${product}`;
quotient = xx / yy;
remainder = xx % yy;

console.log (sum);
console.log (difference);
console.log (product);
console.log (productOutput);
console.log (quotient);
console.log(remainder);


//DATES AND TIMES
    let myDate;
myDate = new Date();
//This way we instantiate a date object into the 'myDate' variable
console.log (myDate, typeof myDate);

//Turn date object to string
myDate = myDate.toString();
console.log(myDate, typeof myDate);

//To set a specific Date
//Months start counting at 0-Jan
myDate = new Date(2020, 5, 10, 23, 40, 20);
console.log(myDate);

//To set a specific Date avoiding the Zero-index
myDate = new Date('2021-08-15T12:30:00');
//OR
myDate = new Date('08/16/2021 12:30:00');
console.log(myDate);

//TimeStamp - Is an integer that represents the no of seconds that's poassed since Jan 1 1970. Timestamp in Js is expressed in millisecond
//To get the timestamp of now
// let d;
ts = Date.now();
console.log(ts);

//Get timestamp for a specific date + time
let myVarr;
gttimestamp = new Date('12-13-2023 12:40:00');
myVarr = gttimestamp.getTime();
//OR myVarr = gttimestamp.valueOf();
console.log(myVarr);

//Create date object from timestamp
let myDatie;
myDatie = new Date(1702467600000);
console.log(myDatie);

//Convert the timestamp millisecond to seconds
myDatie = Math.floor(Date.now() / 1000);
console.log(myDatie);

//METHODS on the Date Object
//To String
// Get time
//valueof
let dd;
let myydate = new Date(); //This way we have instantiated a date object into the 'ddate' variable
dd = myydate.toString();
dd = myydate.getFullYear();
dd = myydate.getMonth() + 1;
dd = myydate.getDate();
dd = myydate.getDay();
dd = myydate.getHours();
dd = myydate.getMinutes();
dd = myydate.getSeconds(); 
dd = myydate.getMilliseconds();
dd = myydate.getMilliseconds();

//API for Dates
dd = Intl.DateTimeFormat('default').format(myydate);

//OR
// dd = myydate.toLocaleString('default', { month: 'long' });
dd = myydate.toLocaleString('default', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZone: 'West African Standard'
});

console.log(dd);


// ARRAYS AND OBJECTS
// Creating Arrays
//Arrays are a special type of 'object'and data structure in Javascript that stores multiple values.
//Arrays are Zero-based. The first element starts at zero index.
//The values inside an array are surrounded in BRACKETS and these values are called Elements.
//Elements can be any data types: num, string, arr etc.

//Diff ways to create an array object
//1. Array Literal
const arr = [374, 775, 690, 900, 815];
     //index  0    1     2    3    4
console.log(arr);

//2. Array Constructor. e.g array to string object
const fruits = new Array('grapes', 'rose', 'apple', 'orange');
console.log(fruits);

//ONE-Dimensional Array
const swt = ["peanut butter", "jelly", 100];
console.log(swt);

//TWO-Dimensional Array - NESTING ONE ARRAY WITH ANOTHER
const twt = [["Bulls", "male", 40, "wit"], ["Raios", "Female", 50, true, null]];
console.log(twt);

//Accessing Arrays data with INDEXES
//1.
const acces = [874, 775, 690, 900, 915];
console.log(acces[0]);
//OR
//2.
const acce = [874, 775, 690, 900, 915];
acc = acce[1];
console.log(acc);
//OR
//3. Add two elements in an array
const ac = [84, 75, 60, 90, 95];
aci = ac[0] + ac[2];
console.log(aci);
//4. Use arrays inside Template Literals
const ad = [84, 75, 60, 90, 95];
ai = `My favourite number is ${ad[4]}`;
console.log(ai);

//LENGTH to know how many items are in an array
const ag = [800, 900, 700, 600, 500, 1000];
ah = ag.length
console.log(ah);

//Changing the data in an Array.
//Arrays are inherently mutable, i.e you can change their data by accessing them with indexes.
const myFruits = ['Apple', 'Banana', 'Grapes', 'Raspberry', 'Lemon'];
myFruits[4] = 'Avocado';
//Note: Change the array with its primary var, no need to define another var for it.
// myFruits.length = 2; Limit an array to specific length.
console.log(myFruits);
//E.g 2
const rray = [50, 40, 30];
rray[2] = 40;
console.log(rray);

//Manipulate Arrays with PUSH Method(Adds data to the end of an array)
const arrp = [20, 40, 60, 80, 90];
arrp.push(100);
console.log(arrp);

//Manipulate Arrays with POP Method(Removes data from the end of an array)
const arrpop = [20, 40, 60, 80, 90];
arrpop.pop();
console.log(arrpop);

//Manipulate Arrays with UNSHIFT Method(Adds data to the beginning of an array)
const arrus = [20, 40, 60, 80, 90];
arrus.unshift(10);
console.log(arrus);

//Manipulate Arrays with SHIFT Method(Removes data from the beginning of an array)
const arrs = [20, 40, 60, 80, 90];
arrs.shift();
console.log(arrs);

//Manipulate Arrays with REVERSE Method(Reverses array contrawise/backward)
const arrv = [20, 40, 60, 80, 90];
arrv.reverse();
console.log(arrv);


//METHODS TO GET VALUES/INFORMATION FROM ARRAYS
//arr.INCLUDES(To find if a value is in an array, returns true/false)
const arri = [30, 90, 75, 80, 99];
arryinclude = arri.includes(10);
console.log(arryinclude);

//arr.INDEXOF(To find the index of an array)
const arrin = [30, 90, 75, 80, 99];
arryind = arrin.indexOf(90); //Note that if you pass a value that is not in your array with indexof, it will give you a result of -1
console.log(arryind);

//arr.SLICE(This returns specified or requested array. It does not change the array itself.)
const arrsl = [22, 34, 75, 66, 56];
arrsli = arrsl.slice(1, 4); //Note: if you pass in a particular start point/index, it gives you the result of that value and everything after it. Now, specify with slice. From 1-4. Note, it stops before the 4th value.
console.log(arrsli, arrsl);

//arr.SPLICE(This returns specified array as well BUT It changes the array data itself. It plucks the specified values out and when you log the initial array, you have the remaining values.)
const arrsp = [22, 34, 75, 66, 56];
arrspi = arrsp.splice(1, 4); 
console.log(arrspi, arrsp);

//arr.SPLICE to remove(Remove a single element from an array)
const arrspr = [22, 34, 75, 66, 56, 99];
arrspir = arrspr.splice(2, 3); //i.e From index 2 and splice out the other 3 values. (3,1)
console.log(arrspir); //Shows what's left in the remn array.
//console.log(arrspr);//Shows what's left in the actual array.

//Chain on methods with array
const arrt = [22, 34, 75, 66, 78];
arrtr = arrt.splice(1, 4).reverse().toString().charAt(0); 
console.log(arrtr);


//NESTING, CONCATENATING AND SPREADINGARRAYS

//Nesting Arrays i.e Having an array within an array. This brings us to the concept of multidimensional arrays
const male = ['Tom', 'Ray', 'Martin', 'Simon'];
const female = ['Rose', 'Steph', 'Raya', 'Eve'];
male.push(female);
console.log(male);

//Access values in a nested array
const mmale = ['Tom', 'Ray', 'Martin', 'Simon'];
const femmale = ['Rose', 'Steph', 'Raya', 'Eve'];
mmale.push(femmale);
nestedmale = mmale[4]; //This gives u the nested array i.e simon for the first array stops at 3 and 4 is the beginning of the next array
console.log(nestedmale);

const m = ['Tom', 'Ray', 'Martin', 'Simon'];
const fe = ['ss', 'Steph', 'Raya', 'Eve'];
m.push(fe);
nestedfemale = m[4][1]; //This gives the first value in the nested array
console.log(nestedfemale);

//OR 
const arry =[ [1, 2, 3, 4,], [5, 6, 7, 8,], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]];
const subarray = arry[3];
nestedsubarray = arry[3][1];
console.log(nestedsubarray);

//Nest Two or more arrays in one array
const gender = [male, female, arry];
console.log(gender);

//Access multidimensional arrays. Two or more nested arrs
const genderr = [male, female, arry];
genderacc = genderr[1][0]
console.log(genderacc);

//CONCAT Method Taking values from one array and adding them to another array
const arrcon = ['Tom', 'Ray', 'Martin', 'Simon'];
const arrycon = ['Rose', 'Steph', 'Raya', 'Eve'];
conc = arrcon.concat(arrycon);
console.log(conc); //Now we get one single array

//SPREAD OPERATOR(...) Can be used with both arrays and objects
//concatenate arrays using spread operator method
// After some arrs have been nested e.g const gender = [male, female, arry];
const r = ['Ray', 'Terl'];
const t = ['Sun', 'Shine'];
const u = ['Rise', 'Rose'];
const rtu = [r, t, u];
arrspreadr = [...r, ...t, ...u];
// arrspreadr = [...r, ...t, u]; i.e Dont spread the last one, let it remain as an array
console.log(arrspreadr);

//FLATTEN Arrays. Flatten arrays that are nested inbetween other arrays.
const arrn = [1, 2, [9, 0, 5], 3, 4, 5, [9, 0, 1], 6, 7, 8[6, 8]];
console.log(arrn);
// Now to Flatten:
const arrns = [1, 2, [9, 0, 5], 3, 4, 5, [9, 0, 1], 6, 7, 8, [6, 8]];
arrfl = arrns.flat();
console.log(arrfl);

//STATIC METHOD ON ACTUAL ARRAY OBJECTS.

// ARRAY IS ARRAY To check if an array is an array.  Returns true or false
const chkarr = [20, 50];
checkarr = Array.isArray(chkarr);
console.log(checkarr); //Returns false if it's not an array

//FROM Turns a string to an array or create an array from a string
const arrcrt = '676576';
arrcreate = Array.from(arrcrt);
console.log(arrcreate); 
//E.g 2
let arrcr;
arrcr = Array.from('12345');
console.log(arrcr);

//OF //Create an array from set of values in a variable
const o = 1;
const p = 2;
const q = 3;
opq = Array.of(o, p, q);
console.log(opq);

//DESTRUCTURING/NAMING Arrays
//Destructure Arrays
const arrNum = [20, 40, 80, 90];
const [first, second, ...rest] = arrNum; //We use bracket syntax to destructure arrays while we use curly braces for objects.
console.log(first, second, rest);

//ARRAYS CHALLENGE 1
//Use some of the array methods that we looked at to mutate the following array[1, 2, 3, 4, 5] to [6, 5, 4, 3, 2, 1, 0]
// A. 
const chll = [1, 2, 3, 4, 5];
chll.unshift(0);
chll.push(6);
chll.reverse();
console.log(chll); 

//ARRAYS CHALLENGE 2
//Combine arr1 and arr2 into a new array called arr3 with the ffg elements:
// const arr1=[1, 2, 3, 4, 5]  then const arr2=[5, 6, 7, 8, 9, 10]
//NOTE: Note that both arrays include the number 5. You will have to find a way to get rid of the extra 5.
//Expectd result: console.log(arr3); [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr2rm = arr2.splice(1, 5) //Splice will cut out the 5 from the def array  but slice will remove it temprarily and it will still be in the def array.
const arr3 = arr1.concat(arr2rm);
console.log(arr3);
//OR
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr3 = arr1.slice(0, 4).concat(arr2); Note that slice does not add the last index e.g 4
// console.log(arr3);

//OR
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1); //i.e splice the value at index 4 which based on zero index counting is no5. Then splice out only that no, so we put ,1 after the index. i.e splice out only 1. we can splice two or more.
// console.log(arr3);

//OBJECT LITERALS
//A common data structure that holds key/value pairs called Properties.(sepereated by a Column) E.g Key-name / Value:John. Also called properties.
const person = {
    name: 'John',
    age: 30,
    isAdmin: true,
    location: 'Boston'
};
// person.isAdmin= false;
//OR 
// person['isAdmin'] = false;
console.log(person);

//Another Way to CREATE OBJECT
let myObj;
const myObject = {};
    myObject.name = 'Natasha',
        myObject.age = 30,
        myObject.lady = true,
    myObj = myObject;
console.log(myObj);
//OR USE THE OBJECT CONSTRUCTOR
// const myObject = new Object();
//OR
const obj1 = { name: 'Tatasha', age: 28 }; 
const obj2 = { nick: 'tasha', year: 29 }; 
const obj3 = { obj1, obj2 };
console.log(obj3);


//TO ACCESS A SPECIFIC PROPERTY FROM AN OBJECT
let xxx;
const persn = {
    name: 'John',
    age: 30,
    location: 'Boston'
};
xxx = persn.name;
//OR xxx = persn['age'];
console.log(xxx);

//NESTING OBJECT WITHIN OBJECT
//ARRAY WITHIN OBJECT
//TO ACCESS OBJECT WITHIN OBJECT using the .SYNTAX
let xxxx;
const pers = {
    name: 'John',
    age: 30,
    location: 'Boston',
    address:{
        street: '234, Magodo',
        city: 'Magodo',
        state: 'Lagos',
        coords: {
            latitude: 42.9876,
        longitude: -71.3234,
        }
    },
    hobbies: ['volleyball', 'music'],
    visstates: 'USA'
};

// xxxx = pers.address.city;
//  xxxx = pers.hobbies;
// xxxx = pers.address.coords;
xxxx = pers.address.coords.latitude;
//  xxxx = pers.hobbies[0]; to access specific item in an array within an object, use index[]
//OR xxx = persn['age'];
console.log(xxxx);

//UPDATE PROPERTIES/CHANGE Values IN OBJECT using the .SYNTAX
const perssn = {
    firstName: 'Tasha',
    age: 30,
};
perssn.age = 'Raya';
console.log(perssn);

//TO UPDATE BOOLEAN IN an ONJECT...Refer to line 722
// person.isAdmin= false; OR
// person['isAdmin'] = false;

//TO COMPLETELY REMOVE A PROPERTY FROM AN OBJECT
//DELETE.
const boys = {
    names: 'Ray',
    ages: 12
};
delete boys.ages;
console.log(boys);

//ADD A NEW PROPERTY to an Object
//Property =  key and value. name:Esther
const boyss = {
    names: 'Ray',
    ages: 12
};
boyss.surname = 'Jamie'; //The property surname:Jamie has been added
boyss.man = true;          //The property man:true has been added
console.log(boyss);

//REVIEW ...ASSIGN/CREATE A FUNCTION TO A PROPERTY
let lor;
const personn = {
    name: 'Raya',
    age: 46,
};
personn.greet = function () {
    console.log(`Hi, my name is ${this.name}`); //this.name to access a or other properties
};
personn.greet();
lor = personn;
console.log(lor);

//NESTING/Concatenating(SPREADOPERATOR) OBJECTS WITHIN OBJECTS AND how to use the SPREADOPERATOR with OBJECTS ...A percent easier t Object.assign
const obj4 = { name: 'Tatasha', age: 28 }; //Refer to line 738-741
const obj5 = { nick: 'queen', year: 29 }; 
// const obj6 = { obj1, obj2 }; To simply log the vars
// const obj6 = { ...obj4, ...obj5 };
const obj6 = { ...obj4, obj5 }; //Spread obj4 across and leave obj5 still nested
console.log(obj6); //Now to concatenate the two onjects values together in one variable, simply add the spreadoperator ... at the begn of the variables.

//Other Methods on the OBJECT
//Object.assign - To spread objects. Does same thing as spread operator
const obj7 = { name: 'Rahel', age: 12 };
const obj8 = { nick: 'Ralia', year: 15 };
obj9 = Object.assign({}, obj7, obj8);
console.log(obj9);

//.hasOwnProperty //To indicate if the object has a specific property. Will give you a boolean result.
//Refer to line 897

//ARRAY of OBJECTS i.e Objects nested in an array
const todo = [
    { list1: 1, title: 'Buy Milk' },
    { list2: 2, title: 'Buy Cheese' },
    { list3: 3, title: 'Buy tons of egg crates and take them home' },
];
console.log(todo);
// To Access the objects in this array...console.log(todo[0]);
// console.log(todo[0].list1);
// console.log(todo[0].title);

//Now to ACCESS specific OBJECT, use BRACKET SYNTAX just like we do with arr.
const tod = [
    { list1: 1, title: 'Buy Milk' },
    { list2: 2, title: 'Buy Cheese' },
    { list3: 3, title: 'Buy tons of egg crates and take them home' },
];
console.log(tod[1]); //To access specific object in this array of objects
// console.log(tod[0].title); // To access specific property in this array of objects. Refer to line 850

// Object. key To get all the keys in an object and put them into an array. e.g name, age etc
let mytod;
const myTodo = [
    { day: 10,    task1: 'Buy Car'},
    { month: 2,   task2: ['Buy House', 'Play Volleyball', 'Play Tennis'], funds: 'one hundred dollars'},
    { year: 2024, task3: 'Travel'},
    { done: 1,    task4: true},
];
// console.log(myTodo); //Object.keys
mytod = Object.keys(myTodo);
console.log(mytod);

//Using .Length //To get the length of an object, i.e how many properties it has in it. We cant use .length on an object but array. Thus, to do that, we first get the keys then use .length.
mytod = Object.keys(myTodo).length; 
console.log(mytod);

//Object.values // (REVIEW) To get an array with all the values, i.e just the values of an array object
mytod = Object.values(myTodo); 
console.log(mytod);

//Object.entries // To get an array of the key value pairs
mytod = Object.entries(myTodo); 
console.log(mytod);

//.hasOwnProperty //To indicate if the object has a specific property. Will give you a boolean result.
//NOTE:  We call this on the ACTUAL object, not arrays of object.
let myhwn;
hsown = {
    name: 'Raya',
    age: 20,
    college: 'ACU',
}
myhwn = hsown.hasOwnProperty('college');
console.log(myhwn);

//DESTRUCTURING / NAMING variable names on Object Literals
//If you're creating an object where the key and values are the same, i.e if the value is a variable, then you don't have to repeat both. E.g
const firstNme = ' Raya';
const lastNme = 'Dragon';
const agie = 28;
//WRONG
// const raya = {
//     firstNme: firstNme, //Setting the key of firstname to whats in the var. Repetition
//     lastNme: lastNme,
//     agie: agie,
// }
// console.log(raya);
//RIGHT
const raya = {
    firstNme,
    lastNme,
    agie,
}
console.log(raya);
// console.log(raya.firstNme);

//DESTRUCTURING ..more of pulling/creating variables out of the object
const mytodo = {
    id: 109,
    ttle: 'Trash out'
}
console.log(mytodo);
//If you want to CREATE a variable of id or title with the id of mytodo
const id = mytodo.id;
console.log(id);
//OR
const ttle = mytodo.ttle;
console.log(ttle);
//But what we can do is destructure property from the object
const myytodo = {
    idd: 109,
    tttle: 'Trash out',
    user: {
        nme: 'Raya',
        agg: 28
    }
}
const { idd } = myytodo;
console.log(idd);
// const { idd, tttle, user } = myytodo;
// const { idd, tttle, user: {nme} } = myytodo;
// console.log(idd, tttle, user);
// console.log(nme);

//RENAME Properties or Keys
const { idd: myId, tttle, user: {nme} } = myytodo; //refer to line 945
console.log(myId);

//JSON Javascript Object Notation
// JSON is a lightweight format for storing and transporting data. It's a way of storing data in a simple human-readable format.
// JSON is often used when data is sent from a server to a web page. In web Dev, esp JS, we work with APIs, to send and receive data to and from a server. Before, XML, now JSON is the standard.
// JavaScript Object Notation is a standard text - based format for representing structured data based on JavaScript object syntax.It is commonly used for transmitting data in web applications(e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).
// JSON File JSON is perfect for storing temporary data. Refer to file mytodo.json. A json file is going to have an array of json objects.
// JSON Syntax Rules   1. Data is in name / value pairs with keys and string values.. number and boolean does not. requiring Double Quotes 2. Data is separated by commas.
//                     3. Curly braces hold objects. 4. Square brackets hold arrays. 5. Just like in JavaScript, an array can contain objects.

//H0W TO CONVERT AN OBJECT TO JSON and back to Object
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is body One'
}
// console.log(post); //This is a mere object l
// 1. Convert JS Object L to a JSON String, use the JSON object method called "Stringify"
const conObj2JStr = JSON.stringify(post);
console.log(conObj2JStr); //This what u'l send when sending data to a server. //Local Storage : is a way to store things in your browser. NOTE: It can only store strings not object l. //Hence to store your object, STRINGIFY your object, put it into a local storage and when u take it out, u'l parse it back into an object. bck2
//2. PARSE JSON
const parVar = JSON.parse(conObj2JStr);
console.log(parVar); //Now we get back the object.

//It can be an array as well to be converted to JSON and back to array
const post2 = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is body One'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is body Two'
    },
]; //An array of objects
//1. Stringify
const conArr2JStr = JSON.stringify(post2);
console.log(conArr2JStr);
//2. Parse
parVr = JSON.parse(conArr2JStr);
console.log(parVr);
//ACCESSING DATA in JSON...
//If you need to access a specific property, you first need to PARSE it
console.log(parVar.id); //Refer to line 979


//OBJECT CHALLENGE
//STEP 1 Create an array or objects called 'library'. Add 3 objects inside with the properties of 'title', 'author' and 'status'. Title and author should be strings (any value) and status should be another object with the property of 'own', 'reading' and 'read'. Which should be boolean values. For all status, set 'own' to 'true' and 'reading' and 'read' to false.
const library = [
    {
        title: 'My Novels',
        author: 'Adams Smith',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'My Songs',
        author: 'James Smith',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'My Movies',
        author: 'Sandra Bullocks',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];
console.log(library);

//STEP 2 You finished reading all the  books. Set the 'read' value for all of them to 'true'. Do not edit the initial object. Set the values using dot notation.
library[0].status.read = true; //Remember it's an array of objects. Target the index[1]...
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

//STEP 3 Destructure the title from the first book and rename the variable first book
// const { title } = library; //Destructure just an object.
// const { title } = library[0]; //Destructure an array.
const { title: firstBook } = library[0]; //Rename variable.
// console.log(title);
console.log(firstBook); 

//STEP 4 Turn the library object into a JSON String. Parse back to an array of object if you like
//Stringify 
const libStr = JSON.stringify(library);
console.log(libStr);
//Parse
const libPrs = JSON.parse(libStr);
console.log(libPrs);

//FUNCTIONS, SCOPE & EXECUTION CONTEXT
//FUNCTIONS BASICS Function is a way to group codes together that you can run it anytime and as many times as you want.
//WAYS to CREATE a FUNCTION. Using the function keyword. Function keyword + fname + parentheses for parameters + curly braces{where the function body goes. The code that will run when we run the function}.
function hello() {
    console.log('Hello Beautiful'); //DECLARING A function
}
hello(); //To run/call function, call the fname with parenrheses and pass in your arguments.

//Passing Data into a function, we use PARAMETERS
function addd(num1, num2) { // Paremeters: (num4, num5). When u declare a function, these are parameters.
    console.log(num1 + num2);
}
addd(5, 10); //When you invoke/call this 'add' function or pass in values here, these  (5, 10) are ARGUMENTS.

function sumUp(a, b, c) {
    console.log(a + b + c);
}
sumUp(2, 3, 6);
//E.g 3
function subtractt(num1, num2) {
    console.log(num1 - num2);
}
subtractt(25, 12);

//Most of the time when we create a function, we are returning some kind of values.
function subtract(num1, num2) {     // (num1, num2) are function params of diff function, so they can be repeated.
    return num1 - num2;            //If we consolelog anytn after this line, it wouldn't run anyth and thats bcos we've exited the function with the return keyword. //NOTE: The reason we return sth is bcos we wanna do sth with that value.e.g put the value into a variable just like: line 1079
}
const myResult = subtract(10, 2);
console.log(myResult);
//Can also just be to consolelog the function
console.log(subtract(20, 5)); 
//E.g 2
function additionn(num1, num2) {
    return num2 - num1;
}
const myReslt = additionn(20, 50);
console.log(myReslt);

//Parameters and Arguments
function regUser(user) {
    return user + ' is registered'; //The user var right here is  not available outside the function, it's in whats called the function scope. Wouldnt return any result if being consoled.
}
console.log(regUser('John'));

//To have a DEFAULT VALUE for variables that might not be defined. Use if statements.
//PREVIOUS METHOD
function regUser(user) {
    if (!user) {            //i.e if not user, that is it didnt get passed in.
        user = 'This User'               //We can take the variable and assign it here
    }
    return user + ' is registered';
}
console.log(regUser());        //user not passed in here. But above, weve set a default value for when it's not passed in. Hence, we have a result.

//ES2015/ES6 Update METHOD
function regUser(user = 'This Account user') { //Simply set default values here.
    return user + ' is registered';
}
console.log(regUser());

//Rest Params/spread op 
function summ(...numbers) {        //Gives us an array of all the arguments we've passed in. 
    return numbers;
}
console.log(summ(1, 2, 3, 4, 5, 6, 7, 8,));     //Gives us a function scoped array called 'numbers'-var

//REVIEW! Use the FOR LOOP to take the numbers passed in a function anad add them together
function summ(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(summ(1, 2, 3, 4, 5, 6));


//Review! Objects as Params
function loginUser(user) {
    return `The user ${user.name} with the id ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'Raya'
};
console.log(loginUser(user)); //OR
console.log(loginUser({ id: 2, name: 'Rayah'}));

//Review! Array as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4]);

//SCOPE: //GLOBAL AND FUNCTION SCOPE
//Scope refers to the current area or the context of a specific piece of code and certain rules for what we can access in specific scopes.
//GLOBAL SCOPE: Global variables are accessible from anywhere. E.the method x, 'alert', if, 'innerWidth'.. Creatinga a function that is not in a function or block refers to Global scope. G.S can be accessed in functions as well.
//FUNCTION SCOPE: Functions have their own scope. Variables defined within a function is function scoped. These vars can only be logged within just functions not outside it.
//Variable Shattling: Overriding Globally scoped values

//BLOCK (LEVEL) SCOPE
//Var is not block level scoped(it can be accessed outside a block, thus it is  FUNCTION SCOPED. You cant access it outside a function but can with other blocks like loops and if stmts + the variable gets added to the window object whc u don't want), let and const are(cannot).
//If we have a conditional whc is a block, we can access our global variables from it. Inside the block, we can access varaiables within this block level. e.g
const xi = 100;
if (true) {
    const y = 200; // Y hasnt been defined in the global scope. It's def in this block, hence it belongs to this block.
    console.log(xi + y);
}

//NESTED SCOPE - HOW SCOPE WORKS WITH NESTED FUNCTIONS AND NESTED BLOCKS. Nested Function relartes to Closure
function myFirst() {
    const myx = 100;

    function second() {
        const myy = 300;
        console.log(myx + myy); //From the child function, we can access any variable that are in the parent scope, however, we cant access the child variable within the parent scope.
    }

    second();
}
myFirst();

//E.g 2
if (true) {
    const myX = 300;

    if (myX === 300) {
        const myY = 200;
        console.log(myX + myY);
    }
}

//DECLARATION Vs EXPRESSION (Creating Functions)
//FUNCTION DECLARATION (Regular function decoration)
function addDollar(value) {
    return '$' + value;
}
console.log(addDollar(200));

//EXPRESSION  We create a variable and set that equal to a function. The expression is a function assigned to a variable.NOTE: A semi - colon is usally at the end of an expression unlike a declaration.
const nairaSign = function (value) {
    return 'N' + value;
};
console.log(nairaSign(600));


//ARROW FUNCTIONS
                            function addtion(a, b) {
                                return a + b;
                            }
                            console.log(addtion(5, 9));
                            
//RE-WRITE the Above as an ARROW FUNCTION
//Regular Arrow Function Syntax
const addition = (a, b) => {             //In arrow function we can get rid of the function keyword and instead of using the f keyw after the parenthesis, we gon use an equal to symbol and an arrow symbol(>)
    return a + b;
};
console.log(addition(5, 9));

//Shorten the above arrow f by getrtn rid of the return st and curly braces (Implicit Return)
const subtraction = (a, b) => a - b;
console.log(subtraction(20, 5));
//E.g 2
const myArw = (d, e) => d - e;
console.log(myArw(45, 16));

//Dont need parenthesis around a single parameter
const multiply = a => a * 3;
console.log(multiply(20));

//Returning an Object using arrow function
const myObjectt = () => ({
    name: 'Raya',
    age: 22
});
console.log(myObjectt());

//Using Arrow function on arrays
  const numbs = [2, 4, 6, 8, 10,];
                        numbs.forEach(function (n) {
                            console.log(n);
                        });

numbs.forEach((n) => console.log(n));
 

// IIFE - Immediately Invoked Function expressions - Biggest reason for this - to avoid Global scope pollution. i.e redeclaring a variable that has already been declared in another file of the same document(this user has already been declared in the global scope of another file). 
//Note that the variable we now create here is not in the global scope but in the IIFE scope. Also any function declared inside an IIFE has to be invoked/run inside the IIFE not out of it.
//Few ways to handle such situations: 1. IIFE
//IIFE SYNTAX - ()() The function keyword itself is surrounded with parenthesis but the function is unnamed. Then add another parenthesis to invoke it.
(function () {
    const user = 'Raya';
    console.log(user);
    // const hello = () => console.log('Hello Beautiful');
    // hello();
})();
//ADDING PARAMETERS TO IIFE
(function (myName) {
    console.log('Hello ' +  myName);
})('Raya');

//HAVING NAMED IIFEs / ADDING NAMES TO IIFE Function
//WARNING!!!! RECURSSION!! DO NOT TRY!
// (function hello() {
//  console.log(Essie)
//    hello();
// })();
// hello(); You should not do this because you can't call a function outside the IIFE and you can't call it within it either bcos that will be a recurssion (calling a function from itself) and will crash your system. Leads to an infinite loop.

//CHALLENGE
//1. Write a function that will take a number and add 10 to it. Let's say pass in 3, the result will be 13.
const add = d => d + 10;
console.log(add(3));
//2. Create another function that will pass in three numbers and sum them up.
function sumUp(a, b, c) {
    console.log(a + b + c);
}
sumUp(2, 3, 6);
//Using arrow functions
const myAdd = (a, b, c) => a + b + c;
console.log(myAdd(2, 3, 6));

//OR
const myFunArr = (a, b, c, d) => a + b + c + d;
console.log(myFunArr(10, 20, 30, 43));

//3. Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsis.nFor bonus point, write it as a one line arrow function.
function getCelsius(f) {
    const celsius = ((f - 32) * 5) / 9;
    return celsius;
}
console.log(getCelsius(32));
//Convert the above into a one-line(Arrow) function.
const gettCelsius = (f) => ((f - 32) * 5) / 9;
console.log(gettCelsius(32));
//Put it in a template string
console.log(`The temperature is ${getCelsius(32)} C`)

//4. Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.
// const minMax = ([1, 2, 3, 4, 5, 6, 7, 8]) => ( )
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(min);
    console.log(max);

    return {
        min,
        max,
    };
}
console.log (minMax([1, 2, 3, 80, 4, 5, 6, 12]));

//5. Create an IIFE that takes in the lenghth and width of a rectangle, outputs it in the console in a message as soon as the page loads.
// (function () { })  Can as well use an arrow function inside an IIFE instead of this regular function
    //i.e 
    ((length, width) => {
        const area = length * width;

        const myyOutput = `The area of a rectangle with a length of ${length} and width of ${width} is ${area}.`;
        
        console.log(myyOutput);
    })(20, 6);

//EXECUTION CONTEXT When you run any Javascript, a special enviroment is created to handle the transformation and ecxecution code. This is called the execution context. It contains the currently running code and everything that aids in its execution.
//There is a global execution context as well as a function execution context for every function invoked.
//PHASES: 1. Memory Creation Phase : a. Creates the global object(browser=window, Node.js=global). b.Create the 'this' object and bind it to the global object. 
                                                //c.Setup memory heap for storing variables and function references.d.Store functions and variables in global execition context and set to "undefined". 
       // 2. Execution Phase : a. Execute code line by line. b. Create a new execution context for each function call.   
//The CALL STACK - Stack is a data structure. Manages execution contexts. Stacks are LIFO last in first out.
    
    
//LOGIC AND CONTROL FLOW        
//If STATEMENTS - SYNTAX:                   Note that when you pass into an if statement, JS converts it to a Boolean value.
// if (VALUE / EXPRESSION) {
//     console.log(RUN THIS CODE);
// }
if (true) {
    console.log('This is true');
}
//Evaluate Expressions with Operators
// < - Less than
// > - Greater than
// <= - Less than or equal to
// >= - Greater than o equal to
// == - Equal to
// != - Not equal to
// === - Equal to (including type)
// !== - Not equal to (including type)
const be = 10;
const bi = 6;
if (be > bi) {
    console.log(`${be} is greater than ${bi}`);
}

const ce = 20;
const ci = 20;
if (ce === ci) {
    console.log(`${ce} equals to ${ci}`);
}

//ELSE - Otherwise, run this code.
const de = 50;
const ge = 60;
if (de >= ge) {
    console.log(` ${de} is less than or equals to ${ge}`);
} else {
    console.log(` ${de} is not less than or equals to ${ge}`);
}

//Run two lines of if statements results with comma
const he = 80;
const she = 80;
if (he === she) {
    console.log(`${he} equals ${she}`),
        console.log(`${he} strictly equals ${she}`);
}  else {
    console.log(` ${he} is not less than ${she}`);
}

//ELSE-IF & NESTING  Else-If: Comes in when you have multiple conditions that you wanna test and run some block of codes based on these multiple conditions
const ddaate = new Date(12, 30, 2023, 14, 0, 0);
const myHour = ddaate.getHours();
// console.log(myHour);
if (myHour < 12) {
    console.log('Good Morning!');
} else if (myHour < 18) {
    console.log('Good Afternoon!')
}
else {
    console.log('Good Night!');
}

//NESTED If
const ddaattee = new Date(12, 30, 2023, 6, 0, 0);
const myyHour = ddaattee.getHours();

if (myyHour < 12) {
    console.log('Good Morning');

    if (myyHour === 6) {            //Nested If - You can nest as many levels as you want
        console.log('Wake Up!');
    }

} else {
    console.log('Good Night!');
}

if (myyHour >= 20) {                 //Nested If
    console.log('zzzzzzzz');
    }

//HAVING MULTIPLE CONDITIONS in a Single If STATEMENT
const nn = new Date(12, 20, 2023, 10, 0, 0);
const thisHour = nn.getHours();
console.log(thisHour);

if (thisHour >= 7 && thisHour < 15) { //AND
    console.log('This is work time')
}

if (thisHour === 6 || thisHour === 20) {    //OR
    console.log('Brush your teeth');
}
// thisHour >= 13 ? console.log(123) : console.log('abc'); //?-if :-else

//SWITCH STATEMENTS   Best to use when you have multiple else if statements.
//Switches are most commonly used with immediate values and can as well be used with ranges.
const nnwdate = new Date(2023, 4, 20, 7, 0, 0);
const getMyMonth = nnwdate.getMonth();

switch (getMyMonth) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is Febuary');
        break;
    case 3:
        console.log('It is March');
        break;
    default:                            //No need for a break after default
        console.log('It ia not Jan, Feb or March');
}

const nnnwdate = new Date(2023, 4, 20, 7, 0, 0);
const gettMyMonth = nnnwdate.getMonth();

switch (true) {
    case gettMyMonth < 12:
        console.log('Good Morning');
        break;
    case gettMyMonth < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
}

//CALCULATOR CHALLENGE      Create a function called calculator that takes three parameters: num1, num2 and operator. The operator can be +, -, * or /. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
            case '*':
                result = num1 * num2;
                break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator';
    }
    console.log(result);
    return result;
}
calculator(20, 5, '*');

// TRUTHY / FALSY VALUES
//Falsy Values : false, 0, an empty string, null, undefined, NaN. Most time, everything else is truthy.
//Truthy Values : everything else that is not falsy, true, anything in a string including 0 and space, false in a string, an empty array, an empty object, an empty function.
//Truthy / Falsy Caveats 5:40
//If you pass in 0 into an if statemnet, you'll get a falsy value. Now in real life web form application....
// const children = 6;
//    if (children) { }
const children = 0;             //Have six children! What if you have 0 children? The first line of the if statement will not run 0 as a number of children bcos 0 is a falsy value.
if (children !== undefined) {   //Solution: if Children not equal to undefined or children is not a number. i.e if 
                                //Solution 2: (!isNan(children)){ console.log() }
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}

//Checking for Empty Arrays               Let's say we have an array of blog posts and if there are no posts, we wanna displaya a 'no post' message.
// const myPost = ['Post one', 'Post Two'];
// if (myPost) { };
const myPost = [];              //What if we have an empty array like this, JS reads it as truthy value and thus does not run the else if statement for it.
if (myPost.length > 0 ) {                   //Solution: Use the .length property on the array method
    console.log('List Posts');
} else {
    console.log('No Posts');
}

//Checking for Empty Objects            Note: You cant use .length property directly on an object
// const thUser = {name: 'Raya'};
//     if (thUser) { console.log( )}
const thUser = {};                              //JS reads an empty object as truthy value and thus does not run the else if statement for it.
if (Object.keys(thUser).length > 0 ) {          //Solution 1: Use the object.keys property as this will give us ana rray of the jeys. Then we can call length on it and say if that is greater than 0...
    console.log('List Users');
} else {
    console.log('No User');
}

//LOGICAL OPERATORS
//LOGICAL AND && operator :The logical AND operator (&&) returns true if both/all operands are true and returns false otherwise.
console.log(20 > 10 && 30 > 15 && 70 > 60 && 100 < 200); 

//LOGICAL OR || operator :The logical OR operator (||) returns true if any (at least one) of the operands is true and returns false otherwise.
console.log(88 > 66 || 44 < 22);

// && - Will return the first falsy value or the last value.
let ii;

ii = 10 && 20 && 30;
ii = 10 && 0 && 30;
console.log(ii);

// const ppost = [];
const ppost = ['Post One', 'Post Two'];
ppost.length > 0 && console.log(ppost[0]);

// || - Will return the first truthy value or the last value.
let bb;

bb = 10 || 20;
bb = 0 || 20;
console.log(bb);

//LOGICAL NULLISH COALESCING OPERATOR (??) - Returns the right side operator when the left is either null or undefined(Not falsy).
let cc;
cc = null ?? 20;
console.log(cc);

//LOGICAL ASSIGNMENT
//The OR ASSIGNMENT OPERATOR (||=) - Will assigns the right side value only if the left is a falsy value.
let ff = false;
if (!ff) {
    ff = 40;
}
console.log(ff);
//Shorthand of the above using the Logical Operator
ff = ff || 40;
console.log(ff);

//Shorthand of the above using the Assignment Operator
ff ||= 40;
console.log(ff);


//The AND ASSIGNMENT OPERATOR (&&=) - Will assigns the right side value only if the left is a truthy value.
let gg = 22;
if (gg) {
    gg = 55;
}
console.log(gg);

//Shorthand of the above using the Logical Operator
gg = gg && 55;
console.log(gg);

//Shorthand of the above using the Assignment Operator
gg &&= 55;
console.log(gg);

//The Nullish Coalescing ASSIGNMENT OPERATOR (&&=) - Will assigns the right side value only if the left is null or undefined only.
let hh = null;
if (hh === null || hh === undefined);
hh = 99;
console.log(hh);

//Shorthand of the above using the Logical Operator
hh = hh ?? 99;
console.log(hh);

//Shorthand of the above using the Assignment Operator
hh ??= 99;
console.log(hh);

//TERNARY OPERATOR - The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy. Is a shorter way for writing conditionals.
// We use the ternary operator in C to run one code when the condition is true and another code when the condition is false. t works with three values at once, which is where its name comes from: it checks a condition specified in the first value, and if it's true returns the second value, but if it's false returns the third value.
//SYNTAX : Condition - If - Else

const yourAge = 18;         //Using an If Statement
if (yourAge >= 18) {
    console.log('You can Vote')
} else {
    console.log('You can not Vote');
};

//Using a ternary Operator
const yourrAge = 12;
yourrAge >= 20 ? console.log('You can Not Vote') : console.log('You can not Vote');

//Assigning a conditional value to a variable using a ternary operator -(In a lot of cases, you're gonna set a variable value based on a condition...e.g)
const myAge = 30;
const canVote = myAge >= 30 ? 'You can now Vote': 'You can not Vote';  // const canVote = myAge >= 30 ? true : false ; 
console.log(canVote);

//Can also have Multiple statements within the if and the else
// const auth = true;
// let redirect;

// if (auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Access Denied');
//     redirect = '/login';
// }
// console.log(redirect);
// //Do the above using the ternary operator
// const authh = false;
// const redirectt = authh ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login');
// console.log(redirectt);

//We can use the AND Operator as a shorthand if there's no else because not every if st or condition has an else, you might just wanna do one thing.
const autthh = true;  
autthh ? console.log('Welcome') : null;
autthh && console.log('Welcome'); //Using the AND Operator for the above


//LOOPS AND HIGH ORDER ARRAY METHODS - A loop is a control structure that provides a way to do iteration in programming (Iteration - is a process where you repeat something over and over again until a certain condition is met or not met).
//Loops are used in JavaScript to perform repeated tasks based on a condition.Conditions typically return true or false.A loop will continue running until the defined condition returns false. In programming, loops are used to repeat a block of code. For example, if you want to show a message 100 times, then you can use a loop.
//A "For" Loop is used to repeat a specific block of code a known number of times.For example, if we want to check the grade of every student in the class, we loop from 1 to that number.When the number of times is not known before hand, we use a "While" loop.
//LOOPS (Kinds) 1. For LOOP - Syntax-  for ([initialExpresion]; [conditionExpression]; [incrementExpression]) statement; i.e 3 Expressions seperated with a semicolon plus statement. Use a for loop when the number of times the loop will run is known/certain.
//INITIAL EXPRESSION - Initializes a variable/counter
//CONDITION EXPRESSION - Condition that loop will continue to ru n as long as it is met or until the condition is false
//INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable.
//STATEMENT - Code that will be executed each time the loop is run. To execute a block of code =, use the `{}` syntax.
for (let myLoop = 0; myLoop <= 10; myLoop++) {
    console.log('Number ' + myLoop);
}

//Check a condition using an if statement
for (let myL = 0; myL <= 10; myL++) {
    if (myL === 7) {
        console.log('7 is my lucky number');
    } else {
        console.log('Number ' + myL);
    }
}
//NEST LOOPS
for (let myl = 1; myl <= 10; myl++){
    console.log('Multiplication ' + myl);

    for (myj = 1; myj <= 10; myj++){
        console.log(`${myl} * ${myj} = ${myl * myj}`);
    }
}

//Loop through an array using for loop
const thNames = ['Brad', 'Essie', 'Raya', 'Tasha', 'Josie'];
for (let favn = 0; favn < thNames.length; favn++){
    if (favn === 2) {
    // if (thNames[favn] === 'Brad') { //Or check for values
        console.log(thNames[favn] + ' is the greatest');
    } else {
        console.log(thNames[favn]);
    }
}
//Break and Continue Statement -
//BREAK - Break allows us to break out of a loop. Check for a specific condition and break out
for (let thLoop = 0; thLoop < 16; thLoop++) {
    if (thLoop === 12) {            //As long as thisloop is at 15, stop running code. You might have cases that once you hit a certain condition when there's  no need to keep going, you can easily break out of it.
        console.log('Breaking.....');
        break;
    }
    console.log(thLoop);
}
//Continue - You can skip the rest of the code in a current iteration and continue to the next of the iteration
for (let thisLoop = 0; thisLoop <= 20; thisLoop++){
    if (thisLoop === 12) {
        console.log('Skipping 12...');
        continue;
    }
    console.log(thisLoop);
}

//While and D0-While Loops
//While Loop - Note: Use a while loop when the number of times the loop will run is uncertain.
//Syntax - Initialize variable outside the while loop. A condition within the loop and an Increment after it.
let myWloop = 0;                //Initialize Expression
while (myWloop <= 12) {         //Condition Expression
    console.log('Number ' + myWloop);
    myWloop++;                  //Increment Expression. NOTE:Never forget to Increment
}
//Loop over arrays with while loop
let thisArr = 0;
const myArry = [10, 20, 30, 40, 50];
while (thisArr < myArry.length) {
    console.log(myArry[thisArr]);
    thisArr++;      //NOTE:Never forget to Increment
}

//Nesting while loops
let ar = 0;
while (ar <= 11) {
    console.log('Num ' + ar);

    let nxt = 1;
    while (nxt <= 11) {
        console.log(`${ar} * ${nxt} = ${ar * nxt}`);
        nxt++;                  //NOTE:Never forget to Increment
    }
    ar++;                       //NOTE:Never forget to Increment
} 

//DO WHILE LOOP -!NOTE You use this when you always want the block of code to at least run even if a condition is never met.
let myDw = 21;
do {
    console.log('Number ' + myDw);      //Do while runs the code no matter what.
    myDw++;
} while (myDw <= 20);

//FizzBuzz CHALLENGE
//1. Print/log thenumbers from 1 to 100.    2. For multiples of three, print 'Fizz' instead of the number.
//3. For multiples of five, print 'Buzz'.   4. For numbers which are multiples of both three and five, print 'FizzBizz'.
for (let myCh = 1; myCh <= 100; myCh++) {
if (myCh % 3 === 0 && myCh % 5 === 0) {
// if (myCh % 15 === 0) {
    console.log('FizzBuzz');
} else if (myCh % 3 === 0) {
        console.log('Fizz');
    } else if (myCh % 5 === 0) {
        console.log('Buzz');
    } else{
        console.log(myCh);
    }

}

//OR do it with the while loop
let myChl = 1;
while (myChl <= 100) {
    if (myChl % 3 === 0 && myChl % 5 === 0) {
        // if (myCh % 15 === 0) {
            console.log('FizzBuzz');
        } else if (myChl % 3 === 0) {
                console.log('Fizz');
            } else if (myChl % 5 === 0) {
                console.log('Buzz');
            } else{
                console.log(myChl);
    } 
    
    myChl++;                //NOTE:Never forget to Increment
}

//For Of Loop - A better/newer/cleaner way to loop through an array than the standard for, while...loop. It's a way to loop through arrays, strings maps etc etc...
//Loop through arrays with for of loop
const items = ['Book', 'Table', 'Chair', 'Kite', 'Bell'];
for (const eachitem of items) {
    console.log(eachitem);   
}
//To have an array with objects in it
const users = [
    { name: 'Tom ' },
    { name: 'Kate ' },
    { name: 'Max ' },
];
for (const myuser of users) {
    console.log(myuser);
    // console.log(myuser.name);   To access specific property
}
//Loop over strings with for of loop
const str = 'Hello World';
    for (const letter of str){
    console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('name', 'John');        //Add key value pairs
map.set('age', 30);             //Add key value pairs
for (const [key, value] of map) {       //Get the key and value
    console.log(key, value);            //Log both key and value
}

//For in LOOP - Allows you loop through objects
const colorObj = {
    color1 : 'Red',
    color2 : 'Blue',
    color3 : 'Yellow',
    color4 : 'Orange',
    color5 : 'Pink',
}
for (key in colorObj) {
    console.log(key);
    // console.log(key, colorObj[key]);    //To get the value, take the color object varaiable and pass in the key.
}
//Use for in loop with array
const colArray = ['red', 'orange', 'blue'];
for (const colour in colArray) {
    console.log(colour);    //This gives us the key in numerals
}
for (const key in colArray) {
    console.log(colArray[key]);    //To get the actual Value
}

//HIGH ORDER ARRAY METHODS
//FOR EACH - The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array. It takes in a callback function as an argument (and in that call back function, we can pass in a variable for each element/item in that array)applies it to each element of the array.
//A foreach simply loops through as if we use the for or for of loop to just go throught the array and do sth specific, it doesn't return anything. kit just It is used to iterate through an array or collection of elements and perform specific actions on each element. The forEach() method calls a function for each element in an array.
//Syntax: array. forEach(callback(element, index, arr), thisValue);
const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];
socials.forEach(function (item) {   //We call the foreach method and that method's gon take a callback function
    console.log(item);
})
//OR
socials.forEach((item) => console.log(item));
// In addition to the item passed to the call back, there are other arguments that can be passed in the foreach loop, i.e indexedDB, array, value. 
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

//Can also pass in a named function rather than an anonymous callbacl
const socialls = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];
function logSocial(socialls) {
    console.log(socialls);
}
socialls.forEach(logSocial);

//Using forEach on array of objects
const socialObjs = [
    { name: 'Tweet', url: 'https://twitter.com' },
    { name: 'Linked', url: 'https://linkedin.com' },
    { name: 'Fb', url: 'https://facebook.com' },
    { name: 'Inst', url: 'https://instagram.com' },
];
socialObjs.forEach((item) => console.log(item));
socialObjs.forEach((item) => console.log(item.url)); //To access specific property

//Array.FILTER - JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method.
//The filter() method is used to filter all the elements and returns the element that matches or pass the test of a given condition and the element that do not match are removed. Filter returns sth, in most cases a modified arrays.
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNumbers = numberss.filter(function (numbers) {
    return numbers % 2 === 0;
});
console.log(evenNumbers);
//Shorter version
const nnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNumber = nnumber.filter(nnumber => nnumber % 2 === 0);
console.log(evenNumber);

//Same with forEach method
const nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evennumber = [];
nnumbers.forEach((nnumbers) => {
    if (nnumbers % 2 === 0) {
        evennumber.push(nnumbers);
    }
});
console.log(evennumber);

//Using FILTER more complicated array - Using an array of company object
const companies = [
    { name: 'Atlas', category: 'Finance', start: 1980, end: 2004 },
    { name: 'Titan', category: 'Retail', start: 1990, end: 2008 },
    { name: 'Exela', category: 'Auto', start: 1972, end: 2010 },
    { name: 'Technologent', category: 'Technology', start: 1964, end: 2005 },
    { name: 'Jarvis', category: 'Retail', start: 1922, end: 1996 },
    { name: 'Groupon', category: 'Finance', start: 2006, end: 2012 },
    { name: 'LosAmigo', category: 'Security', start: 1982, end: 1994 },
    { name: 'Innometrics', category: 'Cyber', start: 1964, end: 2001 },
    { name: 'Superscapes', category: 'Auto', start: 1999, end: 2009 },
    { name: 'Arctic', category: 'Finance', start: 2000, end: 2008 },
];
//1. Get only Retail Companies
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);
//2. Get companies that started in or after 1980.
const startDate = companies.filter((company) => company.start >= 1980 );
console.log(startDate);

//3. Get companies that started in or after 1980 AND ended in or before 2005
const startEndDate = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(startEndDate);

//4. Get companies that lasted thirty years or more
const longestOperation = companies.filter((company) => company.end - company.start >= 30);
console.log(longestOperation);

//ARRAY.MAP     MAPS -Allows us to return an array just like a filter but we can modify anytn we want and return an array of anytn we want..
//Javascript map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and call function on every element of the array.
//map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. With map, the function that we pass in can return anything that we want to be put into our new array variable.
const array1 = [1, 4, 9, 16];
const map1 = array1.map(eachnum => eachnum * 2);
// const map1 = array1.map(eachnum => 'ThisNumber ' + eachnum);   //Can return anything
console.log(map1);

//Try with forEach method
// const array2 = [1, 4, 9, 16];
// const doubled = [];
// array2.forEach((number) => {
//     doubled.push(number * 2);
// });
// console.log(doubled);

//...5. Create an array of Company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

//6. Create a new array that has just the company and the category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
});
console.log(companyInfo);

//7. Create an array of the length of each company and years
const companyYears = companies.map((company) => company.end - company.start);
console.log(companyYears);

//8. Create an array of objects with the name and the length of each company in years
const companyNameYear = companies.map((company) => {
    return {
        name: company.name,
        years: company.end - company.start + ' Years in practice',         //Plus concatenate the string 'Years' if you like
    }
});
console.log(companyNameYear);

//Chain Map methods - You can have more than one map method
//E.g Take a number, get the sqaure root and then double it
const nmbs = [9, 16, 64]
const squareAndDouble = nmbs.map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2)
console.log(squareAndDouble);
//Longer version
const sqrAndDouble = nmbs
    .map(function (number) {
        return Math.sqrt(number);
    })
    .map(function (sqrt) {
        return sqrt * 2;
    })
    .map(function (Doubledsqrt) {
        return Doubledsqrt * 5;
    });
console.log(sqrAndDouble);

//Chaining different methods
const nmb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenDoubled = nmb.filter((number) => number % 2 === 0)  //Get even numbers
.map((number) => number * 2);                                //Multiply the even numbers
console.log(evenDoubled);

//Array.REDUCE - Used to reduce an array down to a single value. (E.g Reducing your shopping cart to a single total price) The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result.
//The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.
//Arr. reduce() performs a reducer function on each element of the array and returns a single output. The reducer runs through all array elements (from left to right) in order and returns the result from the calculation on the preceding element. Thus, the final result is a single value.
//The reduce() method got its name from the functionality it provides, which is to iterate and “reduce” an array's values into one value.
const myarray = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = myarray.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
// const sumWithInitial = myarray.reduce((acc, cur) => acc + cur, 0);
console.log(sumWithInitial);

//Same but longer version. Get the sum of all the numbers on this shopping list with array.reduce.
const noms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sumAll = noms.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); //0 Here is the initial value. It's not always required but you can choose to add it.
console.log(sumAll);

//Using a for Loop to do the above
const nomm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const summm = () => {
    let acc = 0;
    for (const cur of nomm) {
        acc += cur;
    }
    return acc;
};
console.log(summm());

//Get the total of this Shopping Cart Prices with reduce
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];
const totall = cart.reduce(function (acc, product) {
    return acc + product.price
}, 0);
console.log(totall);

//Shorter version 
const totalll = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalll);

//ARRAY METHOD CHALLENGES
// 1. Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name property should have their first and last name.
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];
const youngPeople = people
.filter((person) => person.age <= 25)
.map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
}));
console.log(youngPeople);

// 2. Add all the positive numbers in the array  HINT: Filter (if the number is greater than 0, i.e positive)
const nmm = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = nmm
    .filter((numbers) => numbers > 0)
    .reduce((acc, cur) => acc + cur, 0);
console.log(positiveSum);

// 3. Create a new array called capitalizedWords with the words from the words of array with the first letter of each word capitalized.
const words = [ 'coder', 'programmer', 'developer'];
const capitalizedWords = words.map((word) => {
            //return word.toUpperCase(); NOTE: This would Capitalize ALL words
    return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(capitalizedWords);


//CHALLENGES FROM TOPICS TAKEN SO FAR
// 1. Write a Javascript function that reverses the number 86543
const miArr = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9];
rvr = miArr.reverse();
console.log(rvr);
//SOLUTION
function reverseNumber(number) {
    //Convert the number to a string
    let numString = number.toString();

    //Reverse the string
    let reverseString = numString.split('').reverse().join('');
    //The JavaScript Array join() Method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(,).
    let convertBackToString = parseInt(reverseString);
    console.log(convertBackToString);
}
reverseNumber(9876543201);
//This function first converts the input number to a string, then reverses the string by splitting it into an array of characters, reversing the array, and joining the characters back into a string. Finally, it converts the reversed string back to a number using parseInt.
//OR 
const revNumm = (number) => {
    let rvsd = number.toString();
    let rvsdd = rvsd.split('').reverse().join('');
    let par = parseInt(rvsdd);
    console.log(par);
}
revNumm(87654);

//2. Write a function to loop through even/odd numbers from 1 to 100
function printEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbers();
//ODD
function printOddNumbers() {
    for (let i = 1; i <= 50; i += 2){
        console.log(i)
    }
}
printOddNumbers();

//3. Write a function that counts the total number of letters in a word.
function countLetters(letters) {
    let countThis = letters.length;
    console.log(countThis);
}
countLetters('Wonderfully');

//4. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen. Sample Output :"0 is even", "1 is odd", "2 is even"
function myjsloop() {
    for (let num = 0; num <= 15; num++) {
        if (num === 0) {
            console.log(num  + ` is even`);

        } else if (num % 2 === 0) {
            console.log(num + ' is even');
        } else if (num % 1 === 0) {
            console.log(num + ' is odd');
        } else {
            console.log(num);
        }

    }
}
myjsloop();

//5.REVIEW Write a JavaScript program to compute the sum and product of an array of integers
function sumProduct(arry) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < arry.length; i++){
        sum += arr[i];
        product *= arr[i];
    }

    return {
        sum: sum,
        product: product
    };
}
console.log(sumProduct[1, 2, 3, 4]);

//6. Write a JavaScript program to get the current date.
function myCDate() {
    let mydate = new Date();
    console.log(mydate);
}
myCDate();

//7.	Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). 12 and 10. Result 120.
function calMulDiv(num1, num2) {
    let myMul = num1 * num2;
    let myDiv = num1 / num2;
    let myAddMul = myMul + myDiv;

    console.log(myMul, myDiv, myAddMul);
}
calMulDiv(12, 10);

//8. Write a JavaScript program to calculate the days left before Christmas.
function calChristmas() {
        // Get the current date
    let currentDate = new Date();

     // Get the current year
    let currentYear = currentDate.getFullYear();

    // Set the target date to Christmas (December 25th of the current year)
    const xmasDate = new Date(currentYear, 11, 25);

    // If Christmas has already passed this year, set the target date to next year. Note: Months are zero-indexed (0 for January, 11 for December)
    if (currentDate > xmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }

     // Calculate the difference in milliseconds
    const timeDiff = xmasDate - currentDate;

    // Convert milliseconds to days
    const daysLeft = Math.ceil (timeDiff / (1000 * 60 * 60 * 24));

    console.log(`There are ${daysLeft} days left before Christams.`);
}
calChristmas();

//ORR
function calcXmas() {
    let xmas = new Date('2024-12-25T00:00:00');
    let today = new Date();
    let dayLft = xmas - today;
    let convertt = Math.ceil(dayLft / (1000 * 60 * 60 * 24));
    console.log(`We have ${convertt} days left before Christmas`);
}
calcXmas();

//9. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function gtDiff(number) {
    let specifiedNum = 13;
    const absDiff = Math.abs(number - specifiedNum);
    if (number > 13) {
        console.log(absDiff * 3);
    } else {
        console.log(absDiff);
    }
}
gtDiff(20);

//OR
function diffBtwNum(num1, num2) {
    let dif = num1 - num2;
    if (num1 > num2) {
        console.log(dif * 2);
    } else {
        console.log(Math.abs(dif));
    }
}
diffBtwNum(13, 40);


//10. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function numn(num1, num2) {
    let sum = num1 + num2;
    let diff = num1 - num2;
    if (num1 === num2) {
        console.log(sum * 3);
    } else {
        console.log(sum, diff);
    }
}
numn(30, 30);

//11.	Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function userInput(number) {
    let specifiedNum = 19;
    const absoluteDiff = Math.abs(number - specifiedNum);
    if (number > 19) {
        console.log(absoluteDiff * 3);
    } else {
        console.log(absoluteDiff);
    }
}
userInput(40);
//OR
function mam(num1, num2) {
    let diff = num1 - num2;
    if (num1 > num2) {
        console.log(diff * 3);  
    } else {
        console.log(diff);
    }
  
}
mam(45, 20);




//12. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function nmPair(num1, num2) {
    if (num1 === 50 || num2 === 50) {
        console.log(true);
    } else if (num1 + num2 === 50) {
        console.log(true);
    } else {
        console.log(false);
    }
}
nmPair(50, 40);

//13. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
// Define a function named testhundred that takes a parameter x
function checkRange(number) {
    // Return true if the absolute difference between 100 and x is less than or equal to 20,
  // or the absolute difference between 400 and x is less than or equal to 20; otherwise, return false
    return ((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20));
}
// Log the result of calling the testhundred function with the argument 90 to the console
console.log(checkRange(10));
console.log(checkRange(90));
console.log(checkRange(200));
//Using the Arrow function 
const chkRange = (number) => ((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20));
console.log(chkRange(99));

//14. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
function chkInt(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        console.log('Positive')
    } else if (num1 < 0 && num2 < 0) {
        console.log('Negative')
    } else {
        console.log('None')
    }
}
chkInt(-2, -1);

//15. create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 
function myStrn(letter) {
    let newStr = 'Py' + letter;
    if (letter[0] === 'P' && letter[1] === 'y') {
        console.log(letter);
    } else {
        console.log(newStr);
    }
}
myStrn('thagoras');
//OR
//STARTSWITH AND ENDSWITH
//The startsWith method is used to check if the string starts with a specific substring and endsWith does otherwise.
function miStr(letter) {
    if (letter.startsWith('Py')) {
        console.log(letter)
    } else {
        console.log('Py' + letter);
    }
}
miStr('Pythonnn');

//16. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function modStr(letter) {
    let modifiedString = letter.replace('raya', 'Rose');
    console.log(modifiedString + 'is my new word.');
}
modStr('Estherraya');

//17. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function createNewString(letter) {
    let createdString = letter.replace('B', 'W');
    let newCreated = createdString.replace('k', 'lly');
    console.log(newCreated);
}
createNewString('Bonderfuk');
//OR/BEST Here's a JavaScript program that creates a new string from a given string by changing the position of the first and last characters:
function changeFirstAndLastPosition(letter) {
    // Check if the string length is greater than or equal to 1
    if (letter.length >= 1) {
          // Get the first and last characters
        const firstChar = letter[0]; 
        const lastChar = letter[letter.length - 1];
         // Create a new string with the first and last characters swapped
        const newString = lastChar  + letter.substring(1, letter.length -1) + firstChar;
        console.log(newString);
    }
}
changeFirstAndLastPosition('Anatomy');

//18.	Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. 
function mySt(letter) {
     // Get the first character
    let newSt = letter[0];
    let addStr = newSt + letter + newSt;
        console.log(addStr);
}
mySt('Grandiour');

//19. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
function checkNumber(num) {
    if (num % 3 === 0 || num % 7 === 0){
        console.log(true)
    } else {
        console.log(false)
    }
}
checkNumber(24);

//20. Write a JavaScript program to create a string from a given string.This is done by taking the last 3 characters and adding them at both the front and back.The string length must be 3 or more.  
function crtStr(letter) {
    if (letter.length > 3) {
        const crtdStr = letter.slice(-3);
        const newlyCrtStr = crtdStr + letter + crtdStr;
        console.log(newlyCrtStr);
    } else {
        console.log(`String length is lesser than 3`)
    }
}
crtStr('Amazingly');

//21. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 
function checkStr(letter) {
    if (letter.startsWith('Java')) {
        console.log('This letter starts with Java')
    } else {
        console.log('This letter does not start with Java');
    }
}
checkStr('Javascript');

//22.	Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  
function chekRange(num, numb) {
    //parseInt is used to convert the input to integer values. Remember to handle cases where the user enters invalid input, such as non-integer values.
    let par1 = parseInt(num);
    let par2 = parseInt(numb);
    if (par1 <= 99 || par2 <= 99) {
        console.log(true);
    } else {
        console.log(false);
  }
}
chekRange('890', 90);

//23. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  
function checkAndRemoveScript(input) {
    const searchString = 'Script';
    if (input.indexOf(searchString) === 4) {
        const newSttring = input.slice(0, 4) + input.slice(4 + searchString.length);
        console.log(newSttring);
    } else {
        console.log(input)
    }
}
checkAndRemoveScript('JavaScriptology');

//24. Write a JavaScript program to find the largest of three given integers.  
function findLargestNum(num1, num2, num3) {
    let findLn = Math.max(num1, num2, num3);
    console.log(findLn);
}
findLargestNum(20, 15, 30);

//25. REVIEW Write a JavaScript program to find the closest value to 100 from two numerical values. 
function findClosestVal(num1, num2) {
    const targetVal = 100;
    let diff1 = Math.abs(targetVal - num1);
    let diff2 = Math.abs(targetVal - num2);
    if (diff1 < diff2) {
        console.log(diff1);
    } else {
        console.log(diff2);
    }
}
findLargestNum(90, 98);

//26. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive
function checkNum(num1, num2) {
      // Check if x and y fall within the first range (40 to 60) or the second range (70 to 100)
    if ((num1 >= 40 && num1 <= 60 && num2 >= 40 & num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkNum(90, 90);

//27. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 
function findLgNum(num1, num2) {
    getLgNum = Math.max(num1, num2)
    console.log(getLgNum);
    //OR simply console.log(Math.max(num1, num2))
}
findLgNum(200, 80);

//28. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  
function SpecChar(letter) {
    const search = 'Gorgeously';
    if (letter.indexOf(search) === 5) {
        console.log(true)
    } else {
        console.log(false)
    }
}
SpecChar('SuperGorgeously');
//THEN  REVIEWWWWWW
function checkCharPosition(letter, spefChar) {
    //Check if the string length is at least 4 chararcters
    if (letter.length >= 4) {
        //Get the character at the 2nd and 4th position. Remember the zero index. Hence, (index 1) and the 4th position (index 3)
        const character2 = (letter[1]);
        const character4 = (letter[3]);
        // Check if the specified character exists between the 2nd and 4th positions
       const spCh = spefChar >= character2 && spefChar <= character4
        console.log(spCh)
    } else {
        console.log(false)
    }
}
checkCharPosition('Rayah', 'a');

//29. Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function checkLastThreeDigit(num1, num2, num3) {
    if (num1, num2, num3 > 0) {
        const lastDigit1 = num1 % 10;
        const lastDigit2 = num2 % 10;
        const lastDigit3 = num3 % 10;
        const allLatstDigit = lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
        console.log(allLatstDigit);
    } else {
        console.log(false)
    }
}
checkLastThreeDigit(622, 22, 922);

//30. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
function produceNewString(letter) {
    if (letter.length < 3) {        // Check if the string length is less than 3
        const convertCase = letter.toUpperCase();    // Convert all characters to upper case
        console.log(convertCase);
    } else {
        let revertCase = letter.substring(0, 3).toLowerCase();       // Convert the first 3 characters to lower case
        let restStr = letter.substring(3);        // Keep the rest of the string as it is
          console.log(revertCase + restStr);   // Concatenate the modified and unmodified parts to form the new string
    }
}
produceNewString('GENERAL');

//31. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.  
function checkStudentTotalMark(num) {
    if (num >= 89 && num <= 100) {
        console.log('A+')
    } else if (num > 100) {
        console.log('Above 100')
    } else {
        console.log('Below A+');
    }
}
checkStudentTotalMark(90);

//32. Write a function that counts the total number of letters in a word.
function countTotalLetters(letters) {
    // Use a regular expression to match only letters (A-Z, a-z)  avaScript String match() method is an inbuilt function in JavaScript used to search a string for a match against any regular expression. If the match is found, then this will return the match as an array.  .test() returns a boolean
    const lettersOnly = letters.match(/[A-Za-z]/g);
    let countAll = lettersOnly.length;
    console.log(countAll);
}
countTotalLetters('Civilization is great and beautiful');
//Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp , and with the match() , matchAll() , replace() , replaceAll() , search() , and split() methods of String .
//A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for. A regular expression can be a single character, or a more complicated pattern.

//33. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 
function computeSum(num1, num2) {
    const addSum = num1 + num2;
    if (addSum >= 50 && addSum <= 80) {
        console.log(parseInt('65'));
    } else {
        console.log('80');
    }
}
computeSum(70, 10);

//34. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  
function checkInt(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    if (num1 === 8 || num2 === 8 ) {
        console.log(true);
    } else if (sum === 8) {
        console.log(true);
    } else if (diff === 8) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkInt(10, 2);

//35. Wite a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function checkThreeNum(num1, num2, num3) {
    if (num1 === num2 & num2 === num3) {
        console.log(parseInt('30'))
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
        console.log(parseInt('40'))
    } else {
        console.log(parseInt('20'))
    }
}
checkThreeNum(20, 90, 20);

//36. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.
function chekInt(num1, num2, num3) {
    if (num1 >= 20 || num2 >= 20 || num3 >= 20) {
        console.log(true)
    } else {
        console.log(false)
    }
}
chekInt(20, 22, 14);

//37. Write a JavaScript program to concatenate two strings except for their first character.
function conCatString() {
    let string1 = 'Beautiful';
    let string2 = 'Lady';
    const concatSt1 = string1.substring(1);
    const concatSt2 = string2.substring(1);
    console.log(concatSt1 + ' ' + concatSt2);
}
conCatString();

//38. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function concatTwoStr() {
    let st1 = 'Goody';
    let st2 = 'Hoodaly';
    const st3 = st1 + st2;
    if (st1.length === st2.length) {
        console.log(st3);
        // If the first string is longer, remove extra characters from the first string
    } else if (st1.length > st2.length) {
        const retStr = st1.substring(0, st2.length) + st2;
        console.log(retStr);
        // If the second string is longer, remove extra characters from the second string
    } else {
        const ret2Str = st1 + st2.substring(0, st1.length);
        console.log(ret2Str);
    }

}
concatTwoStr();

//39. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6. 
function testStr(word) {
    if (word.length >= 6 && word.endsWith('script')) {
        console.log(true);
    } else {
        console.log(false);
    }
}
testStr('This is a script');

//40. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function crtNewStr(word) {
    if (word[0] === 'P' || word[word.length - 1] === 'P') {
        let newlyCreatedStr = word.substring(1, word.length - 1);
        console.log(newlyCreatedStr);
    } else {
        console.log(word);
    }
}
crtNewStr('CivilizatioP');

//41. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. (Get the first two characters of the string and the last two, then concatenate.)
function createNewString(word, n) {
    // Check if the string length is larger than or equal to n
    if (word.length >= n) {
        const firstNChars = word.substring(0, n);    // Get the first n characters
        const lastNChars = word.substring(word.length - n); // Get the last n characters
        console.log(firstNChars + lastNChars);  // Concatenate the first and last n characters to form the new string
    } else {
        console.log(false);
    }
}
createNewString('Heartwarming', 3);

//42. Write a JavaScript program to reverse the elements of a given array of integers of length 3.   
function reverseThArray(array) {
    const revArr = array.reverse();
    console.log(revArr);
}
reverseThArray([2, 4, 8]);

//43. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
function findLargestValue(arr) {
    
    const findLgVal = Math.max(...arr);
    // const findLgVal = Math.max(arr[0], arr[arr.length -1]);
    // Update all elements of the array with the maximum value
    arr[0] = findLgVal;
    arr[1] = findLgVal;
    arr[2] = findLgVal;
    arr[3] = findLgVal;
    arr[4] = findLgVal;
    // console.log(findLgVal);
        console.log(arr);
}
findLargestValue([3, 5, 8, 40, 2]);

//44. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
function createArrayFromMiddleElement(arr1, arr2) {
    let midElm1 = arr1[2];
    let midElm2 = arr2[3];
    let mergeMidEl = new Array( midElm1,  midElm2);
    console.log(mergeMidEl);
}
createArrayFromMiddleElement([1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14]);
//OR
function createMidArr(arr1, arr2) {
    if (arr1.length === 3 && arr2.length === 3) {
        const middleArr = [arr1[1], arr2[1]];
        console.log(middleArr);
    } else {
        console.log(arr1);
    }
}
createMidArr([1, 8, 10], [2, 40, 6]);

//45. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. 
function createFirstLastArr(arr) {
    if (arr.length >= 1) {
        const firstLastArr = [arr[0], arr[arr.length - 1]];
        console.log(firstLastArr);
    }
}
createFirstLastArr([20, 30, 40, 50, 60, 70, 100]);

//46. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  
function testArr(arr) {
    if (arr.length === 2 && arr.includes(1) || arr.includes(3)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
testArr([2, 3, 1, 4, 6, 8]);

//47. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  
function swapArr(arr) {
    if (arr.length >= 1) {
        const firstElm = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = firstElm;
        console.log(arr);

    }
}
swapArr([2, 4, 6, 8]);

//48. REVIEW Write a JavaScript program to find the longest string from a given array of strings.  
// function findLargestString(arr) {
//     if (arr.length > 0) {
//         const longestStr = arr.reduce(function (a, b) {
//             console.log(a.length > b.length ? a : b);
//     });
//     console.log(longestStr);
//     }else {
//     console.log(false);
//     }
// }
// findLargestString(['Peace', 'Love', 'Goodness', 'Happiness', 'Loyalty']);

//49. REVIEW Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
// function replaceNextCharacter(inputString) {
//     // Check if the input is a non-empty string
//     if (typeof inputString === 'string' && inputString.length > 0) {
//         const arrOfChar = inputString.split('');    // Convert the string to an array of characters
//     }
// }
// replaceNextCharacter('However');

//50. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two. 
function divideArray(arr) {
    let sumPart1 = 0;
    let sumPart2 = 0;
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 0) {
            console.log(sumPart1 += arr[i]);
        } else {
            console.log(sumPart2 += arr[i]);
        }
    }
    const arrResult = sumPart1 + sumPart2;
    console.log(arrResult);
}
divideArray([1, 2, 3, 4, 5, 6]);

//51. QUESTION NOT CLEAR Write a JavaScript program to find the kth greatest element in a given array of integers. 
function findKthElm(arr, k) {   //The sort() sorts the elements of an array. The sort() overwrites the original array. The sort() sorts the elements as strings in alphabetical and ascending order.
    arr.sort(function (a, b) {
        console.log(b - a);
    });
    if (k >= 1 && k <= arr.length) {
        console.log(arr[k - 1]);
    } else {
        console.log('Invalid');
    }
}
findKthElm([20, 35, 600, 52, 200, 700, 250, 10, 80], 4);

//52. Write a JavaScript program to find the number appearing most frequently in a given array of integers.
//53. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
//54. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 
function calculateN(n) {
    let sum = 0;
    let divisor = 1;

    while (n / divisor > 0) {
        sum += Math.floor(n / divisor);
        divisor *= 2;
    }
    console.log(sum);
}
calculateN(8);
//55. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  
function checkTwoInt(num1, num2) {
    
    if (num1 % 7 === 0 || num1 % 11 === 0 && num2 % 7 === 0 || num2 % 11 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkTwoInt(14, 22);

//56. Write a JavaScript program to capitalize the first letter of each word in a given string.
function capitalizeEachFirstLetter(inputString) {
    const word = inputString.split(' ');
    const capitalizeWords = word.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const stringResult = capitalizeWords.join(' ');
    console.log(stringResult);
}
capitalizeEachFirstLetter('amazing love');

//57. Write a JavaScript program to convert a given number into hours and minutes
function convertToHoursAndMinutes(totalMinutes) {
    if (totalMinutes > 0) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const hmResult = `Total ${hours} hours and total ${minutes} minutes.`;
        console.log(hmResult);
    } else {
        console.log('Please enter a non-negative number of minutes');
    }
}
convertToHoursAndMinutes(120);

//58. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
function divideTwoPosInt(num1, num2) {
    const divideTwoPositiveIntegers = num1 / num2;
    const divNum = divideTwoPositiveIntegers.toString(). split('').join(',');
    console.log(divNum);
}
divideTwoPosInt(660, 3);


//DOM - The DOCUMENT OBJECT MODEL -It's essentially an interface that allows us to interact with page elements dynamically from a language like Javascript.
//The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
//The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
//DOM- Programming interface for web/HTML elements.
//The DOM is the Structure of the web page that we can interact with via Javascript.
//Includes tags, attribute, text nodes, etc.
//Represented as a tree structure.
//DOCUMENT ELEMENT PROPERTIES (Different properties that can be used to access differnt elements. Ain't the best way to access elements tho).

//The output we often get here is an HTML Collection which is an array form but not actually an array.
//HERE'S how it can be TURNED into an ARRAY to be able to use certain methods on it: E.g
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(window);
// console.log(window.document);
// console.dir(window.document);                         To see all the properties and methods
// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.head.children);          Get evythn wihin the html doc
// console.log(document.body.children);             Gives only the top/direct child of the body, not inner elements
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);

// console.log(document.links);
// console.log(document.links[0]);
// console.log(document.links[1].href);                  // To access just the link/href
// console.log(document.links[1].href = 'https://opera.com');                    //Change the href link
// console.log(document.links[1].id = 'insta');        //Set/Change an Id to the link
// console.log(document.links[1].className = 'instag');        //Set/Change css classes
// console.log(document.links[1].classList);        //Access ALL the classes/list


// document.body.innerHTML = '<h1>Hi World</h1>';        Change H1 Element
// document.write('Hello from JS');                      Not really helpful
// console.log(document.getElementById('main'));         To select an Id

// console.log(document.all);                            Deprecated
// console.log(document.all[2]);
// console.log(document.all.length);
// console.log(document.doctype);
// console.log(document.domain);                         Get local host. Deprecated.
// console.log(document.URL);
// console.log(document.characterSet);
// console.log(document.contentType);

// console.log(document.forms);
// console.log(document.forms[0].id);
// console.log(document.forms[0].method);
// console.log(document.forms[0].action);

// const mynewId = document.forms[0].id = 'myNew-id';     //Change the ID tag or name of an element
// console.log(mynewId);

// let output;
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;       // Get the source of an image
// console.log(output);

//To Target/Replace a specific Element, can put into a variable.
// const myMain = document.getElementById('main');
// myMain.innerHTML = '<h1>Hello from main</h1>';
//OR Use Query Selector
// document.querySelector('#main h1').innerHTML = 'Hello Gorgeous';


//Methods to MORE EASILY Select elements from the DOM
//DOM Selectors - Single Element

// document.getElementById()    - Allows us get any element in the dom by its ID. 
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//Set Attributes
console.log(document.getElementById('app-title').id = 'newID');         //Set/Change ID
console.log(document.getElementById('newID').title = 'newTitle');       //Set h1 Title
console.log(document.getElementById('newID').setAttribute('class', 'myTitle'));

//If you have to use any of these selecrtor more than once, you might wanna put it into a variable
const title = document.getElementById('newID');
console.log(title);

//Get / Change or Add content within an element
console.log(title.textContent);                       //Property to get the text content in ana element
title.textContent = 'My List to Shop';      //Change content
title.innerText = 'My Shop List';
title.innerHTML = '<strong>My Shopping List</strong>'; //To use HTML Tags E.g bold

//Change style 
title.style.color = 'red';
// title.style.backgroundColor = 'white';                                                  //When u have two words like this, hyphen is not usable here, rather use Camel Casing
title.style.padding = '0px';
title.style.borderRadius = '5px';

//document.querySelector()          Note, this as well only selects single element and selects the first one if there are multiple of them. Otherwise use queryselector all if you want to select all.
console.log(document.querySelector('h1'));               //Can select any element
console.log(document.querySelector('#newID'));          //Can select by ID with hash #
console.log(document.querySelector('.myTitle'));        //Can select by Class with dot
console.log(document.querySelector('input[type=text'));        //Can select by attribute
console.log(document.querySelector('li'));                     //Can as well use pseudo selector
console.log(document.querySelector('li:nth-child(2)')); 
console.log(document.querySelector('li:nth-child(2)').innerText); 
//Can as well do a lot with query selector, change style..content etc
//Put a query selctor into a variable
const listItem4 = document.querySelector('li:nth-child(4)');
listItem4.innerText = 'Milk Tea';
listItem4.style.color = 'Blue';
console.log(listItem4);

const listItem1 = document.querySelector('li:nth-child(1)');
listItem1.innerText = 'Apple Juice';
listItem1.style.backgroundColor = 'Pink';
listItem1.style.color = 'Red';
console.log(listItem1);

const listItem2 = document.querySelector('li:nth-child(2)');
listItem2.style.backgroundColor = 'brown';
listItem2.style.color = 'white';
console.log(listItem2);

//We CAN Use Queryselector on other elements other than the document
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'green';
console.log(firstItem);


//DOM Selectors - Multiple Element
//queryAelectorAll()
// const listItems = document.querySelectorAll('li');
const listItems = document.querySelectorAll('.item'); //Select with class NOTE: You can use high order array method on a nodelist but cant on html collection cos for an html collection, you first have to convert it to an array.
console.log(listItems);
console.log(listItems[1].innerText);  //Can target/access indv element E.g
listItems[1].style.color = 'cyan'; //Change specific color
//Change All Color using foreach loop
listItems.forEach((item, index) => {   //Can Access and Remove index
    item.style.color = 'red';

    if (index === 4) {
        item.remove();
    }

    if (index === 4) {                      //Use template string to copy back text and button from html
        item.innerHTML = `Raspberry
        <button class="btnremoveitem"></button>`;
    }
});

//getElementByClassName
const listItem3 = document.getElementsByClassName('item');      //Gives an HTML Collection as opposed to Nodes
// console.log(listItem3[3].innerText);
//ForEach method will not be usable here as it is an HTML Collection. Tus, convert to an array.
const listItemArray = Array.from(listItem3);
listItemArray.forEach((item) => {
    console.log(item.innerText);
});

//getElemntByTagName
const listItems4 = document.getElementsByTagName('li');         //HTML Collection
console.log(listItems4[0].innerText);


//TRAVERSING THE DOM
//Relationship between Element Nodes.  Every HTML element is an element node.The entire document is a document node. Nodes are a basic data structure which contain data and one or more links to other nodes. Nodes can be used to represent a tree structure or a linked list.
//Refer to trv.js


//CREATE ELEMENT AND APPEND ELEMENTS
//How to create Elements and add them to the DOM in Javascript
const mydiv = document.createElement('div');
mydiv.className = 'my-div';
mydiv.id = 'my-div';
mydiv.setAttribute('title', 'My Element');
console.log(mydiv);
//To add Text
// const myText = document.createTextNode('Hello Beautiful');
// mydiv.appendChild(myText);
// console.log(mydiv);
// document.body.appendChild(mydiv);
// document.querySelector('ul').appendChild(mydiv);


//Create a function to add a new item list to the shopping item list
function createListItem(item) {
    const myLi = document.createElement('li');
    myLi.appendChild(document.createTextNode(item));

    const btn = document.createElement('button');
    btn.className = 'btnremoveitem';
    myLi.appendChild(btn);
    document.querySelector('.items').appendChild(myLi);
}
createListItem('Cheese');


function createSecondListItem(item) {
    const myList = document.createElement('li');
    myList.appendChild(document.createTextNode(item));

    myBtn = document.createElement('button');
    myBtn.className = 'btnremoveitem';
    myList.appendChild(myBtn);

    document.querySelector('.items').appendChild(myList);
}
createSecondListItem('Burger');



function createThirdListItem(itemName) {
    const createList = document.createElement('li');
    createList.appendChild(document.createTextNode(itemName));

    const btnn = createButtn('btnremoveitem');

    createButton = document.createElement('button');
    createList.appendChild(createButton);

    document.querySelector('.items').appendChild(createList);
}
createThirdListItem('Cottage Cheese');

//Refactor to Multiple Functions
//Creating seperate functions to makle them reusable elsewhere
function createButtn(classes) {
    const btnn = document.createElement('button');
    btnn.className = classes;
    return btnn;
}
createThirdListItem('Sauce');
createThirdListItem('Raspberry');
createSecondListItem('Fruit');


//Other Methods to INSERT Elements to the DOM, Text And HTML
// insertAdjacentElement
// insertAdjacentText
// insertAdjacentHTML
// insertBefore

/* Positions
beforebegin! - afterbegin! - beforeend! - afterend!
*/
// insertAdjacentElement
function insertElement1() {
    const myFilter = document.querySelector('.filter');         //Reference element; where to insert this new element. Here, before filter.
    const myH6 = document.createElement('h6');
    myH6.textContent = 'My Newly Inserted Adjacent Element';

    myFilter.insertAdjacentElement('beforebegin', myH6);    //To insert it. It takes TWO THINGS: POSITION AND ELEMENT
}
insertElement1();        //Run function

function insertElement2() {
    const filt = document.querySelector('#filter');
    const myH5 = document.createElement('h5');
    myH5.textContent = 'My Other Element';

    filt.insertAdjacentElement('afterend', myH5);   
}
insertElement2();

// insertAdjacentText
function insertText() {
    const listItem = document.querySelector('li:first-child');
    listItem.insertAdjacentText('beforeend', ' My Inserted Adj Text');
}
insertText();


// insertAdjacentHTML
function insertHtml() {
    const myUl = document.querySelector('.items');
    myUl.insertAdjacentHTML('afterend', '<h3>Here is my Inserted Html</h3>')
}
insertHtml();

// insertBefore
//Called on the parent element. VID:9:30:00

//REPLACING ELEMENTS IN THE DOM
//Replace with
function replaceItem() {
    const firstItem = document.querySelector('li:first-child');
    const newLi = document.createElement('li');
    newLi.textContent = 'Replaced Strawberry'; //OR     newLi.innerText = 'Replaced first';
    newLi.style.backgroundColor = 'grey';
    firstItem.replaceWith(newLi);

}
replaceItem();

//Outer HTML
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second Item</li>';
}
replaceSecondItem();

//REPLACE ALL
//Replace all of the items in the list by LOOPING Through all the items with forEach and then change the outerHTML
// function replaceAllItems() {
//     const allLis = document.querySelectorAll('li');
//     allLis.forEach((item, index) => {
//         item.outerHTML = '<li>Replace All Items</li>';   // item.innerHTML = 'Replace All'; Changes Only text not the entire li content and styling
        //To choose specific item and do soething else
        // if (index === 1) {
        //     item.innerHTML = 'Item 2';
        // }
        // else {
        //     item.innerHTML = 'Replace All';
        // }
    // });
    //OR USE TERNARY OPERATOR
    // allLis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second item</li>' : '<li>Just Item</li>'); 
// }
// replaceAllItems();



//REMOVING ELEMENTS
//Remove - Remove will be called on the element you wanna remove
// function removeClearAllBtn() {
//     const clearAllBtn = document.querySelector('#clear');
//     clearAllBtn.remove();
// }
// removeClearAllBtn();

//Remove Child- will be called on the parent element.
function removeSecondChild() {
    const parentUl = document.querySelector('ul');
    const childli = document.querySelector('li:nth-child(2)');
    parentUl.removeChild(childli);
}
removeSecondChild();

//Remove by targeting specific item number
function removeItem(itemNumber) {
    const parenUl = document.querySelector('ul');
    const chilLi = document.querySelector(`li:nth-child(${itemNumber})`);
    // const chilLi = document.querySelectorAll('li')[0]; 
    // const chilLi = document.querySelectorAll('li')[itemNumber - 1]; 
    parenUl.removeChild(chilLi);
}
removeItem(4);
function removeItemm(itemNumber) {
    const myli = document.querySelectorAll('li');
    myli[itemNumber - 1].remove();
}
removeItemm(6);


//Working With / Adding and Removing Styles and Classes 
const paragh = document.querySelector('p');
const ulItemList = document.querySelector('.ul-item-list');
const liItems = ulItemList.querySelectorAll('li');

function run() {
    //Class Name
    // console.log(ulItemList.className);
    paragh.className = 'p-card'; //You can as well set the class Name of any element as well. E.g On click of btn, change text classname to so so so.First, define your classes in css. NOTE tht the new class will always override any class you have already. If you do not want this, simply add the existing card name to it. Add as many as you want.

    //Class List
    // console.log(ulItemList.classList);
    paragh.classList.add('dark');        //To add a class to an element
    paragh.classList.remove('dark');        //To remove a class to an element
    paragh.classList.toggle('dark');        //To toggle between classes on an element. To do this remove the other class name from the p and keep just the initial.
    paragh.classList.toggle('hidden'); 
    paragh.classList.replace('p-card','dark');      //To replace a class
    paragh.style.backgroundColor = 'red';    //Change Style directly on a function
    paragh.style.lineHeight = '3';

    //Style each item in the li list
    liItems.forEach((item, index) => {
        item.style.color = 'blue';

        if (index === 2) {
            item.style.color = 'green';
        }
    })
}

document.querySelector('#run-btn').onclick = run;   //On Click of this button, we want to ru a function called run. And do not put parenthesis after it run() cos that will autom run it. Now, go above and create the run function.


//EVENTS
//EVENT Listeners. What are Events? Basically, an event is when something happens on a web page. MDN- Events are actions or occurenecs that happens in the system you are programming, which the system tells you about so your code can react to them. Interactions with the web page.
//Events include
// Clicking on an Element
// Typing into a text field
// Hovering over an element
// Submitting a form
// Closing a window
// Dragging an element
// Resizing an element etc

//Inline Event Listeners - JS within an HTML code

//Javascript Event Listener
const clrBtn = document.querySelector('#clr');
clrBtn.onclick = function () {
    alert('Re-login');
}           //Select the button, dot on click, set it to a function, then write the code to run within your parenthesis

function clrBtnAlert() {
    alert('Clear Button Alert');
}


//ADDEVENT LISTENER
//Recommended - Allows you take any DOM element and add a listener for a specific type of event
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function () {
    alert('Please re-login');        // Takes in two arguments. The type of event and then a call back function.
});   
//With event listener, we can have/run as many as possible events we want(at the same time).
clearBtn.addEventListener('click', function () {
    console.log('Login');
});
//We can use a named function instaead of an anonymous one as seen above and that is after you must ahve defined your function somewhere.
clearBtn.addEventListener('click', clrBtnAlert);        //Do not pass in parenthesis after the fuction name, else it will execute immediately.

//REMOVE EVENTLISTENER using the SETIMEOUT method             //When you have an element you're removing from the DOM
//seTimeout takes in a function, and the number of milliseconds to wait before firing. Then remove Eventlistener using already selected element put in query selector as a varaiable, then pass into that the event and the reference function(name).
setTimeout(() => clearBtn.removeEventListener('click', clrBtnAlert), 5000);
//OR
setTimeout(() => clearBtn.click(), 5000);       //Fire off an event within the script


//CHALLENGEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
//Write a function to hide the ul element on the page after clicking the select buton
// function deleteAll() {
//     const selectItemList = document.querySelector('#itemlist');
//     selectItemList.classList.add('hidden');
//     //OR selectItemList.innerHTML = '';
//     //OR const items = document.querySelectorAll('li');
//     // items.forEach((item) => item.remove());
// }

// clearBtn.addEventListener('click', deleteAll);


//Mouse Events
const logo = document.querySelector('.logo');

function runLogo() {
    console.log('Image!')
}

function onDoubleClick() {
    console.log('Double Click!')
}
logo.addEventListener('click', runLogo);
//Double Click
logo.addEventListener('dblclick', onDoubleClick); //NOTE dbl is usually in lowercase not camel

//Change background color
// const container = document.querySelector('.container');
const butn = document.querySelector('.btn');

function changeBackgroundColor() {
    // document.body.style.backgroundColor = 'red'; To add background color
    //To TOOGLE Background Color, use an if statement
    if (document.body.style.backgroundColor !== 'red') {
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
butn.addEventListener('click', changeBackgroundColor);


//Right Click Event - Context menu
const image = document.querySelector('img');

function onRightClick() {
    console.log('Right Click Event');
}
image.addEventListener('contextmenu', onRightClick);


//MouseDown / MouseUp   // That clickin and holding down the mouse
const btnMD = document.querySelector('.mousedown');

function mouseDown() {
    console.log('Mouse Down!');
}
btnMD.addEventListener('mousedown', mouseDown);

//Mousewheel - When user scrolls on an element
//Mouseover     - Hover over an element
//Mouseout     - Hover out of an element
//dragstart     - Dragging an element
//drag     -    On drag...so long object is being held
//dragend     - Releasing a dragged element



//The EVENT OBJECT
//Event objects in JavaScript provide information about an event that has occurred, such as a user action (like a click or keypress) or a browser action (like the completion of an asynchronous operation). When an event occurs, a corresponding event object is created and passed as an argument to the event handler function.
//The event object contains properties that give details about the event, such as the type of the event, the target element, mouse coordinates, keyboard key codes, etc. The exact properties available depend on the type of event.
//Commonly used properties in an event object:
//1. .target: The DOM element that triggered the event. For example, if a button is clicked, event.target would be the button element.
//2. .type: A string indicating the type of the event that was triggered.  (e.g., "click", "keydown", "mousemove").
//3. .timestamp: The  of event that was triggered.
//4. .preventDefault(): A method to prevent the default action of the event. For example, preventing the default behavior of a form submission.
//5. .clientX: The position of the mouse click relative to the window
//6. .clientX: The position of the mouse click relative to the window
//7. .offsetX: The position of the mouse click relative to the element
//8. .offsetY: The position of the mouse click relative to the element
//9. .pageX: The position of the mouse click relative to the page
//10. .pageY: The position of the mouse click relative to the page
//11. .screenX: The position of the mouse click relative to the screen
//12. .screenY: The position of the mouse click relative to the screen
//13. event.stopPropagation: A method to stop the event from propagating up or down the DOM hierarchy. It prevents parent or child elements from receiving the same event.
//14. event.key: For keyboard events, this property provides information about the key that was pressed.
//A look at the event object that is available to us when we add an event listener and we run a function
//On Click
const evobjBtn = document.querySelector('.evo');

evobjBtn.addEventListener('click', function (e) {               //The function we pass in here can take in an event object
    console.log(e.target);      //NOTE: Can as well define a function above and pass it in here. As in: function addEvtobj(e){console.log('Hello')};
    e.target.style.backgroundColor = ' blue';
});

// const evobjBtn = document.querySelector('.evo');
// function csl(e) {
//     console.log(e);
// }
// evobjBtn.addEventListener('click', csl);


//KEYBOARD EVENTS(EventListener) AND KEY PROPERTIES
//Three Main: Keypress - Keyup - Keydown
//Certain properties on the event object when we use keyboard events
const itemInput = document.getElementById('form-input');
function runKeyP(event) {
    console.log('KEYPRESS');
}
itemInput.addEventListener('keypress', runKeyP);
//Property to get the key that's pressed
// 1. key -
// const itemInput = document.getElementById('form-input');
// function runKeyP(e) {
//     console.log(e.key);
// }
// itemInput.addEventListener('keypress', runKeyP);

// docum.querySelector('h1').innerText = e.key;
//TEST for key  //Here, we can use this to test for the eneter button when a user is to submit a form to a page
// const itemInput = document.getElementById('form-input');
// function runKeyP(e) {
//     if (e.key === 'Enter') {
//         alert('Welcome');
//     } else {
//         alert('Error!!!');
//     }
// }
// itemInput.addEventListener('keypress', runKeyP);

// 2. keyCode -
// https://www.toptal.com/developers/keycode/table-of-all-keycodes
//     if (e.keyCode === 13) {
//         alert('Welcome');

// 3. code -
// console.log(e.code); - testStr, give or get code

//e.repeat
// if (e.repeat === 13) {           Mostly on keyDown Event to know when the key is pressed down
//        console.log('You are holding down the ' + e.key + ' button');
//}

//Test few other keys           - Returns true or false
// console.log('Shift: ' + e.shiftKey);
// console.log('Control: ' + e.ctrlKey);
// console.log('Alt: ' + e.altKey);

//Can use if statement  -  E.g if user holds and press k...do...
// if (e.shiftKey && e.key === 'K') {
//     console.log('Blah blah blah')
// };

//VID 10:58:00
// Use the window element to listen in the windwo for events if you arent using a specific element to push a key i.e
// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('mainDivToInsertHTMLinnerDivs');
//     insert.innerHTML = `
//     Bring in your created and cut divs from html here...
//     `;
// });

//Input Events
//input - On an input element
//focus -Clicking in and activating an input element. Best used for an input outline styling.
//blur - Click outside the element
//To Get the value for a form input
//VID 11: 10:15
//INPUT - 
const itemsInput = document.getElementById('form-input');
const itemsInput2 = document.getElementById('form-input2');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    console.log(event.target.value);
    // heading.textContent = e.target.value; To change element content e.g h1 as you type to what you type 
}
itemsInput.addEventListener('input', onInput);

// priorityInput.addEventListener('input or change eitherways', onInput);

function onChecked(e) {
    console.log(e.target.checked);          //Returns true or false
    //OR
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Unchecked';
}
checkbox.addEventListener('input', onChecked);


function onFocus(e) {
    itemsInput2.style.outlineStyle = 'solid';
    itemsInput2.style.outlineWidth = '3px';
    itemsInput2.style.outlineColor = 'red';
}
itemsInput2.addEventListener('focus', onFocus);

function onBlur(e) {
    itemsInput2.style.outlineStyle = 'none';
}
itemsInput2.addEventListener('blur', onBlur);



//FORMS SUBMISSION AND FORM DATA OBJECT
//Submit event - object
//If you're working wth a backend technology like for example Nodejs or PhP, then your form tag may have an action that submits to some file on your backend
//...but with front end Javascript, we can get the form to submit to whereever we want. If you don't have an action attribute on your form where you are submittin to some kind of backend, then it's gonna submit to the same page, but to stop that...we use ...
//the e.preventDefault();       This prevents default behaviour and stops the form from submitting to the same page. Further, we can have a function to do whatever we want after user submits form.

//Ways To get the Values that are being submitted to a form
// 1. target.Value
const form = document.getElementById('item-form');

function onSubmit(e) {              //Pass in our event object
    e.preventDefault();
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    // console.log(item, priority);
    //OR console.log(item.value, priority.value);

    //FORM VALIDATION
    if (item === '' || priority === '0') {           //Zero here is a string value from HTML list options
        alert('Please fill in all fields');
        return;             //And then we just return
    }
}
form.addEventListener('submit', onSubmit);


//2. Use the Form Data object

// const form = document.getElementById('item-form');

function onSubmit2(e) {
    e.preventDefault();
    const formDta = new FormData(form);    //Initialize a formData variable and set it to a new Form Data. Then pass in your form gotten by the elemetID. You can use the one above since it's in a global scope
    const getItem = formDta.get('item2');    //Then use the get method to get entries. NOTE: The item being passed in here is the name on your HTML form input element.
    const getPriority = formDta.get('priority');
    console.log(getItem, getPriority);
}
form.addEventListener('submit', onSubmit2);




//EVENT BUBBLING
//With bubbling, the event is first captured by the innermost element and then proagated to outer elements, bubbles up to all of its parents and anything that has the named event of it will also fire off.
//Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

//e.stopPropagation
//To avoid this: Use the stopPropagation Method

const btn = document.querySelector(' form button');
const div2 = document.querySelector('form div:nth-child(2)');
const frm = document.querySelector(' form');


btn.addEventListener('click', (e) => {
    alert('Button was clicked');
    e.stopPropagation();                //Should only stop propagation if you have a reason for it
});

div2.addEventListener('click', () => {
    alert('Div was clicked');
});

frm.addEventListener('click', () => {
    alert('Form was clicked');
});

// document.body.addEventListener('click', () => {
//     alert('Body was clicked');
// });


//Event DELEGATION and Multiple Events
//Situation where one needs to add an event listener on multiple elements
// const listItms = document.querySelectorAll('li');
// listItms.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//   })
// });

//Rather use Event Delegation - to basically add a single event listener unto the parent and then target which ever one we wanna delete
const liParent = document.querySelector('ul');      //Target parent element
liParent.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
        // e.target.style.color = 'red';
    }
});          //Put the event listener on the parent



//PAGE LOADING AND WINDOW EVENTS
//Having the sript tag in the HTML Head
// 1. Use defer in the scrip tag head to stop the js from running bfr the page is loaded.

// 2. onload Event
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Lo World';
// };

// 3. add event listener 'load' to the window object
// window.addEventListener('load', () => {
//     document.querySelector('h1').textContent = 'Lo World';
// });

//4. DOMContentLoaded Event
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('h1').textContent = 'Lo World';
// });

// 5. Resize Event
// window.addEventListener('resize', () => {
//     document.querySelector('h1').textContent = `Resized to ${window.innerWidth} and ${window.innerHeight}`;
// });

// 6. Scroll Event
window.addEventListener('scroll', () => {
    document.querySelector('h1').textContent = `Scrolled to ${window.scrollX} and ${window.scrollY}`;

    if (window.scrollY > 20) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

//7. Focus and Blur

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'pink';
    })
});

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';
    })
});

//Eval()
//eval() is a function property of the global object. The argument of the eval() function is a string. It will evaluate the source string as a script body, which means both statements and expressions are allowed. It returns the completion value of the code. For expressions, it's the value the expression evaluates to.
//The function eval in JavaScript evaluates a string containing a statement or an expression. If a string parameter containing an expression/statement is passed as the argument, the eval() function returns the calculated value of the expression/statement. If there is no calculated value, the function returns undefined.
//The eval() method evaluates or executes an argument. If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements. you can use eval() to parse and evaluate mathematical expressions or to parse and execute code stored in a string.
let dis = 10;
let dat = 3;
let text = "dis * dat";
let result = eval(text);
console.log(result);
//Never use eval(). Use code or a function instead:
//Direct eval
console.log(eval('2 + 2'));
    
const valuate = eval('2 * 8');
console.log(valuate);

//Indirect Eval
const vv = eval?.('10 + 5');
console.log(vv);


