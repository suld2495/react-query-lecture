import { createBrowserRouter } from "react-router-dom";
import BoardList from "../pages/BoardList";
import Layout from "../layouts/Layout";
import BoardWrite from "../pages/BoardWrite";
import BoardView from "../pages/BoardView";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <BoardList />
      },
      {
        path: '/view/:id',
        element: <BoardView />
      },
      {
        path: '/write',
        element: <BoardWrite />
      }
    ]
  }
];

const router = new createBrowserRouter(routes);
export default router;