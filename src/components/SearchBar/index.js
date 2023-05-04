import './index.css';
import { useState } from 'react';
import RecentJobs from '../RecentJobs';

const SearchBar = ({ setURL, URL, setSelectedID }) => {
    const [searched, setSearched] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let query = '';
        if (selectedJobType) {
            query = `type=${selectedJobType}&`;
        }
        setSearched(`${query}search=${URL}`);
    };

    const handleInputChange = (e) => {
        setURL(e.target.value);
    };

    const handleJobTypeChange = (e) => {
        if (e.target.checked) {
            setSelectedJobType(e.target.value);
        } else {
            setSelectedJobType(null);
        }
    }

    return (
        <>
            <div className="container-fluid searchBar p-4 mb-4">
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
                            />
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="FullTime"
                                checked={selectedJobType === 'FullTime'}
                                onChange={handleJobTypeChange}
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                Full time
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="PartTime"
                                checked={selectedJobType === 'PartTime'}
                                onChange={handleJobTypeChange}
                            />
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
                                checked={selectedJobType === 'Contracts'}
                                onChange={handleJobTypeChange}
                            />
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
            <RecentJobs URL={URL} searched={searched} setSelectedID={setSelectedID} />
        </>
    );
};

export default SearchBar;
