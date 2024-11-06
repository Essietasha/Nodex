/*Next.js - (https://nextjs.org/docs/app/building-your-application/routing/colocation)
    A React framework - A full stack framework. Allow server side-rendering; i.e application being rendered on the server not client.
    Features
        Rendering
        Routing - Routing is handled by the file system. File names are used as route path.
        Full Stack App creation
        Automatic Code splitting
        React Extension
        SEO
    To Create a Next.js Project: 
        Install Node.js 
        Use the Create Next App Command: npx create-next-app@latest
        Enter Project Name:
        Follow Setup Prompts:
        Navigate into Your Project: cd your-project-name
        Start the Development Server: npm run dev

    To use next.js using an existing react project: 
    Manual Setup: You can also set up Next.js manually by installing it as a dependency in an existing project with npm install next react react-dom. 
    Then add scripts in package.json for building and starting the app.
        "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
        }
    

    REACT SERVER COMPONENT
        NextJS works with React Server Components. React components are rendered and executed only on the server and never on the client/browser.
        Components in nextJs are regular react components but treated as a server component by nextJS. The returned JSCode is what is sent to the browser to be rendered.
        Components are rendered, then converted to HTML and then sent to the browser or rendered.


    APP Structure: 
     Reserved File names: 
     page.js
     layout.js
     loading.js 
     icon.png
     not-found.js 
     error.js
     route.js -  Route.js Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

        App: Main Folder
        Pages: Main page.js - Defines the content of the page
            ROUTES/ROUTING: [Pages Router and App Router]
            Adding additional pages, Add a new folder within app folder. Then add page.js file within it.
            Add additional nested folders within folder as needed creating each page.js and using Link refs to navigate between.
            LINK: Ensures we stay in the single page application     */
            import Link from "next/link";
            export default function Home() {

            return (
                <main>
                <Link href="about">About</Link>
                </main>
            );}
        /*To navigate to this page using anchor links, use the folder name in the href. e.g: a href="about">About</a>
        Diasadvantage: Page refresh. No longer Single page App. 

        Client-side JavaScript code: NextJS allows UI update on a single page with the help of clientside js code. 
        
        NOTE: FOLDER NAME: Will always be the url */


        /*Layouts - Main Layout.js/RootLayout - Defines the shell/wrapper around all/one/more pages.
            In NextJS, we don't use layouts hardcodedly as parent component or wrapper around other components as we do in React, rather nextJS does this itself.
            To add main layout, in the root folder(app), add layout.js. And nextjs will wrap all pages in that layout.*/
            export const metadata = {
            title: "Food Haven",
            description: "First NextJS App",
            };

            export default function RootLayout({ children }) {
            return (
                <html lang="en">
                <body>
                    {children}
                </body>
                </html>
            );}

            //Additional/Nested Layout files - within other folders: To add nested layouts, navigate to preferred folder heirachy, add layout.js. And nextjs will wrap all pages/folders within that hierachy in that layout.
            //Rendering will be done with the children prop. Nested layouts will also be nested within the main layout.*/
            const MealsLayout = ({ children }) => {
              return (
                <>
                <p>Meals Layout</p>
                {children}
                </>
              )
            }

        //Global CSS - Styles made available on every pages
        //FavIcon - Directly adding an image named "icon.png" in the app folder. 

        //Adding Custom/Regular Components: Add a component folder, add components as needed. To use, import them into the necssary file pages.
            //Long as these components will not be needed/used as pages, their naming convention must not use the reserved file names. And visiting these components as pages/url will be ignored by nextJS.

        //@ Feature - To make refernce to the root project(outside of the app folder) in import paths. E.g:
        import Header from '@/components/Header';

        /*DYNAMIC ROUTES AND PARAMS = Square bracket syntax([])
            Create Blog Folder within app(root app)
            Nest a main blog Page.js file within "blog" folder
            To Define a dynamic route - Same page but different contents for different blogpost
            Add a nested Folder in blog folder with square bracket([slug]) around the name/placeholder
            Nest its own page.js file*/

            //Main Blog Folder page.js            
            const Blog = () => {
            return (
                <>
                <h1>The Blogs</h1>
                <p><Link href="/blog/post1">Blog-1</Link></p>
                <p><Link href="/blog/post2">Blog-1</Link></p>
                </>
            )
            }

            import React, { Component } from 'react'

            //Nested [slug] folder page.js - This page will be dynamic acc to each link from the blog page.
            //Params Props - Pass in params prop and destructure it to have access to the page values
            const BlogPost = ({ params }) => {
            return (
                <div>{params.slug}</div>
            )}

        
        //Importing Images in NextJS using The Image Component: (https://nextjs.org/docs/app/api-reference/components/image)
        //Import and use the Imgae Component. Contains lots of useful props and properties
            import logoImg from '@/assets/fhlogo.png';
            const MainHeader = () => {
            return <header>
                <Link href="/">
                    <Image src={logoImg} alt='Food Haven' priority/>
                    Food Haven
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            }
        //Importing Images in NextJS using the .src property
            import logoImg from '@/assets/fhlogo.png';
            const MainHea = () => {
            return <header>
                <Link href="/">
                    <img src={logoImg.src} alt='Food Haven' />
                </Link>
            </header>
            }

        /*Styling NEXTJS Apps
            Global CSS
            Tailwind CSS... Preconfigured during nextjs project installation
            CSS Modules - Stnadard CSS codes but scoped to specific components by assignig special names to the css files. 
            Add/Create css files that ends with module.css: file: main-header.module.css
            Import: import classes from './main-header.module.css';
            Use:*/ <p classname={classes.text}></p>

        /*Adding Active class conditionally - usePathname() hook;
            usePathname() hook - Gives the currently active path; the path after the domain.
            NOTE: usePathname is only available on the client-side, to use it, convert the component to a client-side component. */
            'use client';
            import { usePathname } from 'next/navigation';
            const MainHeade = () => {
                const path = usePathname(); 
                return (
                    <header className={classes.header}>
                        <nav className={classes.nav}>
                            <ul>
                                <li>
                                    <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link>
                                </li>
                                <li>
                                    <Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>) }
        //LOADING PAGES
            //Loading.js file - Use a loading.js file within the app/page/folder/file level (that will take a while to load data etc) as needed.        
            const LoadingPage = () => {
            return (
                <p>Fetching meals</p>
            )
            }
            
            //Suspense and fallback
                <Suspense fallback={<p>Fetching meals...</p>}>
                <MealItem />
                </Suspense>


        /*Handling Errors
            Error: In the app level, add error.js file or within files and folder level if needed.
            To get error details, use props.
            Error componennt must be a client component. */
            'use client';
            const Error = ({error}) => {
            return (
                <>
                    <div>{error.status}</div>
                    <p>Error fetching...</p>
                </>
            ) }

            /*Not Found Pages Error: "not-found.js" -Building Custom Not Found - To change the default 404 not found style
            In the app level, add not-found.js file or within files and folder level if needed. */           
            const NotFound = () => {
                return (
                <div>Page not Found!</div>
                )
            }
                   
        /*CLIENT COMPONENTS
        Build Client Components that can be pre-rendered on the server and rendered on the client. Needed for client-side features that are not available on the server side. E.g event handlers, useEffect, useState...
        Explicitly use the Use Client Directive ('use client';) at the very top of the file that holds that component. */
       
        'use client';
        import { useEffect, useState } from 'react';
        export default function ImageSlideshow() {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            //...
        }, []);

        return (
            <div className={classes.slideshow}> ... </div>
        );}
 



