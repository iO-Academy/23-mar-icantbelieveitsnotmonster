const Header = ({setSearched, setFullTimeChecked, setPartTimeChecked, setContractsChecked}) => {

    const handleAllJobsButton = (e) => {
        setFullTimeChecked(true);
        setPartTimeChecked(true);
        setContractsChecked(true);
        setSearched(e.target.getAttribute("data-query"))

        document.querySelector('input').value = ""
    }
    const handleFullTimeButton = (e) => {
        setFullTimeChecked(true);
        setPartTimeChecked(false);
        setContractsChecked(false);
        setSearched(e.target.getAttribute("data-query"))

        document.querySelector('input').value = ""
    }
    const handlePartTimeButton = (e) => {
        setPartTimeChecked(true);
        setFullTimeChecked(false);
        setContractsChecked(false);
        setSearched(e.target.getAttribute("data-query"))

        document.querySelector('input').value = ""
    }
    const handleContractsButton = (e) => {
        setContractsChecked(true);
        setFullTimeChecked(false);
        setPartTimeChecked(false);
        setSearched(e.target.getAttribute("data-query"))

        document.querySelector('input').value = ""
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">JobSearch</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleAllJobsButton} data-query=" ">All Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleFullTimeButton} data-query="type[]=Full time">Full time</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handlePartTimeButton} data-query="type[]=Part time">Part time</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleContractsButton} data-query="type[]=Contract">Contract</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success invisible" type="submit">Post a job</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
