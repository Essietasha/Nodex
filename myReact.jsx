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
  //Change port in vite.config file by adding  server: {port: 3000,}

//Install Tailwind: (https://tailwindcss.com/docs/installation) Run on a different terminal-bash and NOTE change directory into the actual poject first ..cd project-name

//Install React icons: on the bash terminal... Run 'npm i react-icons' (https://react-icons.github.io/react-icons/)
  import { FaMapMarker } from 'react-icons/fa';
  <FaMapMarker className='inline-mb mr1'/>

//ROUTER Package - to have multiple pages
  //Install React Router : on the bash terminal... Run 'npm i react-router-dom'

//Install React Spinners : (https://www.npmjs.com/package/react-spinners)  (https://www.davidhu.io/react-spinners/) (https://github.com/davidhu2000/react-spinners) React Spinner: a package thst allow display spinner. Run 'npm i react-spinners'

//NPM: Node package manager (npm) is a package manager and a software register but it's also a place where developers can find, build and manage code packages.
  //It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. 

//REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
  //Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then put the <ToastContainer anywhere within the container/>return./>
  //To use this in any componnet, simply import { toast } from 'react-toastify'; and call it using toast.success e.g toast.success('Job Deleted Successfully');

//Ctrl + c to stop running the React app in your command line.

//RUN AN EXISTING REACT FOLDER
  //Note: DO NOT RUN 'npm create vite or npm install' except a new user who hasn't used react before or a third party openinig a zipped react file!
  //Thus, to run an existing react folder. Open folder in VSCode.  Same day && Go to terminal, Run npm run dev. New day && Run 'cd react-app' 'npm run dev'.


//REACT ROUTING
  //Single-Page Application Routing ||client-side roting (Multiple pages in single-page app)
  //ADDING ADDITIONAL PAGES IN YOUR PROJECT: Note, that can't be achieved with just react. Being a library, react doesn't have a way to add seperate pages. Hence, we will use the React Router which is a seperarte package, so we need to install it.
  //React Router Setup... On Terminal, run 'npm i react-router-dom' Enter. So, we'l put all the Routing stuff in the main App file, which is App.jsx.
  //How to Create Routes so you can have multiple pages.
  //Above the App.jsx, import the ffg at the top:
  import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
  import HomePagee from './Pages/HomePagee';
  import MainLayoutt from './layouts/MainLayoutt';

  const router = createBrowserRouter(createRoutesFromElements(
      <Route index element={<Homepagee/>} />)
    );

    const App = () => {
      return <RouterProvider router={router}/>;
    }; //   export default App
  
  //PAGES: Create a seperate folder called 'Pages' for the pages.Within, create a HomePage.jsx file.  Although they are still componnets, but should not put them in the same folder as the regular UI component. Now, import Homepage within App.jsx and render it within the routeprovider. Now, import all needed components, use within the return st into the Hompage and it'll be displayed on the screen.
  //index: Default route that should be loaded for a component |Homepage| if the parent route is active.
  //LAYOUT: This is mostly used for Navbars and Footers i.e elements we always want to show on all pages. So, create a layout folder in the src folder. Note: you can have multiple layouts. To use layout, import it(MainLayout.jsx) into App.jsx //Now, create a Rarent Route to the rest of our routes i.e other routes where we want the navbar and footer to always display will be embedded in this parent route. Set the path as well. (Line 89 but extended below): So basically, any route put in there will use the layout.  
  const myApp = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/jobs' element={<JobsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
    )
    );
    return <RouterProvider router={router}/>;
  }
  export default myApp;
  //Object Based Approach to Routes
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  const miApp= () => {
    const router = createBrowserRouter([
      {path: '/', element: <HomePagee />},
      {path: '/products', element: <ProductsPage />}
    ]);
    return <RouterProvider router={router}/>;
  }
  export default miApp;
  //Object Based Approach to Routes with Layout. |Error Element
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  const miAp= () => {
    const router = createBrowserRouter([
      {
        path: '/', 
        element: <MainLayout />, 
        children:[
          {path: '/', element: <HomePagee />},
          {path: '/products', element: <ProductsPage />, errorElement: <NotFoundPage />}
        ],
      }, 
    ]);
    return <RouterProvider router={router}/>;
  }
  export default miAp;
    //MainLayout Component:
      import { Outlet } from 'react-router-dom'
      import Navbar from '../components/Navbar';
      import{ ToastContainer } from 'react-toastify';
      import 'react-toastify/dist/ReactToastify.css';

      const MainLayout = () => {
        return (
          <>
          <Navbar/>
          <Outlet/>
          <ToastContainer/>
          </>
        )
      };
      export default MainLayout;

  //LINKS: React works a little bit different. We don't use the anchor ref <a tags, we use the Link to tabs. Now, the href or to element here should go to the path defined in the router.. in this case... href="/jobs" as defined in the App.jsx router.
    //Another reason we don't use the a tag is because it does a complete page refresh which the link tag will avoid, making things very fast. So, in the Navbar, import Link: And change all a tags to Link tags and change the href to to=.
    import { Link } from 'react-router-dom';
      //NAVLink: Works the same way with Link tag except that it adds a class to the active link. Now we can change all the link tags in the navbar to Navlink as well as the import name above. 
      //Active Link list a:hover, list a:active{color: red, text-decoration: underline;}
        //Using NavLink -  Works the same way with Link tag but that it adds a class to the active link.
        //Navlink Active end prop: Add this if you want the home(/) button to be inactive if you are on other links that starts with the similar /path. The end prop ensures the link is active only when the URL is exactly the same as the to path. Without it, the link could be active for other URLs that start with the same path /. With end: The link is active only on /. Without end: The link is active on /about, /contact, etc., because they all start with /.
        <>
        <Link to="/">Home</Link>
        <NavLink to="/" className={({ isActive }) => isActive ? 'bgred' : undefined } end> Home </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'bgred' : undefined }> Products </NavLink>
        </>
      //To manually add a classLink to an active link or button, create a function above the return st within desired component and set className of the Navlink within the return st to the function. Check Navbar.jsx for ref.
        const linkClas = ({ isActive }) => isActive ? 'bg-red' : 'bg-white';
        <NavLink className={ linkClas }/>;

    //ADDING LINKS FOR DYNAMIC ROUTES
    const PRODUCT = [
      {id: 1, title: 'Product1'},
      {id: 2, title: 'Product2'},
      {id: 3, title: 'Product3'}
    ];    
    const myProd = () => {
      return (
        <>
        <h2>Products Page</h2>
        <ul>
          {PRODUCT.map(product => (<li key={product.id}> 
             <Link to={`/product/${product.id}`}> {product.title} </Link>
             </li>))}
        </ul>
        </>
      )
    }
    
    export default myProd;

    //UseNavigate: |REDIRECT|
      //Used after submission, to redirect user to the job page, use useNavigate hook from raect-router-dom. To use this useNavigate, first initialize.. const navigate = useNavigate();
      //Then, simply return navigate and whr to redirect to. e.g navigate('/jobs'); Or return navigate('/jobs');
    
    //useParams Hook: is a tool in React that lets you get information or dynamic values from the URL. The URL here is the dynamic part of a route you define in your React app.
      //Display different DATA FOR DIFFERENT ITEMS/PRODUCTS in SAME component; make the router path dynamic by adding a parameter(placeholder). To do this, in the path, a column and an identifier.
        <Route path="/user/:id" element={<UserProfile />} />
      //In the above example, the :id part is a dynamic parameter, meaning it can change. So, if the URL is: /user/5, the id will be 5 .../user/123, the id will be 123
      //To get the id of a data - use Params Hooks from react router dom. Import useParams... Then destructure (based on the set in your route path) from useParams.  useParams returnsa an object which contains the dynamic path segment defined in the route definition.
      //useParams usually work with the id details of the data or list items fetched. For example, in places where we are not geting the id directly nor through props. 
      import { useParams } from 'react';
      const params = useParams();
      <p>{params.id}</p>
      //Destructure
      const { id } = useParams();
      const { eventId } = useParams();
      <h1>User ID: {id}</h1>;
      <p>Event Details: {eventId}</p>
      </>

  //PATH: Absolute vs Relative
    //Absolute: Always start with a slash(/); always added after the domain name;  path loaded independently
    <Route path="/" element={<Users/>} />;
    <Link to="/products"></Link>;
    <Route path="/user/:id" element={<Users/>} />;
    //Relative: path appended to the initial url in the browser i.e added after the currently active path. Relative to a parent route/path. Relative prop-controls the beahaviour of routes.
    <Link to="products">P1</Link>;
    <Link to={product.id}>P2</Link>;
    <Link to=".." relative="path">Back</Link>; //Go up one/previouspath level depending on: relative-path or route?

  //Data Loader and useDataLoader | Fetching with React router: Provides an extra property that can be added to route definitions - loader property - which wants a function as a value. This function will be triggered and executed by react router whenever one is about to visit its/the route, just before the route gets rendered. Can fetch and load data within this loader function.
    //Data Loader: Enables rendering a component with fetched data, not fetching data after it has been rendered. Create a function within a file and then export and use it in other areas i.e as a global state and use in other componenets.
    //useDataLoader: To get access to the data returned by the loader function, i,port useLoaderData Hook to get access to the closest loader data. Call useLoaderData, save to a const variable. Thus const variable now provides the returned data value from the loader function. Can then use this const var as needed.
    //Can also use useLoaderData within other components within or on the same level (or below but higher level)as the page component directly without having to destructure. Simply call useLoader data, assign to var and use.
      //NOTE: Where should loaderData be stored? Within the main page component where it's needed for itself and other components. There, below the main page component function, define/create the loaderDat function. Then, export it. Import it in the App.jsx next to the actual/main page in the import statemnets above, and set it as a value to the page route loader property.
    <Route index element={<EventsPage />} loader={loaderData}/>;
    //use
    import { useLoaderData } from 'react-router-dom';
    const EventsPage = () => {

      const events = useLoaderData();
      return (
         <EventsList events={events} />
      )
    };

  //useNavigation - To get some feedback on data loading. Import useNavigation. Call and assign to a const. Dynamically update jsx with it. e.g {navigationConst.state === 'loading' && <p>Loading...</p>}
    
