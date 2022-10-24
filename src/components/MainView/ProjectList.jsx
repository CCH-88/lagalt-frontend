import ListProjectCard from "./ListProjectCard";
import { useState, useEffect } from "react";
import SortFilteringMenu from "./SortFilteringMenu";

const baseUrl = "https://633fd672d1fcddf69caaa419.mockapi.io/api/v1";

function ProjectList() {
  const [projects, setProject] = useState([]);
  let [filterTextValue, updateFilterText] = useState("all");

  //The filter function is going to loop over each element in the projects array.
  //... and for each element in the array it is going to pass the current element to the callback-function

  let filteredProjectList = projects.filter(function (project) {
    /*witch (field) {
      case music:
        return console.log("inside music...");
      //return project.field === 'music'
      case film:
        return console.log("inside film...");
      //return project.field === 'film'
      case gamedev:
        return console.log("inside gamedev...");
      //return project.field === 'gamedev'
      case webdev:
        return console.log("inside webdev...");
      //return project.field === 'webdev'
      case all:
        return console.log("inside all");
      //return project.field === 'all'        
      default:
        break;*/
    if (filterTextValue === "music") {
      return console.log("inside music...");
      //return project.field === 'music'
    } else if (filterTextValue === "film") {
      return console.log("inside film...");
      //return project.field === 'film'
    } else if (filterTextValue === "gamedev") {
      return console.log("inside gamedev...");
      //return project.field === 'gamedev'
    } else if (filterTextValue === "webdev") {
      return console.log("inside webdev...");
      //return project.field === 'webdev'
    } else {
      return console.log("inside all");
      //return project.field === 'all'
    }});

  //Should be changed so that the fetch is moved to the api file: project.js - like the other ones
  useEffect(() => {
    fetch(baseUrl + "/project")
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function onFilterValueSelected(filterValue) {
    //The updatefiltertext function will update the filterValue parameter
    updateFilterText(filterValue);
  }

  return (
    <div className="p-10">
      <SortFilteringMenu
        filterValueSelected={onFilterValueSelected}
      ></SortFilteringMenu>

      {/* starts by showing the first three in the project array*/}
      {projects.slice(0, 3).map(function () {
        return (
          <ul className="list-none">
            <li>
              <ListProjectCard project={filteredProjectList} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ProjectList;
