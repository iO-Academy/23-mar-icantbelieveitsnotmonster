import './App.css';
import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
const App = () => {

    return (
        <>
            <Header/>
            <RecentJobs/>
            <DetailModal />
            <Footer />
        </>
    )
}

export default App
