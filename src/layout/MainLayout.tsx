import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import useRefreshWarning from "../hooks/useRefreshWarning";
import { useAppSelector } from "../redux/hooks";

const MainLayout = () => {

    const cartItems = useAppSelector((state) => state.cart.items);

    //! Refresh Warning for cart 
    useRefreshWarning(
      cartItems.length > 0
        ? "Are you sure!!! Refresh page will remove your cart items..."
        : null
    );
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;