//React is a User Interface(UI) library. It is used for building user interfaces for web applications based on components.
//ReactJS is primarily a front-end JavaScript library used for building user interfaces (UI) in web applications. Build user interfaces out of individual pieces called components written in JavaScript.

//CREATE A REACT APP
//Install node.js.......cmd(system) enter 'npm install -g create-react-app' ... Create a folder, drag and drop the folder 'myapp' folder into Vscode. Open a new terminal, run ' npx create-react-app my-app' Follow prompt....... enter. Now, run 'npm start'
//React Manual https://www.codecademy.com/courses/react-101/articles/how-to-create-a-react-app
//https://kinsta.com/knowledgebase/install-react

//CREATE REACT using VITE
//Create a project folder. Drag into VSCode. Open terminal. Run 'npm create vite@latest react-app' ...Follow prompt by selecting 'React' as framework and 'Javascript' as variant....Now, Run 'cd react-app', 'npm install'. 'npm run dev'.
//Change port in vite.config file by adding  server: {port: 3000,}, You may proceed to delete App.css file and clear all css details in index.css as we'll be using tailwind. Now clear App.jsx and start coding right in there!
//Extensions: Recommended- ES7+React/Redux/React-Native snippets.

//Install Tailwind: https://tailwindcss.com/docs/guides/vite (Run on a different terminal-bash and NOTE change directory into the actual poject first ..cd project-name)
//Tailwind Utility Classes: (https://tailwindcss.com/docs/theme) (https://tailwindcss.com/docs/adding-custom-styles) (https://tailwindcss.com/docs/utility-first)

//Install React icons: on the bash terminal... Run 'npm i react-icons' (https://react-icons.github.io/react-icons/)

//Install React Router : on the bash terminal... Run 'npm i react-router-dom'

//Install React Spinners : (https://www.npmjs.com/package/react-spinners)  (https://www.davidhu.io/react-spinners/) (https://github.com/davidhu2000/react-spinners) React Spinner: a package thst allow display spinner. Run 'npm i react-spinners'
//NPM: Node package manager (npm) is a package manager and a software register but it's also a place where developers can find, build and manage code packages. Right now, npm contains over 800,000 packages for various applications, from front-end and robotics to mobile apps
//It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. 

//REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
//Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then put the <ToastContainer anywhere within the container/>return./>
//To use this in any componnet, simply import { tosst } from 'react-toastify'; and call it using toast.success. error JobPage line 20... e.g toast.success('Job Deleted Successfully');

//Ctrl + c to stop running the React app in your command line.

//RUN AN EXISTING REACT FOLDER
//DANGER: DO NOT RUN 'npm create vite or npm install' except a new user who hasn't used react before or a third party openinig a zipped react file!
//Thus, to run an existing react folder. Open folder in VSCode.  Same day && Go to terminal, Run npm run dev. New day && Run 'cd react-app' 'npm run dev'.


//PROPS (https://www.freecodecamp.org/news/how-to-use-props-in-react/)
//The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components. In ReactJS, the data can be passed from one component to another component using these props, similar to how the arguments are passed in a function.
//We use props in React to pass data from one component to another (from a parent component to a child component(s)).
//Props without destructuring
//LoginPage Component 
const LoginPage = (props) => {      // Or set it to a variable/Declare props variable(s)
// const tit = props.title;
//If you do not want to create variables for your props, you can go ahead and pass them directly into your template like this: 
  return <h1>{props.title}</h1>
   {/* <h1> Did you {tit} </h1> */}
}
//Pass data to props in the App component App.jsx
//import LoginPage from './components/LoginPage';
<Route index element={<LoginPage title='Welcome'/>} />

//Props with destructuring
const LoginPage = ({title}) => {
  return <h1>{title}</h1>
}
// export default LoginPag;


//How to set DEFAULT values for props
function LoginPage({name, age}) {
  return <h1>My name is {name}</h1> ;
}
LoginPage.defaultProps = {
  name: "Designer",
  age: "Sixteen"
}
//export default LgnPage; If you do not want your props data to be empty when you create them, you can pass in a default value. Just at the end of the code before the component was exported, we declare default values for our props. 

//HOW TO PASS STATE DATA FROM ONE COMPONENT TO ANOTHER: (https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=One%20of%20the%20main%20methods,child%20component%20as%20an%20attribute.)
//One of the main methods to pass state to another component in React is via props. Props are read-only data that are passed from a parent component to a child component. 
//NOTE: To pass state data as props, we need to define the state in the parent component and pass it to the child component as an attribute.
//OR To pass a state variable to another component that is not related, you will need to lift the state up to a common ancestor component and then pass it down as a prop to the desired component.
//OR For passing the data from the child component to the parent component, we have to create a callback function in the parent component and then pass the callback function to the child component as a prop. This callback function will retrieve the data from the child component.


//ADDING ADDITIONAL PAGES IN YOUR PROJECT: Note, that can't be achieved with just react. Being a library, react doesn't have a way to add seperate pages. Hence, we will use the React Router which is a seperarte package, so we need to install it.
//React Router Setup... On Terminal, run 'npm i react-router-dom' Enter. So, we'l put all the Routing stuff in the main App file, which is App.jsx.
//How to Create Routes so you can have multiple pages.
//Above the App.jsx, import the ffg at the top:
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePagee from './Pages/HomePagee';
import MainLayoutt from './layouts/MainLayoutt';
//Now, the way this will work is: above the return st in the main app comp the App.jsx, craete a variable called router, set that to createBrowserRouter; this will create our router. Inside the (), use createRoutesFromElements and inside thta, is where we'l use the route component.
//For this to work, must implement the provider. So, return the RouterProvider within the App.jsx return st and make it take in the router varable.
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route index element={<Homepagee/>} />)
  );
  const App = () => {
    return <RouterProvider router={router}/>;
  }; //   export default App

//PAGES: Create a seperate folder called 'Pages' for the pages.Within, create a HomePage.jsx file.  Although they are still componnets, but should not put them in the same folder as the regular UI component. Now, import Homepage within App.jsx and render it within the routeprovider.
//Now, import all needed components, use within the return st into the Hompage and it'll be displayed on the screen.

