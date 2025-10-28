import { useState } from "react";

export default function SearchBar() {
    const handleChange = (event) => {
        setPlaceholder(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const [placeholder, setPlaceholder] = useState("Enter a country!")
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={placeholder} onChange={handleChange} id="userInput"></input>
                <button id="submit">Submit</button>
            </form>
        </>
    )
}