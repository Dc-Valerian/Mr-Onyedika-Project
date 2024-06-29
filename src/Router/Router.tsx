import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/UserHomeScreen/HomeScreen/HomeScreen";
import HomeLayout from "../Components/Bloc/HomeLayout/HomeLayout";
import AdminLogin from "../Pages/AdminScreen/AdminLogin/AdminLogin";
import ErrorPage from "../Components/reUse/ErrorPage/ErrorPage";
import UploadPage from "../Pages/AdminScreen/AdminLogin/UploadPage";


export const Router = createBrowserRouter([
    {
        path:"*",
        element:<ErrorPage/>
    },
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            },
        ]
    },
    {
        path:"/admin-login",
        element:<AdminLogin/>
    },
    {
        path:"/upload-page",
        element:<UploadPage/>
    }
])