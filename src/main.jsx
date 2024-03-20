import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Contact from './Components/Contact.jsx/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Contact/>,
  },
  {
    path: "/kirish",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