//HOW TO PASS STATE DATA FROM ONE COMPONENT TO ANOTHER: (https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=One%20of%20the%20main%20methods,child%20component%20as%20an%20attribute.)
  //One of the main methods to pass state to another component in React is via props. Props are read-only data that are passed from a parent component to a child component. 
  //NOTE: To pass state data as props, we need to define the state in the parent component and pass it to the child component as an attribute.
  //OR To pass a state variable to another component that is not related, you will need to lift the state up to a common ancestor component and then pass it down as a prop to the desired component.
  //OR For passing the data from the child component to the parent component, we have to create a callback function in the parent component and then pass the callback function to the child component as a prop. This callback function will retrieve the data from the child component.
  

//FETCHING DATA FROM BACKEND rather than just bringing in a json file..
  //JSON SERVER: Use json Server: A libray that lets you create a mock API and you can send get post put patch delete request so you can create CRUD 'Create, Read, Update, Delete' functionality. All you have to do is create a json file and you can put any type of resource you want in it.
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
  
//DATA LOADER from React Router: With a data loader, we basically create a function within a file and then export and use it in other areas i.e as a global state and use in other componenets.
  
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
  
//MAKE REQUEST TO THE BACK-END; EDIT, DELETE, ADD, SUBMIT..
  //The POST (Add)method sends data to the server which may modify the server's state i.e that is designed to send loads of data to a server from a specified resource. POST is used to send data to a server to create/update a resource. It's best to have the post request in the main app file; the edit, delete and submit. 
  
  //UseNavigate: |REDIRECT|
  //After submission, to redirect user to the job page, use useNavigate hook from raect-router-dom. To use this useNavigate, first initialize it as a var and set to useNavigate() below the state..Then, simply return navigate and whr to redirect to. e.g return navigate('/jobs');
  //Since the addJobSubmit is being passed in as a prop, in the main app.jsx route within the AppJobPage comp, insert the addJobSubmit with value set to a function (addjob) and then create the 'addjob' function above the routes and it will take in the newJob
  
  //GET REQUESTS: GET requests are intended to retrieve data from a server and do not modify the server's state.

  //PUT REQUEST(EDIT): PUT method is used to create a new resource or replace a resource.

  //DELETE REQUEST
  //(This 'deleteJob' request function will be passed into the single jobPage router below as a prop and to the JobPage component as a prop as well. And on the button, run a function onClick set to another function called onDeleteClick and pass in the job.id.. JoPage line 101). 
  //Write the onDeleteClick function above in the Jobpage, pass in the 'jobId', add a confirmation to the delete using window.confirm JobPage.jsx line 12...
  //Actual delete Request to the Api ...App.jsx line 29
  
//REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
  //Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then put the <ToastContainer anywhere within the container/>return./>
  //To use this in any componnet, simply import { tosst } from 'react-toastify'; and call it using toast.success. error JobPage line 20... e.g toast.success('Job Deleted Successfully');  
  
  
//DEPLOYMENT: Production version of the site
  //Close the development/local server.. Then, run 'npm run build' ..This will create a new folder called dist. Dist is the production build.
  //Can run this with vite. Now run 'npm run preview'..Now, the dist folder is what will be deployed. However, the jobs will not be shown in deployement as we are using a local json server. To correct this, create an API with express or....
  
//APPLICATION STRUCTURE:
    // index Html: is the single page since our applicatio is a single page application
    // The src folder is our react application
    // main.jsx file is the entry point
     
  
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

//Self-Closing Tags: in JSX, you have to include the slash(/). If you write a self-closing tag in JSX and forget the slash, you will raise an error: <br /> <img src ="" />


  
//class vs className
  //In HTML, it’s common to use class as an attribute name. In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
  
  
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



// STYLING REACT APPS {CSS}:   // - Static and Dynamic(Conditional) Styling

  //1. Styling with Vanilla - Css files; CONS: Styles are not scoped to specific component. Solution: Inline Styling
  //2. Inline styling CSS - uses curly braces
  <> <p style={{
      color: 'red'}}>
    </p>

    <h2 style={{backgroundColor: isSelected ? 'green' : 'gray' }}>Hello React Developer</h2>
  </>

  //3. Adding a className Conditionally, ternary approach and always define an else st using undefined if you don't have one:
  </> 
  <>
  <p className={ isActive && 'bg-red'  }/>
  <p className={ isActive => isActive ? 'bg-red' : undefined }/>
  <p className={`p-6 ${isActive ? 'bg-red' : ''}`}/>
  </>

  //4. Scoping styles with CSS Modules: Allows one to write vanilla css styles which are scoped to component files, making classNames unique per file for component files and component. i.e classes will be transformed by build process and unique classes will be provided. CSS module is not a default feature, rather it has to be implemented.
  //Name Files: [Header.module.css] as components
  //Importing: [import classes from './Header.module.css]
    </> <p className={classes.bigParagrapgh}></p>
    </> <p className={`p-6 ${classes.bigParagrapgh}`}></p>
    </> <p className={isActive ? classes.bigParagrapgh : 'bg'}></p>

  //5. CSS-in-JS styling with 'styled components' package
    //Install: In terminal: 'npm install styled-components'
    //Import: iomport { styled } from 'styled-components';
    styled.input`
    display: flex;
    gap: 1.5rem;
    `;
  //Now you can assign this to a variable and create as a component to use it.
  //Accepts props in a unique way Plus Conditionals; set props in the created styled component, now accept prop in the style definition tag and set it conditionally and dynamically using a function.
  //Using/prefixing the Dollar sign to props - so they don't clash with built-in props.
  //Handling Children tags styles: Ampersand & and white space. To include other classes to a parent tag e.g div, header, p or any other tag
  //Handling media queries with styled components: Ampersand &
  //Psuedo-selectors with styled components
    const ControlDiv =  styled.div`
    display: flex;
    gap: 1.5rem;
    margin: 2rem;
    color: ${({$invalid}) => $invalid ? '#fffeee' : 'ffffff' };

    &:hover{
      color: grey;
    };

    & img {
      object-fit: contain;
      width: 8rem;
    }

    & h1 {
      font-size: 1.5rem;
      font-family: 'Pacifico', cursive;
    }

    @media (min-width: 768px) {
      & {
        margin-bottom: 1rem;
      }

      & h1 {
        font-size: 2.25rem;
      }
    }
    `;
    <ControlDiv $invalid={emailValid}>
      <p>My Text</p>
    </ControlDiv>


  //6.Tailwind CSS - Framework - Applying predefined CSS rules - Utility classes - Follow directives(https://tailwindcss.com/docs/guides/vite)
  //On terminal development - Ctrl C - Quit running project
  //On bash - cd into project directory - Follow all directives from tailwind.css website(https://tailwindcss.com/docs/guides/vite)
  //npm run dev
    //Customizing Tailwind
      //1.Add custom classes  beneath the definded tailwind classes-index.css. Foe example body{margin:0} etc
      //2.Extend in tailwind.config.js file - To add more custom classes and then use these classes as named/defined in our project. Foe example create utility classes to use custom fonts.
      //3.Media queries  <h1 className='md:text-4xl' >ReactArt</h1>
      //4.Pseudo selectors <h1 className='hover:text-4xl focus:bg-amber-500' >ReactArt</h1>
    
  //DYNAMIC/CONDITIONAL STYLES WITH Tailwind - Above the component return statement.
    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300';
    if(invalid){
      labelClasses = ' text-red-300 block mb-2 text-xs font-bold tracking-wide uppercase'
    }
    <label className={labelClasses}>React is Beautiful</label>

    //Or set a base styling; mindful of white space insertions
    let labelClass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow";
    
    if(invalid){
      labelClass += ' text-stone-400';
      inputClass += ' text-red-500 bg-stone-100';
    } else {
      labelClass += ' text-stone-300';
      inputClass += ' text-gray-700 bg-stone-300';
    }
    <>
    <label className={labelClass}>React is Beautiful</label>
    <input className={inputClass} placeholder='Enter full name'></input>
    </>

//RE-USABLE TAG COMPONENTS -  You can create reusable components(tag components - label, input, div etc.) with defined classes and then export/import them to where desired and even receive/send props in them.
  //BUILDING RE-USABLE BUTTON COMPONENT with Custom Classes
    const Button = ({ children, textOnly, className, ...props }) => {
      let cssClasses = textOnly ? 'text-button' : 'button';
      cssClasses += ' ' + className;

    return (
      <button className={cssClasses} {...props}>  {children}  </button>
    )};     
    <Button textOnly>Add to Cart</Button> 
    
//INTERACTING WITH THE DOM IN REACT   //Event Listener and Event Handlers in a Component:
//In react, add event listeners to elements by adding special attribute to those elements; also called special props. E.g onClick={handleClick or clickHandler} The value provided within these curly braces should be a function; defined inside the component function.
//JSX elements can have event listeners, just like HTML elements can. You create an event listener by giving a JSX element a special attribute. Here’s an example:
//An event listener attribute’s value should be a function and it would only work if the function is a valid function that had been defined elsewhere.
  function clickAlert() {
      alert('You clicked this image!');
  } 
  <img onClick={clickAlert} /> 
  //Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.
  
  //Function components can include event handlers. With event handlers, we can run some code in response to interactions with the interface, such as clicking.
  function MyComponent(){
    function handleHover() {
      alert('Stop it.  Stop hovering.');
    }
    return <div onHover={handleHover}></div>;
  }//In the above example, the event handler is handleHover(). It is passed as a prop to the JSX element <div>. Understand that props are information passed to a JSX tag.
  //Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling.
  //The handleHover() function is passed without the parentheses we would typically see when calling a function. This is because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() would trigger the function immediately, so be careful!


  
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
        { age >= drinkingAge? 'Buy Drink' : 'Do Teen Stuff' };
        {loggedIn ? <h1>Hello Member</h1> : <h2>Hello Guest</h2>};
        { loggedIn && <h1>Hello Member</h1>}
      </h1>
  );
  
  //Return Statement with conditionals - with this line of code, the code beneath(comp and jsx) will not be executed if this condition isn't met.
  if(results.length === 0){
    return <p>Please eneter a valid number</p>
  }


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

//Mapping through an array and returning a JSX file; use () after the arrow function not {} / Creating a List Item
    const names = ['Tom', 'Brad', 'Jesse'];
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>

  //Mapping / Looping through an array with the map method - will take in a function and return a JSX file: 1:04
  import jobs from '../jobs.json';
  <div>
    {jobs.map((job) => (
      <div key={job.id}>
        <h2>{ job.title }</h2>
        <h4>{ job.company.name }</h4>
        <h6>{ job.description }</h6>
        <Link to={`/job/${job.id}`}>Read More</Link>
      </div>
    ))}
  </div>
  
  
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
    function MyComponent() {
      return <h1>Hello world</h1>;
    }
  ReactDOM.createRoot(
  document.getElementById('app')
  ).render(<MyComponent />); 
  //Function Component: Using JavaScript functions to define a new React component. In the past, React components were defined using Javascript classes. But since the introduction of Hooks, function components have become the standard in modern React applications.
  //After we define our functional component, we can use it to create as many instances of that component as we want.
  function MyComponent() {
    return <h1>Hello, I'm a functional React Component!</h1>;
  }  


  //Importing and Exporting React Components: A React application typically has two core files: App.js and index.js. App.js file is the top level of your application, and index.js is the entry point.
  //Using and Rendering a Component
  //We can use it with an HTML-like syntax that resembles a self-closing tag: //If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:       
  <><MyComponent />   
        <MyComponent>
          <OtherComponent />
        </MyComponent>
        </>
  //However, to render our component to the browser, we must rely on the .createRoot() and .render() methods from the react-dom library. This should be done in our entry point, index.js. First, we call the createRoot method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.
  //Breaking it down a bit further: document.getElementById('app') returns a DOM element from index.html. .createRoot() receives the DOM element as the first argument and creates a root for it. .createRoot() returns a reference to the root container on which you can call methods like .render(). After the root is created, all that’s left to do is call the .render() method on the returned root and display the React component like so:
  ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);


  //Use a Variable Attribute in a Component
  import React, { useImperativeHandle } from 'react';

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
        <PurchaseButton />
      </div>
    );
  }


  //Apply a Component in a Render Function
  import Button from './Button'

  function App() {
    return <Button />;
  }

