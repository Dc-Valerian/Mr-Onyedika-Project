import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/UserHomeScreen/HomeScreen/HomeScreen";
import HomeLayout from "../Components/Bloc/HomeLayout/HomeLayout";


export const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
    }
])