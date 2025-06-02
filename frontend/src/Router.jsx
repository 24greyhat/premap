import {
  createBrowserRouter,
} from "react-router";
import Home from "./screens/Home/screen";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


export default router;
