import { useEffect, useState } from 'react'
import { checkAllProjects } from '../api/project'
import ProjectList from '../components/MainView/ProjectList'
import TopProjects from '../components/MainView/TopProjects'
import Spinner from '../components/utils/Spinner'

const MainView = () => {

	const [loading, setLoading] = useState(false)
	const [apiError, setApiError] = useState(null)
	const [projects, setProjects] = useState([])

	const getAllProjects = async (projectId) => {
		setLoading(true)
		const [checkError, projectResponse] = await checkAllProjects()
		if (checkError !== null) {
			setApiError(checkError)
		}
		if (projectResponse !== null) {
			setProjects(projectResponse)
		}
		setLoading(false)
	}

	useEffect(() => {
		getAllProjects()
	}, [])

	return (
		<>
			{(projects.length > 0 &&
				<>
					<h1 className="font-bold text-3xl mb-1 p-4">Trending projects</h1>
					<TopProjects projectsList={projects} />
					<h2 className="font-bold text-3xl mb-1 p-4">List of Projects</h2>
					<ProjectList projectsList={projects} />
				</>
			)}
			<div className="w-full h-full inline-block">
				{loading && <Spinner />}
				{apiError && <p>{apiError}</p>}
			</div>
		</>
	)
}

export default MainView
