/* React dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* Routing Dependencies */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Global Styling */
import './index.css'

/* Routing pages */
import App from './App'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
)
