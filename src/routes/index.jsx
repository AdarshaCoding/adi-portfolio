import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AppLayout from "../layouts/AppLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      // 404 route example:
      { path: "*", element: <div>Page Not Found</div> },
    ],
  },
]);

export default routes;