//PROPS
  //We use props in React to pass data from one component to another (from a parent component to a child component(s)).
  //Informations that gets passed from one component to another is known as props. Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.    //AND, PROPS can be used in the child component alone without having to use it in the parent component.
  //Props in React travel in a one-way direction, from the top to bottom, parent to child. Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

  //PARENT/CHILD: In React, when passing props, the parent component is the one that provides or "passes" the props, and the child component is the one that receives or "consumes" the props.
    //Parent Component: This is the component that owns or contains another component. It passes data to the child component through props.
    // Child Component: This is the component that is nested inside the parent component and receives the data via props.
    //Setting Props on Parent Component - Accepting and destructuring these props in Child Component.
      //To collect or spread other props: {...props}
  //How to set DEFAULT values for props
  function LoginPage({name, age}) {
    return <h1>My name is {name}</h1> ;
  }
  LoginPage.defaultProps = {
    name: "Designer",
    age: "Sixteen"
  }
      
  //Access a Component's props: Every component has something called props. A component’s props is an object. It holds information about that component. E.g type, value of a button element. To access a component’s props object, you can reference the props object and the dot notation for its properties. E.g props.name
  //Pass props to a Component:  Pass information to a component’s props object by giving the component an attribute:
  // To pass information that isn’t a string, then wrap that information in curly braces. Even arrays as seen below. 
  <>
  <Greeting name="Jamal" /> </>
  <SloganDisplay message="We're great!" /> </>
  <Greeting myInfo={["Astronaut", "Narek", "43"]} /> </>
  <Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />

    

  //RENDER A COMPONENT'S PROPS:
  //You will often want a component to display the information that you pass. The most common use of props is to pass information to a component from a different component. NOTE: To make sure that a function component can use the props object, define your function component with props as the parameter:
  function Button(props) {
    return <button>{props.displayText}</button>;
  }         //in the example, props is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (object.propertyName).

  //Object Destructuring: Alternatively, since props is an object, you can also use destructuring syntax like so:
  function Button({displayText}) {
    return <button>{displayText}</button>;
  }

  //Smart Watch App - Product.js
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

    
  //ATTRIBUTE PROPS:
    function BigButton({label}) {
      return <button>{label}</button>;
    }
    import BigButton  from './BigButton';
    function Appp(){
      <BigButton label='Submit'></BigButton>
    }


  //PROPS.children Children props contains whichever contents between a component opening and closing tags
  //Every component’s props object has a property named children. So far, all of the components that you’ve seen have been self-closing tags, e.g <MyFunctionComponent />. They don’t have to be! You could write <MyFunctionComponent></MyFunctionComponent>, and it would still work props.children will return everything in between a component’s opening and closing JSX tags. E.g <MyFunctionComponent> <MyFunctionComponent/> By using props.children, we can separate the outer component, MyFunctionComponent in this case, from the content, which makes it flexible and reusable.  
  //If a component has more than one child between its JSX tags, then props.children will return those children in an array. However, if a component has only one child, then props.children will return the single child, not wrapped in an array.
  function BigButton(props) {
    return <button>{props.children}</button>;
  }
  import LilButton  from './LilButton';
  <>
  <BigButton>
    <LilButton />
  </BigButton>

  //OR 
  <BigButton>
  <div>Submit</div>
  </BigButton>
  </>

  //More on props.children and adding classes via props
  const TabButton = ({children, onSelect, isSelected}) => {
    return (
      <li><button  className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button></li>
    )
  }
  //In the other component
  <>
  <LogPage />
  <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} >Components</TabButton>
  <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
  <MarketPage />
  </>


  //More on Using PROPS TO PASS CLASS NAMES and can change it as desired
  const Tab = ({children, bigFont = 'big-font-red'}) => {
    return (
      <li><button className={`${bigFont} p-6 gridCont`}>{children}</button></li>
    )
  };
  //Can change, edit or update the clas name in the other component as desired
  <LogPage />
  <Tab>Components</Tab>
  <Tab bigFont='big-font-blue'>JSX</Tab>
  <MarketPage />
  </>


  //Moree on Using PROPS TO PASS CLASS NAMES and can change it as desired
  //Using NavLink -  Works the same way with Link tag but that it adds a class to the active link.
  <NavLink className={({ isActive }) => isActive ? 'bg-red' : 'bg-white' }/>

  //OR use a variable
  const linkClass = ({ isActive }) => isActive ? 'bg-red' : 'bg-white';
  <NavLink className={ linkClass }/>;

  //States (data) can be passed in as props.
  //Functions can be passed as props to from one component and be called in another component. i.e Functions can be created within a component and invoked in another component via props.

  //PROP DRILING: Passing shared data(props) through multiple layers of components via props.


//React Hooks
  //STATE:  State generally refers to data or properties that need to be tracking in an application. The state is a built-in React object that is used to contain data or information about the component.   //State is like a little storage box. It holds information that can change over time.
              //The state object holds data in a component that is expected to change over time. It is created and maintained by the component itself, and when it changes, the component re-renders; rememeber componenets only render once intially. Update UI;
              //Two Types: Component State. App Level or Global State.
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
            //setCount - is a function you can use to update the state i.e the initial value which is count.
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

  //UPDATING useSTATE BASED ON PREVIOUS VALUE OF THE STATE - YOU should pass a FUNCTION to the state updating function instead of the new state value you want to have. Like below:
  //1. This doesn't gets the immediate available state
  setIsEditing(!isEditing);
  //2. This also doesn't gets the immediate available state
  setIsEditing(isEditing ? false : true);
  //3. This gets the latest available state: i.e runs a function and set the state to opposite of what it was using the Previous state value
  setIsEditing((editing) => !editing);
  setIsEditing((prevState) => !prevState);


  //useState in Array and Object: (Reference values) - Create a copy of the old state i.e a new object or new array and then change or update that copy.
  function handleGameClick(eachRowIndex, colIndex){
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map((updatedPreArray => [...updatedPreArray]))];
        updatedBoard[eachRowIndex][colIndex] = 'X';
        return updatedBoard;
    }); };



  //Display dynamic button content based on state
    const Job = () => {
      const [showDescription, setShowDescription] = useState(false);
      return (
        <li><button>{ showDescription ? 'Less' : 'More' }</button></li>
      )
    }
  //Setting/Getting NAME Values -        (UseRef can also be used for the below)
  const Player = () => {
    const [userName, setUserName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setUserName(event.target.value);     }

    function handleClick() {
        setSubmitted(true);}
    
  return (
    <section id="player">
        <h2>Welcome { submitted ? userName : 'User'}</h2>
        <p>
            <input type="text" value={userName} onChange={handleChange}/>
            <button onClick={handleClick}>Set Name</button>
        </p>
    </section>)}
      
  //SETTING AND UPDATING STATES USING FALSE/TRUTHY VALUES AND UPDATING UI BASED ON THESE VALUES AND USEREF
    const TimerChallenge = ( {title, targetTime} ) => {
      const [timerExpired, setTimerExpired] = useState(false);
      const [timerStarted, setTimerStarted] = useState(false);
      const timer = useRef();

      function handleStart(){
          timer.current = setTimeout(() => {
              setTimerExpired(true);
          }, targetTime * 1000);
              setTimerStarted(true);
      };

      function handleStop (){
          clearTimeout(timer.current);
      };

    return (
      <section className='challenge'>
          <h2>{title}</h2>
          {timerExpired && <p>You Lost</p>}
          <p className='challenge-time'>
              {targetTime} second {targetTime > 1 ? 's' : ''}
          </p>
          <p> <button onClick={timerStarted ? handleStop : handleStart}> {timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
          <p className={timerStarted ? 'active' : undefined}> {timerStarted ? 'Timer running' : 'Timer Inactive!'}</p>
      </section>
    )
  }

  //MANAGING A STATE(Using OBJECT) & dynamically displaying components using If statements
  //Not losing the old state by SPREADING the previous state object into the new state object using ...prevState and simply updating the state using the selectedProjectId(from undefined to null);
  //Updating State based on the old state... spread prevValues to return preferred values 'n new updated ones.
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleStartAddProject(){
        setProjectsState(prevState => {
          return{
            ...prevState,
            selectedProjectId: null
          }
        })
      };  //Updating State based on the old state... spread prevValues to return preferred values 'n new updated ones.     
        //Start by spreading existing state so that existing data is copied into the new state
        //Can update state as much time as needed as continued below:
        function handleAddProject(projectData){
          setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            };
            return{
              ...prevState,
              projects: [...prevState.projects, newProject]
            }
          })
        }     
    let content;
    if(projectsState.selectedProjectId ===  null){
      content = <NewProject onStartAddProject={handleStartAddProject} />
    }else if(projectsState.selectedProjectId === undefined){
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
    };

    return (
      <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
      </main>
    );



