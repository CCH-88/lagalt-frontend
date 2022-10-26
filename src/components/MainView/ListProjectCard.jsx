import { Link } from "react-router-dom";

function ListProjectCard({ project }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex rounded overflow-hidden shadow-lg p-2">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="A mountain"
      >
        <img
          className="w-full h-full"
          src={project.images}
          alt="project image"
        ></img>
      </div>
      <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {project.title}
          </div>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
        <div className="flex items-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {project.field}
          </span>
          <Link className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" to={`/project/${project.id}`} key={project.id}>
              <p>Go to project</p>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ListProjectCard;
