import { createBrowserRouter } from "react-router-dom";
import { HOME_ROUTE } from "./layer";
import HomePage from "../pages/HomePage";
import { TASKS_ROUTE } from "./layer";
import TasksPage from "../pages/TasksPage";

export const router = createBrowserRouter([
  {
    path: HOME_ROUTE.path,
    element: <HomePage />,
  },
  {
    path: TASKS_ROUTE.path,
    element: <TasksPage />,
  },
]);
