import ListProjectCard from "./ListProjectCard";

function ProjectList() {
    return (
       <div className="p-10">
       
        <ul className="list-none">
            <li>
                <ListProjectCard />
            </li>
            
            <li>
                <ListProjectCard />
            </li>
            
            <li>
                <ListProjectCard />
            </li>
        </ul>

    </div>
    );
}

export default ProjectList;
