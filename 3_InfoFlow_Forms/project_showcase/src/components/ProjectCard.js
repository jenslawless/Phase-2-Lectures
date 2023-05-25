import React from "react"

function ProjectCard({ project, search, setSearch }) {
    const { id, name, about, phase, link, image } = project
    function click() {
        setSearch("")
    }
    return (
        <li className="card">
            <h3>{name}</h3>
            <p>Search: {search} </p>
            {phase ? <p>Phase: {phase}</p> : <p>Personal Project</p>}
            <p>{about}</p>
            <button onClick={click}>Click Me</button>
        </li>)
}
export default ProjectCard