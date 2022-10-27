import { useKeycloak } from "@react-keycloak/web";
import { useForm } from "react-hook-form";
import { projectAdd } from "../api/postproject";

//this view allows the user to create a new project
const CreateProjectView = () => {
  const inputConfig = {
    required: true,
    minLength: 3,
  };
  const { keycloak } = useKeycloak();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (input) => {
    let { projectname, projectdescription, projectfield, projectstatus } =
      input;
    const [addError, addResponse] = await projectAdd(
      projectname,
      projectdescription,
      projectfield,
      projectstatus,
      keycloak
    );
    if (addError !== null) {
      console.log("addError" + addError);
    }
    if (addResponse !== null) {
      console.log("addResponse" + addResponse);
    }
  };

  const errorMessageProjectName = (() => {
    if (!errors.projectname) {
      return null;
    }
    if (errors.projectname.type === "required") {
      return (
        <span className="text-md mx-4 my-2 inline-block text-red-500">
          Project name is required
        </span>
      );
    }
    if (errors.projectname.type === "minLength") {
      return (
        <span className="text-md mx-4 my-2 inline-block text-red-500">
          Project name is too short
        </span>
      );
    }
  })();
  const errorMessageDescription = (() => {
    if (!errors.projectdescription) {
      return null;
    }
    if (errors.projectdescription.type === "required") {
      return (
        <span className="text-md mx-4 my-2 inline-block text-red-500">
          Project description is required
        </span>
      );
    }
    if (errors.projectdescription.type === "minLength") {
      return (
        <span className="text-md mx-4 my-2 inline-block text-red-500">
          Project description is too short
        </span>
      );
    }
  })();
  const errorMessageField = (() => {
    if (!errors.projectfield) {
      return null;
    }
    if (errors.projectfield.type === "required") {
      return (
        <span className="text-md mx-4 my-2 inline-block text-red-500">
          Project field is required
        </span>
      );
    }
  })();
  const errorMessageStatus = (() => {
    if (!errors.projectstatus) {
      return null;
    }
    if (errors.projectstatus.type === "required") {
      return (
        <span className="text-md mx-4 my-2 inline-block text-red-500">
          Project status is required
        </span>
      );
    }
  })();

  return (
    <>
      <>
        <h1 className="font-bold text-3xl mb-1 p-4">Create Project</h1>
        <div className="p-10">
          <div className="max-w-sm w-full sm:max-w-full sm:flex rounded overflow-hidden shadow-lg p-2">
            <div className=" bg-white max-w-sm w-full sm:max-w-full rounded-b md:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Project name
                </div>
                <form>
                  <fieldset>
                    <div className="w-full"></div>
                    <label htmlFor="projectname"> </label>
                    <textarea
                      className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                      type="text"
                      autoComplete="off"
                      placeholder="Enter a name for your project here"
                      {...register("projectname", inputConfig)}
                    />
                  </fieldset>
                  {errorMessageProjectName}
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-sm w-full sm:max-w-full sm:flex rounded overflow-hidden shadow-lg p-2">
            <div className=" bg-white max-w-sm w-full sm:max-w-full rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Project description
                </div>
                <form className="w-full">
                  <fieldset>
                    <div className="w-full"></div>
                    <label htmlFor="projectdescription"> </label>
                    <textarea
                      className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                      type="text"
                      autoComplete="off"
                      placeholder="Type a description here"
                      {...register("projectdescription", inputConfig)}
                    />
                  </fieldset>
                </form>
                {errorMessageDescription}
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full sm:max-w-full sm:flex rounded overflow-hidden shadow-lg p-2">
            <div className=" bg-white max-w-sm w-full sm:max-w-full rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Project Image
                </div>
                <form className="w-full">
                  <fieldset>
                    <div className="w-full"></div>
                    <label htmlFor="projectimageurl"> </label>
                    <textarea
                      className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                      type="text"
                      autoComplete="off"
                      placeholder="Type a link to an image here"
                      {...register("projectimageurl")}
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full sm:max-w-full sm:flex rounded overflow-hidden shadow-lg p-2">
            <div className=" bg-white max-w-sm w-full sm:max-w-full rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Project field
                </div>
                <form className="w-full">
                  <fieldset>
                    <div className="w-full"></div>
                    <label htmlFor="projectfield"> </label>
                    <select
                      className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                      defaultValue={""}
                      {...register("projectfield", inputConfig)}
                    >
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
            </div>
          </div>
          <div className="max-w-sm w-full sm:max-w-full sm:flex rounded overflow-hidden shadow-lg p-2">
            <div className=" bg-white max-w-sm w-full sm:max-w-full rounded-b sm:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Project status
                </div>
                <form className="w-full">
                  <fieldset>
                    <div className="w-full"></div>
                    <label htmlFor="projectstatus"> </label>
                    <select
                      className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                      defaultValue={""}
                      {...register("projectstatus", inputConfig)}
                    >
                      <option value={""} disabled>
                        Choose an option
                      </option>
                      <option value="not_started">Not started</option>
                      <option value="in_progress">In progress</option>
                      <option value="halted">Halted</option>
                      <option value="finished">Finished</option>
                      <option value="founding">Founding</option>
                    </select>
                  </fieldset>
                </form>
                {errorMessageStatus}
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full sm:max-w-full sm:flex rounded overflow-hidden shadow-lg p-2">
            <div className=" bg-white max-w-sm w-full sm:max-w-full rounded-b sm:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8"></div>
              <button
                onClick={handleSubmit(onSubmit)}
                className="className= bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
              >
                Create project
              </button>
            </div>
          </div>
        </div>
      </>
      <>
        {/*<div className="w-full h-full inline-block">
      <h1 className="font-bold text-3xl mb-1 p-4">Create new project</h1>
      <div className="flex flex-wrap w-11/12  bg-white mx-auto mt-8 mb-2">
        <div className="w-full"></div>
        <form className="w-full">
          <fieldset>
            <p className="text-xl mx-4 my-2 inline-block">Project name</p>
            <div className="w-full"></div>
            <label htmlFor="projectname"> </label>
            <textarea
              className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
              type="text"
              autoComplete="off"
              placeholder="Enter a name for your project here"
              {...register("projectname", inputConfig)}
            />
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
              <textarea
                className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                type="text"
                autoComplete="off"
                placeholder="Type a description here"
                {...register("projectdescription", inputConfig)}
              />
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
              <textarea
                className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                type="text"
                autoComplete="off"
                placeholder="Type a link to an image here"
                {...register("projectimageurl")}
              />
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
              <select
                className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                defaultValue={""}
                {...register("projectfield", inputConfig)}
              >
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
              <select
                className="mx-4 border my-2 w-2/6 h-12 flex-wrap px-2"
                defaultValue={""}
                {...register("projectstatus", inputConfig)}
              >
                <option value={""} disabled>
                  Choose an option
                </option>
                <option value="not_started">Not started</option>
                <option value="in_progress">In progress</option>
                <option value="halted">Halted</option>
                <option value="finished">Finished</option>
                <option value="founding">Founding</option>
              </select>
            </fieldset>
          </form>
          {errorMessageStatus}
        </div>
        <div className="flex flex-wrap w-11/12  bg-white mx-auto mb-2">
          <button
            onClick={handleSubmit(onSubmit)}
            className="text-2xl mx-4 my-2"
          >
            Create project
          </button>
        </div>*/}
      </>
    </>
  );
};

export default CreateProjectView;