//LAYOUT: This is mostly used for Navbars and Footers i.e elements we always want to show on all pages. So, create a layout folder in the src folder. Note: you can have multiple layouts. To use layout, import it(MainLayout.jsx) into App.jsx (Line 84)
//Now, create a Rarent Route to the rest of our routes i.e other routes where we want the navbar and footer to always display will be embedded in this parent route. Set the path as well. (Line 89 but extended below): So basically, any route put in there will use the layout.
<Route path='/' element={<MainLayoutt />}>
      <Route index element={<HomePagee />} />
      <Route path='/jobs' element={<JobsPagee />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
//The Layout Outlet: In the mainlayout, whatever route we're on, that page will come through the outlet. i.e import outlet into the layout and return it. Then the Navbar as well.
//CREATE MORE PAGES (Jobs Page): The workflow now is to create a new file in pages e.g JobsPage.jsx, then go to the App file (App.jsx) and add the route, rem to import it at the top of as well. But here, change the index and use path set to /jobs

//LINKS: React works a little bit different. We don't use the anchor ref <a tags, we use the Link to tabs. Now, the href or to element here should go to the path defined in the router.. in this case... href="/jobs" as defined in the App.jsx router.
//Another reason we don't use the a tag is because it does a complete page refresh which the link tag will avoid, making things very fast. So, in the Navbar, import Link: And change all a tags to Link tags and change the href to to=.
import { Link } from 'react-router-dom';

//Create a Custom 404 Error Page.. Import it into the App.jsx and add route. And for the path, use '*'

//NAVLink: Works the same way with Link tag except that it adds a class to the active link. Now we can change all the link tags in the navbar to Navlink as well as the import name above. To manually add a classLink to an active link or button, create a function above the return st within desired component and set className of the Navlink within the return st to the function. Check Navbar.jsx for ref.



//FETCHING DATA FROM BACKEND rather than just bringing in a json file.. Use json Server: A libray that lets you create a mock API and you can send get post put patch delete request so you can create CRUD 'Create, Read, Update, Delete' functionality. All you have to do is create a json file and you can put any type of resource you want in it.
//JSON File://(https://www.npmjs.com/package/json-server) (https://blog.hubspot.com/website/json-files) A JSON file stores data in key-value pairs and arrays; the software it was made for then accesses the data. JSON allows developers to store various data types as human-readable code, with the keys serving as names and the values containing related data. JSON syntax is derived from JavaScript object notation syntax:
//The most common use of JSON data and files is to read data from a server for a website or web application to display — and change data given the correct permissions.
              // Data is in key/value pairs
              // Data is separated by commas
              // Curly braces hold objects
              // Square brackets hold arrays
//Keys must be strings, and values must be a valid JSON data type, i.e String, Number, Object, Array, Boolean, Null.            
//What are IDEs? An integrated development environment (IDE) is a software application that helps programmers develop software code efficiently.

//INSTALL JSON SERVER: (on bash terminal, rem to cd into the project directory) install json server: Run 'npm install json-server' (or as dev dependency 'npm i -D json-server'). And inside the package.json file, within script, beneath preview, add ... "server": "json-server --watch src/jobs.json --port 8000" .
//And run it using 'npm run server' on same terminal.. Copy link on the Endpoint and paste in the broswer..data is being displayed in the browser. So, we essentially now have a backend. 
//Set LIMIT of backend data being fetched : 'http://localhost:8000/jobs?_limit=3'
//RUN backend(json) SERVER: On terminal, cd into project directory... 'npm run server'

//TRY CATCH: The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
//res.json: The res. json() function sends the response as JSON format. It automatically converts the JavaScript object into a JSON-formatted string. The parameter body can be of any JSON type, which includes object, array, string, Boolean, number, or null.

//The useEffect: It helps in performng side effects in components. For instance, in fetching data. It takes two arguments; a function and a dependency. Learnt that this hook runs on every render; whenever there's a change in the dependency which can actually cause an unending loop, in that case, it's preferable to inlude the second argument which in most cases is an empty array.This makes the useeffect run only on the first render.

//CREATE PROXY: Mostly for project deployment..A proxy server is a server application that acts as an intermediary between a client requesting a resource and the server providing that . To create a proxy, do that within the vite.confif file ... In the server object beneath the port, add :
// proxy: {
//   '/api': {           i.e if it's prefix with slash api, we want to use this target object...
//     target: 'http://localhost:8000',
//     changeOrigin: true,
//     rewrite: (path) => path.replace(/^\/api/, ''),
//   }
// }
//useParams: To get the id of the each job page, use the use Params Hooks from react router dom. Import useParams...

//DATA LOADER from React Router: With a data loader, we basically create a function within a file and then export and use it in other areas i.e as a gloabal state and use in other componenets.

//WORKING WITH FORM
//Adding a piece of state for every field in the form; when there's a change in the input/field, the state is being changed as well.
//Adding a piece of state item for each field. Can be done two ways: 
//A, have a single object in the state and have all the fields in that object or B, do a seperate piece of state for every field. Then, we can use the useState hook. 
//Import the useState..Create diff states for diff fields. Add a value attribute to each fields in the return jsx ,set value to the piece of state i.e value={type}
//NOTE: To make the form update with state, rm to add the onChange event handler.. Set this onChange event to a function that will take in an event param. this param has on it, a target.value which will be whatever is selected or typed in the field.
//Then, setType(function to run the state) to e.target.value.
// value={type} 
//   onChange={(e) =>setType(e.target.value)}>

//Form Submission: React19:'action attribute'
//To submit a form, use the onSubmit Function..can set it to a created function that will take in an event parameter.. rm e.preventDefault to stop the behaviour.
//Construct an object from the form field that we want to submit to the api.

//Set a Form's DEFAULT field value: add the default field value within the html tag to the state default value.

//MAKE POST REQUEST TO THE BACK-END; EDIT, DELETE, ADD, SUBMIT..
//The POST method sends data to the server which may modify the server's state i.e that is designed to send loads of data to a server from a specified resource. POST is used to send data to a server to create/update a resource. It's best to have the post request in the main app file; the edit, delete and submit. 
//ADD Req App.jsx line 15
//Post Request/To CALL a Function in a Paret Component; pass it down into the route 
//To do this, pass in a function as a prop into the AddJobPage const 'addJobSubmit' and call it beneath passing in 'newJob' object..
//UseNavigate: |REDIRECT|
//After submission, to redirect user to the job page, use useNavigate hook from raect-router-dom. To use this useNavigate, first initialize it as a var and set to useNavigate() below the state..Then, simply return navigate and whr to redirect to. e.g return navigate('/jobs');
//Since the addJobSubmit is being passed in as a prop, in the main app.jsx route within the AppJobPage comp, insert the addJobSubmit with value set to a function (addjob) and then create the 'addjob' function above the routes and it will take in the newJob

//DELETE REQUEST
//(This 'deleteJob' request function will be passed into the single jobPage router below as a prop and to the JobPage component as a prop as well. And on the button, run a function onClick set to another function called onDeleteClick and pass in the job.id.. JoPage line 101). 
//Write the onDeleteClick function above in the Jobpage, pass in the 'jobId', add a confirmation to the delete using window.confirm JobPage.jsx line 12...
//Actual delete Request to the Api ...App.jsx line 29

//EDIT REQUEST: PUT Method App.jsx line 35
//REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
//Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then put the <ToastContainer anywhere within the container/>return./>
//To use this in any componnet, simply import { tosst } from 'react-toastify'; and call it using toast.success. error JobPage line 20... e.g toast.success('Job Deleted Successfully');
//POST REQUEST TO ADD JOB: App.jsx line 15...

//GET REQUESTS: GET requests are intended to retrieve data from a server and do not modify the server's state.

//PUT REQUEST: PUT method is used to create a new resource or replace a resource.

//DEPLOYMENT: Production version of the site
//Close the development/local server.. Then, run 'npm run build' ..This will create a new folder called dist. Dist is the production build.
//Can run this with vite. Now run 'npm run preview'..Now, the dist folder is what will be deployed. However, the jobs will not be shown in deployement as we are using a local json server. To correct this, create an API with express or....

//// STRUCTURE:
// index Html: is the single page since our applicatio is a single page application
// The src folder is our react application and the entry point is the main.jsx file.
   
//Writing JSX
//JSX stands for JavaScript XML. It is a syntax extension for javascript. The part that looks like HTML, <h1>Hello world</h1>, is something called JSX.
//A basic unit of JSX is called a JSX element. JSX elements looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.
const p1 = <p id='large'>Large Font</p>;
const p2 = <p id='small'>Small Font</p>;
// JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array…
// JSX elements can have attributes, just like how HTML elements can.  A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes.
// You can nest JSX elements inside of other JSX elements, just like in HTML.
// NOTE: If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it: 
(
    <a href="https://www.example.com">
        <h1>
            Click Here!
        </h1>
    </a>
);

// Nested JSX expressions can be saved as variables, passed to functions and so on, just like non-nested JSX expressions can! Here’s an example of a nested JSX expression being saved as a variable:
const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click Here!!!
      </h1>
    </a>
  );

const myDiv = (
    <div>
        <h1>Hello World</h1>
    </div>
);

// JSX Outer Elements: There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element. The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!.
// If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a <div> element.

//Rendering JSX
//To render a JSX expression means to make it appear on screen.

// It is essential to understand that React relies on two things to render: what content to render and where to place the content.
// Use the document object which represents our web page.
// Uses the getElementById() method of document to get the Element object representing the HTML element with the passed in id(app).
// Stores the element in container.
// We use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root. root can be used to render a JSX expression. This is the “where to place the content” part of React rendering.
// Lastly,uses the render() method of root to render the content passed in as an argument. Here we pass an <h1> element, which displays Hello world. This is the “what content to render” part of React rendering.
const contaiiner = document.getElementById('app');
const myroot = createRoot(contaiiner);
myroot.render(<h1>Hello World</h1>);

// The render() method’s argument doesn’t need to be JSX, but it should evaluate to a JSX expression. The argument could also be a variable, so long as that variable evaluates to a JSX expression.
//We save a JSX expression as a variable. We then pass the variable as the argument of render():
const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Make me Become a Great Developer</li>
    </ol>
  );
  
  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(toDoList);


//The Virtual DOM
//One special thing about a React root’s render() method is that it only updates DOM elements that have changed. That means that if you render the exact same thing twice in a row, the second render will do nothing:
//https://www.codecademy.com/courses/react-101/articles/react-virtual-dom

//class vs className
//In HTML, it’s common to use class as an attribute name. In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

//Self-Closing Tags: in JSX, you have to include the slash(/). If you write a self-closing tag in JSX and forget the slash, you will raise an error: <br /> <img src ="" />

//JavaScript In Your JSX In Your JavaScript: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.
//Curly Braces in JSX: Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers—it reads them as text, just like HTML. You can do this by wrapping your code in curly braces.
root.render(<h1>2 + 3</h1>);
root.render(<h1>{2 + 3}</h1>);

//Variables in JSX
//When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file. That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.
const name = 'Gerdo';
// Access your variable inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

root.render(<h1>{theBestString}</h1>);