//States (data) can be passed in as props.
//Functions can be created within a component and invoked in another component via props.

//LIFTING STATE UP: Manage the state in the closest Ancestor component that has access to both (child) components that needs that information.
  //The Parent component will then pass the needed information to both child components via PROPS.



//DERIVING STATE

//FETCHING DATA with useEffect
  //The useEffect hook is used in React to perform side effects in function components. Side effects are operations that affect something outside the scope of the function, such as interacting with local storage, fetching data from an API, setting up a subscription, or manually changing the DOM  especially when these operations should only occur once or under specific conditions.
  //When using useEffect, the items are fetched and set in state only once, when the component first mounts. Subsequent renders won't re-fetch the items, which is the desired behavior.
  //The useEffect: Is used in performng side effects in components; fetching data from an API. It takes two arguments; a function and a dependency array. Learnt that this hook runs on every render; whenever there's a change in the dependency which can actually cause an unending loop, in that case, it's preferable to inlude the second argument which in most cases is an empty array.This makes the useeffect run only on the first render.
  //Fetch Data from backend JSON server
  import { useEffect } from 'react';
  useEffect(() => {
    // function line of code here ... rmb to call the function there after below.
  }, []);
  const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(() => {
      async function fetchMeals() {
          const response = await fetch("http://localhost:8000/meals", {method: 'GET'});
          if(!response.ok) {
            //
          }    
          const meals = await response.json();
          setLoadedMeals(meals);  
          console.log(meals);
      }
      fetchMeals();
    }, []);
    return (
      <div>
          <ul id='meals' >
            {loadedMeals.map(meals => 
            <MealItem key={meals.id} meal={meals} />
            )}
          </ul>
      </div>
    )};

  //The MealItem Component
  const MealItem = ( {meal} ) => {
  return (
        <li>
                {/* <img src={`http://localhost8000/${meal.image}`} alt={meal.name}></img> */}
                <img src={meal.image} alt={meal.name}></img>
                    <h3>{meal.name}</h3>
                    <p>{meal.price}</p>
                    <p>{meal.description}</p>
                    <button>Add to Cart</button>
        </li>
  )
  };

  //fetch -POST DATA to backend
  const Checkout = () => {
      const cartCtx = useContext(CartContext);
      const userProgressCtx = useContext(UserProgressContext);
          
      const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
              return totalPrice + item.quantity * item.price
      }, 0);

      function handleCloseCheckout(){
          userProgressCtx.hideCheckout();
      };

      function handleSubmit(event) {
          event.preventDefault();

          const fd = new FormData(event.target);
          const customerData = Object.fromEntries(fd.entries());

          fetch('http://localhost:8000/meals', {
              method: 'POST',
              headers: { 
                  'Content-Type': 'aaplication/json'
              },
              body: JSON.stringify({
                  order:{
                      items: cartCtx.items,
                      customerInfo: customerData
                  }
              }),
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
              })
              .catch((error) => {
                  console.log('Error...', error)
              });  
      };

    return (
      <Modal open={userProgressCtx.progress === 'checkout'} onCloseProp={handleCloseCheckout}>
          <form onSubmit={handleSubmit}>
              <h2>Checkout</h2>
              <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
              <Input label='Full-Name' type='text' id='full-name' />
              <Input label='E-Mail Address' type='email' id='email' />
              <Input label='Street' type='text' id='street' />
              <div className='control-row'>
                  <Input label='Postal-Code' type='text' id='postal-code' />
                  <Input label='City' type='text' id='city' />
              </div>

              <p className='modal-actions'>
                  <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
                  <Button>Submit Order</Button>
              </p>
          </form>
      </Modal>
    )
  }
  export default Checkout;

//useParams: To get the id of a data - use Params Hooks from react router dom. Import useParams... Then destructure from useParams.
  import { useParams } from 'react';
  const { id } = useParams();


//Fetching Data using React DATA LOADER from React Router: With a data loader, we basically create a function within a file and then export and use it in other areas i.e as a gloabal state and use in other componenets.

//DEBUGGING REACT APPs
//Debugging Broswer
//Breakpoints
//Error messages
//Stack trace 
    //Return Statement with conditionals - with this line of code, the code beneath(comp and jsx) will not be executed if this condition isn't met.
    if(results.length === 0){
      return <p>Please eneter a valid number</p>
    }
//Handling Logical errors
//React Strict mode- initially executes every component twice. Reveals immediate underlying errors.
//React Developer Tools


//REFS and PORTALS: Advanced DOM Access & Value Management
    //Accessing DOM Elements with Refs
    //Managing Values with Refs / Getting values - that isn't really a state-to be re-executed
    //Exposing API Functions from Components
    //Detaching DOM Rendering from JSX Structure with Portals.
    //Getting access to nested functions

  //HOW useRef Works    
  //REFS: Can be connected to the a jsx element using the ref prop. Connect to elements on page and then interact with those elements e.g getting vakues from them.
  //NOTE: Whenever a Ref value changes, the component's function does not re-execute like State but also value from the ref is not lost.
  //1. import
  //2. initialize to a variable
  //3. connect to an element
  //4. use to set state - (refname.current.property)
  //5. use conditionally if need be.
    import { useState, useRef } from 'react';

    const Playr = () => {
        const [userName, setUserName] = useState('');
        const playerName = useRef();

        function handleClick() {
            setUserName( playerName.current.value);
            // playerName.current.value = ''; 
        }           
      return (
        <section id="player">
            <h2>Welcome { userName ? userName : 'User'}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handleClick}>Set Name</button>
            </p>
            </section>)};

  //FORWARDING REFS: forwardRef - a special function provided by React 
  //Use forward refs in Custom TAGS component file e.g Custom button, label, input etc to send/forward refs to these custom built tags so these refs can be accessible where these custom components are used.
  //Refs not accepted and destructured exact way as prop, rather as the next property received after props - not within the props curly braces, but after.
        //1-3
      //4. import { forwardRef } from 'react';
      //5. Nest the entire component function receiving this ref in forwardRef
      //6. Destructure ref after props not within it with a comma
      //7. Now use ref within the receiving component having set it on the parent component and within the desired code or function.
      //...Illustrations in the code useimperativehandle below

//USEIMPERATIVEHANDLE HOOK: useImperativeHandle(); - Useful for bigger react projects- To expose callable functions within a componenet - Meant to work together with forwardRef;
  //To build a component in a way that it exposes/shows its own functions that can be called with help of a ref outside of that(its) component. This will make the component work irrespective of how the jsx code that change in the future. For example, switchin from a dialog tag to a div tag.
  //Call this hook to define properties and methods that should be accessible on a component from outside the component. 
  //Needs two argument: 1. ref 2. A function that returns an object which groups all the properties and methods that should be exposed bby the component to other component
  //CLOSE MODAL: Use the inbuild form tag within the firm with a button and set method on form to 'dialog'
  import { forwardRef, useImperativeHandle, useRef } from 'react';
  const ResultModal = forwardRef(( {result, targetTime}, ref ) => {
    const dialog = useRef();
    useImperativeHandle (ref, () => {
      return{
        open() {
          dialog.current.showModal();
        } };});
    return (
      <dialog className='result-modal' ref={dialog}>
          <h2>You {result}</h2>
          <p>The target time was <strong>{targetTime} seconds.</strong></p>
          <p>You stopped at <strong>X seconds left</strong></p>
          <form method='dialog'> <button>Close</button> </form>
      </dialog>
    );
  });
    //The open() method is what to be called on the other(maybe parent) component where this created child omponent is used..              
        function handleStart(){
            setTimeout(() => {
                dialog.current.open();
            }, targetTime * 1000); };

  //MORE EXAMPLE: seRef, forwardRef, useImperativeHandle, showModal, dialog...
  import {createPortal} from 'react-dom';
  import { forwardRef, useImperativeHandle, useRef } from 'react';

  const Modal = forwardRef(({children}, ref) => {
      const dialog = useRef();
      useImperativeHandle(ref, () => {
          return{
              open() {
                  dialog.current.showModal();
              }
          }
      });
    return createPortal(
      <dialog ref={dialog}>
          {children}
      </dialog>,document.getElementById('modal-root')
    );
  })
  export default Modal;

