import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import CardDetails from "../components/CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
{
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch("/data.json")
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/cards/:id",
            element: <CardDetails></CardDetails>,
            loader: ()=>fetch("/data.json")
        },
    ]
    
}
])
   

export default myCreatedRoute ;