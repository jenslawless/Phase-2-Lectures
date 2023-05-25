import { useState } from "react";

function ProjectForm({ addToProject }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [phase, setPhase] = useState("")

    function submit(e) {
        e.preventDefault()
        const newProject = {
            name: name,
            about: description,
            phase: phase
        }
        setName("")
        setDescription("")
        setPhase("")
        addToProject(newProject)
    }

    return (
        <form className="form" onSubmit={submit}>
            <label>Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name}></input>
            <label>Description</label>
            <input onChange={(e) => setDescription(e.target.value)} value={description}></input>
            <label>Phase</label>
            <input onChange={(e) => setPhase(e.target.value)} value={phase}></input>
            <button type="submit" onClick={submit}>Button</button>
        </form >
    )
}

export default ProjectForm