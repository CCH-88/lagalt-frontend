import { checkProject, insertProject } from "../../api/project";
import { storageSave } from "../../utils/storage";
//import {  } from 'react-router-dom';
import { useState, useEffect } from "react";

/*async function onLoad() {
  const [error, projectName] = await insertProject();
  
  //Local state
  //If something went wrong while fetching data....
  const [ apiError, setApiError ] = useState(null);
  
  
  if(error !== null){    
    //setApiError = error;
    setApiError(error)
    console.log(setApiError);
  }
  if(projectName !== null){
    storageSave('aProject', projectName)
  }

  console.log('Error', error);
  console.log('Project name', projectName);
}*/

function TopProjects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://633fd672d1fcddf69caaa419.mockapi.io/api/v1/project")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {posts.map(function (post) {
        return (
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src={post.images}
                alt="Forest"
              ></img>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.name}</div>
                <p className="text-gray-700 text-base">{post.description}</p>
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
          </div>
        );
      })}
    </div>
  );
}
export default TopProjects;
