import "./App.css"
import DetailModal from "./components/DetailModal"
import Footer from "./components/Footer"
import Header from "./components/Header"
import {useEffect, useState} from "react"
import SearchBar from "./components/SearchBar"

const App = () => {

    const [URL, setURL] = useState("/recent")
    const [displayJobs, setDisplayJobs] = useState([])
    const [data, setData] = useState({})
    const [skills, setSkills] = useState([])
    const [selectedID, setSelectedID] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searched, setSearched] = useState("")

    useEffect(() => {
        let url = "http://localhost:8080/jobs/recent"
        if (searched) {
            url = `http://localhost:8080/jobs?${searched}`
        }
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setDisplayJobs(res)
            })
    }, [searched])

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8080/jobs/" + selectedID)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skills)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            })
    }, [selectedID])


    return (
        <>
            <Header setSearched={setSearched}/>
            <SearchBar setURL={setURL}
                       URL={URL}
                       setSelectedID={setSelectedID}
                       searched={searched}
                       setSearched={setSearched}
                       displayJobs={displayJobs}
                       setDisplayJobs={setDisplayJobs}
            />
            <DetailModal data={data}
                         skills={skills}
                         loading={loading}
                         error={error}
            />
            <Footer/>
        </>
    )
}

export default App
