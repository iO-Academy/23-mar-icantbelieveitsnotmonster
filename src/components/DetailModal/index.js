import {useEffect, useState} from "react";

const JobDetail = () => {

    const [data, setData] = useState({})
    const [skills, setSkills] = useState([])

    const jobID = 412

    useEffect(() => {
        fetch('http://localhost:8080/jobs/' + jobID)
            .then (res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skills)
            })
    }, [])

    return (
        <>
            <div class="container">
            <div class="row d-flex">
            <p class="fs-5"><strong>{data.job_title} - {data.company}</strong></p>
            <button type="button" class="btn-close px-0 justify-content-end" disabled aria-label="Close"></button>
        </div>
                <hr class="py-0"></hr>
                <div class="d-flex flex-row bg-primary text-white py-4">
                    <p class="mx-4"><strong>{data.job_title}</strong></p>
            <p class="bg-success text-white rounded-pill px-1"><strong>{data.type}</strong></p>
            </div>
            <div>
                <img src={data.logo} />
                <span>{data.company}</span>
            </div>

            <h2>Key facts:</h2>

            <div>
                <p>Salary: £{data.salary ?? "Not specified"}</p>
                <p>Type: {data.type ?? "Not specified"}</p>
                <p>Date posted: {data.posted}</p>
                {
                    skills && skills.map((element, i) =>
                        <span key={i}>{element.skill} </span>
                    )
                }
                <h2>Job Description:</h2>
                <p>{data.job_description}</p>
            </div>
            </div>
        </>
    )
}
export default JobDetail