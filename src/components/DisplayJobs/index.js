import "bootstrap-icons/font/bootstrap-icons.css"
import "./index.css"

const DisplayJobs = ({setSelectedID,  searched, setSearched, displayJobs, jobFilter, setJobFilter, filterApplied, setFilterApplied}) => {


    const heading = searched ? "Search results" : "Most recent jobs"

    const handleBackToRecentJobs = () => {
        setSearched("")
        document.querySelector("input").value = ""
        setFilterApplied(false)
    }

    const changeJobFilter = (e) => {
        setJobFilter(e)
        setFilterApplied(true)
        setSearched(searched + " ")
    }


    return (
        <div className="container px-5">
            <div className="d-flex justify-content-between">
                <h3 className="fw-bold py-3">{heading}</h3>
                {searched && <button onClick={handleBackToRecentJobs} className="btn-block text-primary bg-transparent border-0 fw-bold"> View most recent jobs <i className="bi bi-arrow-right" ></i> </button>}
            </div>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th className="col-5" colSpan="2" scope="col">
                        Job Title/ Company
                    </th>
                    <th className="col-2" scope="col">
                        Type
                    </th>
                    <th className="col-2" scope="col">
                        Salary
                    </th>
                    <th className="col-3" scope="col">
                        Skills
                    </th>
                </tr>
                </thead>
                <tbody>
                {displayJobs.map((job, key) => {
                    const roundedSalary = job.salary ? Number(job.salary.toPrecision(2)).toLocaleString() : ""
                    if (jobFilter.includes(job.type) || filterApplied === false) {
                        return (
                            <tr key={key}>
                                <td scope="row">
                                    {window.innerWidth > 768 && (
                                        <img className="block" width="100" src={job.logo} alt={job.company + " logo"} />
                                    )}
                                </td>
                                <td>
                                    <p
                                        className="h4 jobLink"
                                        id={job.id}
                                        data-bs-toggle="modal"
                                        data-bs-target="#jobDetails"
                                        onClick={() => setSelectedID(job.id)}
                                    >
                                        {job.job_title}
                                    </p>
                                    <p>{job.company}</p>
                                </td>
                                <td className="row-span-2">
                                    {job.type ? (
                                        <button className="btn btn-primary" onClick={() => changeJobFilter(job.type)}>{job.type}</button>
                                    ) : (
                                        ""
                                    )}
                                </td>
                                <td className="row-span-2">
                                    {roundedSalary ? `£${roundedSalary}` : ""}
                                </td>
                                <td className="row-span-2">
                                    {job.skills.map((skill, index) => {
                                        return (
                                            <span key={index}>
                                            <button className="btn btn-secondary mb-1">
                                                {skill.skill}
                                            </button>
                                            <span> </span>
                                        </span>
                                        )
                                    })}
                                </td>
                            </tr>
                        )}
                    else return (<tr key={key}></tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayJobs
