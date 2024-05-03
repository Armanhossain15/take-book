import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PageToRead from "../Pages/PageToRead/PageToRead";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";
import Contact from "../Pages/Contact/Contact";
import FAQ from "../Pages/FAQ/FAQ";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: "/listedbook",
              loader:()=> fetch('/fakeData.json'),
              element: <ListedBooks />,
            },
            {
              path: "/pagetoread",
              loader:()=> fetch('fakeData.json'),
              element: <PageToRead />,
            },
            {
              path: "/book/:bookId",
              loader:()=> fetch('/fakeData.json'),
              element: <ShowDetails></ShowDetails>,
            },
            {
              path: "/contact",
              element: <Contact/>,
            },
            {
              path: "/faq",
              element: <FAQ/>,
            },
          ],
    }
])

export default Router;