//Closing the Modal via the ESC (Escape) Key:
  //The <dialog> element allows website visitors to close the opened dialog by pressing the ESC (Escape) key on their keyboard. Currently, this will not trigger the onReset function though (unlike closing the dialog with a button click).
  //To make sure that onReset gets triggered when the dialog is closed via the escape key, you should add the built-in onClose prop to the <dialog> element and bind it to the onReset prop value. Which reset itself must have been a function written to handle close.
  <dialog ref={dialog} className="result-modal" onClose={onReset}></dialog>


//PORTALS - A react feature that enables creating or putting components(jsx code) in desired places. For example, placing a component (dialog - modal) directly inside the HTML body; i.e teleport the rendered code into a different place in the dDOM
  //STEPS
  //1. import { createPortal } from 'react-dom';
  //2. Takes two arguments. a, Nest the component's jsx file inside create portal. B,(immediately after the jsx code) an HTML element onto which the code should be teleported or rendered and this HTML el should be existent in the HTML file. 
  const MyApp = () => {
    return createPortal(
      <div>myReact</div>,
      document.getElementById('modal')
    );
  }         
  export default MyApp;

//MATHJS - for mathematical evaluations
  //Install mathjs: (npm install mathjs)
  //import { evaluate } from 'mathjs';
  //setInputValue(evaluate(inputValue).toString());


//DELETE AN ITEM FROM A LIST  
  function handleDelete(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('itemsarray', JSON.stringify(updatedItems));
  }
  // The line: items.filter((_, i) => i !== index):is used to create a new array (updatedItems) that excludes a specific item based on its position (index) in the original items array. This code removes an item from the items array at the specified index by filtering out that item, creating a new array (updatedItems) that doesn't include it.
  //   items: This is the original array containing all the items.
  //   .filter(...): The filter method creates a new array with all elements that pass the test implemented by the provided function.
  //   (_, i) => i !== index:
  //   _: The first parameter (usually item) represents the current element in the array. It's not used in this case, so it's replaced with an underscore (_) to indicate it's intentionally ignored.
  //   i: The second parameter represents the index of the current element.
  //   i !== index: The test checks if the current index (i) is not equal to the index of the item to be deleted. If true, the element is included in the new array.
  //   updatedItems: This is the new array that contains all items from the original items array except the one at the specified index.


//REACT Context API & useReducer: Advanced State Management - 
  //REACT Context API: Manage state shared across multiple components
  //COMPONENT COMPOSITION: Prop Drilling Solution

  //REACT's Context API: Manage state shared across multiple components: Refer to Shopping-cart-context App
  //IDEA: Create a context value and then provide that value, wrap this context around multiple components of your app. Also, this context value can easily be connected to State.
  //Steps:
  //Create a (store) folder in src; data and state store for the entire application or for multiple components. Within it, create a (shopping-cart-context.jsx) file.
  //import { createContext } from 'react.
  //Store this createContext function in a value: const CartContext = createContext();
  //Give an initial/default value to the CarContext constance: num, string, object or array...
  //EXport: Providing/wrapping this context to the application so that the wrapped componennts can access the value defined in the context. To do this, export the context component.
  //Import: From a main components where other components can access it. E.g App.jsx import { CartContext } from './store/shopping-cart-context.jsx';
  //Use the Imported Context as a Component or wrapper around the other components that will need ts value. <CartContext.Provider></CartContext.Provider>
  //Set a value prop on the context provider; preferably same value as set in the CartContext component. Or otherwise defined in the App component as an object equivalnet to the value in the CartContext component.  
      //However, in order to update state via Context, can manually create a CartContext.Provider value and then pass this to the CCP instead of passing the state directly.
      //This can then be set as the value of the CartContextProvider and used within other components(or even destructure) to make state updating easy and re-render on every change.      
  //STEP1      
    import { createContext } from 'react';
      const CartContext = createContext({
          items: [],
          addItemToCart: () => {},
          updateItemQuantity: () => {}
      });
      //Optional:
      export function CartContextProvider({ children }){
        return <CartContext.Provider>{children}</CartContext.Provider>
      }
      export default CartContext;
              
  //STEP2
  import { CartContex } from './store/shopping-cart-context.jsx';
  const ApJsx = () => {
    const ctxValue = {
      items: shoppingCart.items,
      addItemToCart: handleAddItemToCart,
      updateItemQuantity: handleUpdateCartItemQuantity
    };
  return (
    <CartContext.Provider value={ctxValue}>
    <Header />
    <Shop >
    {DUMMY_PRODUCTS.map((product) => (
        <li key={product.id}>
          <Product {...product}/>
        </li>
      ))}
    </Shop>
  </CartContext.Provider>
  )
  }
  export default ApJsx;
  //STEP3
  //CONSUMING THE CONTEXT: import { CartContext } from './store/shopping-cart-context.jsx' Then, import { useContext } from "react"; ; from 'react in the consuming component in order to access the context value.
  //Call useContext and pass the CartContext as a value and store in a const: const cartCtx = useContext(CartContext); OR Destructure as in: const {items} = useContext(CartContext);
      //Note that this cartCtx will be accessed(either by dot notation or destructuring) based on the value provided in the main CartContext component. E.g <p>{cartCtx.items.map}</p> OR  <p>{items.map}</p>
  //LINK CONTEXTVALUE TO STATE: Can provide state as a value to the CartContext.Provider in the main comp, best if the state itself has the same data structure as the CartContext component's value.
        import { CartContext } from "../store/shopping-cart-context";
      import { useContext } from "react";
      function Product() {
        const { addItemToCart, items } = useContext(CartContext);
          return (
                <p className='product-actions'>
                  <button onClick={() => addItemToCart(id)}>Add to Cart</button>
                </p>
          );}

//useReducer Hook: Manage complex State data
  //The useReducer hook is a tool for managing complex state logic in functional components. It serves as an alternative to the useState hook, particularly when the state logic becomes more intricate and involves multiple sub-values or when the next state depends on the previous one.
  //The reducer is a pure function that takes two arguments,parameters: the current state and an action. It returns a new state based on the action.
  //An action is an object that describes what happened; i.e it's the defined action object that tells the function how to update the state. It usually contains a type field and, optionally, some payload data that provides more details about the action. 
  //The function signature is typically: And should be defined outside the component function so that this function is not recreated whenever the component function executes.

  // Define the initial state
  const initialState = { count: 0 };

  // Define the reducer function
    function reducer(state, action) {
    // logic to update state based on action
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return initialState;
      default:
        throw new Error();
    }}

  //The call/execution: The useReducer hook is called with two arguments: the reducer function and the initial state. It returns an array with two elements: the current state and a dispatch function. State: the current state. Dispatch: A function that allows yu to dispatch actions that will then be handled by the defined reducer function, i.e a function that you call with an action object to update the state.
    function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);    
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    );}
    export default Counter;


