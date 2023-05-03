import './App.css';
import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import Example from "./components/Example";

const App = () => {

    return (
        <>
            <Header/>
            <RecentJobs/>
            <DetailModal />
            <Example />
            <Footer />
        </>
    )
}

export default App
