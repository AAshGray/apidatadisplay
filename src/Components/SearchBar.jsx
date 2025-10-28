import { useState } from "react";

export default function SearchBar() {
    const handleChange = (event) => {
        setPlaceholder(event.target.value);
    };
    const [placeholder, setPlaceholder] = useState("Enter a country!")
    return(
        <>
            <input type="text" value={placeholder} onChange={handleChange}></input>
        </>
    )
}