import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllTrainers from "../Pages/AllTrainer/AllTrainers";
import TrainerDetails from "../Shared/TrainerDetails";
import BeATrainer from "../Pages/BeATrainer/BeATrainer";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import NewsletterSubsc from "../Pages/Admin Pages/NewsletterSubscribers/NewsletterSubsc";
import AdminTrainers from "../Pages/Admin Pages/AdminTrainers/AdminTrainers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/allTrainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "/be-a-trainer",
        element: <BeATrainer></BeATrainer>,
      },
      {
        path: "/trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainer/${params.id}`),
      },
    ],
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
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // admin routes
      {
        index: true,
        element: <NewsletterSubsc></NewsletterSubsc>,
      },
      {
        path: "newsletter-subsc",
        element: <NewsletterSubsc></NewsletterSubsc>,
      },
      {
        path: "all-trainers",
        element: <AdminTrainers></AdminTrainers>
      },
    ],
  },
]);
export default router;
