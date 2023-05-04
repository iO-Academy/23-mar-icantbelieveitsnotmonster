import "./displayjobs/jobs.css"

const DisplayJobs = ({setSelectedID, selectedID, displayJobs, setDisplayJobs}) => {

    return (
        <div className="container px-5">
            <h3 className="fw-bold py-3">Most recent jobs</h3>
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
                        const roundedSalary = job.salary ? Number(job.salary.toPrecision(2)) : ("")
                        return (
                            <tr key={key}>
                                <td scope="row">
                                    {window.innerWidth > 768 && (<img className="block" width="100" src={job.logo} alt="logo"/>)}
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
                                    {job.type ? (<button className="btn btn-primary">{job.type}</button>) : ""}
                                </td>
                                <td className="row-span-2">
                                    {roundedSalary ? `£${roundedSalary}` : ""}
                                </td>
                                <td className="row-span-2">
                                    {job.skills.map((skill, index) => {
                                        return (
                                            <button key={index} className="btn btn-secondary">
                                                {skill.skill}
                                            </button>
                                        )
                                    })}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayJobs
