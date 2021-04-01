import axios from "axios"
import { useState, useEffect } from 'react'
const Character = () => {
    const [character, setCharacter] = useState("");
    useEffect(() => {
        handleCharacter()
    })
    const handleCharacter = async () => {
        const request = await axios.get("https://api.airtable.com/v0/appE359GJEcWZjHe1/Character%20Name", { headers: { "Authorization": "Bearer keycIFhj2MvhDa2Us" } })
        setCharacter(request.data.records[0].fields.Name)
        console.log(request)
    }
    return (
        <div>{character}</div>
    )
}
export default Character