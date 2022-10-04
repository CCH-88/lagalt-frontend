/* React dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* Routing Dependencies */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Global Styling */
import './index.css'

/* Routing pages */
import ProfileView from './views/ProfileView'
import MainView from './views/MainView'
import App from './App'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainView />,
	},
	{
		path: '/profile',
		element: <ProfileView />
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App/>
		<RouterProvider router={routes} />
	</React.StrictMode>
)
