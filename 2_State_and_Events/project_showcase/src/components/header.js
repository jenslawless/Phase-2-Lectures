import { useState } from "react";


function Header() {
    const [mode, setMode] = useState(true)

    // two options on how to do this. Commented out code is another option.

    // const [mode, setMode] = useState("Dark Mode")
    // function handleClick() {
    //     console.log("click")
    //     if (mode === "Dark Mode") {
    //         setMode("Light Mode")
    //     } else {
    //         setMode("Dark Mode")
    //     }
    // }

    function handleClick() {
        setMode(!mode)
    }

    return (
        <>
            <div>Header</div>
            {mode ? <button className={"Dark"} onClick={() => setMode(!mode)}>Dark</button> : <button className={"Light"} onClick={handleClick}>Light</button>}
            {/* /* // <button onClick={handleClick} >{mode}</button> */}
        </>
    )
}

export default Header