//Variable Attributes in JSX
//When writing JSX, it’s common to use variables to set attributes.

const sideLength = "200px";

const pandda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength}/>
);
//Object properties are also often used to set attributes:
const pics = {
  panda: "http://bit.ly/1Tqltv5"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

//Event Listeners in JSX
//JSX elements can have event listeners, just like HTML elements can. You create an event listener by giving a JSX element a special attribute. Here’s an example:
//An event listener attribute’s value should be a function and it would only work if the function is a valid function that had been defined elsewhere.
function clickAlert() {
    alert('You clicked this image!');
}
  
<img onClick={clickAlert} /> 
//Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.


//JSX Conditionals: If Statements That Don't Work: Here’s a rule that you need to know: you can not inject an if statement into a JSX expression.
//This code will not work
                    // (
                    //     <h1>
                    //       {
                    //         if (purchase.complete) {
                    //           'Thank you for placing an order!'
                    //         }
                    //       }
                    //     </h1>
                    //   )

//How can you write a conditional if you can’t inject an if statement into JSX?
//One option is to write an if statement and not inject it into JSX. It will work if the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.
if (coinToss() === "heads"){
    img = <img src={pics.kitty} />
  } else{
    img = <img src={pics.doggy} />
  }
root.render(img)
  

//JSX Conditionals: The Ternary Operator. The ternary operator is a simplified conditional operator like if / else . Syntax: condition ? <expression if true> : <expression if false>.
//Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy”. If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z.
//Here’s how you might use the ternary operator in a JSX expression:
const headline = (
    <h1>
      { age >= drinkingAge? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
);
  
//OR
const conttainer = document.getElementById('app');
const roott = createRoot(conttainer);
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const piics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
//TERNARY............
const img = <img src={piics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
roott.render(img);

//The LOGICAL && Operator: The logical AND && operator for a set of boolean operands will be true if and only if both or all the operands/conditions are true . Otherwise it will be false .
const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> }
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
);
//If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered. If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.

const contaainer = document.getElementById('app');
const rooot = createRoot(contaainer);
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Nigerian Jollof</li>
      <li>Fried Rice</li>
      { !judgmental && <li> Nacho Cheez Straight Out The Jar </li>}
      <li>Boiled Yam and Egg Sauce</li>
    </ul>
  </div>
);

rooot.render(favoriteFoods);


//.map in JSX: The .map() array method comes up often in React. It’s good to get in the habit of using it alongside JSX. If you want to create a list of JSX elements, then using .map() is often the most efficient way. It can look odd at first:
const containerr = document.getElementById('app');
const rroot = createRoot(containerr);
const mystrings = ['Home', 'Shop', 'About Me'];
const listItems = mystrings.map(eachstring => <li>{eachstring}</li>);
<ul>{listItems}</ul>

rroot.render(<ul>{listItems}</ul>);

//E.g 2
const cont = document.getElementById('app');
const rot = createRoot(cont);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person, i) =>
    //add an i parameter to .map()'s inner function so that you can access each person’s unique index:
  <li>{person}</li>
);

rot.render(<ul>{peopleList}</ul>)


//KEYS: When you make a list in JSX, sometimes your list will need to include something called keys. A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.
//keys don’t do anything visible! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list items into the wrong order.
//Not all lists need to have keys. A list needs keys if either of the following is true:
//A. The list items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
//B. A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next. If neither of these conditions is true, then you don’t have to worry about keys. If you aren’t sure, then it never hurts to use them!
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul >
    
//React.createElement: You can write React code without using JSX at all!
//The following JSX expression:
const h1 = <h1>Hello world</h1>;
//can be rewritten without JSX, like this:
const h1 = React.createElement(
    "h1",
    null,
    "Hello world"
);
  

//React Components: React applications are made of components.
//What’s a component? A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML and re-render it whenever some data changes.
//It’s useful to think of components as smaller pieces of our interface. Combined, they are the building blocks that make up a React application. In a website, we can create a component for the search bar, another component for the navigation bar, and another component for the dashboard content itself.
//Components in React are great because they are reusable. We can keep our component pieces separated, organized, and reusable by putting them into separate files and exporting them to where we need them.

import React from 'react';
function MyComponent() {
    return <h1>Hello world</h1>;
  }
  
  ReactDOM.createRoot(
  document.getElementById('app')
  ).render(<MyComponent />);
  
//Function Component: Using JavaScript functions to define a new React component. In the past, React components were defined using Javascript classes. But since the introduction of Hooks, function components have become the standard in modern React applications.
//After we define our functional component, we can use it to create as many instances of that component as we want.
import React from 'react';

function MyComponent() {
  return <h1>Hello, I'm a functional React Component!</h1>;
}

export default MyComponent;

//Name a Functional Component: When you declare a new functional component, you need to give that component a name.
//Function component names must start with capitalization and are conventionally created with PascalCase! Due to how JSX tags are compiled, capitalization indicates that it is a React component rather than an HTML tag.
//This is a React-specific nuance! If you are creating a component, be sure to name it starting with a capital letter so it interprets it as a React component. If it begins with a lowercase letter, React will begin looking for a built-in component such as div and input instead and fail.

//The Return Keyword in Functional Components: For starters, these instructions should take the form of a function declaration body. That means that they will be delimited in/by curly braces
//Our instructions can include a combination of markup, CSS, and JavaScript to produce the desired result. The one thing we must always include is a return statement.The function is expected to produce JSX code that can be used to render something onto the browser screen. Thus, when we define functional components, we must return a JSX element.

//Importing and Exporting React Components: A React application typically has two core files: App.js and index.js. App.js file is the top level of your application, and index.js is the entry point.
//So far, we’ve defined the component inside of App.js, but because index.js is the entry point, we have to export it to index.js to render. To export them, we can prefix it with the export declaration and specify if it is a default or named export. In this case, we’ll stick with default.
//After the function component definition, in App.js, we can default export our component like so:
export default MyComponent;
//We can head into our index.js file to import our component from './App':  This will allow us to use MyComponent in index.js but it won't run yet until we use it.
import MyComponent from './App';

//NOW Using and Rendering a Component
//We can use it with an HTML-like syntax that resembles a self-closing tag:
<MyComponent />
//If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:
<MyComponent>
  <OtherComponent />
</MyComponent>

//However, to render our component to the browser, we must rely on the .createRoot() and .render() methods from the react-dom library. This should be done in our entry point, index.js. First, we call the createRoot method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.
//In other words, we give createRoot a DOM element to render in, and React will take over managing the DOM inside it. E.g
//In an application fully built with React, you will only need to do this once. Once this is set up, React will manage the DOM of your application, and any updates to the UI is taken care of efficiently. Adding more components should take place in your top-level App.js file.
//Let’s break it down a bit further: document.getElementById('app') returns a DOM element from index.html. .createRoot() receives the DOM element as the first argument and creates a root for it. .createRoot() returns a reference to the root container on which you can call methods like .render(). After the root is created, all that’s left to do is call the .render() method on the returned root and display the React component like so:
ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);



//To create components and render them, react and reactDOM must be imported.
//React components can be defined with Javascript functions to make function components.
//A React component can be used by calling the component name in an HTML-like self-closing tag syntax.
//Rendering a React component requires using .createRoot() to specify a root container and calling the .render() method on it.


//Using Multiline JSX in a Component : Normally, your function component return statements have looked like this, without any parentheses:
return <h1>Hello world</h1>;
//However, a multi-line JSX expression should always be wrapped in parentheses!
import React from 'react';
function MyNewComp() {
  return (<blockquote>
    <p>
      What is important now is to recover our senses.
    </p>
    <cite>
      <a target="_blank"
        href="https://en.wikipedia.org/wiki/Susan_Sontag">
        Susan Sontag
      </a>
    </cite>
  </blockquote>)
}
export default MyNewComp;


//Use a Variable Attribute in a Component
import React from 'react';

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};

function RedPanda(){
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
}

export default RedPanda;


//Putting Logic in a Function Component
//A function component must have a return statement. However, that isn’t all that it can have. You can also put simple calculations that need to happen before returning your JSX element within the function component.
function RandomNumber() {
  //First, some logic that must happen before returning
  const myNum = Math.floor(Math.random() * 10 + 1);
  //Next, a return statement using that logic: 
  return <h1>{myNum}</h1>
}
//Common mistake:
          function RandomNumber() {
            return (
              const myNum = Math.floor(Math.random() * 10 + 1);
              <h1>{myNum}</h1>
            )
}         //In the above example, the line with the const myNum declaration will cause a syntax error, as it should come before the return.
//More on Putting Logic in a Function Component
import React from 'react';
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];
function Friend(){
  const friend = friends[2];
  return <div>
  <h1>{friend.title}</h1>
  <img 
  src = {friend.src}
  />
  </div>
}
export default Friend;

