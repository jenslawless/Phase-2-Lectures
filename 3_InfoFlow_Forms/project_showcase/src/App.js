import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("")
  const [mode, setMode] = useState(true)
  const [projects, setProjects] = useState([])

  function fetchData() {
    fetch("http://localhost:4000/projects")
      .then(r => r.json())
      .then(data => setProjects(data))
  }

  function handleChange(searchValue) {
    setSearch(searchValue)
  }

  function handleClick() {
    setMode(!mode)
  }

  function addToProject(newData) {
    const newArray = [...projects, newData]
    console.log(newArray)

    setProjects(newArray)
  }
  console.log(projects)

  return (
    <div className="App">
      <Header mode={mode} handleClick={handleClick} fetchData={fetchData} />
      <ProjectForm addToProject={addToProject} />
      <ProjectList search={search} projects={projects} handleChange={handleChange} />
    </div>
  );
}

export default App;
