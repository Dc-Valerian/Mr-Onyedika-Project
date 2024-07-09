import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/UserHomeScreen/HomeScreen/HomeScreen";
import HomeLayout from "../Components/Bloc/HomeLayout/HomeLayout";
import AdminLogin from "../Pages/AdminScreen/AdminLogin/AdminLogin";
import ErrorPage from "../Components/reUse/ErrorPage/ErrorPage";
import UploadPage from "../Pages/AdminScreen/AdminLogin/UploadPage";
import Shop from "../Pages/UserHomeScreen/Shop/Shop";
import ContactHomeScreen from "../Pages/UserHomeScreen/ContactPage/ContactHomeScreen";
import GalleryHomeScreen from "../Pages/UserHomeScreen/GalleryPage/GalleryHomeScreen";
import ShopDetail from "../Pages/UserHomeScreen/Shop/ShopDetail";

export const Router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <ContactHomeScreen />,
      },
      {
        path: "/gallery",
        element: <GalleryHomeScreen />,
      },
      {
        path: "/product-details/:id",
        element: <ShopDetail />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/upload-page",
    element: <UploadPage />,
  },
]);