//Use a Conditional in a Function Component
//Notice that the if statement is located inside of the function component, but before the return statement.
import React from 'react';

function TodaysPlan() {
    let task;
    let apocalypse = false;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
}

//E.g 2
import React from 'react';

const fiftyFifty = Math.random() < 0.5;

function TonightsPlan() {
  if(fiftyFifty){
    return <h1>Tonight I'm going out WOOO</h1>
  }else{
    return <h1>Tonight I'm going to bed WOOO</h1>
  }
}
export default TonightsPlan;


//Event Listener and Event Handlers in a Component:    Function components can include event handlers. With event handlers, we can run some code in response to interactions with the interface, such as clicking.
function MyComponent(){
  function handleHover() {
    alert('Stop it.  Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}   //In the above example, the event handler is handleHover(). It is passed as a prop to the JSX element <div>. Understand that props are information passed to a JSX tag.
//Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling.
//There’s a small quirk you should watch out for. Take a look at this line again:
return <div onHover={handleHover}></div>
//The handleHover() function is passed without the parentheses we would typically see when calling a function. This is because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() would trigger the function immediately, so be careful!
//E.g 2 
        function SubmitButton() {
          function handleClick() {
            alert('Submission Successful.');
          }
          return <button onClick ={handleClick}>Submit</button>;
}


//COMPONENTS RENDER OTHER COMPONENTS
//Components Interact: A React application can contain dozens, or even hundreds, of components. Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.

//Returning Another Component: As we’ve seen before, each React component is responsible for one piece of the interface. As the application grows in complexity, components need to be able to interact with each other to support the features needed. So far, we’ve explored components that return JSX elements, such as:
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}         //In this example, the React component is not interacting with other components. However, you can have components interact with each other by passing information or even returning other components.
//i.e
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

function ItemBox() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );
}
//OR
import React from 'react';

function Picture() {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
       <h2>Class: Cephalopoda</h2>
    </>
  )
}

export default Profile;


//Apply a Component in a Render Function
import Button from './Button'

function App() {
  return <Button />;
}

export default App;
//This ability allows us to separate components into smaller functions and connect them together to make more complex components! We can treat it as the Button component is a child of the parent App component. By breaking a component into extracted smaller components, we can reuse the individual parts when necessary.
import React from 'react';
import NavBar from './NavBar';

function ProfilePage() {
  return (
    <div>
        <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
}

export default ProfilePage;
//View Profile.js and observe how the Picture component is referenced inside of the Profile component. Picture is responsible for a piece of Profile. Together, we exported only the Profile component to be rendered.


//PROPS: When thinking in the frame of a React application, components are small pieces of a whole. Together, they make up the interface that users will see. With each component playing a role in the interface, there are times when components must be able to communicate with other components.
//Props: Information that gets passed from one component to another is known as props. Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.

//Access a Component's props: Every component has something called props. A component’s props is an object. It holds information about that component. E.g type, value of a button element. To access a component’s props object, you can reference the props object and the dot notation for its properties. E.g props.name
//propsDisplayer.js
import React from 'react';

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

//App.js
import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer />;
}

export default App;

//Pass `props` to a Component:    To take advantage of props, we need to pass information to a React component.
//How do we pass props/how to pass information to a component’s props object? By giving the component an attribute:
<Greeting name="Jamel" />
<SloganDisplay message="We're great!" />    //In the above example, we used the name message. You can use any name you want.
//If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:
<Greeting myInfo={["Astronaut", "Narek", "43"]} />
//In this next example, we pass several pieces of information to <Greeting />. The values that aren’t strings are wrapped in curly braces:
<Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />

//
import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello" />;
}

export default App;


//Render a Component's props:   Props allow us to customize the component by passing it information.
//You will often want a component to display the information that you pass. The most common use of props is to pass information to a component from a different component.
//NOTE: To make sure that a function component can use the props object, define your function component with props as the parameter:
function Button(props) {
  return <button>{props.displayText}</button>;
}         //n the example, props is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (object.propertyName).
//access
return <h1>{props.firstName}</h1>;
//Alternatively, since props is an object, you can also use destructuring syntax like so:
function Button({displayText}) {
  return <button>{displayText}</button>;
}

//Smart Watch App
//Product.js
import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>       
  );
}

export default Product;

//App.js
import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.8/5.0" />;
}

export default App;

//Pass props From Component To Component:   Props in React travel in a one-way direction, from the top to bottom, parent to child.
function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}               //In this example, App is the parent and Product is the child. App passes three props to Product (name, price, and rating), which can then be read inside the child component.
//Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

//Render Different UI Based on props:     You can do more with props than just display them. You can also use props to make decisions.
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}


//Put an Event Handler in a Function Component:     You can, and often will, pass functions as props. It is especially common to pass event handler functions.
//In the next exercise, we will pass an event handler function as a prop. However, we have to define an event handler before we can pass one anywhere. In this exercise, we will define an event handler function.
//How do we define an event handler in React?  We define an event handler as a method on the function component!
//In  myFunc.js file in the code editor. On lines 4 through 8, an event handler method is defined. On line 10, that event handler method is attached to an event (a click event, in this case).
//myFunc.js
import React from 'react';

function myFunc() {
  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  return (
      <h1 onClick={handleEvent}>
        Hello world
      </h1>
    );
}
//Talker.js
import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {   
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button />;
}

export default Talker;

//Button.js
import React from 'react';
//Receive an Event Handler as a prop:   If a user clicks on this <button> element, you want your passed-in talk() function to get called. This means that you need to attach talk() to the <button> element as an event handler.
//How do you do that? In the same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute’s name should be an event name like onClick or onHover. The attribute’s value should be the event handler that you want to attach.
import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>     //Accessing a passed-in prop via props.propName.
      Click me!
    </button>
  );
}

export default Button;

////Naming of event handlers:  If you are listening for a “click” event, then you name your event handler handleClick. If you are listening for a “hover” event, then you name your event handler handleHover. However, your prop name like the next button down below should be with the word "on" e.g onClck/onHover. i.e return <button onHover={handleHover} 
function myClass(){
  function handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
   return <Child onHover={handleHover} />; //Propname here is onHover and value is the event handler which is handleHover.
}


//props.children
//Every component’s props object has a property named children. So far, all of the components that you’ve seen have been self-closing tags, e.g <MyFunctionComponent />. They don’t have to be! You could write <MyFunctionComponent></MyFunctionComponent>, and it would still work props.children will return everything in between a component’s opening and closing JSX tags. E.g <MyFunctionComponent> <MyFunctionComponent/> By using props.children, we can separate the outer component, MyFunctionComponent in this case, from the content, which makes it flexible and reusable.
import React from 'react';
import LilButton  from './LilButton';

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button</button>;
}  export default BigButton;

// Example 1 In Example 1, <BigButton>‘s props.children would equal the text, “I am a child of BigButton.”
<BigButton>
  I am a child of BigButton.    
</BigButton>
  
// Example 2  In Example 2, <BigButton>‘s props.children would equal a <LilButton /> component.
<BigButton>
  <LilButton />
</BigButton>

// Example 3  In Example 3, <BigButton>‘s props.children would equal undefined.
<BigButton />
//If a component has more than one child between its JSX tags, then props.children will return those children in an array. However, if a component has only one child, then props.children will return the single child, not wrapped in an array.


//Giving Default Values to props: This is in the cases where no values are passed in probably mistakenly or forgetfully. i.e giving default values to props. We can make this happen by specifying a default value for the prop. There are three ways to do this!
// 1. The first method is adding a |defaultProps| static property to the component:
function Example(props) {
  return <h1>{props.text}</h1>
}

Example.defaultProps = {
  text: 'This is default text',
};


// 2. You can also specify the default value directly in the function definition:
function Example({text='This is default text'}) {
  return <h1>{text}</h1>
}

// 3. Lastly, you can also set the default value in the function body:
function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}


//REACT DEVELOPER TOOLS
//https://www.codecademy.com/courses/react-101/informationals/ready-react-developer-tools

//HOOKS The State Hooks
//STATE:  State generally refers to data or properties that need to be tracking in an application. The state is a built-in React object that is used to contain data or information about the component.
          //The state object holds data in a component that is expected to change over time. It is created and maintained by the component itself, and when it changes, the component re-renders.
