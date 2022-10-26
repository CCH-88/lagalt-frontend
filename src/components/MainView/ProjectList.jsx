import ListProjectCard from "./ListProjectCard";
import { useState, useEffect } from "react";
import SortFilteringMenu from "./SortFilteringMenu";

const baseUrl = "https://633fd672d1fcddf69caaa419.mockapi.io/api/v1";

function ProjectList({ projectsList }) {
  const [projects, setProjects] = useState([]);
  const [tempProjects, setTempProjects] = useState([]);
  let [filterTextValue, updateFilterText] = useState("all");

  useEffect(() => {
    setProjects(projectsList)
    setTempProjects(projectsList)
  }, []);

  useEffect(() => {
    if(projects.length > 0){
      setTempProjects(projects.filter(project => project.field == filterTextValue))
      if(filterTextValue == "all"){
        setTempProjects(projects)
      }
    }
  }, [filterTextValue]);

  function onFilterValueSelected(filterValue) {
    //The updatefiltertext function will update the filterValue parameter
    updateFilterText(filterValue);
  }

  return (
    <div className="p-10">
      <SortFilteringMenu
        filterValueSelected={onFilterValueSelected}
      ></SortFilteringMenu>
      
      {(tempProjects !== undefined) &&
        tempProjects.slice(0, 10).map(function (project) {
          return (
            <ul key={project.id} className="list-none">
              <li>
                <ListProjectCard project={project} />
              </li>
            </ul>
          );
        })
      }

    </div>
  );
}

export default ProjectList;
