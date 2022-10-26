import { useKeycloak } from '@react-keycloak/web';
import { useForm } from 'react-hook-form'
import { projectAdd } from "../api/postproject";

//this view allows the user to create a new project 
const CreateProjectView = () => {
    const inputConfig = {
        required: true,
        minLength: 3
    }
    const { keycloak } = useKeycloak()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (input) => {
        let {projectname, projectdescription, projectfield, projectstatus} = input
        await projectAdd(projectname, projectdescription, projectfield, projectstatus, keycloak.token)
    }

    const errorMessageProjectName = (() => {
        if (!errors.projectname) {
            return null
        }
        if (errors.projectname.type === 'required') {
            return <span className="text-md mx-4 my-2 inline-block text-red-500">Project name is required</span>
        }
        if (errors.projectname.type === 'minLength') {
            return <span className="text-md mx-4 my-2 inline-block text-red-500">Project name is too short</span>
        }
    })()
    const errorMessageDescription = (() => {
        if (!errors.projectdescription) {
            return null
        }
        if (errors.projectdescription.type === 'required') {
            return <span className="text-md mx-4 my-2 inline-block text-red-500">Project description is required</span>
        }
        if (errors.projectdescription.type === 'minLength') {
            return <span className="text-md mx-4 my-2 inline-block text-red-500">Project description is too short</span>
        }
    })()
    const errorMessageField = (() => {
        if (!errors.projectfield) {
            return null
        }
        if (errors.projectfield.type === 'required') {
            return <span className="text-md mx-4 my-2 inline-block text-red-500">Project field is required</span>
        }
    })()
    const errorMessageStatus = (() => {
        if (!errors.projectstatus) {
            return null
        }
        if (errors.projectstatus.type === 'required') {
            return <span className="text-md mx-4 my-2 inline-block text-red-500">Project status is required</span>
        }
    })()

    return (
        <>
            <div className="w-full h-full inline-block">
                <div className="flex w-11/12 h-16 bg-white mx-auto mt-12 mb-1">
                    <p className="text-2xl mx-4 my-auto">Create new project</p>
                </div>
                <div className="flex flex-wrap w-11/12  bg-white mx-auto mt-8 mb-2">
                    <div className="w-full"></div>
                    <form className="w-full">
                        <fieldset>
                            <p className="text-xl mx-4 my-2 inline-block">Project name</p>
                            <div className="w-full"></div>
                            <label htmlFor="projectname"> </label>
                            <textarea className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" type="text" autoComplete="off"
                                placeholder="Enter a name for your project here"
                                {...register("projectname", inputConfig)} />
                        </fieldset>
                    </form>
                    {errorMessageProjectName}
                </div>
                <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                    <div className="w-full"></div>
                    <form className="w-full">
                        <fieldset>
                            <p className="text-xl mx-4 my-2 inline-block">Description</p>
                            <div className="w-full"></div>
                            <label htmlFor="projectdescription"> </label>
                            <textarea className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" type="text" autoComplete="off"
                                placeholder='Type a description here'
                                {...register("projectdescription", inputConfig)} />
                        </fieldset>
                    </form>
                    {errorMessageDescription}
                </div>
                <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                    <p className="text-xl mx-4 my-2">Project image</p>
                    <div className="w-full"></div>
                    <form className="w-full">
                        <fieldset>
                            <div className="w-full"></div>
                            <label htmlFor="projectimageurl"> </label>
                            <textarea className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" type="text" autoComplete="off"
                                placeholder='Type a link to an image here'
                                {...register("projectimageurl")} />
                        </fieldset>
                    </form>
                </div>
                <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                    <p className="text-xl mx-4 my-2">Project field</p>
                    <div className="w-full"></div>
                    <form className="w-full">
                        <fieldset>
                            <div className="w-full"></div>
                            <label htmlFor="projectfield"> </label>
                            <select className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" defaultValue={""}
                                {...register("projectfield", inputConfig)}>
                                <option value={""} disabled>
                                    Choose an option
                                </option>
                                <option value="music">Music</option>
                                <option value="film">Film</option>
                                <option value="game-development">Game development</option>
                                <option value="web-development">Web development</option>

                            </select>
                        </fieldset>
                    </form>
                    {errorMessageField}
                </div>
                <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                    <p className="text-xl mx-4 my-2">Project status</p>
                    <div className="w-full"></div>
                    <form className="w-full">
                        <fieldset>
                            <div className="w-full"></div>
                            <label htmlFor="projectstatus"> </label>
                            <select className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" defaultValue={""}
                                {...register("projectstatus", inputConfig)} >
                                <option value={""} disabled>
                                    Choose an option
                                </option>
                                <option value="notstarted">Not started</option>
                                <option value="inprogress">In progress</option>
                                <option value="halted">Halted</option>
                                <option value="finished">Finished</option>
                                <option value="founding">Founding</option>
                            </select>
                        </fieldset>
                    </form>
                    {errorMessageStatus}
                </div>
                <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                    <button onClick={handleSubmit(onSubmit)} className="text-2xl mx-4 my-2">Create project</button>
                </div>
            </div>

        </>
    )
}

export default CreateProjectView