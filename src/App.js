import './App.css'
import Footer from "./components/Footer"
import RecentJobs from "./components/RecentJobs"
import Header from "./components/Header"
import {useEffect, useState} from "react";

const App = () => {

    const [getJobs, setGetJobs] = useState([])
    const [URL, setURL] = useState('/recent')

    useEffect( () => {
        fetch("http://localhost:8080/jobs" + URL)
            .then((res) => res.json())
            .then((res) => {
                setGetJobs(res)
            })
    }, [URL])

    return (
        <>
            <Header/>
            <RecentJobs
                getJob={getJobs}
                setGetJobs={setGetJobs}
                URL={URL}
                setURL={setURL}
            />
            <Footer />
        </>
    )
}

export default App
