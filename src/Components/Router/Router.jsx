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
import AdmBallance from "../Pages/Admin Pages/AdminBallance/AdmBallance";
import MemberProfile from "../Pages/Member Pages/MemberProfile";
import RecoClasses from "../Pages/Member Pages/RecoClasses";
import PrivateRoute from "./PrivateRoute";
import TrainerRoute from "./TrainerRoute";
import AdminRoute from "./AdminRoute";
import MainDash from "../Shared/MainDash";
import TrainerBooked from "../Shared/TrainerBooked";
import ManageSlotts from "../Pages/Trainer Pages/ManageSlotts";
import AllPosts from "../Pages/AllPosts/AllPosts";
import AddForum from "../Pages/Trainer Pages/AddForum";
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
        loader: () =>
          fetch(`https://fitness-tracker-server-ruddy.vercel.app/classesCount`),
      },
      {
        path: "/be-a-trainer",
        element: <BeATrainer></BeATrainer>,
      },
      {
        path: "/trainer-booked/:id",
        element: (
          <PrivateRoute>
            <TrainerBooked></TrainerBooked>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fitness-tracker-server-ruddy.vercel.app/trainer/${params.id}`
          ),
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
        element: <AllPosts></AllPosts>,
        loader: () =>
          fetch(`https://fitness-tracker-server-ruddy.vercel.app/postsCount`),
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // admin routes
      {
        index: true,
        element: <MainDash></MainDash>,
      },
      {
        path: "newsletter-subsc",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <NewsletterSubsc></NewsletterSubsc>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-trainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminTrainers></AdminTrainers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "applied-trainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdmApliedTrainers></AdmApliedTrainers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-classes",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddForum></AddForum>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "ballance",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdmBallance></AdmBallance>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      // trainer routes
      {
        path: "add-post",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <AddForum></AddForum>
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-slots",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <ManageSlotts></ManageSlotts>
            </TrainerRoute>
          </PrivateRoute>
        ),
      },

      // member routes
      {
        path: "apliedTrainers",
        element: (
          <PrivateRoute>
            <AdmApliedTrainers></AdmApliedTrainers>
          </PrivateRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MemberProfile></MemberProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "reco-classes",
        element: (
          <PrivateRoute>
            <RecoClasses></RecoClasses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
