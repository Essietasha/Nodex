//React - a User Interface(UI) library. It is used for building user interfaces for web applications based on components.
//ReactJS - a front-end JavaScript library used for building user interfaces (UI) in web applications. Build user interfaces out of individual pieces called components written in JavaScript.
//Features:
//JSX
//Components
//props
//Routes
//Hooks
//Effect
//States
//Animations
//Refs
//Classes etc.

//HOOKS:
//useState
//useRef
//useEffect
//useContext
//useCallback
//useMemo
//useReducer
//useNavigate
//useNaviagtion
//useImperative
//useDispatch
//useRouteError
//useParams
//useSelector
//useLoader
//useLoaderData
//useRouteLoaderData
//useActionData
//useSubmit
//useSelector
//useFetcher.

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

  const router = createBrowserRouter(createRoutesFromElements(
      <Route index element={<Homepagee/>} />)
    );

    const App = () => {
      return <RouterProvider router={router}/>;
    }; //   export default App
  //Nested Routes: Layouts || Shared loader.
  
  //PAGES: Create a seperate folder called 'Pages' for the pages.Within, create a HomePage.jsx file.  Although they are still componnets, but should not put them in the same folder as the regular UI component. Now, import Homepage within App.jsx and render it within the routeprovider. Now, import all needed components, use within the return st into the Hompage and it'll be displayed on the screen.
  //index: Default route that should be loaded for a component |Homepage| if the parent route is active.
  //LAYOUT: This is mostly used for Navbars and Footers i.e elements we always want to show on all pages. So, create a layout folder in the src folder. Note: you can have multiple layouts. To use layout, import it(MainLayout.jsx) into App.jsx //Now, create a Rarent Route to the rest of our routes i.e other routes where we want the navbar and footer to always display will be embedded in this parent route. Set the path as well. (Line 89 but extended below): So basically, any route put in there will use the layout.  
  const myApp = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/jobs' element={<JobsPage />} />
          <Route path='/events/:eventId' element={<EventDetailPage />} />
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

    //Link: To navigate between route pages. We do not directly render pages component within other jsx file, rather use links to navigate to them.
    //ADDING LINKS FOR DYNAMIC ROUTES - Individual Item
    //Note: This link to must be in relation to some path defined in the app.jsx dynamic routes. W will go to the EventDetailPage if the link is set like this.
    <Route path='/events/:eventId' element={<EventDetailPage />} />
    const PRODUCT = [
        {id: 1, title: 'Product1'},
        {id: 2, title: 'Product2'},
        {id: 3, title: 'Product3'}
      ];    
      const myProd = ({events}) => {
        return (
          <>
          <h2>Products Page</h2>
          <ul>
            {events.map(event => (<li key={event.id}> 
              <Link to={`/event/${event.id}`}> {event.title} </Link>
              </li>))}
          </ul>
          </>
        )
      }
    
    export default myProd;

    //UseNavigate: 
      //Used after submission, to re-direct user to the job page, use useNavigate hook from raect-router-dom. To use this useNavigate, first initialize.. const navigate = useNavigate();
      //Then, simply return navigate and whr to re-direct to. e.g navigate('/jobs'); Or return navigate('/jobs');
      import { useNavigate } from 'react-router-dom';
      function submitForm(){
        const navigate = useNavigate()
        //......
        navigate('/jobs');
      }
    
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
      //the colon (:) is used to define a route parameter in React Router. In loaders, this can be accessed using params.
      <Route path="/" element={<RootLayout />}>
      <Route path="events" element={<EventsLayout />}>
        <Route index element={<EventsPage />} />
        <Route path=":eventId" element={<EventDetailPage />} >
          <Route path="edit" element={<EditEventPage />} /> 
        </Route>
        <Route path="new" element={<NewEventPage />} />
      </Route>
      </Route>
      </>
      <Link to="products">P1</Link>;
      <Link to={product.id}>P2</Link>;
      <Link to=".." relative="path">Back</Link>; //Go up one/previouspath level depending on: relative-path or route?

  //DATA LOADER and useDataLoader | Fetching with React router: Provides an extra property that can be added to route definitions - loader property - which wants a function as a value. This function will be triggered and executed by react router whenever one is about to visit its/the route, just before the route gets rendered. Can fetch and load data within this loader function.
  //Data Loader: Enables rendering a component with fetched data, not fetching data after it has been rendered. Create a function within a file and then export and use it in other areas i.e as a global state and use in other componenets.
    //useDataLoader: To get access to the data returned by the loader function, i,port useLoaderData Hook to get access to the closest loader data. Call useLoaderData, save to a const variable. Thus const variable now provides the returned data value from the loader function. Can then use this const var as needed.
    //Can also use useLoaderData within other components within or on the same level (or below but higher level)as the page component directly without having to destructure. Simply call useLoader data, assign to var and use. Any browser feature can be ued in the loader function except hooks because the loader function is not a component.
      //NOTE: Where should loaderData be stored? Within the main page component where it's needed for itself and other components. There, below the main page component function, define/create the loaderDat function. Then, export it. Import it in the App.jsx next to the actual/main page in the import statemnets above, and set it as a value to the page route loader property.
     //Define loader function beneath component... |  Use loader
      import { useLoaderData, json } from 'react-router-dom';
      const EventsPage = () => {
        const events = useLoaderData();
        return (
          <EventsList events={events} />
        )}
      export default EventsPage;
        export async function loaderData(){
          const response = await fetch('http://localhost:8000/events');
          if (!response.ok) {
            //import json from react router dom
            return json({message: 'Could not fetch events'}, {status: 500});
            // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500});
          } else {
            const resData = await response.json();
            return resData;
          }
        };
    //in Appjsx routes
    import EventsPage, {loaderData} from './pages/Events';
    <Route index element={<EventsPage />} loader={loaderData} errorElement={<ErrorPage />}/>;

  //Handling errors with loader: | errorElement | Create an error component and nest it in the most top level route in the app.jsx. Every other child components can use this and you can as well build seperate error elements for seperate pages routes. 2.In the loader function, if (!response.ok), Throw a new reponse object for message and status code, stringify message. Then...
  //useRouteError hook: Fetch thrown loader error inside the error component using useRouteError hook. Declare default error title and message const and override them based on the error.status using if check. In the jsx, render these consts.
    //Sample Error Page
    import { useRouteError } from 'react-router-dom';
    const ErrorPage = () => {
      const error = useRouteError();
      let title = 'An error occured';
      let message = 'Something went wrong';
      if(error.status === 500){
          message = error.data.message;
          // message = JSON.parse(error.data).message;
      }
      if(error.status === 404){
          title = 'Not Found';
          message = 'Could not find page';
      }
    return (
      <>
        <MainNavigation />
        <h1>{title}</h1>
        <p>{message}</p>
      </>)
    }
    export default ErrorPage;
  
  //Loader to import individual data items from the backend: Add a loader function beneath the component whr the data is needed;export it. 
  //In the fetch function, append the id of the item to the URL. To get this item ID, react loader accepts two objects: request property and params. Can use the request object to access urls. e.g request.url ...Here, params object gives us access to all route parameters values. In this case,the extra parameter defined in the route path; eventId.
  // Import loader in Appjsx import st within the needed page. Set loader as value to loader within page route. Can now use the data or pass as prop to other components.
    import { useLoaderData, json } from 'react-router-dom'; 
    const EventDetailPage = () => {
      const eventItem = useLoaderData();
      return (
        <EventItem event={eventItem}/>
      )
    }
    export default EventDetailPage;
    
    export async function itemLoader({params}){  
      const id = params.eventId;   
      const response = await fetch(`http://localhost:8000/events/${id}`);
      if(!response.ok){
        return json({messaage: 'Could not find item data'}, {status: 500})
      }else{
        const resData = await response.json();
        return resData;
      }
    }
        
  //useRouteLoaderData| USE SHARED LOADER | Or Getting access to a higher level data from a route that doesnt have a loader. Nested routes feature || Pre-Populating backend Data with a form |Avoiding two seperate loaders:  Fetch single data within diff components fr diff usage.
  //To do this create a parent route whr components that needs the same loader function can be nested child routes. Set the loader in the parent route.
  //Slight note with useLoaderData: it looks for the closest available loader data and the highest level at which it looks for this is the route definition for which the component is loaded. To access parent loader data in nested routes, we use the useRouteLoaderData.
  //useRouteLoaderData:  To access parent loader data in nested routes. First, add an id to the parent route after the path. This useRouteLoaderData now takes the route id created as an agrument.
    <Route path=':eventId' loader={itemLoader} id='event-detail'>
      <Route index element={<EventDetailPage />} />
      <Route path='edit' element={<EditEventPage />} />
    </Route>

    const EventDetailPag = () => {
      const eventItem = useRouteLoaderData('event-detail');
            return (    
        <EventItem event={eventItem}/>
      )
    };
    export default EventDetailPage;

    //Default Value | Pre-Populating backend Data with a form 
    <input id='title' type='text' name='title' required defaultValue={data ? data.name : ''}/>
      </>

  //SUBMITTING DATA to Backend|Extracting: Default/Standard
  //ACTIONS Functions to SEND DATA to Backend : Can add actions to send data to the backend just like we use loader to fetch.
  //React Router <Form></Form> Component and triggering actions that belongs to the currently active route    
  //Define and export async action function; receives an object of properties like request and params. The request object contains the form data.
  //Use the special Form component/tag (import) from react-r-d; whc captures the form data and sends it to actions. Set method to POST. NOTE: Name attributes must be on the form element(all inputs/textareas) to be able to extract values and send to the backend. Form prevents default submission.
  //To get the form data, call the formData method on the request object and await it; set to a const data|const data = await request.formData()|. On this data object, call the get method (set to a var) to get access to diff input field values submitted. To get, pass a string with diff identifiers as set in the form name attribute.|const title = data.get('title');| For multiple fields, use an object- const eventsData ={ title: data.get('title), place: data.get('place)...}
  //It's this eventsData that should be sent to the backend; stringifyung it with JSON.Stringify.
  //With action defined, back to app.jsx; import it ..Use as value to action prop within route page.
  //REDIRECT : Navigating the user away after successfuly submitting a form. Import redirect. Return redirect with path specified. return redirect('/events');
    import { json, redirect } from 'react-router-dom';
      const NewEventPage = () => {
        return (
          <EventForm />
        )}
    export default NewEventPage;

    export async function action({ request }) {
        const data = await request.formData();
        const eventData = {
          title: data.get('title'),
          image: data.get('image'),
          description: data.get('description')
        }
        const response = await fetch('http://localhost:8000/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventData)    
        });
        if (!response.ok){
          throw json({
            message: 'Could not save events...',
            status: 500
          });
        }
        return redirect('/events');
      } 
    //The Event form component
      import { Form } from 'react-router-dom'
      const EventForm = ({ event}) => {
        return (
          <Form method='post'>
              <p>
                  <label htmlFor='title'>Title</label>
                  <input id='title' type='text' name='title' required defaultValue={event ? event.title : ''}/>
              </p>
          </Form>
        )};

    //Trigger the action of a different/another path/route: Add action prop and set the path.
    <Form method='post' action="/target-path"></Form> 

  //useActionData Hook:Gives us access to the data returned by the action. Just like loaders, ine can return responses in action and use them in component pages with useActionData. 358  
    if(response.status === 422 ){ //From action function
      return response;
    }
    import { useActionData } from 'react-router-dom'
    const actionData = useActionData();
    {actionData && actionData.error && <p>Please fill out all required inputs.</p>}

  //RE-USING ACTIONS VIA REQUEST METHOD: POST/PATCH | Using the same form with diff methods.
  //Define and export action function in a file component. Make the code in this action dynamic. 
  //Set the method property within the components using/rendering this Form element or component
  //In the Form component itself, accept and destructure a method prop; set this to the method property on the Form tag el.
  //Can now get access to this method within the action function with the help of the request object; use request object next to params in action. const method: request.method;
  //Now set this const method as a value for the method of sending the request to the backend in the action body rather than hardcoding it.
  //Set dynamic url //Now use this defined action in all needed routes. To do this, in app.jsx import action as desiredName on a new line. Then set this as the action value for needed routes/pages.
  import { Form, json, redirect } from 'react-router-dom'
    const EventFrm = ({method, event}) => {    
      return (
        <Form method={method}>
            <p>
                <label htmlFor='title'>Title</label>
                <input id='title' type='text' name='title' required defaultValue={event ? event.title : ''}/>
            </p>
        </Form>
      ) }  
    export default EventFrm;

    export async function action({ request, params }) {
      const method = request.method;
      const data = await request.formData();
      const eventData = {
        title: data.get('title'),
        description: data.get('description')
      }

      let url = 'http://localhost:8000/events'; 

      if(method === 'PATCH') {
          const eventId = params.eventId;
          url = `http://localhost:8000/events/${eventId}`;
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      }); 

      if (!response.ok){
        throw json({
          message: 'Could not save events...',
          status: 500
        }); 
      }
      return redirect('/events');
    }
    //
    const EditEventPage = () => {
      return (
              <EventForm method="patch"/>
      )}
    export default EditEventPage;