//UseReducer and Context
  import { createContext, useReducer } from "react";
    const CartContext = createContext({
        items: [],
        addItem: (item) => {},
        removeItem: (item) => {}
    });

  function cartReducer(state, action){
      if(action.type === 'ADD_ITEM'){
          const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
          const updatedItems = [...state.items];

          if(existingCartItemIndex > -1){
              const existingItem = state.items[existingCartItemIndex];
              const updatedItem = {
                  ...existingItem,
                  quantity: existingItem.quantity + 1
              }
              updatedItems[existingCartItemIndex] = updatedItem;
          }else{
              updatedItems.push({...action.item, quantity: 1})
          }

          return{ ...state, items: updatedItems}
      }

      if(action.type === 'REMOVE_ITEM'){
          const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);      
          const existingCartItem = state.items[existingCartItemIndex];

          const updatedItems = [...state.items];
          if(existingCartItem.quantity === 1){
              updatedItems.splice(existingCartItemIndex, 1);
          }else{
              const updatedItem = {
                  ...existingCartItem,
                  quantity: existingCartItem.quantity - 1
              };
              updatedItems[existingCartItemIndex] = updatedItem;
          }
          return{ ...state, items: updatedItems};
      }
      return state;
  }

  export function CartContextProvider({ children }){
      const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

      function addItem(item){
          dispatchCartAction({ type: 'ADD_ITEM', item: item })
      }

      function removeItem(id){
          dispatchCartAction({ type: 'REMOVE_ITEM', id })
      }
      const cartContextValue = {
          items: cart.items,
          addItem,
          removeItem
      };
      return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  }
  export default CartContext;


//useCallback Hook

//memo: PREVENT UNNECESSARY RE-RENDER
//useMemo: PREVENT UNNECESSARY RE-RENDER
//useCallback: PREVENT UNNECESSARY RE-RENDER
//Million.js npm install million

//Class Based Components


//REACT FORMS........................AND VALIDATION
  //Handling FORMS With State
  //Combining validation on every key stroke with validation on lost focus and resetting the focus state.      
  const Login = () => {       
    const [enteredValues, setEnteredValues] = useState({
      email: '',
      password: ''
  });

  //Validating on Lost Focus state - onBlur event listener
    const [didEdit, setDidEdit] = useState({
      email: false,
      password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  // const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@');

  function handleSubmit(event){
      event.preventDefault();
  };

  function handleInputChange(identifier, value){
      setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
      }));
      setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
      }))
  };

  //Validating on Lost Focus - onBlur event listener
  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  } 

  return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.email}/>
            <div className='control-error'> {emailIsInvalid && <p>Please enter a valid email address</p>}</div>
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)} value={enteredValues.password}/>
          </div>
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    );
  }

  //HANDLING SUBMISSION BASED VALIDATION - IMPORTANT! COMBINE with onchange or and onblur
  //Validating onSubmit Form: with useRef and State
  const StateLogin = () => {
    const [formMailInvalid, setFormMailInvalid] = useState(false);

    const email = useRef();
    const password = useRef();
    
    function handleSubmit(event){
      event.preventDefault();

      const enteredEmail = email.current.value;
      const enteredPassword = password.current.value;

      const emailIsInvalid = !enteredEmail.includes('@');

      if(emailIsInvalid){
          setFormMailInvalid(true);
          return;
      }
        setFormMailInvalid(false);
      };

      return (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>        
            <div className="control-row">
              <div className="control no-margin">
                <label htmlFor="email">Email</label>
                <input id="email" type='email' name="email" ref={email}/>
                <div className='control-error'>{formMailInvalid && <p>Please enter a valid email</p>}</div>
              </div>         
              <div className="control no-margin">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" ref={password}/>
              </div>
            </div>        
            <p className="form-actions">
              <button className="button button-flat">Reset</button>
              <button className="button">Login</button>
            </p>
          </form>
        );
  }
        

  //Handling FORMS With Native Browser APIs: the FormData Constructor function; built into the browser. An object that maskes fetching of form data values easy.
  //To get Data, each element must have a name property.
    const Signup = () => {
      function handleSubmit(event){
        event.preventDefault();      
        const fd = new FormData(event.target);
        const enteredEmail = fd.get('email');
        const enteredPassword = fd.get('password');
      };
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
    
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" />
            </div>
        </form>
      );
    }
  //Object.Entries
  //Get hold of all the entered values and group them all into an object
  //Multi-value input field like checkboxes are lost using Object.fromEntries. Rather get them manually using fd.getAll and append to data.
  const SignUp = () => {
    function handleSubmit(event){
      event.preventDefault();

      const fd = new FormData(event.target);
      const data = Object.fromEntries(fd.entries());
      const checkBoxesValues = fd.getAll('acquisition');
      data.acquisition = checkBoxesValues;
      console.log(data)
      if(data.password !== data['confirm-password']){
        setPasswordNotEqual(true);
        return;
        };
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <div className="control-error">{passwordNotEqual && <p>Passwords do not match!</p>}</div>
        </div>
          <fieldset>
            <legend>How did you find us?</legend>
            <div>
              <input type="checkbox" id="google" name="acquisition"  value="google"/>
              <label htmlFor="google">Google</label>
            </div>
    
            <div>
              <input type="checkbox" id="friend" name="acquisition" value="friend"/>
              <label htmlFor="friend">Referred by friend</label>
            </div>
    
            <div>
              <input type="checkbox" id="other" name="acquisition" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </fieldset>
      </form>
    );
  }
  //Handling FORMS With Native Browser Validation:
  <input id="email" type="email" name="email" required minLength={12} pattern=""/>

  //Check matched password

  //Handling form RESET
    function handleSubmit(event){
      event.preventDefault();
      event.target.reset();
    }

//BUILDING CUSTOM Inputs
const CustomInput = ({label, id, error, ...props}) => {
  return (
    <div className="control no-margin">
        <label htmlFor={id}> {label} </label>
        <input id={id} {...props} />
        <div className='control-error'> {error && <p>{error}</p>}</div>
    </div>
    )
    }
    //Use
      <div className="control-row">
      <CustomInput label="Email" id="email" type="email" name="email" error={emailIsInvalid && 'Please enter a valid email'} onBlur={() => handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.email}/>
      <CustomInput label="Password" id="password" type="password" name="password" error={passwordIsInvalid && 'Please enter a password above 6 length'} onBlur={() => handleInputBlur('password')} onChange={(event) => handleInputChange('password', event.target.value)} value={enteredValues.password}/>
      </div>

//CURRENCY FORMATTER
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  <p>{formatter.format(price)}</p>



