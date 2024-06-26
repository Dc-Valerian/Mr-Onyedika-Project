import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";
import { Suspense } from "react";
import LoadingPage from "./Components/reUse/LoadingPage/LoadingPage";
import BackToTopButton from "./Components/reUse/BacktoTopArrow/BacktoTop";
import Online from "./Components/reUse/Online/Online";

export default function App() {
  return(
    <Suspense fallback={<LoadingPage/>}>
        <RouterProvider router={Router} />
        <Online/>
        <BackToTopButton/>
    </Suspense>
  )
}
