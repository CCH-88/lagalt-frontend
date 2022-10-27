import { Link } from "react-router-dom";

const randomPicture = () => {
  let randomNumber;

  randomNumber = Math.floor(Math.random() * 100);

  let aRandomPicture = "https://loremflickr.com/640/480/cat?random=" + randomNumber;

  return aRandomPicture;
};

function ListProjectCard({ project }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex rounded overflow-hidden shadow-lg p-2">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="A mountain"
      >
        <img
          className="w-full h-full"
          src={randomPicture()} //Hardcoded temporarily for presentation. Insert the following when db allows for links... project.projectImages[0]
          alt="project image"
        ></img>
      </div>
      <div className=" bg-white max-w-sm w-full lg:max-w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {project.name}
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
