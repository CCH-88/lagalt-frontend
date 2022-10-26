import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './NavBar/Navbar'
import ProfileView from './views/ProfileView'
import MainView from './views/MainView'
import EditProfileView from './views/EditProfileView'
import ProjectView from './views/ProjectView'
import CreateProjectView from './views/CreateProjectView'
import { useKeycloak } from '@react-keycloak/web'
import NewProfile from './views/NewProfile'

export function OurRoutes({ loading }) {
	/* const { keycloak, initialized } = useKeycloak()

	if (loading != true) {
		console.log("ourRoutes: init: ", initialized)
		console.log('ourRoutes: ', keycloak.subject)
	} else {
		console.log('else ourRoutes: ', keycloak.subject)
	} */

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/profile" element={<NewProfile />}></Route>
				<Route path="/profile/:userId" element={<ProfileView />} children={[<Route key={'editprofile'} path="editprofile" element={<EditProfileView />} />]} />
				<Route path="/project">
					<Route path=":projectId" element={<ProjectView />} />
				</Route>
				<Route path="/createproject" element={<CreateProjectView />} />
			</Routes>
		</BrowserRouter>
	)
}
