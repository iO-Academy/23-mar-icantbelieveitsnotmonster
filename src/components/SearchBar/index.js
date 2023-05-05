import "./index.css"
import DisplayJobs from "../DisplayJobs"
import React, { useState } from "react"

const Search = ({ setURL, URL, setSelectedID, displayJobs, setDisplayJobs, searched, setSearched }) => {

    const [fullTimeChecked, setFullTimeChecked] = useState(false)
    const [partTimeChecked, setPartTimeChecked] = useState(false)
    const [contractsChecked, setContractsChecked] = useState(false)
    const [jobFilter, setJobFilter] = useState("")
    const [filterApplied, setFilterApplied] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!fullTimeChecked && !partTimeChecked && !contractsChecked){
            setFilterApplied(false)
            setSearched(searched + " ")
        } else if (fullTimeChecked && !partTimeChecked && !contractsChecked){
            setFilterApplied(true)
            setJobFilter("Full time")
        } else if (fullTimeChecked && partTimeChecked && !contractsChecked){
            setFilterApplied(true)
            setJobFilter("Full time Part time")
        } else if (fullTimeChecked && partTimeChecked && contractsChecked) {
            setFilterApplied(true)
            setJobFilter("Full time Part time Contract")
        } else if (!fullTimeChecked && partTimeChecked && !contractsChecked){
            setFilterApplied(true)
            setJobFilter("Part time")
        } else if (!fullTimeChecked && partTimeChecked && contractsChecked) {
            setFilterApplied(true)
            setJobFilter("Part time Contract")
        } else if (fullTimeChecked && !partTimeChecked && contractsChecked) {
            setFilterApplied(true)
            setJobFilter("Full time Contract")
        } else {
            setFilterApplied(true)
            setJobFilter("Contract")
        }
        setSearched(`search=${URL}`)
    }

    const handleInputChange = (e) => {
        setURL(e.target.value)
    }

    const handleFullTimeChange = (e) => {
        setFullTimeChecked(e.target.checked)
    }

    const handlePartTimeChange = (e) => {
        setPartTimeChecked(e.target.checked)
    }

    const handleContractsChange = (e) => {
        setContractsChecked(e.target.checked)
    }

    return (
        <>
            <div className="container-fluid searchBar p-4 mb-4 mt-5">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <p className="fs-1 my-2 mx-auto">Find your perfect job</p>
                        <div className="col-12">
                            <input
                                className="form-control mx-auto col-12"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="Full Time"
                                checked={fullTimeChecked}
                                onChange={handleFullTimeChange}
                            >
                            </input>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                Full time
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="Part Time"
                                checked={partTimeChecked}
                                onChange={handlePartTimeChange}
                            ></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                Part time
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox3"
                                value="Contracts"
                                checked={contractsChecked}
                                onChange={handleContractsChange}
                            ></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">
                                Contracts
                            </label>
                        </div>
                        <div className="col-sm-1 col-md-1">
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <DisplayJobs setURL={setURL}
                         URL={URL}
                         searched={searched}
                         setSelectedID={setSelectedID}
                         setSearched={setSearched}
                         displayJobs={displayJobs}
                         setDisplayJobs={setDisplayJobs}
                         fullTimeChecked={fullTimeChecked}
                         partTimeChecked={partTimeChecked}
                         contractsChecked={contractsChecked}
                         jobFilter={jobFilter}
                         setJobFilter={setJobFilter}
                         filterApplied={filterApplied}
                         setFilterApplied={setFilterApplied}
            />
        </>
    )
}

export default Search
