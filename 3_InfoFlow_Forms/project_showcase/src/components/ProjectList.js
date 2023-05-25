import ProjectCard from "./ProjectCard"
import { useState } from "react"

function ProjectList({ projects, search, handleChange }) {
    // const [search, setSearch] = useState("")

    const filteredProjects = projects.filter((individualProject) => {
        if (search === "all") {
            return true
        }

        if (individualProject.name.toLowerCase().includes(search.toLowerCase()) || individualProject.about.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
    })

    const projectsCards = filteredProjects.map(individualProject => {
        return <ProjectCard key={individualProject.id} project={individualProject} />
    })


    return (
        <>
            <h3>Search</h3>
            <input onChange={(e) => handleChange(e.target.value)} value={search}></input>
            <ul className="cards">{projectsCards}</ul>

        </>
    )
}
export default ProjectList