//useSubmit Hook: Submitting Data Programmatically(using actions without the react inbuilt Form component): useSubmit Hook
  //Define and export action function. Import in app.jsx. Use as action value for needed route.
  //Import useSubmit hook, store in a constant. Call this submit function whr needed. It receives two arguments: First, data to be submitted (an object; as defined int the action function). Second, allows one to set the same values that can be set on a form, e.g method:'delete', action-to a diff path if needed...
  import { useSubmit } from 'react-router-dom';
  const EventItem = ({ event }) => {
    const submit = useSubmit();
      function startDeleteHandler(){
        const proceed = window.confirm('Are you sure?');
        if(proceed) {
          submit(null, {method: 'delete'});
          // submit(null, {action='/logout', method: 'post'}); //Trigger an action of another route
        }
      };
    return (
      <>
          <h1>{event.title}</h1>
              <button onClick={startDeleteHandler}>Delete</button>
      </> )
  }
  export async function deleteLoader ({params, request}){
    const id = params.eventId;
    const response = await fetch('http://localhost:8000/events/' + id, {
      method: 'DELETE'
      // method: request.method
    });
    if (!response.ok){
      throw json({
        message: 'Could not save events...',
        status: 500
      });
    }
    return redirect('/events');
  }

  //Confirm
  const proceed = window.confirm('Are you sure?');
  if(proceed){
      //
  }
  
  //useNavigation - To get some feedback on data loading. Import useNavigation. Call and assign to a const. Dynamically update jsx with it. e.g {navigationConst.state === 'loading' && <p>Loading...</p>}
  //Getting Feedback upon form submission 
  //Disabling button
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  <>
    <button disabled={isSubmitting}>Cancel</button>
    <button disabled={isSubmitting}>{ isSubmitting ? 'Submitting' : 'Save'}</button>
  </>

  //useFetcher Hook: Sending requests behind the scene. Data fetching/submission or triggering an action without navigating to a page(where the loader or action belongs). This hook when executed gives an object with useful properties and method like Form, submit, data, state(can be idle, loading, submitting) etc
  //Using the <fetcher.Form></fetcher.Form>, an action will be triggered but a route transition will not be initialized. import useFetcher from react-r-d. Rm to add the action attribute with the path/route for whc action to be triggered if it's not the same component.
  //Updating the UI after submission, destructure the state and data object for conditional feedback-  with useEffect. Use the data and state as dependency arrays to update the UI if the useEffect code changes. Rm, action must always be defined-exported, imported and value set in app.jsx.  
    const NewsletterPage = () => {
      return (
          <NewsletterSignup />
      );
    }
    export default NewsletterPage;
    export async function action({ request }) {
      const data = await request.formData();
      const email = data.get('email');  
      //Update code & send to backend newsletter server ...
      console.log(email);
      return { message: 'Signup successful!' };
    };

  const NewsletterSignup = () => {
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    useEffect(() => {
      if(state === 'idle' && data && data.message) {
        window.alert(data.message + 'Sign Up Succesful!')
      }
    }, [data, state]);
      return (
          <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
            <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
            <button>Sign up</button>
          </fetcher.Form>
        );
  }

  export default NewsletterSignup;

  //App JSX Events App
    import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
    import './App.css';
    import React from 'react';
    import HomePage from './pages/Home';
    import NewsletterPage, {action as newsletterAction} from './pages/Newsletter';
    import EventsPage, {loaderData} from './pages/Events';
    import EditEventPage from './pages/EditEvent';
    import EventDetailPage, { eventDetailLoader, deleteLoader } from './pages/EventDetail';
    import NewEventPage from './pages/NewEvent';
    import ErrorPage from './pages/Error';
    import RootLayout from './layout/RootLayout';
    import EventsLayout from './layout/EventsLayout';
    import { action as dynamicEventAction } from './components/EventForm';

    const App = () => {
      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
            <Route index element={<HomePage />} />
            <Route path='/newsletter' element={<NewsletterPage />} action={newsletterAction} />
            <Route path='events' element={<EventsLayout />}>
              <Route index element={<EventsPage />} loader={loaderData} />
              <Route path=':eventId' loader={eventDetailLoader} id='event-detail'>
                  <Route index element={<EventDetailPage />} action={deleteLoader}/>
                  <Route path='edit' element={<EditEventPage />} action={dynamicEventAction} />
              </Route>
              <Route path='new' element={<NewEventPage />} action={dynamicEventAction} />
            </Route>
          </Route>)
      )
      return (
        <RouterProvider router={router} />
      )
    }
    export default App;

  //DEFER Function: Display some parts of the UI/render a component already while data is loading or being fetched. (defer function, Await, Suspense...) - 360.

