import { useState, useEffect } from "react";

//const baseUrl = "http://localhost:8080/api/v1";

function TopProjects() {
  const [projects, setProject] = useState([]);

  //Should be changed so that the fetch is moved to the api file: project.js - like the other ones
  useEffect(() => {
    fetch(
      "http://localhost:8080/api/v1/projects", {
      mode: `no-cors`})
      .then(function (response) {
        console.log("This is the repsonse: " +  JSON.stringify(response));
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setProject(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {projects.slice(0, 3).map(function (project) {
        return (
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src={project.images}
                alt="Picture could not load"
              ></img>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #fall
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TopProjects;
