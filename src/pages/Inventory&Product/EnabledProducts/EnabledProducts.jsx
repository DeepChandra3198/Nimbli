import React, { useState } from "react";

import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../components/ImageWithBasePath";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { all_routes } from "../../Router/all_routes";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     setActivityTogglePopup,
//     setActivityTogglePopupTwo,
//     setAddTogglePopupTwo,
// } from "../../../core/data/redux/commonSlice";
import Select from "react-select";
import {
    duration,
    optionssymbol,
    priorityList,
    project,
    salestypelist,
    socialMedia,
    status,
    tagInputValues,
} from "../../../selectOption/selectOption";
import DatePicker from "react-datepicker";
import DefaultEditor from "react-simple-wysiwyg";
import CollapseHeader from "../../../components/CollapseHeader/CollapseHeader";
import DataTable from "../../../components/Table/DataTable";
// import { SelectWithImage2 } from "../../../core/common/selectWithImage2";
import { companiesData } from "../../../data/companiesData";
import "react-datepicker/dist/react-datepicker.css";

const Category = () => {
    const [activityToggle, setActivityToggle] = useState(false);
    const [activityToggleTwo, setActivityToggleTwo] = useState(false);
    const [addTogglePopupTwo, setAddTogglePopupTwo] = useState(false);

    const [newContents, setNewContents] = useState([0]);

    const addNewContent = () => {
        setNewContents([...newContents, newContents.length]);
    };

    // const addTogglePopupTwo = useSelector(
    //     (state) => state?.addTogglePopupTwo
    // );
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [selectedDate1, setSelectedDate1] = useState(new Date());
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };

    const dealsopen = [
        { value: "choose", label: "Choose" },
        { value: "collins", label: "Collins" },
        { value: "konopelski", label: "Konopelski" },
        { value: "adams", label: "Adams" },
        { value: "schumm", label: "Schumm" },
        { value: "wisozk", label: "Wisozk" },
    ];
    const activities = [
        { value: "choose", label: "Choose" },
        { value: "phoneCalls", label: "Phone Calls" },
        { value: "socialMedia", label: "Social Media" },
        { value: "referralSites", label: "Referral Sites" },
        { value: "webAnalytics", label: "Web Analytics" },
        { value: "previousPurchases", label: "Previous Purchases" },
    ];
    const industries = [
        { value: "choose", label: "Choose" },
        { value: "Retail Industry", label: "Retail Industry" },
        { value: "Banking", label: "Banking" },
        { value: "Hotels", label: "Hotels" },
        { value: "Financial Category", label: "Financial Category" },
        { value: "Insurance", label: "Insurance" },
    ];
    const languages = [
        { value: "Choose", label: "Choose" },
        { value: "English", label: "English" },
        { value: "Arabic", label: "Arabic" },
        { value: "Chinese", label: "Chinese" },
        { value: "Hindi", label: "Hindi" },
    ];
    const countries = [
        { value: "Choose", label: "Choose" },
        { value: "India", label: "India" },
        { value: "USA", label: "USA" },
        { value: "France", label: "France" },
        { value: "UAE", label: "UAE" },
    ];

    // const dispatch = useDispatch();

    // const activityToggle = useSelector(
    //     (state) => state?.activityTogglePopup
    // );
    // const activityToggleTwo = useSelector(
    //     (state) => state?.activityTogglePopupTwo
    // );

    const data = companiesData;
    const route = all_routes;
    const [stars, setStars] = useState({});

    const initializeStarsState = () => {
        const starsState = {};
        companiesData.forEach((item, index) => {
            starsState[index] = false;
        });
        setStars(starsState);
    };

    // Call initializeStarsState once when the component mounts
    React.useEffect(() => {
        initializeStarsState();
    }, []);

    const handleStarToggle = (index) => {
        setStars((prevStars) => ({
            ...prevStars,
            [index]: !prevStars[index],
        }));
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (url) => (
                <img src={url} alt="Product" style={{ width: 50, height: 50, objectFit: 'cover' }} />
            ),
        },
        {
            title: "Product",
            dataIndex: "product",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.product.localeCompare(b.product),
        },
        {
            title: "Color",
            dataIndex: "color",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.color.localeCompare(b.color),
        },
        {
            title: "Size",
            dataIndex: "size",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.size.localeCompare(b.size),
        },
        {
            title: "MRP",
            dataIndex: "mrp",
            render: (text) => <span>₹{text}</span>,
            sorter: (a, b) => a.mrp - b.mrp,
        },
        {
            title: "Sale Price",
            dataIndex: "salePrice",
            render: (text) => <span>₹{text}</span>,
            sorter: (a, b) => a.salePrice - b.salePrice,
        },
        {
            title: "Stock",
            dataIndex: "stock",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.stock - b.stock,
        },
        {
            title: "Sold By",
            dataIndex: "soldBy",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.soldBy.localeCompare(b.soldBy),
        },
        {
            title: "Categories",
            dataIndex: "categories",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.categories.localeCompare(b.categories),
        },
        {
            title: "Sort",
            dataIndex: "sort",
            render: (text) => <span>{text}</span>,
            sorter: (a, b) => a.sort - b.sort,
        },
        {
            title: "Action",
            render: (_, record) => (
                <div className="dropdown table-action">
                    <Link
                        to="#"
                        className="action-icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa fa-ellipsis-v" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                            <i className="ti ti-edit text-blue" /> Edit
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                        >
                            <i className="ti ti-trash text-danger" /> Delete
                        </Link>
                    </div>
                </div>
            ),
        },
    ];



    const initialSettings = {
        endDate: new Date("2020-08-11T12:30:00.000Z"),
        ranges: {
            "Last 30 Days": [
                new Date("2020-07-12T04:57:17.076Z"),
                new Date("2020-08-10T04:57:17.076Z"),
            ],
            "Last 7 Days": [
                new Date("2020-08-04T04:57:17.076Z"),
                new Date("2020-08-10T04:57:17.076Z"),
            ],
            "Last Month": [
                new Date("2020-06-30T18:30:00.000Z"),
                new Date("2020-07-31T18:29:59.999Z"),
            ],
            "This Month": [
                new Date("2020-07-31T18:30:00.000Z"),
                new Date("2020-08-31T18:29:59.999Z"),
            ],
            Today: [
                new Date("2020-08-10T04:57:17.076Z"),
                new Date("2020-08-10T04:57:17.076Z"),
            ],
            Yesterday: [
                new Date("2020-08-09T04:57:17.076Z"),
                new Date("2020-08-09T04:57:17.076Z"),
            ],
        },
        startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
        timePicker: false,
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <h4 className="page-title">
                                          Enabled Products<span className="count-title">12</span>
                                        </h4>
                                    </div>
                                    <div className="col-8 text-end">
                                        <div className="head-icons">
                                            <CollapseHeader />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}

                            {/* Campaign Status */}
                            <div className="row">
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-danger-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-brand-campaignmonitor" />
                                            </span>
                                            <p>Campaign</p>
                                        </div>
                                        <h2>474</h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-warning-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-send" />
                                            </span>
                                            <p>Sent</p>
                                        </div>
                                        <h2>454</h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-purple-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-brand-feedly" />
                                            </span>
                                            <p>Opened</p>
                                        </div>
                                        <h2>658</h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-success-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-brand-pocket" />
                                            </span>
                                            <p>Completed</p>
                                        </div>
                                        <h2>747</h2>
                                    </div>
                                </div>
                            </div>
                            {/* /Campaign Status */}

                            <div className="card main-card">
                                <div className="card-body">
                                    {/* Search */}
                                    <div className="search-section">
                                        <div className="row">
                                            <div
                                                className="col-md-5 col-sm-4"
                                                style={{ width: "20%" }}
                                            >
                                                <div className="form-wrap icon-form">
                                                    <span className="form-icon">
                                                        <i className="ti ti-search" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search Category"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className="col-md-7 col-sm-8"
                                                style={{ width: "80%" }}
                                            >
                                                <div className="export-list text-sm-end">
                                                    <ul>
                                                        <li>
                                                            <div className=" icon-form">
                                                                <span className="form-icon">
                                                                    <i className="ti ti-calendar" />
                                                                </span>
                                                                <DateRangePicker
                                                                    initialSettings={initialSettings}
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
                                                                    data-bs-toggle="dropdown"
                                                                    data-bs-auto-close="false"
                                                                >
                                                                    <i className="ti ti-columns-3" />
                                                                    {/* Manage Columns */}
                                                                </Link>
                                                                <div className="dropdown-menu  dropdown-menu-md-end">
                                                                    <h4>Want to manage datatables?</h4>
                                                                    <p>
                                                                        Please drag and drop your column to reorder
                                                                        your table and enable see option as you
                                                                        want.
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Name
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-name"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-name"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Phone
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-phone"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-phone"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Email
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-email"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-email"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Location
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-tag"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-tag"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Created Date
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-loc"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-loc"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Last Activity
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-rate"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-rate"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Status
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-owner"
                                                                                    className="check"
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-owner"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p>
                                                                                <i className="ti ti-grip-vertical" />
                                                                                Action
                                                                            </p>
                                                                            <div className="status-toggle">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="col-contact"
                                                                                    className="check"
                                                                                    defaultChecked={true}
                                                                                />
                                                                                <label
                                                                                    htmlFor="col-contact"
                                                                                    className="checktoggle"
                                                                                />
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
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
                                                                    to="#"
                                                                    data-bs-toggle="dropdown"
                                                                    data-bs-auto-close="false"
                                                                >
                                                                    <i className="ti ti-filter-share" />
                                                                    {/* Filter */}
                                                                </Link>
                                                                <div className="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end">
                                                                    <div className="filter-set-view">
                                                                        <div className="filter-set-head">
                                                                            <h4>
                                                                                <i className="ti ti-filter-share" />
                                                                                Filter
                                                                            </h4>
                                                                        </div>

                                                                        <div
                                                                            className="accordion"
                                                                            id="accordionExample"
                                                                        >
                                                                            <div className="filter-set-content">
                                                                                <div className="filter-set-content-head">
                                                                                    <Link
                                                                                        to="#"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#collapseTwo"
                                                                                        aria-expanded="true"
                                                                                        aria-controls="collapseTwo"
                                                                                    >
                                                                                        Country
                                                                                    </Link>
                                                                                </div>
                                                                                <div
                                                                                    className="filter-set-contents accordion-collapse collapse show"
                                                                                    id="collapseTwo"
                                                                                    data-bs-parent="#accordionExample"
                                                                                >
                                                                                    <div className="filter-content-list">
                                                                                        <div className="form-wrap icon-form">
                                                                                            <span className="form-icon">
                                                                                                <i className="ti ti-search" />
                                                                                            </span>
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control"
                                                                                                placeholder="Search Country"
                                                                                            />
                                                                                        </div>
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            defaultChecked
                                                                                                        />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>India</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>USA</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>France</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>United Kingdom</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>UAE</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Italy</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Japan</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Germany</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="filter-set-content">
                                                                                <div className="filter-set-content-head">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="collapsed"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#owner"
                                                                                        aria-expanded="false"
                                                                                        aria-controls="owner"
                                                                                    >
                                                                                        Owner
                                                                                    </Link>
                                                                                </div>
                                                                                <div
                                                                                    className="filter-set-contents accordion-collapse collapse"
                                                                                    id="owner"
                                                                                    data-bs-parent="#accordionExample"
                                                                                >
                                                                                    <div className="filter-content-list">
                                                                                        <div className="form-wrap icon-form">
                                                                                            <span className="form-icon">
                                                                                                <i className="ti ti-search" />
                                                                                            </span>
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control"
                                                                                                placeholder="Search Owner"
                                                                                            />
                                                                                        </div>
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            defaultChecked
                                                                                                        />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Hendry</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Guillory</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Jami</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Theresa</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Espinosa</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="filter-set-content">
                                                                                <div className="filter-set-content-head">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="collapsed"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#Status"
                                                                                        aria-expanded="false"
                                                                                        aria-controls="Status"
                                                                                    >
                                                                                        Status
                                                                                    </Link>
                                                                                </div>
                                                                                <div
                                                                                    className="filter-set-contents accordion-collapse collapse"
                                                                                    id="Status"
                                                                                    data-bs-parent="#accordionExample"
                                                                                >
                                                                                    <div className="filter-content-list">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            defaultChecked
                                                                                                        />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Active</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Inactive</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="filter-set-content">
                                                                                <div className="filter-set-content-head">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="collapsed"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#collapseOne"
                                                                                        aria-expanded="false"
                                                                                        aria-controls="collapseOne"
                                                                                    >
                                                                                        Rating
                                                                                    </Link>
                                                                                </div>
                                                                                <div
                                                                                    className="filter-set-contents accordion-collapse collapse"
                                                                                    id="collapseOne"
                                                                                    data-bs-parent="#accordionExample"
                                                                                >
                                                                                    <div className="filter-content-list">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            defaultChecked
                                                                                                        />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="rating">
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <span>5.0</span>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="rating">
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <span>4.0</span>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="rating">
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <span>3.0</span>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="rating">
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <span>2.0</span>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="rating">
                                                                                                    <i className="fa fa-star filled" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <i className="fa fa-star" />
                                                                                                    <span>1.0</span>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="filter-set-content">
                                                                                <div className="filter-set-content-head">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="collapsed"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#collapseThree"
                                                                                        aria-expanded="false"
                                                                                        aria-controls="collapseThree"
                                                                                    >
                                                                                        Tags
                                                                                    </Link>
                                                                                </div>
                                                                                <div
                                                                                    className="filter-set-contents accordion-collapse collapse"
                                                                                    id="collapseThree"
                                                                                    data-bs-parent="#accordionExample"
                                                                                >
                                                                                    <div className="filter-content-list">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            defaultChecked
                                                                                                        />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Promotion</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Rated</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Rejected</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Collab</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="filter-checks">
                                                                                                    <label className="checkboxs">
                                                                                                        <input type="checkbox" />
                                                                                                        <span className="checkmarks" />
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div className="collapse-inside-text">
                                                                                                    <h5>Calls</h5>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="filter-reset-btns">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="btn btn-light"
                                                                                    >
                                                                                        Reset
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <Link
                                                                                        to={route.contactList}
                                                                                        className="btn btn-primary"
                                                                                    >
                                                                                        Filter
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {/* <li>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-primary add-popup"
                                                                onClick={() =>
                                                                    setActivityToggle(!activityToggle)
                                                                }
                                                            >
                                                                <i className="ti ti-square-rounded-plus" />
                                                                Add Product
                                                            </Link>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Search */}

                                    {/* Contact List */}
                                    <div className="table-responsive custom-table">
                                        <DataTable columns={columns} dataSource={data} />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="datatable-length" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="datatable-paginate" />
                                        </div>
                                    </div>
                                    {/* /Contact List */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal custom-modal fade"
                id="delete_contact"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 m-0 justify-content-end">
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon">
                                    <i className="ti ti-trash-x" />
                                </div>
                                <h3>Remove Companies?</h3>
                                <p className="del-info">
                                    Company ”NovaWaveLLC” from your Account.
                                </p>
                                <div className="col-lg-12 text-center modal-btn">
                                    <Link
                                        to="#"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link to={route.companies} className="btn btn-danger">
                                        Yes, Delete it
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Company */}
            <div className={activityToggle ? "toggle-popup sidebar-popup" : "toggle-popup"}>
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Add New Product</h4>
                        <Link to="#" className="sidebar-close toggle-btn" onClick={() => setActivityToggle(!activityToggle)}>
                            <i className="ti ti-x" />
                        </Link>
                    </div>

                    <div className="toggle-body">
                        <form action="#" className="toggle-height">
                            <div className="pro-create">
                                <div className="accordion-lists" id="list-accord">

                                    <div className="user-accordion-item">
                                        <Link to="#" className="accordion-wrap" data-bs-toggle="collapse" data-bs-target="#product-info">
                                            <span><i className="ti ti-package" /></span>
                                            Product Info
                                        </Link>
                                        <div className="accordion-collapse collapse show" id="product-info" data-bs-parent="#list-accord">
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Title</label><input type="text" className="form-control" placeholder="Enter product title" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product SKU <span className="text-danger">*</span></label><input type="text" className="form-control" placeholder="Enter SKU" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Barcode</label><input type="text" className="form-control" placeholder="Enter barcode" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Seller</label><Select className="select" options={[]} placeholder="Select seller" classNamePrefix="react-select" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Condition</label><Select className="select" options={[{ value: 'new', label: 'New' }, { value: 'used', label: 'Used' }]} placeholder="Select condition" classNamePrefix="react-select" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product GST</label><input type="text" className="form-control" placeholder="Enter GST %" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>HSN Code</label><input type="text" className="form-control" placeholder="Enter HSN code" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>YouTube URL</label><input type="text" className="form-control" placeholder="Enter YouTube URL" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Category</label><Select className="select" options={[]} placeholder="Select category" classNamePrefix="react-select" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Brand</label><Select className="select" options={[]} placeholder="Select brand" classNamePrefix="react-select" /></div></div>
                                                    <div className="col-md-12"><div className="form-wrap"><label>Product Images (Up to 6)</label><input type="file" className="form-control" multiple /></div></div>
                                                    <div className="col-md-12"><div className="form-wrap"><label>Description & Terms</label><textarea className="form-control editor" rows="4"></textarea></div></div>
                                                    <div className="col-md-12"><div className="form-wrap"><label>Size Chart</label><textarea className="form-control editor" rows="3"></textarea></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Product Weight (g/kg)</label><input type="text" className="form-control" placeholder="Enter weight" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Dimensions (L x B x H)</label><div className="d-flex gap-2"><input type="text" className="form-control" placeholder="L" /><input type="text" className="form-control" placeholder="B" /><input type="text" className="form-control" placeholder="H" /></div></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Warranty</label><input type="text" className="form-control" placeholder="Enter warranty info" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Meta Title</label><input type="text" className="form-control" placeholder="Enter meta title" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Meta Description</label><input type="text" className="form-control" placeholder="Enter meta description" /></div></div>
                                                    <div className="col-md-6"><div className="form-wrap"><label>Meta Keywords</label><input type="text" className="form-control" placeholder="Enter meta keywords" /></div></div>
                                                    <div className="col-md-12"><div className="form-wrap"><label>Disclaimer</label><textarea className="form-control editor" rows="3"></textarea></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="submit-button text-end">
                                <Link to="#" className="btn btn-light sidebar-close" onClick={() => setActivityToggle(!activityToggle)}>
                                    Cancel
                                </Link>
                                <Link to="#" className="btn btn-primary">Create</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* /Add Company */}
            {/* Edit Company */}
            <div
                className={
                    activityToggleTwo ? "toggle-popup1 sidebar-popup" : "toggle-popup1"
                }
            >
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Edit Company</h4>
                        <Link
                            to="#"
                            className="sidebar-close1 toggle-btn"
                        // onClick={() =>
                        //     dispatch(setActivityTogglePopupTwo(!activityToggleTwo))
                        // }
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <form action="#" className="toggle-height">
                            <div className="pro-create">
                                <div className="accordion-lists" id="list-accords">
                                    {/* Basic Info */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#edit-basic"
                                        >
                                            <span>
                                                <i className="ti ti-user-plus" />
                                            </span>
                                            Basic Info
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id="edit-basic"
                                            data-bs-parent="#list-accords"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <div className="profile-upload">
                                                                <div className="profile-upload-img">
                                                                    <span>
                                                                        <i className="ti ti-photo" />
                                                                    </span>
                                                                    <ImageWithBasePath
                                                                        src="assets/img/icons/company-icon-03.svg"
                                                                        className="preview1"
                                                                        alt="img"
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="profile-remove"
                                                                    >
                                                                        <i className="ti ti-x" />
                                                                    </button>
                                                                </div>
                                                                <div className="profile-upload-content">
                                                                    <label className="profile-upload-btn">
                                                                        <i className="ti ti-file-broken" /> Upload
                                                                        File
                                                                        <input type="file" className="input-img" />
                                                                    </label>
                                                                    <p>JPG, GIF or PNG. Max size of 800K</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Company Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="NovaWave LLC"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <label className="col-form-label">
                                                                    Email <span className="text-danger">*</span>
                                                                </label>
                                                                <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                                                    <span className="me-2 label-text">
                                                                        Email Opt Out
                                                                    </span>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="user2"
                                                                        className="check"
                                                                        defaultChecked={true}
                                                                    />
                                                                    <label
                                                                        htmlFor="user2"
                                                                        className="checktoggle"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="robertson@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Phone 1 <span className="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue={1234567890}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Phone 2</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Fax <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Website <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Ratings </label>
                                                            <div className="icon-form-end">
                                                                <span className="form-icon">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="4.2"
                                                                    defaultValue="4.2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Owner</label>
                                                            <SelectWithImage2 />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Tags </label>
                                                            <input
                                                                className="input-tags form-control"
                                                                type="text"
                                                                data-role="tagsinput"
                                                                name="Label"
                                                                defaultValue="Collab"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <label className="col-form-label">Deals</label>
                                                                <Link
                                                                    to="#"
                                                                    className="label-add add-popups"
                                                                    onClick={() =>
                                                                        dispatch(
                                                                            setAddTogglePopupTwo(!addTogglePopupTwo)
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="ti ti-square-rounded-plus" />
                                                                    Add New
                                                                </Link>
                                                            </div>
                                                            <Select
                                                                className="select2"
                                                                options={dealsopen}
                                                                placeholder="Choose"
                                                                classNamePrefix="react-select"
                                                            />
                                                            {/* <select className="select2">
                            <option>Choose</option>
                            <option >Collins</option>
                            <option>Konopelski</option>
                            <option>Adams</option>
                            <option>Schumm</option>
                            <option>Wisozk</option>
                          </select> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Source <span className="text-danger">*</span>
                                                            </label>

                                                            <Select
                                                                className="select2"
                                                                options={activities}
                                                                placeholder="Choose"
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Industry <span className="text-danger">*</span>
                                                            </label>
                                                            {/* <select className="select">
                            <option>Choose</option>
                            <option>Retail Industry</option>
                            <option >Banking</option>
                            <option>Hotels</option>
                            <option>Financial Category</option>
                            <option>Insurance</option>
                          </select> */}
                                                            <Select
                                                                className="select"
                                                                options={industries}
                                                                placeholder="Banking"
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Contact <span className="text-danger">*</span>
                                                            </label>
                                                            {/* <SelectWithImage2 /> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Currency <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Language <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                className="select"
                                                                options={languages}
                                                                placeholder="English"
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap mb-0">
                                                            <label className="col-form-label">
                                                                Description{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                rows={5}
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Basic Info */}
                                    {/* Address Info */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#edit-address"
                                        >
                                            <span>
                                                <i className="ti ti-map-pin-cog" />
                                            </span>
                                            Address Info
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="edit-address"
                                            data-bs-parent="#list-accords"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Street Address
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="22, Ave Street"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">City </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Denver"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                State / Province
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Colorado"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">Country</label>
                                                            <Select
                                                                className="select"
                                                                options={countries}
                                                                placeholder="USA"
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-0">
                                                            <label className="col-form-label">Zipcode </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Address Info */}
                                    {/* Social Profile */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#edit-social"
                                        >
                                            <span>
                                                <i className="ti ti-social" />
                                            </span>
                                            Social Profile
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="edit-social"
                                            data-bs-parent="#list-accords"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Facebook</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Skype </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Linkedin{" "}
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Twitter</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">Whatsapp</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue={1234567890}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-0">
                                                            <label className="col-form-label">
                                                                Instagram
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Social Profile */}
                                    {/* Access */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#edit-access"
                                        >
                                            <span>
                                                <i className="ti ti-accessible" />
                                            </span>
                                            Access
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="edit-access"
                                            data-bs-parent="#list-accords"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="radio-wrap form-wrap">
                                                            <label className="col-form-label">
                                                                Visibility
                                                            </label>
                                                            <div className="d-flex flex-wrap">
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="edit-public"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="edit-public">Public</label>
                                                                </div>
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="edit-private"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="edit-private">Private</label>
                                                                </div>
                                                                <div
                                                                    className="radio-btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#access_view"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="edit-people"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="edit-people">
                                                                        Select People
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="radio-wrap">
                                                            <label className="col-form-label">Status</label>
                                                            <div className="d-flex flex-wrap">
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="edit-active"
                                                                        name="status"
                                                                        defaultChecked={true}
                                                                    />
                                                                    <label htmlFor="edit-active">Active</label>
                                                                </div>
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="edit-inactive"
                                                                        name="status"
                                                                    />
                                                                    <label htmlFor="edit-inactive">
                                                                        Inactive
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Access */}
                                </div>
                            </div>
                            <div className="submit-button text-end">
                                <Link to="#" className="btn btn-light sidebar-close1">
                                    Cancel
                                </Link>
                                <Link to="#" className="btn btn-primary">
                                    Create
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Company */}
            {/* Delete Company */}
            <div
                className="modal custom-modal fade"
                id="delete_contact"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 m-0 justify-content-end">
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon">
                                    <i className="ti ti-trash-x" />
                                </div>
                                <h3>Remove Companies?</h3>
                                <p className="del-info">
                                    Company ”NovaWaveLLC” from your Account.
                                </p>
                                <div className="col-lg-12 text-center modal-btn">
                                    <Link
                                        to="#"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link
                                        to={route.companies}
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Yes, Delete it
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete Company */}
            {/* Add New Deals */}
            <div
                className={
                    addTogglePopupTwo ? "toggle-popup2 sidebar-popup" : "toggle-popup2"
                }
            >
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Add New Deals</h4>
                        <Link
                            to="#"
                            className="sidebar-close2 toggle-btn"
                            onClick={() => dispatch(setAddTogglePopupTwo(!addTogglePopupTwo))}
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <form className="toggle-height">
                            <div className="pro-create">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Deal Name <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <label className="col-form-label">
                                                    Pipeine <span className="text-danger">*</span>
                                                </label>
                                            </div>
                                            <Select
                                                className="select2"
                                                options={salestypelist}
                                                placeholder="Choose"
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Status <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select2"
                                                options={status}
                                                placeholder="Choose"
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Deal Value<span className="text-danger"> *</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Currency <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select2"
                                                options={optionssymbol}
                                                placeholder="Choose"
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Period <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select2"
                                                options={duration}
                                                placeholder="Choose"
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Period Value <span className="text-danger">*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Contact <span className="text-danger">*</span>
                                            </label>
                                            {/* <SelectWithImage2 /> */}
                                        </div>
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Project <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select2"
                                                options={project}
                                                defaultValue={tagInputValues}
                                                isMulti
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Due Date <span className="text-danger">*</span>
                                            </label>
                                            <div className="icon-form">
                                                <span className="form-icon">
                                                    <i className="ti ti-calendar-check" />
                                                </span>
                                                <DatePicker
                                                    className="form-control datetimepicker deals-details"
                                                    selected={selectedDate}
                                                    onChange={handleDateChange}
                                                    dateFormat="dd-MM-yyyy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Expected Closing Date{" "}
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="icon-form">
                                                <span className="form-icon">
                                                    <i className="ti ti-calendar-check" />
                                                </span>

                                                <DatePicker
                                                    className="form-control datetimepicker deals-details"
                                                    selected={selectedDate1}
                                                    onChange={handleDateChange1}
                                                    dateFormat="dd-MM-yyyy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Assignee <span className="text-danger">*</span>
                                            </label>
                                            {/* <SelectWithImage2 /> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Follow Up Date <span className="text-danger">*</span>
                                            </label>
                                            <div className="icon-form">
                                                <span className="form-icon">
                                                    <i className="ti ti-calendar-check" />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control datetimepicker"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Source <span className="text-danger">*</span>
                                            </label>

                                            <Select
                                                className="select2"
                                                options={socialMedia}
                                                placeholder="Choose"
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Tags <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="Collab, Rated"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Priority <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select2"
                                                options={priorityList}
                                                placeholder="Choose"
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Description <span className="text-danger">*</span>
                                            </label>
                                            <DefaultEditor className="summernote" />
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-button text-end">
                                    <Link to="#" className="btn btn-light sidebar-close2">
                                        Cancel
                                    </Link>
                                    <Link to="#" className="btn btn-primary">
                                        Create
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add New Deals */}
        </>
    );
};

export default Category;