//DEPLOYEMENT:
  //Test Code: Manual and automated test.
  //Optimize Code: Lazy Loading - Only load a component when it's needed. 387
  //Build App: Run 'npm run build'. Creates a build folder in our react app file. Gives a pdctn ready bundle of code(minified code). The content of this build folder is what will be deployed to a server.
  //Deploy/Upload App to a server: a static site host(not a/its server side host) is needed for this; Firebase hosting for instance. (https://firebase.google.com/docs/hosting)


//HOW TO PASS STATE DATA FROM ONE COMPONENT TO ANOTHER: Props
//What are IDEs? An integrated development environment (IDE) is a software application that helps programmers develop software code efficiently.
  
//INSTALL JSON SERVER: (on bash terminal, rem to cd into the project directory) install json server: Run 'npm install json-server' (or as dev dependency 'npm i -D json-server'). And inside the package.json file, within script, beneath preview, add ... "server": "json-server --watch src/jobs.json --port 8000" .
  //A libray that lets you create a mock API and you can send get post put patch delete request so you can create CRUD 'Create, Read, Update, Delete' functionality. All you have to do is create a json file and you can put any type of resource you want in it.
  //Set LIMIT of backend data being fetched : 'http://localhost:8000/jobs?_limit=3' ... //RUN backend(json) SERVER: On terminal, cd into project directory... 'npm run server'
  
