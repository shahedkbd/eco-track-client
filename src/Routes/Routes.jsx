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
        Component: Challenges,
      },
      {
        path: "/challenges/:id",
        loader: ({params})=> fetch(`http://localhost:3000/challenges/${params.id}`),
        Component: ChallengeDetails
      },
      {
        path: "/challenge/add-challenge",
        element: (
          <PrivateRoute>
            <AddNewChallenge></AddNewChallenge>
          </PrivateRoute>
        )
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
    ],
  },
]);
