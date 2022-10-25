import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './NavBar/Navbar'
import ProfileView from './views/ProfileView'
import MainView from './views/MainView'
import EditProfileView from './views/EditProfileView'
import ProjectView from './views/ProjectView'
import CreateProjectView from './views/CreateProjectView'

import NewProfile from './views/NewProfile'
import Keycloak from 'keycloak-js'
import { keycloak } from './auth/keycloak'
import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'

function App() {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/profile" element={<NewProfile />}>
					<Route path=":userId" element={<ProfileView />} children={[<Route path="editprofile" element={<EditProfileView />} />]} />
				</Route>
				<Route path="/project">
					<Route path=":projectId" element={<ProjectView />} />
				</Route>
				<Route path="/createproject" element={<CreateProjectView />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
