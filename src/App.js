import './App.css';
import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import {useState} from "react";

const App = () => {
    const [URL, setURL] = useState('/recent')
    const [selectedID, setSelectedID] = useState(null)

    return (
        <>
            <Header/>
            <SearchBar setURL={setURL} URL={URL} setSelectedID={setSelectedID}/>
            <DetailModal selectedID={selectedID} />
            <Footer />
        </>
    )
}

export default App