//REDUX - Library - An alternative to React Context - for the potential disadvantages of Context in bigger applications. Disadvantages like: Deeply nested jsx code of ContextProviders components or even an extremely large Context component that becomes difficult to manage. Performance issue inclusive. NOTE: we can use both in an application while redux will be for the app-level state mgt while context will be for multiple component state mgt.
  //Redux - A state management system for cross-component or app-wide state.
  //State Types: Local state - managing state within a single component; Cross-component state - state that affects multiple components; App-wide state - state that affects the entire application e.g user authentication.
  //How does Redux work? - Having one central data(state) store. Components subscribe to the store to get the data they need. The store gets the reducer function as an input.
    //How do we change data in the store? Components should never directly manipulate store data. Instead, use Reducer Functions which is responsible for mutating/changing/updating the store data. Note: This is not a useReducer hook.
    //Reducer function: is responsible for mutating/changing/updating the store data. Receives two parameters The old/existing state and action that was dispatched. Must return a new state object. Must not send a side effect inside a reducer function.
    //Components trigger/dispatch actions which describes what to be done but don't do trigger this action directly. Action: A javascript object with a type/payload property which describes the kind of operation the reducer should perform. .dispatch - a method which dispatches an action.
    //Then, Redux forwards action to the Reducer Function and these opeartions are performed by the reducerF. Then, the reducer spits out a new state which will now replace the existing state in the central data store. Now, all subscribed components have access to this new state.

  //INSTALL REDUX: npm install @reduxjs/toolkit react-redux
  //Since redux is not react specific, install "npm install @reduxjs/toolkit react-redux" package instaead of "npm install redux" to make connecting react applications to redux very simple.
  
  // Store: Holds the entire state of your app.
  // Reducer: Determines how the state changes based on actions.
  // Action: Describes what to do (e.g., increment, decrement).
  // Provider: Makes the Redux store available to all components.
  // useSelector: Retrieves state from the Redux store.
  // useDispatch: Dispatches an action to change the state.
  
  //STEPS: createStore: Deprecated! A. Create a store folder in the src B. Create an index.js within the store folder.
  //1. Configure the Store. {deprecated- import createStore.} Create reducer function with state and actions declared; in if statements-type objects. Create a const store variable that accepts the reducer function as input.
  //2. Provide the Store to Your React Application: In the main.jsx file. Import the Provider component and wrap it around the App component; the highest level component. Then import store and provide it as a store value prop to the Provider component.
  //3. Connect Components to Redux. Import useSelector hook - used to select a aprt of the state managed by the store. 
        //Pass a function to useSelector to determine which part of the state to extract from the store; makes it easy to get a slice/tiny piece of the overall state object. Now save this returned value in a const variable.   const counter = useSelector(state => state.counter); Can use this var now in jsx code. <p>{counter}</p>
  //4. Dispatch actions or change state: Import the useDispatch hook which gives us a dispatch function to execute which we can then save in a const variable. This function will then dispatch an action - with a type property with the value being one of the identifiers we used in the reducer function in the store(within our created function nested to any desired element e.g button) against/from the redux store.
  //5. Attaching payloads to actions: Extra property added to the action object. Add an action type in store which needs to carry extra data. The dispatch function in the component as well must carry an extra payload after the type property.

  import { createStore } from 'redux';
    const initialstat = { counter: 0, showCounter: true }; 
    const counterReducer = (state = {initialstat}, action) => {
        if(action.type === 'increment'){
            return{
                counter: state.counter + 1,
                showCounter: state.showCounter}
        };
        if(action.type === 'decrement'){
            return{
                counter: state.counter - 1,
                showCounter: state.showCounter}
        };
        if(action.type === 'increase'){
            return{
                counter: state.counter + action.amount,
                showCounter: state.showCounter}
        };
        if(action.type === 'toggle'){
            return{
                counter: state.counter,
                showCounter: !showCounter}
        }
        return state;
    };
    const stor = createStore(counterReducer);
  export default stor;

  //Counter.jsx Component and   //WORKING WITH MULTIPLE STATE PROPERTIES: Add the diff pieces of state to the store and update them accordingly. Use useSelector to get them and use within component with a define dispatch function and handler.
                                //NOTE: The object returned in the redux reducer will not be merged with the existing state rather they will override it because the reducer object will always return a brand new snapshot. So we must always set all the other states when we update a piece of state.
                                //NOTE: In Redux, NEVER mutate/change the existing state. Instead override it by returning a brand new state object where you copy any nested objects or arrays i.e state objects(e.g return {counter: state.counter + 1}) and create brand new values.
  import { useSelector, useDispatch } from 'react-redux';
    const Counter = () => {
      const dispatch = useDispatch()
      const counter = useSelector(state => state.counter);
      const show = useSelector(state => state.showCounter);
      function incrementHandler(){
        dispatch({ type: 'increment' });
      }; 
      function decrementHandler(){
        dispatch({ type: 'decrement' });
      };
      function increaseHandlerByFive(){
        dispatch({ type: 'increase', amount: 5 });
      };
      const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' });
      };
      return (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {show && <div>{counter}</div>}
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandlerByFive}>Increase by 5</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      );
  }; 
  export default Counter;

  //Using CreateSlice
  //STEPS: A. Create a store folder in the src B. Create an index.js within the store folder.
  //1. Create a Redux Slice: import { createSlice, configureStore } from '@reduxjs/toolkit'; Call createSlice() and save in a const variable. createSlice() takes an object as an argument. Stores the slice of our global state(diff pieces of unrelated state);
        //Every slice needs a name-an identifier for the piece of state. Then, an initialState. Then reducers - which is also an objecr i.e a group of all the reucers that specific slice needs..then in the reducer object you can now add methods-which arelike functions e.g increment() {} These methods will then be called in our component.
            //Then each method receives the latest state and actions(payload or extra data) if needed. Now, within thus method e.g increment() {} allowed to mutate the state here with reduxtoolkit. With this, don't have to create a copy of the state manually all the time, instead just change the code that needs to be changed.
  //2. Configure the Store. Which makes merging multiple reducers into one reducer easy. Now, can call configureStore which takes in an object. Where w then set reducer property within which we set an object with key value pairs with different reducer functions being the value pair for the defined reducer key(name). 
        //In gen, a map of reducers for the main reducer. However, if it's a single reducer, can put this in the configureStore reducer property directly without the neeed to create key value pairs of reducers.
  //3. Provide the Store to Your React Application: In the main.jsx file. Import the Provider component and wrap it around the App component; the highest level component. Then import store and provide it as a store value prop to the Provider component.
  //4. Connect Components to Redux. Import useSelector hook - used to select a aprt of the state managed by the store. 
        //Pass a function to useSelector to determine which part of the state to extract from the store; makes it easy to get a slice/tiny piece of the overall state object. Now save this returned value in a const variable.   const counter = useSelector(state => state.counter); Can use this var now in jsx code. <p>{counter}</p>
  //5. Dispatch actions or change state: Can use the const variable above saved to our createSlice reducer function to access actions. E.g createSlice.actions Then save this to a named const variable and export it.
        //In components where needed, we can then import it and use it within the dispatch function. e,g counterAction.increment(); always pass parentheses to the called function. in cases where payload is needed, insert it into the parenetheses; could be a number, object or anything. To be able to use this in the index.js reducer, refer as payload. e.g state.counter + action.payload;
  //6. Attaching payloads to actions: Extra property added to the action object. Add an action type in store which needs to carry extra data. The dispatch function in the component as well must carry an extra payload after the type property.
  //Index.js
    import React from 'react';
    import { createSlice, configureStore } from '@reduxjs/toolkit';

    const initiaState = {
        counter: 0,
        showCounter: true
    }; 
    const counterSlice = createSlice({
        name: 'counter',
        initialState: initiaState,
        reducers:{
            increment(state) {
                state.counter++;
            },
            decrement(state) {
                state.counter--;
            },
            increase(state, action) {
                state.counter = state.counter + action.payload;
            },
            toggleCounter(state) {
                state.showCounter = !state.showCounter;
            }
        }
    });
    const store = configureStore({
        reducer: counterSlice.reducer
    });
    export const counterActions = counterSlice.actions;
    export default store;

  //Counter 
    import classes from './Counter.module.css';
    import { useSelector, useDispatch } from 'react-redux';
    import { counterActions } from '../store/index.js';
import { element } from 'prop-types';

    const Counter = () => {
      const dispatch = useDispatch()
      const counter = useSelector(state => state.counter);
      const show = useSelector(state => state.showCounter);

      function incrementHandler(){
        dispatch(counterActions.increment());
      };
      function decrementHandler(){
        dispatch(counterActions.decrement());
      };
      function increaseHandlerByFive(){
        dispatch(counterActions.increase(5));
      };
      function toggleCounterHandler () {
        dispatch(counterActions.toggleCounter());
      };

      return (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {show && <div className={classes.value}>{counter}</div>}
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandlerByFive}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      );
    };
    export default Counter;

  //MULTIPLE REDUCERS SLICES:.........................................
    const initialAuthState = {
      isAuthenticated: false
     };
    
    const authSlice = createSlice({
        name: 'auth',
        initialState: initialAuthState,
        reducers: {
            login(state) {
                state.isAuthenticated = true;
            },
            logout(state) {
                state.isAuthenticated = false;
            }
        }
    })
    
    const store = configureStore({
        reducer: {
          counter: counterSlice.reducer,
          auth:authSlice.reducer
        }
    });
    
    export const counterAction = counterSlice.actions;
    export const authActions = authSlice.actions;
    
    export default store
    //Usage with dot notation
    const isAuth = useSelector(state => state.auth.isAuthenticated);


    //SPLITTING Individual SLICES into different files - Vid 305


//REACT ROUTING