//CREATE PROXY: Mostly for project deployment..A proxy server is a server application that acts as an intermediary between a client requesting a resource and the server providing that . To create a proxy, do that within the vite.confif file ... In the server object beneath the port, add :
  // proxy: { '/api': { target: 'http://localhost:8000', changeOrigin: true, rewrite: (path) => path.replace(/^\/api/, ''),}}
  
//Set a Form's DEFAULT field value: add the default field value within the html tag to the state default value.
  
//MAKING REQUEST TO THE BACK-END; EDIT, DELETE, ADD, SUBMIT.. //The POST (Add/Send)//GET REQUESTS(retrieve data). //PUT REQUEST(EDIT) //DELETE REQUEST
  //To get, post, put, delete data, Configure the request(fetch function) and set  the method.

//REACT TOASTIFY for Notification:2:46:12 (cd) npm i react-toastify
  //Set Up: In the Layout Component, import ToastContainer from react-toastidy. Also import the css file: (import 'react-toastify/dist/ReactToastify.css') Then use <ToastContainer anywhere within the container.
  //To use this in any componnet, simply import { tosst } from 'react-toastify'; and call it using toast.success. error
  
//DEPLOYMENT: Production version of the site
  //Close the development/local server.. Then, run 'npm run build' ..This will create a new folder called dist. Dist is the production build.
  //Can run this with vite. Now run 'npm run preview'..Now, the dist folder is what will be deployed. However, the jobs will not be shown in deployement as we are using a local json server. To correct this, create an API with express or....
  
