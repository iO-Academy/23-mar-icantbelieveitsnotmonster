import "./App.css"
import DetailModal from "./components/DetailModal"
import Footer from "./components/Footer"
import DisplayJobs from "./components/DisplayJobs"
import Header from "./components/Header"
import {useEffect, useState} from "react"

const App = () => {

    const [URL, setURL] = useState("/recent")
    const [displayJobs, setDisplayJobs] = useState([])
    const [data, setData] = useState({})
    const [skills, setSkills] = useState([])
    const [selectedID, setSelectedID] = useState(1)

    useEffect(() => {
        fetch("http://localhost:8080/jobs" + URL)
            .then((res) => res.json())
            .then((res) => {
                setDisplayJobs(res)
            })
    }, [URL])

    useEffect(() => {
        fetch("http://localhost:8080/jobs/" + selectedID)
            .then (res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skills)
            })
    }, [selectedID])


    return (
        <>
            <Header/>
            <DisplayJobs displayJobs={displayJobs} setDisplayJobs={setDisplayJobs}
                         selectedID={selectedID} setSelectedID={setSelectedID}/>
            <DetailModal data={data} setData={setData}
                         skills={skills} setSkills={setSkills}
                         selectedID={selectedID}/>
            <Footer />
        </>
    )
}

export default App
