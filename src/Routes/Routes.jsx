import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import MyActivities from "../pages/MyActivities";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ChallengeDetails from "../pages/ChallengeDetails";
import AddNewChallenge from "../pages/AddNewChallenge";
import ForgetPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/challenges",
        loader: () =>
          fetch("https://eco-track-server-one-rho.vercel.app/challenges"),
        Component: Challenges,
      },

      {
        path: "/challenges/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://eco-track-server-one-rho.vercel.app/challenges/${params.id}`
          );

          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }

          return res.json();
        },
        element: <ChallengeDetails />,
        errorElement: <NotFound />,
      },
      {
        path: "/challenge/add-challenge",
        element: (
          <PrivateRoute>
            <AddNewChallenge></AddNewChallenge>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivities></MyActivities>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
