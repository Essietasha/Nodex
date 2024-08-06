//React is a User Interface(UI) library. It is used for building user interfaces for web applications based on components.
//ReactJS is primarily a front-end JavaScript library used for building user interfaces (UI) in web applications. Build user interfaces out of individual pieces called components written in JavaScript.
//Features:
//JSX
//Components
//props
//Routes
//Hooks
//Effects
//States
//Animations
//Refs
//Classes etc.

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

  
  //ADDING ADDITIONAL PAGES IN YOUR PROJECT: Note, that can't be achieved with just react. Being a library, react doesn't have a way to add seperate pages. Hence, we will use the React Router which is a seperarte package, so we need to install it.
  //React Router Setup... On Terminal, run 'npm i react-router-dom' Enter. So, we'l put all the Routing stuff in the main App file, which is App.jsx.
  //How to Create Routes so you can have multiple pages.
  //Above the App.jsx, import the ffg at the top:
  import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
  import HomePagee from './Pages/HomePagee';
  import MainLayoutt from './layouts/MainLayoutt';
  const router = createBrowserRouter(
      createRoutesFromElements(
      <Route index element={<Homepagee/>} />)
    );
    const App = () => {
      return <RouterProvider router={router}/>;
    }; //   export default App
  
  //PAGES: Create a seperate folder called 'Pages' for the pages.Within, create a HomePage.jsx file.  Although they are still componnets, but should not put them in the same folder as the regular UI component. Now, import Homepage within App.jsx and render it within the routeprovider. Now, import all needed components, use within the return st into the Hompage and it'll be displayed on the screen.
  
  //LAYOUT: This is mostly used for Navbars and Footers i.e elements we always want to show on all pages. So, create a layout folder in the src folder. Note: you can have multiple layouts. To use layout, import it(MainLayout.jsx) into App.jsx //Now, create a Rarent Route to the rest of our routes i.e other routes where we want the navbar and footer to always display will be embedded in this parent route. Set the path as well. (Line 89 but extended below): So basically, any route put in there will use the layout.
  <Route path='/' element={<MainLayoutt />}>
        <Route index element={<HomePagee />} />
        <Route path='/jobs' element={<JobsPagee />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
  
  //HOW TO PASS STATE DATA FROM ONE COMPONENT TO ANOTHER: (https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=One%20of%20the%20main%20methods,child%20component%20as%20an%20attribute.)
  //One of the main methods to pass state to another component in React is via props. Props are read-only data that are passed from a parent component to a child component. 
  //NOTE: To pass state data as props, we need to define the state in the parent component and pass it to the child component as an attribute.
  //OR To pass a state variable to another component that is not related, you will need to lift the state up to a common ancestor component and then pass it down as a prop to the desired component.
  //OR For passing the data from the child component to the parent component, we have to create a callback function in the parent component and then pass the callback function to the child component as a prop. This callback function will retrieve the data from the child component.
  

  //LINKS: React works a little bit different. We don't use the anchor ref <a tags, we use the Link to tabs. Now, the href or to element here should go to the path defined in the router.. in this case... href="/jobs" as defined in the App.jsx router.
  //Another reason we don't use the a tag is because it does a complete page refresh which the link tag will avoid, making things very fast. So, in the Navbar, import Link: And change all a tags to Link tags and change the href to to=.
  import { Link } from 'react-router-dom';
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
  

  
  //class vs className
  //In HTML, it’s common to use class as an attribute name. In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
  
  //Self-Closing Tags: in JSX, you have to include the slash(/). If you write a self-closing tag in JSX and forget the slash, you will raise an error: <br /> <img src ="" />
  
  //JavaScript In Your JSX In Your JavaScript: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.
  //Curly Braces in JSX: Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers—it reads them as text, just like HTML. You can do this by wrapping your code in curly braces.
  (<h1>{2 + 3}</h1>)
  
  //Variables in JSX
  //When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file. That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.
  const name = 'Gerdo';
  // Access your variable inside of a JSX expression:
  const greeting = <p>Hello, {name}!</p>;
    
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
                      // (    <h1>
                      //       {if (purchase.complete) {
                      //           'Thank you for placing an order!'
                      //         } }
                      //     </h1>)
  
  //How can you write a conditional if you can’t inject an if statement into JSX?
  //One option is to write an if statement and not inject it into JSX. It will work if the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.
  if (coinToss() === "heads"){
      img = <img src={pics.kitty} />
    } else{
      img = <img src={pics.doggy} />
    }    
  
  //JSX Conditionals: The Ternary Operator. The ternary operator is a simplified conditional operator like if / else . Syntax: condition ? <expression if true> : <expression if false>.
  //Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy”. If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z.
  //Here’s how you might use the ternary operator in a JSX expression:
  const headline = (
      <h1>
        { age >= drinkingAge? 'Buy Drink' : 'Do Teen Stuff' }
      </h1>
  );
  
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
  
  
  //.map in JSX: The .map() array method comes up often in React. It’s good to get in the habit of using it alongside JSX. If you want to create a list of JSX elements, then using .map() is often the most efficient way. It can look odd at first:
  const containerr = document.getElementById('app');
  const rroot = createRoot(containerr);
  const mystrings = ['Home', 'Shop', 'About Me'];
  const listItems = mystrings.map(eachstring => <li>{eachstring}</li>);
  <ul>{listItems}</ul>
  
  rroot.render(<ul>{listItems}</ul>);
  
  
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
  
  //Name a Functional Component: When you declare a new functional component, you need to give that component a name; created with PascalCase! Due to how JSX tags are compiled, capitalization indicates that it is a React component rather than an HTML tag. If it begins with a lowercase letter, React will begin looking for a built-in component such as div and input instead and fail.
  
  
  //Importing and Exporting React Components: A React application typically has two core files: App.js and index.js. App.js file is the top level of your application, and index.js is the entry point.
  //Using and Rendering a Component
  //We can use it with an HTML-like syntax that resembles a self-closing tag:
  <MyComponent />   //If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:
                    <MyComponent>
                      <OtherComponent />
                    </MyComponent>
  
  //However, to render our component to the browser, we must rely on the .createRoot() and .render() methods from the react-dom library. This should be done in our entry point, index.js. First, we call the createRoot method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.
  //Breaking it down a bit further: document.getElementById('app') returns a DOM element from index.html. .createRoot() receives the DOM element as the first argument and creates a root for it. .createRoot() returns a reference to the root container on which you can call methods like .render(). After the root is created, all that’s left to do is call the .render() method on the returned root and display the React component like so:
  ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);
  
  
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
  
  //Putting Logic in a Function Component
  //A function component must have a return statement. However, that isn’t all that it can have. You can also put simple calculations that need to happen before returning your JSX element within the function component.
  function RandomNumber() {     //First, some logic that must happen before returning
    const myNum = Math.floor(Math.random() * 10 + 1);

    return <h1>{myNum}</h1>           //Next, a return statement using that logic: 
  }
  //IMPORTANT!!!!!!!!!!! In the above example, the line with the const myNum declaration will cause a syntax error, as it should come before the return.
  //More on Putting Logic in a Function Component
  import React from 'react';


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
  
  
  //Event Listener and Event Handlers in a Component:    Function components can include event handlers. With event handlers, we can run some code in response to interactions with the interface, such as clicking.
  function MyComponent(){
    function handleHover() {
      alert('Stop it.  Stop hovering.');
    }
    return <div onHover={handleHover}></div>;
  }//In the above example, the event handler is handleHover(). It is passed as a prop to the JSX element <div>. Understand that props are information passed to a JSX tag.
  //Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling.
  //There’s a small quirk you should watch out for. Take a look at this line again:
  return <div onHover={handleHover}></div>
  //The handleHover() function is passed without the parentheses we would typically see when calling a function. This is because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() would trigger the function immediately, so be careful!

  
  
  //COMPONENTS RENDER OTHER COMPONENTS
  //Components Interact: A React application can contain dozens, or even hundreds, of components. Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.
  
  //Returning Another Component: As we’ve seen before, each React component is responsible for one piece of the interface. As the application grows in complexity, components need to be able to interact with each other to support the features needed. So far, we’ve explored components that return JSX elements, such as:
         //We can have components interact with each other by passing information or even returning other components i.e
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
  
  
  //Apply a Component in a Render Function
  import Button from './Button'
  
  function App() {
    return <Button />;
  }

  //PROPS (https://www.freecodecamp.org/news/how-to-use-props-in-react/)
  //The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components. In ReactJS, the data can be passed from one component to another component using these props, similar to how the arguments are passed in a function.
  //We use props in React to pass data from one component to another (from a parent component to a child component(s)).
    
  //How to set DEFAULT values for props
  function LoginPage({name, age}) {
    return <h1>My name is {name}</h1> ;
  }
  LoginPage.defaultProps = {
    name: "Designer",
    age: "Sixteen"
  }
  //Pass data to props in the App component App.jsx
  <Route index element={<LoginPage title='Welcome'/>} />
  
  //PROPS: Information that gets passed from one component to another is known as props. Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.
  
  //Access a Component's props: Every component has something called props. A component’s props is an object. It holds information about that component. E.g type, value of a button element. To access a component’s props object, you can reference the props object and the dot notation for its properties. E.g props.name
  //Pass `props` to a Component:    To take advantage of props, we need to pass information to a React component.
  //How do we pass props/how to pass information to a component’s props object? By giving the component an attribute:
  <>
  <Greeting name="Jamel" />
  <SloganDisplay message="We're great!" />    //In the above example, we used the name message. You can use any name you want.
  //If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:
  <Greeting myInfo={["Astronaut", "Narek", "43"]} />
  //In this next example, we pass several pieces of information to <Greeting />. The values that aren’t strings are wrapped in curly braces:
  <Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />
  </>  

  function App() {
    return <PropsDisplayer myProp="Hello" />;
  }  
  
  //Render a Component's props:   Props allow us to customize the component by passing it information.
  //You will often want a component to display the information that you pass. The most common use of props is to pass information to a component from a different component. NOTE: To make sure that a function component can use the props object, define your function component with props as the parameter:
  function Button(props) {
    return <button>{props.displayText}</button>;
  }         //n the example, props is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (object.propertyName).
  //access
  return <h1>{props.firstName}</h1>;
  //Object Destructuring: Alternatively, since props is an object, you can also use destructuring syntax like so:
  function Button({displayText}) {
    return <button>{displayText}</button>;
  }
  
  //PROPS: Smart Watch App  //Display like a flexbox or grid using css
  //Product.js
  import React from 'react';
  
  //Object destructuring: function Product({price, rating, image}) {}
  function Product(props) {
    return (
      <div>
        <li>
          <img src={props.image} alt="" />
          <h3>{props.price}</h3>
          <p>{props.rating}</p>
        </li>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <h3>{props.rating}</h3>
      </div>       
    );
  }
  
  //App.js
  import React from 'react';
  import Product from './Product'
  
  function App() {
    return (<>
    <ul>
    <Product name="Apple Watch" price = {399} rating = "4.8/5.0" image={myImages}/>;
    <Product name="Google Watch" price = {299} rating = "4.7/5.0" image={myImages}/>;
    <Product name="Zara Watch" price = {199} rating = "4.6/5.0" image={myImages}/>;
    </ul>
    </>)
  }
  //Props in React travel in a one-way direction, from the top to bottom, parent to child. Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.
  //Render Different UI Based on props:     You can do more with props than just display them. You can also use props to make decisions.


   //PROPS.children Children props contains whichever contents between a component opening and closing tags
    //Every component’s props object has a property named children. So far, all of the components that you’ve seen have been self-closing tags, e.g <MyFunctionComponent />. They don’t have to be! You could write <MyFunctionComponent></MyFunctionComponent>, and it would still work props.children will return everything in between a component’s opening and closing JSX tags. E.g <MyFunctionComponent> <MyFunctionComponent/> By using props.children, we can separate the outer component, MyFunctionComponent in this case, from the content, which makes it flexible and reusable.    
    function BigButton(props) {
      return <button>{props.children}</button>;
      // return <li> <button>{props.children}</button> </li>;
    }  export default BigButton;

    import LilButton  from './LilButton';
    <BigButton>
      <LilButton />
    </BigButton>
    </> //Not needed line

    //OR 
    <BigButton>
    <div>Submit</div>
    {/* <p>Good Day</p> */}
  </BigButton>
  </> //Not needed line
    
  //If a component has more than one child between its JSX tags, then props.children will return those children in an array. However, if a component has only one child, then props.children will return the single child, not wrapped in an array.

  //Attribute props:
  function BigButton({label}) {
    return <button>{label}</button>;
  }

  import BigButton  from './BigButton';
  function Appp(){
    <BigButton label='Submit'></BigButton>
  }


  //Put an Event Handler in a Function Component:     You can, and often will, pass functions as props. It is especially common to pass event handler functions.
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



  //INTERACTING WITH THE DOM IN REACT
  //In react, add event listeners to elements by adding special attribute to those elements; also called special props. E.g onClick={handleClick or clickHandler} The value provided within these curly braces should be a function; defined inside the component function.



  //React Hooks
  //STATE:  State generally refers to data or properties that need to be tracking in an application. The state is a built-in React object that is used to contain data or information about the component.   //State is like a little storage box. It holds information that can change over time.
              //The state object holds data in a component that is expected to change over time. It is created and maintained by the component itself, and when it changes, the component re-renders; rememeber componenets only render once intially.
  //HOOKS: are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.
  //Hooks allow function components to have access to state and other React features.
  //Hooks are functions that let developers "hook into" the React state and lifecycle methods from a functional component.
  //React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef().

  //useState is a special function in React that helps you create and manage that storage box. It gives you a place to store a value and a way to change that value.
  //When we call the useState() function, it returns an array with two values:
                                                  //1. The current state: The current value of this state.
                                                  //2. The state setter: A function that we can use to update the value of this state.
  //Steps:
  //1. Import useState 
  import React, { useState } from "react";

  //2. Initialize State: Next, you create a storage box with useState. You give it an initial value (the value it starts with). This is like saying, "I have a counter, and it starts at 0."
       //const [count, setCount] = useState(0);
            //count - is the current value in your storage box.
            //setCount - is a function you can use to change the value in the storage box.
            //useState(0) - tells React that count starts at 0.
  //3. Using State: You can now use count to show the current value and setCount to update it.
      const [count, setCount] = useState(0);
        return (
          <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                  Click me
              </button>
          </div>
      );

      //Sample 2
    
      function Toggle() {
        const [toggle, setToggle] = useState();
      
        return (
          <div>
            <p>The toggle is {toggle}</p>
            <button onClick={() => setToggle("On")}>On</button>
            <button onClick={() => setToggle("Off")}>Off</button>
          </div>
        );
      }     //Notice how the state setter function, setToggle(), is called by our onClick event listeners. To update the value of toggle and re-render this component with the new value, all we need to do is call the setToggle() function with the next state value as an argument. i.e.       <button onClick={() => setToggle("Off")}>Off</button>


          //Sample 3
    
     function ColorPicker() {
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


  //Multiple State Variables
  //You can use useState multiple times in the same component to manage different pieces of state independently.
    function Form() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
    
      return (
        <form>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
          />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
          />
        </form>
      );
    }