//APPLICATION STRUCTURE:
    // index Html: is the single page since our applicatio is a single page application
    // The src folder is our react application
    // main.jsx file is the entry point
     
//Writing JSX
  //JSX stands for JavaScript XML. It is a syntax extension for javascript. 
  const p1 = <p>Large Font</p>;
  //If a JSX expression takes up more than one line, must wrap the multi-line JSX expression in parentheses. 
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
  //Rendering JSX
  //To render a JSX expression means to make it appear on screen.

  //React relies on two things to render: what content to render and where to place the content. It uses the document object which represents our web page. Stores the element in container.
  // We use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root. root can be used to render a JSX expression. This is the “where to place the content” part of React rendering.
  // Lastly,uses the render() method of root to render the content passed in as an argument. Here we pass an <h1> element, which displays Hello world. This is the “what content to render” part of React rendering.
  
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
  //import { createContext } and useState-if nid from 'react.
  //Create a CounterContext constant and set it to createContext: const CartContext = createContext();
  //Pass in the default/initial values to createContext: num, string, object or array...
  //Create the CounterProvider component that'll take in children.
  //Define your state and setState
  //Return a CounterContext.Provider that'll take in the count and setCount as the values of the value prop
  //Pass in children – it represents everything to be nested when the Context is consumed
  //Export CounterContext and CounterProvider

  //CONSUMING Context
  //Import: In the App.jsx or RootLayout, import CartContextProvider(import { CartContextProvider } from '../store/CounterContext); and wrap all other components it.
  //Now, inside the GrandChild component where the count state and setCount function are being used, import useContext and CounterContext from the counterContext file.
  //Also, pull out the count state and setCount from the CounterContext: const { count, setCount } = useContext(CounterContext); and use as needed.
  
  //1. BUTTON COUNTER:
  import { createContext, useState } from "react";
  const CountContext = createContext({
        count: 0,
        setCount: () => {}
    });
    
    const CountProvider = ({ children }) => {
      const [count, setCount] = useState(0);

      const increment = () => {
          setCount(prevState => prevState + 1)
      }
        return (
            <CountProvider.Provider value={{ count, setCount, increment }}> 
            {children} 
            </CountProvider.Provider>
        )
    }
  export { CountContext, CountProvider};

  //2. In the ROOTLAYOUT, wrap all elements with CountProvider
  import { CounterProvider } from '../store/CounterContext';
  const RootLayout = () => {
    return (
      <>
      <MovieProvider>
          <MainNavigation />
          <Outlet />
      </MovieProvider>
      </>
    )
  }
  export default RootLayout;

  //3.Within needed nested child componenr, useContext.
  import { useContext } from 'react';
  import { MovieContext } from '../store/MovieContext';
  const MyCounter = () => {
    const { count, increment } = useContext( MovieContext ); 
    return (
      <div>
        <h3>My List {count}</h3>
        <button onClick={increment}>Increase Count</button>
        {/* <button onClick={() => {setCount(count + 1)}}>Increase Count</button> */}
      </div>
    )
  }
  export default MyCounter;
  
  
  //EXAMPLE 2: STEP1      
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

    //Black: background-color: #242424;

  //Conditionally dispaly an info from the backend: Info|Background image|Image in a Div
  const MovieCard = ({ movies }) => {
      const isRecentlyAdded = (recentlyAdded) => {
          return recentlyAdded === true;
      }
    return (
      <div>
          <ul>
              {movies.map((movie) => (
                  <li key={movie.id}>
                      <Link to='/'>
                          <div className={classes.cards} style={{backgroundImage: `url(${movie.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                              {isRecentlyAdded(movie.recentlyAdded) && <h5>Recently added</h5>}
                              {movie.netflixProduced === true && <div> <img src={netflixlogo}/> </div>}
                          </div>
                      </Link>
                  </li> ))}
          </ul>
      </div>)}
  export default MovieCard;
