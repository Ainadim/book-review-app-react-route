import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import PageToRead from './components/PageToRead/PageToRead.jsx'

import './index.css'
import BookDetails from './components/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/page-to-read",
        element: <PageToRead></PageToRead>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
