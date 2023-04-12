import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import RootLayout from './components/RootLayout/RootLayout'
import Statistics from './components/Statistics/Statistics'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('statistics.json')
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        // loader: () => fetch('featured-jobs.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'job-details',
        element: <JobDetails></JobDetails>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
