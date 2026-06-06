import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/body2.jsx'
import Offer from './components/offer'
import Help from './components/help'
import Login from './components/login'
// import Login from './frontend/components/login2'
import Cart from './components/cart'
import ErrorPage from './components/errorpage.jsx'
import ResturantDetailAPI from './components/resturantDetailAPI.jsx';
import Time from './components/time.jsx';

// ====================================BOOTSTRAP SETTINGS=======================================
// --------------------This brings in the Bootstrap styling---------------------
  // import 'bootstrap/dist/css/bootstrap.min.css';
// --------------------This brings in the Bootstrap Icons---------------------
import 'bootstrap-icons/font/bootstrap-icons.css';
// --------------------This brings in the JavaScript (for Modals, Tooltips, etc.)---------------------
  //import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// console.log("Bootstrap is loaded!")

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offer',
        element: <Offer />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/resturant/:id',
        element: <ResturantDetailAPI />
      },
      {
        path: '/time',
        element: <Time />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
