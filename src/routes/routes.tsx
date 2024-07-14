import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import DashboardLayout from "../layout/DashboardLayout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import ConfirmOrder from "../pages/ConfirmOrdder/ConfirmOrder";

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
                path:'/cart',
                element:<Cart/>
            },
            {
                path: "/checkout",
                element: <CheckOut />,
              },
              {
                path: '/confirm-order',
                element:<ConfirmOrder/>
              },
            // {
            //     path: "/products/:id",
            //     element: <ProductDetails />,
            //     loader: ({params}) => fetch(`https://key-craft.vercel.app/api/products/${params.id}`)
            //   },

              {
                path: "/products/:id",
                element: <ProductDetails />,
                
              },
            {
                path:'/about-us',
                element:<AboutUs/>
            },
            
            {
                path:'/contact-us',
                element:<ContactUs/>
            }

        ]    
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
        
          
          {
            path:'add-product',
            element: <AddProduct/>
        },
          {
            path:'manage-products',
            element: <ManageProducts/>
        },
          
          
        ],
    
    },
 
])


export default router;