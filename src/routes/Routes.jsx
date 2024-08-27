import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AllToys from "../pages/AllToys/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addtoys',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: '/toys/:id',
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/mytoys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

const Routes = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routes;