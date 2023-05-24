import ProjectCard from "./projectCard"
import { useState } from "react"

function ProjectList({ projects }) {
    const [search, setSearch] = useState("")

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

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <>
            <h3>Search</h3>
            <input onChange={handleChange}></input>
            <ul className="cards">{projectsCards}</ul>

        </>
    )
}
export default ProjectList