//HOOKS: are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.
//Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Although Hooks generally replace class components, there are no plans to remove classes from React.
//React Hooks are a feature in React that allows developers to use state and other React features without writing a class component. Hooks are functions that let developers "hook into" the React state and lifecycle methods from a functional component.
//React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). See the full list in the React docs.
//State Hook:   The most common Hook used for building React components. The React useState Hook allows us to track state in a function component. The State Hook is a named export from the React library, so we import with object destructuring like the following:
import React, { useState } from 'react';      //When we call the useState() function, it returns an array with two values:
                                              //1. The current state: The current value of this state.
                                              //2. The state setter: A function that we can use to update the value of this state.
//We can use these two values to track the current state of a data value or property and change it when we need to. To extract the two values from the array, we can assign them to local variables by using array destructuring. For example:
const [currentState, setCurrentState] = useState();

// Another example of a function component that uses the State Hook:
import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
//Notice how the state setter function, setToggle(), is called by our onClick event listeners. To update the value of toggle and re-render this component with the new value, all we need to do is call the setToggle() function with the next state value as an argument. i.e.       <button onClick={() => setToggle("Off")}>Off</button>

//Example 3
import React, { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};     //Background color changes as acc to clicked button color.

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}


//Initialize State:   Like how you used the State Hook to manage a variable with string values, we can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects, booleans etc.
import React, { useState } from 'react';

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}                         //This ToggleLoading() function component uses the simplest of all data types, a boolean. Booleans are frequently used in React applications to represent whether data has loaded or not.
//THIS CODE WORKS JUST FINE AS IS, BUT WHAT IF WE WANT OUR COMPONENT TO START OFF WITH ISLOADING SET TO TRUE?
//To initialize our state with any value we want, we simply pass the initial value as an argument to the useState() function call.
const [isLoading, setIsLoading] = useState(true);
//There are three ways in which this code affects our component:
                    //1. During the first render, the initial state argument is used.
                    //2. When the state setter is called, React ignores the initial state argument and uses the new value.
                    //3. When the component re-renders for any other reason, React continues to use the same value from the previous render.
//HERE: If we don’t pass an initial value when calling useState(), the current value of the state during the first render will be undefined. Often, this is perfectly fine for the computers running the code, but it can be unclear to the humans reading our code. So, we prefer to explicitly initialize our state.
      //So ,if we don’t have the value needed during the first render, we can explicitly pass null instead of passively leaving the value as undefined.
//Naming: It’s a convention to name the setter variable using the current state variable with “set” prepended.
//We employ the State Hook using the code below. The currentState references the current value of the state and initialState initializes the value of the state for the component’s first render.
const [currentState, stateSetter] = useState(initialState);


//E. 2
import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState("Tomato");     //Modify our current ColorPicker() component to initialize the state so that “Tomato” is the selected color for our component’s first render.

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

//USE STATE SETTER OUTSIDE OF JSX
//Let’s see an example of managing the changing value of a string as a user types into a text input field:
import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}
//The JSX input tag has an event listener called onChange. This event listener calls an event handler each time the user types something in this element. In the example above, our event handler is defined inside of the definition for our function component, but outside of our JSX.

//It’s common in React code to simplify this:
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
//To this:
const handleChange = (event) => setEmail(event.target.value);

//Or even (more concise) this:
const handleChange = ({target}) => setEmail(target.value);
 
//E.g 2
//1. Let’s use the State Hook to make our program only accept numeric input since we want a phone number from the user. First, make sure we can use the State Hook by importing useState from the React library.
//2. Declare and assign values for our current state and state setter with useState(). Use phone as the name of our current state variable. Make sure to give the phone state variable an initial value of an empty string!
//3. Let’s specify the value of our JSX input tag by adding a value attribute and setting it to the value of our phone state variable. We also want to detect any changes to the input tag while the user types so add an onChange event listener and assign it the handleChange function.
//4. Lastly, complete the handleChange() function. This function checks for the validity of the input value the user is typing. If the input is numeric, it should update the state variable through the setter function. n the if-statement of the handleChange() function, update the state using the state setter function setPhone() and set it to the new value newPhone.

import React, { useState } from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  // declare current state and state setter 
const [phone, setPhone] = useState('');
  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
        // update state 
    }
    // just ignore the event, when new value is invalid
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input  value={phone} onChange={handleChange} id='phone-input' />
    </div>
  );
}


//SET FROM PREVIOUS STATE
//In the previous exercise, we learned to update the state by passing it a new value like this:
setState(newStateValue);

//However, React state updates are asynchronous. This means that there are some scenarios where portions of your code will run before the state is finished updating. This is a good and a bad thing! Grouping the state updates together can improve performance in your application, but it can result in outdated state values. Consequently, it is best practice to update a state with a callback function, preventing accidental outdated values.
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}

//We use a state setter callback function when our next value depends on our previous value.
//Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: setArrayState((prev) => [ ...prev ]) and setObjectState((prev) => ({ ...prev })).

//When the button is pressed, the increment() event handler is called. Inside this function, we use our setCount() state setter with a callback function. Because the next value of count depends on the previous value of count, we pass a callback function as the argument for setCount() instead of a value (as we’ve done in previous exercises).
setCount(prevCount => prevCount + 1)
//When our state setter calls the callback function, this state setter callback function takes our previous count as an argument. The value returned by this state setter callback function is used as the next value of count (in this case, prevCount + 1)..
//Set From Previous State  //PRACTICE : Let’s get some practice by creating a navigation bar for a quiz. The navigation bar will let us go back or go to the next question in a quiz.
//1. First, define a goBack() event handler function. It should allow us to navigate to the previous quiz question. Because our next value of state depends on the previous state value, this function should call the state setter with a callback function. Our state setter callback function needs to compute the next value of questionIndex using an argument named prevQuestionIndex.
//2. Next, add an event listener to the “Go Back” button that will call our newly defined event handler.
//3. If we can go back to a previous question, we should also be able to go to the next question. Define a goToNext() event handler. Because our next value of state depends on the previous state value, this function should call the state setter with a callback function. Our state setter callback function needs to compute the next value of questionIndex using an argument named prevQuestionIndex.
//4. Add an event listener to the “Next Question” button that will call our newly defined event handler.
//5. Lastly, add an onFirstQuestion variable with a boolean value, then use that value to toggle the disabled attribute of the “Go Back” button on and off.

import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  // determine if on the first question or not 
const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}





//ARRAY IN STATE:           JavaScript arrays are the best data model for managing and rendering JSX lists. Let’s take a look at the code for a website for a pizza restaurant.
import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Remove ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}                   //In the above example, we are using two arrays: 1, The options array contains the names of all of the pizza toppings available. 2, The selected array represents the selected toppings for our personal pizza.
//The options array contains static data, meaning that it does not change. It’s best practice to define static data models outside of function components since they don’t need to be recreated each time our component re-renders. In our JSX, we use the JavaScript .map() method to render a button for each of the toppings in our options array.
//The selected array contains dynamic data, meaning that it changes, usually based on a user’s actions. We initialize selected as an empty array. When a button is clicked, the toggleTopping() event handler is called. Notice how this event handler uses information from the event object to determine which topping was clicked.
//NOTE: When updating an array in a state, we do not just add new data to the previous array. We replace the previous array with a brand new array. This means that any information that we want to save from the previous array needs to be explicitly copied over to our new array. That’s what this spread syntax does for us: ...prev.

//Array in State PRACTICE: Shooping Cart
//1. Declare and initialize a STATE VARIABLE called cart that will keep track of a list of string values. Each of these string values represents a grocery item that we’ve added to our shopping cart. We’ll add event listeners and event handlers to add and remove items to our cart in the coming steps. For now, let’s get started by initializing our cart with the value of an empty array for the first render.
//2. Take a look at the current code, we have two functions: addItem() and removeItem(). Let’s add some parameters to these event handling functions, addItem() should accept an argument called item and removeItem() should accept an item called targetIndex.
//3. Time to shift our focus to the body of the event handler functions. We’ll start with addItem(). Update the cart state with the state setter function every time addItem() is called. Don’t forget to use a callback function for best practice! Inside, use the array spread syntax to add a new item to the state array.
//4. Last, removeItem() should remove from the state when called. Use the array .filter() method to remove the item from our state that’s located at the index of the item that was clicked in our list.
          //Why would we want to use the index of the clicked item instead of the item itself when determining what to remove from our data model? Say that we have two of the same item in an array. Using the value to remove the item would remove all items with that value, so we use the index as a unique identifier.

import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
 setCart((prev) => {
  return [item, ...prev];
 });
  };

   const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };


  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}


//OBJECTS IN STATE:               We can also use state with objects. When we work with a set of related variables, it can be very helpful to group them into an object. Let’s look at an example of this in action.
export default function Login() {
  const [formState, setFormState] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}             //A few things to notice:
//We use a state setter callback function to update a state based on the previous value. 2, The spread syntax is the same for objects as for arrays: { ...oldObject, newKey: newValue }. 3, We reuse our event handler across multiple inputs by using the input tag’s name attribute to identify which input the change event came from.
//Once again, when updating the state with setFormState() inside a function component, we do not modify the same object. We must copy over the values from the previous object when setting the next value of a state. Thankfully, the spread syntax makes this super easy to do! Anytime one of the input values is updated, the handleChange() function will be called. Inside this event handler, we use object destructuring to unpack the target property from our event object, then we use object destructuring again to unpack the name and value properties from the target object.
//Inside our state setter callback function, we wrap our curly brackets in parentheses like so:
setFormState((prev) => ({ ...prev }))    //This tells JavaScript that our curly brackets refer to a new object to be returned. We use ..., the spread operator, to fill in the corresponding fields from our previous state. Finally, we overwrite the appropriate key with its updated value.
//Notice the square brackets around the name? This Computed Property(https://eloquentcode.com/computed-property-names-in-javascript) Name allows us to use the string value stored by the name variable as a property key.


//Objects in State: PRACTICE:        We’ll use objects with states to build an input form.
//1. The local state variable profile and state setter function setProfile are responsible for keeping track of the input values from our users. In our JSX, we are looking up properties stored in the profile object. This throws an error at our first render because we are attempting to get the value of a property from an object that has not been defined yet. To fix this, initialize profile as an empty object.
//2. You should now see the form rendered, but nothing will happen when we type in the input boxes. Our form does not re-render to show the keystrokes yet. To fix this, add the onChange event listener to our JSX tags to call handleChange() whenever a user types in an input field. This way, we can determine what happens when the user changes the input by typing in the form.
//3. Let’s make our handleChange() function a bit easier to read. Use object destructuring to initialize name and value in a more concise way.
//4. There’s a bug in our code! Have you noticed it? Try typing in one input, then type in a different input. What happens? Why? Each time that we call setProfile() in our event handler, we give profile the value of a new object with the name and value of the input that most recently changed, but we lose the values that were stored for inputs with any other name. Use the spread operator to fix this bug. We want to copy over all of the values from our previous profile object whenever we call our state setter function. Use prevProfile as the argument for our state setter callback function.
//5. Finally, add an event listener to the <form> tag to call our handleSubmit() function when the user submits the form.
import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

   const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input onChange={handleChange}
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input onChange={handleChange}
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}



//SEPARATE HOOKS FOR SEPARATE STATES
//While there are times when it can be helpful to store related data in a data collection, like an array or object, it can also be helpful to create different state variables for data that change separately. Managing dynamic data is much easier when we keep our data models as simple as possible. For example, if we had a single object that held state for a subject you are studying at school, it might look something like this:
function Subject() {
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma'],
    classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201},
    exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]
  })}             //This would work, but think about how messy it could get to copy over all the other values when we need to update something in this big state object. omplex code like this is likely to cause bugs. It’s best to create multiple state variables based on which values tend to change together.
//We can rewrite the previous example as follows:
function Subject() {
  const [currentGrade, setGrade] = useState('B');
  const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
  const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
  const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
  // ...
}               //Managing dynamic data with separate state variables has many advantages, like making our code more simple to write, read, test, and reuse across components.


//Practice 2:
import React, { useState } from "react";

function Musical() {
   const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    }
  })
}
//Take a look at the Musical functional component. It has a large state object. Let’s refactor it to make it more readable and reusable. We’ll work on splitting it into three separate variables: title, actors, and locations. In the MusicalRefactored component, take the title data from Musical and give it its own state variable, state setter, and initial value. Same with others.
            //  Re-write
function MusicalRefactored() {
  const [title, setTitle] = useState('Best Musical Ever');
  const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
  const [locations, setLocations] = useState({
    Chicago: {
      dates: ["1/1", "2/2"],
      address: "chicago theater"
    },
    SanFrancisco: {
      dates: ["5/2"],
      address: "sf theater"
    }
  })
}



//WHY USE useEffect?     
//Function Component Effects: The Effect Hook tells our component to do something every time it’s rendered (or re-rendered). Combined with states, we can use the Effect Hook to create interesting dynamic changes in our web pages!
//There are three key moments when the Effect Hook can be utilized:
//1. When the component is first added, or mounted, to the DOM and renders.
//2. When the state or props change, causing the component to re-render.
//3. When the component is removed, or unmounted, from the DOM.
//Suppose we want to allow a user to change the title of the web page tab every time they type. We can implement this with the Effect Hook (useEffect()) like so:
import React, { useState, useEffect } from 'react';
 
function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
  });
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}  //Let’s take a look at the above example in more detail.
//First, we import the Effect Hook from the 'react' library. Two, The useEffect() function has no return value as the Effect Hook is used to call another function. We pass the callback function, or effect, to run after a component renders as the argument of the useEffect() function. In our example, the following effect runs after each time the PageTitle component renders:
//() => { document.title = `Hi, ${name}`;}  Here, we assign Hi, ${name} as the value of document.title.
//The onChange event listener triggers the PageTitle component to be re-rendered every time the user types in the input. Consequently, this triggers useEffect() and changes the document’s title.
//Notice how we use the current state inside of our effect. Even though our effect is called after the component renders, we still have access to the variables in the scope of our function component! When React renders our component, it will update the DOM as usual, and then run our effect after the DOM has been updated. This happens for every render, including the first and last one.

//Effect Hook practice One
//1. Import the Effect Hook, the State Hook, and React from the 'react' library. Make sure to import everything in one line.
//2. Call useEffect() with a callback function that creates an alert with the current value of count.
//3. Use a template literal so that the message in our alert dialog reads: “Count: 0”, then “Count: 1”, then “Count: 2”, etc.
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
 
 useEffect(() => {
  alert(`Count: ${count}`);
 })
  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
//PRACTICE
//1. Let’s create a program that documents how many times you’ve clicked on the page. Write an event handler named increment() that will be responsible for tracking how many times a user has clicked. Define this function so that it calls setClickCount() with a state setter callback function, adding 1 to the previous value of clickCount.
//2. Import the useEffect() hook and call it with an effect that adds an event listener for 'mousedown' events on the document object. When a 'mousedown' event occurs anywhere on the document, we want our increment() event handler to be called.
//3. Each time that our component renders, our effect is called, adding another event listener. With just a few clicks and rerenders, we have attached a lot of event listeners to the DOM! We need to clean up after ourselves! Update our effect so that it returns a cleanup function that will remove our last event listener from the DOM.



//CLEAN UP EFFECTS:
//Some effects require cleanup. For example, we might want to add event listeners to some element in the DOM, beyond the JSX in our component. When we add event listeners to the DOM, it is important to remove those event listeners when we are done with them to avoid memory leaks! Let’s consider the following effect:
useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // Specify how to clean up after the effect:
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})
//If our effect didn’t return a cleanup function, a new event listener would be added to the DOM’s document object every time that our component re-renders. Not only would this cause bugs, but it could cause our application performance to diminish and maybe even crash! Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.
//If our effect returns a function, then the useEffect() Hook always treats that as the cleanup function. React will call this cleanup function before the component re-renders or unmounts. Since this cleanup function is optional, it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks.


//CONTROL WHEN EFFECTS ARE CALLED
//The useEffect() function calls its first argument (the effect) after each time a component renders. We’ve learned how to return a cleanup function so that we don’t create performance issues and other bugs, but sometimes we want to skip calling our effect on re-renders altogether. It is common, when defining function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders. The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to useEffect() as the second argument. 
//This second argument is called the dependency array.
//The dependency array is used to tell the useEffect() method when to call our effect and when to skip it. Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders. For now, we’ll focus on using an empty dependency array to call an effect when a component first mounts, and if a cleanup function is returned by our effect, calling that when the component unmounts.
useEffect(() => {
  alert("component rendered for the first time");
  return () => {
    alert("component is being removed from the DOM");
  };
}, []);
//Without passing an empty array as the second argument to the useEffect() above, those alerts would be displayed before and after every render of our component, which is clearly not when those messages are meant to be displayed. Simply passing [] to the useEffect() function is enough to configure when the effect and cleanup functions are called!

