const Header = () => {
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
                            <a className="nav-link active" href="#">All Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Full time</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Part time</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contract</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success" type="submit">Post a job</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
