import axios from "axios"
import {useState,useEffect} from 'react'
const Item = (props) => {
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        handleItem()
    })
    const handleItem = async () => {
        const request = await axios.get("https://api.airtable.com/v0/appE359GJEcWZjHe1/Character%20Talent%20Material",{headers: {"Authorization" : "Bearer keycIFhj2MvhDa2Us"}})
        setItem(request.data.records[props.num].fields.ItemName)
    }
    return (
        <div>
            <p className="bg-primary mr-auto text-white">{item}</p>
        </div>
    )
}
export default Item