//PRACTICE: TIMER FNCTION
//1. Get started by using the following four functions to advance the number stored in time each second: A,useEffect(): the Effect Hook, imported from the ‘react’ library. B,JavaScript setInterval() function. C,setTime(): our state setter function. D,A state setter callback function: used by setTime() to calculate the next value of time based on the previous value of time. Add an effect that uses the setInterval() function to call setTime() every second (or 1000 ms).
//2. Our time value is updating way too quickly because the Effect Hook calls our effect after every render! Our effect is creating a new interval that updates the value of time each second. We keep adding more and more intervals that keep updating the same time variable. We need to clean up our old intervals before adding new ones! Let’s start by creating a variable, intervalId and assign it to our setInterval() code from the previous step. Then, below your intervalId declaration, use the return keyword to return a cleanup function. Our cleanup function should use the clearInterval() function.
//3. Let’s add an extra variable to our timer and allow the user to type a message while the timer is counting up. First, let’s create a state variable called name with a state setter called setName() to manage the value of the input box. Set the state variable to the initial value of an empty string.
//4.Great! Let’s go ahead and put that input tag in. Add an <input> element to our JSX. Set its value attribute to our state variable name.
//5. Next, define an event handler function named handleChange(). This event handler will take in the value of the user’s input and update the state variable. handleChange() should use object destructuring on its parameter to take in target and use the state setter setName to set the value of name to target.value.
//6.Put that handleChange() event handler to work! Add the onChange event listener to the input tag, setting it to handleChange.
//7. Oh oh. More bugs. Notice it yet? Type your full name in the text input field. See how the timer seems to stop counting while you are typing? That’s not what we want! What is going on here? We are creating a new interval after each render, that interval will call our state setter to update time exactly one second after each render. When we type in the input field, our component keeps re-rendering, cleaning up old intervals, and starting new ones… but our state setter never gets called until one second after we are done typing!
                //Let’s fix this once and for all! We really want to use a single interval. We want that interval to start ticking away after our first render and we want it to be cleaned up after the final render. To accomplish this, use an empty dependency array!
import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );
}


//FETCH DATA
//When building software, we often start with default behaviors and then modify them to improve performance. We’ve learned that the default behavior of the Effect Hook is to call the effect function after every single render.
//Next, we learned that we can pass an empty array as the second argument for useEffect() if we only want our effect to be called after the component’s first render. In this exercise, we’ll learn to use the dependency array to further configure exactly when we want our effect to be called!
//When our effect is responsible for fetching data from a server, we pay extra close attention to when our effect is called. Unnecessary round trips back and forth between our React components and the server can be costly in terms of: Processing, Performance, Data usage for mobile users, API service fees...
//When the data that our components need to render doesn’t change, we can pass an empty dependency array so that the data is fetched after the first render. When the response is received from the server, we can use a state setter from the State Hook to store the data from the server’s response in our local component state for future renders. Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!
//An empty dependency array signals to the Effect Hook that our effect never needs to be re-run, that it doesn’t depend on anything. Specifying zero dependencies means that the result of running that effect won’t change and calling our effect once is enough. A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect after re - renders unless the value of one of the variables in our dependency array has changed.If the value of a dependency has changed, then the Effect Hook will call our effect again! Here’s a nice example:
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);           // Only re-run the effect if the value stored by count changes
//PRACTICE
//1. We’ve started building a weather planner app that will fetch data about the weather and allow our users to write some notes next to the forecast. A lot of good code has already been written, but there currently isn’t anything rendering to the screen.
//Let’s read through the code and start to wrap our heads around what is going on here.What part of our code do we think is keeping the component from rendering ? In our JSX, we are trying to map over an array stored by the data state variable, but our effect that fetches this data doesn’t get called until after the first render.So during the first render, data is undefined and attempting to call map() on undefined is causing our error! Let’s prevent this error by checking to see if the data has loaded yet.
//If it hasn’t, then we want our function component to just return a paragraph tag with the text “Loading…”. If the data is no longer undefined, then the data has been loaded, and we can go ahead and render the full JSX!
//2. Our data fetching is being done in our effect. Notice how we are currently just using alert() messages to keep track of requesting and receiving data from our server. Instead of just stringifying the response data and showing it in an alert message, let’s store that data in our state. When the data has been fetched, use our state setter function to store that data in our component’s state! Remember that we want to store an array in our data state variable, not the whole response object.
//3. Type in each of the notes’ input fields in our table. What do you notice? Why do you think this is happening? Each time that we type in an input field, the component re-renders to show the new value of that field. Even though we don’t need any new data from the backend, our component is fetching new data after every render! Use an empty dependency array to ensure that data is only fetched after our component’s first render.
//4. Let’s make one more improvement. Did you notice the buttons at the top of our app? We want our users to be able to choose between planning around daily weather forecasts and weekly weather forecasts. Clicking on these buttons currently doesn’t change anything. Let’s fix that! The server has two different endpoints called: /daily and /hourly. Let’s use the value of the forecastType state variable to determine which endpoint our effect should request data from. After making this change, our effect behaves differently based on the value of forecastType. You could say that how we use our effect depends on it! Add this variable to our dependency array so that the effect is called again, updating data appropriately, after re-renders where the user has selected a different forecast type.
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Forecast() {
  const [data, setData] = useState(null);
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  useEffect(() => {
    alert('Requested data from server...');
    get(forecastType).then((response) => {
      alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data);
    });
  }, [forecastType]);

  const handleChange = (itemId) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [itemId]: target.value
    }));

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.summary}</td>
                <td> {item.temp.avg}°F</td>
                <td>{item.precip}%</td>
                <td>
                  <input
                    value={notes[item.id] || ''}
                    onChange={handleChange(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


//RULES OF HOOKS
//There are two main rules to keep in mind when using Hooks:
//1. Only call Hooks at the top level.    When React builds the Virtual DOM, the library calls the functions that define our components over and over again as the user interacts with the user interface. React keeps track of the data and functions that we are managing with Hooks based on their order in the function component’s definition. For this reason, we always call our Hooks at the top level; we never call hooks inside of loops, conditions, or nested functions.
//2. Only call Hooks from React functions.
//Instead of confusing React with code like this:
if (userName !== '') {
  useEffect(() => {
    localStorage.setItem('savedUserName', userName);
  });
}
//We can accomplish the same goal while consistently calling our Hook every time:
useEffect(() => {
  if (userName !== '') {
    localStorage.setItem('savedUserName', userName);
  }
});
//NOTE: Hooks can only be used in React Functions. We’ve been working with useState() and useEffect() in function components, and this is the most common use. The only other place where Hooks can be used is within custom hooks. Custom Hooks are incredibly useful for organizing and reusing stateful logic between function components.
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category=${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }
  }, [items, selectedCategory]);

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
//SEPERATE HOOKS FOR SEPERATE EFFECT


//SEPARATE CONTAINER COMPONENTS FROM PRESENTATIONAL COMPONENTS
//As you continue building your React applications, you will soon realize that one component has too many responsibilities and is too difficult to maintain. In this lesson, you will learn a programming pattern that will help organize your React code. If a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn’t also have to render JSX. To help reduce the component’s complexity, we can break it down into multiple simpler components. How should you break it apart?
//The pattern we’ll learn about focuses on splitting complex components into stateful (container) and stateless (presentational) components, where stateful components manage complex state or logic and stateless components only render JSX. Also, we’ll take a look at how to apply this pattern to our example React app to break down a complex component into container and presentational components.

//CREATE CONTAINER COMPONENT
//Separating container components from presentational components is a popular React programming pattern. The functional part of a component (maintaining a state, making calculations based on props, etc.) can be separated into a container component, also known as a stateful component. This container component will be in charge of maintaining the state (creating and updating) and passing it on (we’ll see this later) to any component it renders through props.
//To start separating the logic from a component into a new container component, first copy the entire content of te component e.g GuineaPigs.js and create a new file in the containers folder and paste into it.

//CREATE PRESENTATIONAL COMPONENT               Now that we’ve created a container component and separated the logic, we can create a PRESENTATIONAL (or stateless) component. 
// IMPORTANT!! The presentational component’s ONLY job is to contain JSX.It should be an exported component and should not render itself because a presentational component will always get rendered by a container component. For example, say we have components called Presentational and Container. Presentational.js must export the component function (or class, when applicable):
function Presentational(/*...props*/) {             //We can use object destructuring to extract and pass in props. e.g  function Presentational({src, isFavorite}){}  This showws us how container components communicate with presentational components by passing their state through props
  //return
  // body of the component                      
}                    
export default Presentational;

//AND
                    
//Container Component e.g Container.js must import that component:
import { Presentational } from 'Presentational.js';
function Container() {
  // renders Presentational component
}      //It’s important to understand that although a presentational component doesn’t maintain state, it doesn’t mean it is not reactive. Recall that, like state, a change in props also triggers a potential change in the rendered JSX.


