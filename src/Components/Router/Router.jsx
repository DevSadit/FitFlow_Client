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
import AdmApliedTrainers from "../Pages/Admin Pages/AdmApliedTrainers/AdmApliedTrainers";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AdmAddClasses from "../Pages/Admin Pages/AdmAddClasses/AdmAddClasses";
import RecentPosts from "../Pages/Home/RecentPosts";
import AdmBallance from "../Pages/Admin Pages/AdminBallance/AdmBallance";
import MemberProfile from "../Pages/Member Pages/MemberProfile";
import RecoClasses from "../Pages/Member Pages/RecoClasses";

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
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/be-a-trainer",
        element: <BeATrainer></BeATrainer>,
      },
      {
        path: "/trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) =>
          fetch(
            `https://fitness-tracker-server-ruddy.vercel.app/trainer/${params.id}`
          ),
      },
      {
        path: "/posts",
        element: <RecentPosts></RecentPosts>,
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
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <AdminTrainers></AdminTrainers>,
      },
      {
        path: "applied-trainers",
        element: <AdmApliedTrainers></AdmApliedTrainers>,
      },
      {
        path: "add-classes",
        element: <AdmAddClasses></AdmAddClasses>,
      },
      {
        path: "ballance",
        element: <AdmBallance></AdmBallance>,
      },

      // trainer routes
      {
        path: "add-post",
        element: <AdmAddClasses></AdmAddClasses>,
      },

      // member routes
      {
        path: "apliedTrainers",
        element: <AdmApliedTrainers></AdmApliedTrainers>,
      },
      {
        path: "myProfile",
        element: <MemberProfile></MemberProfile>,
      },
      {
        path: "reco-classes",
        element: <RecoClasses></RecoClasses>,
      },
    ],
  },
]);
export default router;
