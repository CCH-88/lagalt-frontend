import { useState } from "react";
import { useForm } from 'react-hook-form'
import Toggle from "../components/utils/Toggle/Toggle";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const EditProfileView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [accSettings, setAccSettings] = useState(true);
    const [skills, setSkills] = useState(false);
    const { user, setUser } = useUser();


    const acountSettingsClicked = () => {
        setAccSettings(true)
        setSkills(false)
    }
    const skillsAndDescriptionClicked = () => {
        setAccSettings(false)
        setSkills(true)
    }
    const onSubmitEmail = async ( input ) => {
        console.log(input.email);
    }
    const onSubmitUsername = async ( input ) => {
        console.log(input.username);
    }
    const onSubmitProfilePicture = async ( input ) => {
    }
    const onSubmitVisibility = async ( input ) => {
    }
    const onSubmitSkills = async ( input ) => {
        console.log(input.skills);
    }
    const onSubmitDescription = async ( input ) => {
        console.log(input.description);
    }

    return (
        <>
            {(accSettings && user) &&
                <div className="w-full h-full inline-block">
                    <div className="flex w-11/12 h-16 bg-white mx-auto mt-12 mb-1">
                        <p className="text-2xl mx-4 my-auto">Profile settings</p>
                    </div>
                    <div className="flex w-11/12 h-16 bg-white mx-auto">
                        <button onClick={acountSettingsClicked} className="text-xl mx-4 underline underline-offset-8 decoration-blue-500 text-blue-500">Account Settings</button>
                        <button onClick={skillsAndDescriptionClicked} className="text-xl mx-4 underline underline-offset-8">Skills and description</button>
                    </div>
                    <div className="flex flex-wrap w-11/12  bg-white mx-auto mt-8 mb-2">
                        <div className="w-full"></div>
                        <form className="w-full">
                            <fieldset>
                                <p className="text-xl mx-4 my-2 inline-block">E-mail address</p>
                                <button onClick={handleSubmit(onSubmitEmail)} className="text-2xl ml-auto mx-4 float-right my-2">Change e-mail</button>
                                <div className="w-full"></div>
                                <p className="text-lg mx-4 text-slate-500 inline-block">Your current e-mail is:</p>
                                <label htmlFor="email"> </label>
                                <br />
                                <textarea className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" type="text" autoComplete="off"
                                    placeholder='Type a new email here'
                                    {...register("email")} defaultValue={user.email}/>
                            </fieldset>
                        </form>
                    </div>
                    <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                        <div className="w-full"></div>
                        <form className="w-full">
                            <fieldset>
                                <p className="text-xl mx-4 my-2 inline-block">Username</p>
                                <button onClick={handleSubmit(onSubmitUsername)} className="text-2xl ml-auto mx-4 float-right my-2">Change username</button>
                                <div className="w-full"></div>
                                <p className="text-lg mx-4 text-slate-500 inline-block">Your current username is:</p>
                                <label htmlFor="username"> </label>
                                <br />
                                <textarea className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" type="text" autoComplete="off"
                                    placeholder='Type a new username here'
                                    {...register("username")} defaultValue={user.name} />
                            </fieldset>
                        </form>
                    </div>
                    <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                        <p className="text-xl mx-4 my-2">Profile picture</p>
                        <button className="text-2xl ml-auto mx-4">Change</button>
                        <div className="w-full"></div>
                        <p className="text-lg mx-4 mb-2 text-slate-500">Change your profile picture</p>
                    </div>
                    <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                        <p className="text-xl mx-4 my-2">Regular og hidden mode</p>
                        <div className="ml-auto mx-4 text-sm">
                            <Toggle label="Hidden">Change </Toggle>
                        </div>
                        <div className="w-full"></div>
                        <p className="text-lg mx-4 mb-2 text-slate-500">Get mode from user here</p>
                    </div>
                </div>}
            {(skills && user) &&
                <div className="w-full h-full inline-block">
                    <div className="flex w-11/12 h-16 bg-white mx-auto mt-24 mb-1">
                        <p className="text-2xl mx-4 my-auto">Profile settings</p>
                    </div>
                    <div className="flex w-11/12 h-16 bg-white mx-auto">
                        <button onClick={acountSettingsClicked} className="text-xl mx-4 underline underline-offset-8">Account Settings</button>
                        <button onClick={skillsAndDescriptionClicked} className="text-xl mx-4 underline underline-offset-8 decoration-blue-500 text-blue-500">Skills and description</button>
                    </div>
                    <div className="flex flex-wrap w-11/12  bg-white mx-auto mt-8 mb-2">
                        <form className="w-full">
                            <fieldset>
                                <p className="text-xl mx-4 my-2 inline-block">Skills</p>
                                <button onClick={handleSubmit(onSubmitSkills)} className="text-2xl ml-auto mx-4 float-right my-2">Add skill</button>
                                <div className="w-full"></div>
                                <p className="text-lg text-slate-500 mx-4">Your current skills are: </p>
                                <label htmlFor="skills"> </label>
                                <textarea className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2" type="text" autoComplete="off"
                                    placeholder='Type a new skill here'
                                    {...register("skills")} defaultValue="skills - change this to user skills"/>
                            </fieldset>
                        </form>
                    </div>
                    <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
                        <div className="w-full"></div>
                        <form className="w-full">
                            <fieldset>
                                <p className="text-xl mx-4 my-2 inline-block">Description</p>
                                <button onClick={handleSubmit(onSubmitDescription)} className="text-2xl ml-auto mx-4 my-2 float-right">Change description</button>
                                <div className="w-full"></div>
                                <p className="text-lg text-slate-500 mx-4">Your current description is: </p>
                                <label htmlFor="description"> </label>
                                <textarea className="mx-4 border my-2 w-2/6 h-48 flex-wrap px-2" type="text" autoComplete="off"
                                    placeholder='Type a new description here'
                                    {...register("description")} defaultValue="description - change to user description"/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            }
        </>

    )
}

export default withAuth(EditProfileView)