//Parent/Child and Sibling/Sibling Communication:     We’ve seen how container components communicate with presentational components by passing their state through props, but how do presentational components communicate changes to the container? In order for a presentation (stateless) component to communicate changes to a container (stateful) component, the container component must define and provide a way for the presentational component to communicate with it using a change handler function passed as a prop.
function Container() {
  const [isActive, setIsActive] = useState(false);                              
                                
  return (
    <>
      <Presentational active={isActive} toggle={setIsActive}/>
      <OtherPresentational active={isActive}/>
    </>
    );                          
  }
                        
function Presentational(props) {
  return (
    <h1>Engines are {props.active}</h1>
    <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
  );
}
                            
function OtherPresentational(props) {
  // render...
}
//In the example above, Container maintains the isActive state and passes setIsActive to Presentational through the toggle prop. When Presentational needs to communicate a change to the active prop, it uses the function passed to it through the toggle prop..  Using this pattern also indirectly results in communication between sibling components (components with a common parent), as shown in the example above. When Presentational communicates a change through toggle, it causes a state update in Container, which provides the updated value for isActive to both Presentational and OtherPresentational through the active prop.


//RENDER PRESENTATIONAL COMPONENTS IN CONTAINER COMPONENT
//We’ve learned how to separate logic in a container component and render JSX in a presentational component. The container component should now render the presentational components instead of rendering JSX.The container component’s state will be passed down as props to the presentation components to keep them reactive.
//E.g Inside the fragment, under GuineaPigsSlideShow, render the GuineaPigsForm with the favoriteGP prop with the value of the favoriteGP state constant, and set the prop onSelectFavorite equal to the favoriteChangeHandler function, and the onResetFavorite prop equal to resetFavoriteHandler function.   
                                    //Use presentational components in the return statement of the container component.
                                    //Pass state and functions used to change state as props to the rendered presentational components.
                                    //In this programming pattern, the container component does the work of figuring out what to display using state. The presentational component does the work of actually displaying the state through props.
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigsContainer() {
  const [currentGP, setCurrentGP] = useState(0);
	const [favoriteGP, setFavoriteGP] = useState(0);
	const src = GUINEAPATHS[currentGP];

  const favoriteChangeHandler = (event) => {
    setFavoriteGP(parseInt(event.target.value));
  }

  const resetFavoriteHandler = () => {
    setFavoriteGP(0);
  }

  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentGP(prevGP => {
				const nextGP = prevGP + 1;
				return nextGP % GUINEAPATHS.length;
			});
		}, 5000)
		return () => clearInterval(intervalId);
	}, []);


	return (
    <>
      <GuineaPigsSlideShow src={src} isFavorite={currentGP === favoriteGP}/>
      <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler}/>
    </>
  );
}

export default GuineaPigsContainer;



//REACT STYLES
//it can impact the user experience and help create a distinct identity for your application. As your application grows in complexity, the way you style becomes increasingly important. It’s essential to choose the right approach to keep your styles organized and manageable as well as your components in a way that makes them maintainable, scalable, and organized.
//Here, we will cover the basics of styling in React, including the different approaches and techniques you can use. We’ll start with a discussion of inline and object variable styling and explain the unique syntax rules that are specific to React. Next, we’ll dive into CSS modules and show you how to use them to make your styles modular and reusable.
//Take a brief look at how styling is done in the example provided in the code editor. Pay attention to how the stylesheets are organized, including the naming conventions, file structure, and how the styles are applied to the components.
import React from 'react';
import styles from './TitleScreen.module.css'

function TitleScreen() {
  return (
    <>
      <div className={styles.menuWrapper}>
        <div className={styles.menuTop}>
          <div>
            <h1>Bread First Search</h1>
          </div>
        </div>
        <div className={styles.menuBottom}>
          <p>
            Think you've got a great eye? Run this task!
          </p>
          <button className={styles.btn}>Play</button>
        </div>
      </div>          
    </>
  )
}

export default TitleScreen;

//INLINE STYLES AND STYLE OBJECT VARIABLES:         There are many different ways to use styles in React. This exercise is focused on two of them: inline styles and style object variables.
//An inline style is a style that’s written as an attribute, like this:
<h1 style={{ color: 'red' }}>Hello world</h1>           //Notice that it has double curly braces. The outer curly braces are to note that everything between should be read as JavaScript. The inner curly braces create a JavaScript object literal.
//STYLE OBJECT VARIABLES:
//However, using inline styles can quickly become messy if you want to apply more than just a few styles. An alternative is to store a style object in a variable and then inject that variable as the value of the style attribute. To do this, we can initialize an object with properties and values like so:
const darkMode = {
  color: 'white',
  background: 'black'
};
//Then, the object can be injected to style a component:
<h1 style={darkMode}>Hello world</h1>

//Example
import React from 'react';
function StyleDemo() {
  return (
    <>
      <h1 style={{background: 'lightgreen', color: 'darkgreen'}}>Style This With Inline Styling</h1>
      <h1 style={myStyle}>Style This With Style Object Variable</h1>
    </>
  );
}
const myStyle = {
  background: 'lightblue',
  color: 'darkblue'
};
export default StyleDemo

//STYLE SYNTAX AND RULES
//There are a few things to keep in mind when styling components with JSX.Just like how we reference CSS properties in the style object of the DOM in JavaScript, we write CSS property names using camelCase in React:
const styles = {
  marginTop: '20px',
  backgroundColor: 'green'
};

//This syntax comes from a small rule. A hyphen is a reserved operator in JavaScript. If we use background-color, the hyphen is then interpreted as a minus sign. Thus, we want to be consistent with the property names in the DOM style JavaScript object and use camel case. In regular JavaScript, style values are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you’d write '450px' or '20%'. If you write a style value as a number, then the unit 'px' is assumed. For example, if you want a font size of 30px, you can write:
{ fontSize: 30 }
{ fontSize: "2em" }             //Specifying the 'px' unit in a string will still work, although it’s redundant.


//MULTIPLE STYLESHEET
//While inline styles and style object variables are valid methods of styling in React, it can become organizationally difficult to keep track of the styles being applied as your application grows.
//One way to make styles modular, organized, and reusable is to create separate stylesheets for each component
//We can import a stylesheet by using the import keyword:
import './App.css'

//Using MODULES:          However, if we have multiple stylesheets with the same class names, the names can collide and create style conflicts.
//One way to prevent this is to use CSS modules. By importing it as a module, the styles will only be available for the component that imported the style. This is done automatically by creating unique class names for each module. This frees us from having to keep track of the class names we’ve used across stylesheets.
//To use CSS modules, we begin by naming our stylesheet in this format, where fileName should be replaced with the name of the component you’re styling:
fileName.module.css
portPage.module.css           //This indicates that the file should be processed as a CSS module.

//Then, it must be imported into the file containing our component.
import styles from './fileName.module.css'
import styles from './portPage.module.css'

//From this import, we can see that the styles object now holds the class selectors of fileName.module.css. To access the selectors, we use the dot notation like so:
<div className={styles.divStyle}></div>

//Example
import React from 'react';
import styles from './styles/AttentionGrabber.module.css'
function AttentionGrabber() {
  return (
    <>
      <h1 className={styles.h1}>Hi! Welcome to my portfolio.</h1>
      <p>I'm a developer who likes designing user-friendly websites.</p>
    </>
  )
}
export default AttentionGrabber

//REACT FORMS
//Input onChange: How forms are handled in React.
//In a regular HTML form, the state of the form is typically managed by the browser. It doesn’t update the server until the user hits submit. Things work a bit differently in React. In a React form, the state of the form can be managed by the component, and updates are triggered by the onChange event. When the user interacts with an input, such as entering or deleting any characters, the onChange event fires and updates the component state. This allows the component to immediately reflect any changes made by the user and update the view accordingly.
//To change our code so that it responds to any changes in the input field, start by listening for a “change” event on the <input> tag. Give <input> an onChange attribute. Set onChange‘s value equal to {functionname}.

//Write an Input Event Handler:  Define an event handler function that gets called whenever a user enters or deletes any character inside the <input> element. The event handler function will listen for change events.
import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput} value={userInput} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}

export default Input;

//CONTROLLED vs UNCONTROLLED
//There are two terms that will probably come up when you talk about React forms: controlled component and uncontrolled component. An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.
//Think of a typical <input type='text' /> element. It appears on the screen as a text box. If you need to know what text is currently in the box, then you can ask the <input> element, possibly with some code like this:
let input = document.querySelector('input[type="text"]');
let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
//The important thing here is that the <input> element keeps track of its own text. You can access what its text is at any time. The fact that <input> keeps track of information makes it an uncontrolled component. It maintains its own internal state by remembering data about itself.
//A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled. In React, when you give an <input> element a value attribute, then something strange happens: the <input> element becomes controlled. It stops using its internal storage. This is a more “React” way of doing things.
