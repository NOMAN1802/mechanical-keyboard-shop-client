import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
              index: true,
              element: <Home />,
            },
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:'/about-us',
                element:<AboutUs/>
            },
            
            {
                path:'/contact-us',
                element:<ContactUs/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }

        ]    
    },
    
   
 
])


export default router;