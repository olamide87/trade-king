import { useState, useEffect } from "react"
import finnHub from "../components/apis/finnHub"

export const AutoComplete = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    const renderDropdown = () => {
        const dropDownClass = search ? "show" : null
        return (
            <ul className={`dropdown-menu ${dropDownClass}`}>
                {results.map((result) => {
                    return (
                        <li className="dropdown-item">{result.description}
                        ({result.symbol})</li>
                    )
                })}
            </ul>
        )
    }

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/search", {
                    params: {
                        q: search
                    }
                })
                
                if(isMounted) {
                    setResults(response.data)
                }
                
            } catch (err) {

            }
        }
            if (search.length > 0) {
        fetchData()
        } else {
            setResults([])
        }
        return () => (isMounted = false)
        
    }, [search])

    return <div className="w-50 p-5 rounded mx-auto">
        <div className="form-floating dropdown">
            <input style={{ backgroundColor: "rgba(145, 158, 171, 0.04)"}} 
            id="search" type="text" className="form-control" placeholder="Search" 
            autoComplete="off" value={search} onChange={(e) =>
             setSearch(e.target.value)}></input>
                <label htmlFor="search">Search</label>
                {renderDropdown()}
                
         </div>
        </div>
}