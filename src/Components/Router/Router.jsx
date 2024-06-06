import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllTrainers from "../Pages/AllTrainer/AllTrainers";
import TrainerDetails from "../Shared/TrainerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allTrainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "/trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainer/${params.id}`),
      },
    ],
  },
]);
export default router;
