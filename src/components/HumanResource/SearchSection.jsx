import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import DateRangePicker from "react-bootstrap-daterangepicker";
import ManageColumns from "./ManageColumns";

const SearchSection = ({
    togglePopup,
    onManageColumns,
    manageColumns,
    setFilterSlider,
    filterByObj,
    setFilterByObj,
    fetchData

}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [manageColumnsSlider, setManageColumnsSlider] = useState(false);

    // console.log('manageColumnsSlider =>', manageColumnsSlider);

    const handleManageColumns = (name) => {
        onManageColumns((prev) => ({
            ...prev,
            [name]: !prev[name]
        }))
    }

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);


    const initialSettings = {
        endDate: today, // Set current date as the endDate
        ranges: {
            "Last 30 Days": [
                new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30),
                today,
            ],
            "Last 7 Days": [
                new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
                today,
            ],
            "Last Month": [
                new Date(today.getFullYear(), today.getMonth() - 1, 1), // First day of last month
                new Date(today.getFullYear(), today.getMonth(), 0), // Last day of last month
            ],
            "This Month": [
                new Date(today.getFullYear(), today.getMonth(), 1), // First day of current month
                today,
            ],
            Today: [today, today], // Set today as the default range
            Yesterday: [yesterday, yesterday], // Set yesterday as the default range
        },
        startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7), // Default to "Last 7 Days"
        timePicker: false,
    };

    const handleApply = (event, picker) => {
        const start = picker.startDate.format('YYYY-MM-DD HH:mm:ss.SSS');
        const end = picker.endDate.format('YYYY-MM-DD HH:mm:ss.SSS');

        setFilterByObj((...prev) => ({
            ...prev,
            from: start ? start : "",
            to: end
        }))
    }

    useEffect(() => {
        setFilterByObj({
            ...filterByObj,
            search: debouncedTerm,
        });
    }, [debouncedTerm]);


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);

        // Cleanup previous timeout
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]); // Runs when searchTerm changes

    useEffect(() => {
        if (filterByObj.from) {
            fetchData()
        }
        fetchData()
    }, [filterByObj])

    return <div className="search-section">
        <div className="row">
            <div className="col-md-5 col-sm-4" style={{ marginTop: "2px" }}>
                <div className="form-wrap icon-form">
                    <span className="form-icon">
                        <i className="ti ti-search" />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Staff"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="col-md-7 col-sm-8">
                <div className="export-list text-sm-end">
                    <ul>
                        <li>
                            <div className=" icon-form">
                                <span className="form-icon">
                                    <i className="ti ti-calendar" />
                                </span>
                                <DateRangePicker
                                    initialSettings={initialSettings}
                                    onApply={handleApply}
                                >
                                    <input
                                        className="form-control bookingrange"
                                        type="text"
                                    />
                                </DateRangePicker>
                            </div>
                        </li>
                        <li>
                            <div className="manage-dropdwon">
                                <Link
                                    to="#"
                                    className="btn btn-purple-light"
                                    onClick={() => { setManageColumnsSlider(true) }}
                                >
                                    <i className="ti ti-columns-3" />
                                </Link>
                                <ManageColumns
                                    handleManageColumns={handleManageColumns}
                                    manageColumns={manageColumns}
                                    manageColumnsSlider={manageColumnsSlider}
                                    setManageColumnsSlider={setManageColumnsSlider}
                                />
                            </div>
                        </li>

                        <li>
                            <div className="export-dropdwon ">
                                <Link
                                    to="#"
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="ti ti-package-export" />
                                    {/* Export */}
                                </Link>
                                <div className="dropdown-menu  dropdown-menu-end">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="ti ti-file-type-pdf text-danger" />
                                                Export as PDF
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="ti ti-file-type-xls text-green" />
                                                Export as Excel{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="form-sorts dropdown">
                                <Link
                                    onClick={() => { setFilterSlider(prev => !prev) }}
                                >
                                    <i className="ti ti-filter-share" />
                                </Link>
                            </div>
                        </li>
                      
                        <li>
                            <Link
                                to="#"
                                className="btn btn-primary add-popup"
                                onClick={() => togglePopup(false)}
                            >
                                <i className="ti ti-square-rounded-plus" />
                                Add Staff
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default SearchSection