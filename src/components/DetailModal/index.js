import React, {useState, useEffect} from 'react'

const DetailModal = () => {

    const [data, setData] = useState({})
    const [skills, setSkills] = useState([])

    const jobID = 295

    useEffect(() => {
        fetch('http://localhost:8080/jobs/' + jobID)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skills)
            })
    }, [])


    return (
        <>
            <div class="container">

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title fs-6" id="exampleModalLabel">
                                    <strong>{data.job_title} - {data.company}</strong></p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">

                                    <div
                                        className="d-flex flex-sm-column flex-lg-row align-items-start bg-primary text-white py-5 fs-4">
                                        <p className="mx-4"><strong>{data.job_title}</strong></p>
                                        <p className="bg-success text-white rounded-pill px-3 mx-sm-4 mx-lg-0">
                                            <strong>{data.type}</strong>
                                        </p>
                                    </div>

                                    <div class="border border-5 border-light p-3">

                                        <div className="row mx-auto">
                                            <div class="col-1 p-0"><img src={data.logo} class="mw-100"/></div>
                                            <p class="col-11 m-0 align-self-center"><strong>{data.company}</strong></p>
                                        </div>

                                        <h2 class="fs-5 pt-2">Key facts:</h2>

                                        <table class="table table-borderless table-sm">

                                            <thead>
                                            <tr className="align-top">
                                                <td scope="col">Salary:</td>
                                                <td scope="col">Type:</td>
                                                <td scope="col">Date posted:</td>
                                                <td scope="col">Skills:</td>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>£{data.salary ? data.salary.toLocaleString() : "Not specified"}</td>
                                                <td>{data.type ? data.type.replace(' ', '\u00A0') : "Not specified"}</td>
                                                <td>{new Date(data.posted).toLocaleDateString()}</td>
                                                <td>
                                                    {skills && skills.map((element, i) =>
                                                        <>
                                                            <span
                                                                className="rounded bg-info text-white py-0 px-1 fw-bold"
                                                                key={i}>{element.skill}
                                                            </span>
                                                            <span> </span>
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <h2>Job Description:</h2>
                                        <p>{data.job_description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailModal
