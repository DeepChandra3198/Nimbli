import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { all_routes } from "../../pages/Router/all_routes";
import CollapseHeader from "../CollapseHeader/CollapseHeader";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosPerson } from "react-icons/io";
import CreditScoreChart from "./CreditScoreChart";

const CusCibilDet = ({ togglePopup }) => {
  const route = all_routes;
  const [activityToggle, setActivityToggle] = useState(false);
  const [activityToggleTwo, setActivityToggleTwo] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [owner, setOwner] = useState(["Collab"]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  //   Tabel
  const tableData = [
    {
      col1: "Total Accounts",
      col2: "1",
      col3: "2",
      col4: "5",
      col5: "1",
      col6: "1",
      col7: "2",
      col8: "12",
    },
    {
      col1: "Live Account",
      col2: "1",
      col3: "1",
      col4: "3",
      col5: "1",
      col6: "1",
      col7: "3",
      col8: "10",
    },
    {
      col1: "Principle Outstanding",
      col2: "10000000",
      col3: "120000",
      col4: "1500000",
      col5: "1600000",
      col6: "20000000",
      col7: "1400000",
      col8: "34620000",
    },
    {
      col1: "Settled Ever(Y/N)",
      col2: "N",
      col3: "N",
      col4: "N",
      col5: "N",
      col6: "N",
      col7: "N",
      col8: "0",
    },
    {
      col1: "30+ DPD (3 Months)",
      col2: "1",
      col3: "0",
      col4: "0",
      col5: "0",
      col6: "0",
      col7: "0",
      col8: "1",
    },
    {
      col1: "60+ DPD (3 Months)",
      col2: "2",
      col3: "2",
      col4: "2",
      col5: "2",
      col6: "2",
      col7: "2",
      col8: "12",
    },
    {
      col1: "Inquries 30 Days",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
    },
    {
      col1: "Inquries 60 Days",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
    },
    {
      col1: "Inquries 90 Days",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
    },
  ];
  // pincode
  const [pinCode, setPinCode] = useState("");
  const options = [
    { value: "110001", label: "110001" },
    { value: "110002", label: "110002" },
    { value: "110003", label: "110003" },
    { value: "203205", label: "203205" },
  ];

  const handlePinCodeChange = (value) => {
    if (/^\d*$/.test(value)) {
      setPinCode(value);
    }
  };

  return (
    <Fragment>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col-sm-4">
                    <h4 className="page-title">Customer CIBIL Check</h4>
                  </div>
                  <div className="col-sm-8 text-sm-end">
                    <div className="head-icons">
                      <CollapseHeader />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Contact User */}
              <div className="contact-head">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <ul className="contact-breadcrumb">
                      <li>
                        <Link to={route.creditscore}>
                          <i className="ti ti-arrow-narrow-left" />
                          History
                        </Link>
                      </li>
                      <li>DIVAKAR SINGH LODHI</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    <div className="contact-pagination">
                      <p>1 of 40</p>
                      <ul>
                        <li>
                          <Link to={route.companyDetails}>
                            <i className="ti ti-chevron-left" />
                          </Link>
                        </li>
                        <li>
                          <Link to={route.companyDetails}>
                            <i className="ti ti-chevron-right" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-wrap">
                <div className="contact-profile">
                  <div className="avatar company-avatar">
                    <IoIosPerson
                      style={{
                        height: "100%",
                        width: "100%",
                        color: "#9d9b9b",
                      }}
                    />
                  </div>
                  <div className="name-user">
                    <h5>DIVAKAR SINGH LODHI</h5>
                    <h5>PAN-CAAPD1112A</h5>
                  </div>
                </div>
                <div className="contacts-action">
                  <Link to="#" className="btn-icon rating">
                    <i className="fa-solid fa-star" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_compose"
                  >
                    <i className="ti ti-mail" />
                    Share Consent Link
                  </Link>
                  <div className="act-dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_contact"
                      >
                        <i className="ti ti-trash text-danger" />
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Contact User */}
            </div>
            {/* Contact Sidebar */}
            <div className="col-xl-3 theiaStickySidebar">
              <div className="stickybar">
                <div className="contact-sidebar">
                  <div className="d-flex justify-content-between">
                    <h6>Basic Information</h6>
                    <div className="tabler-icon">
                      <i className="ti ti-edit"></i>
                      <Link
                        to="#"
                        className="add-popup"
                        onClick={() => setActivityToggle(!activityToggle)}
                      >
                        <strong>Edit</strong>
                      </Link>
                    </div>
                  </div>

                  <ul className="basic-info">
                    <li>
                      <p>Name- DIVAKAR SINGH LODHI</p>
                    </li>
                    <li>
                      <p>Mobile No- +917484895765</p>
                    </li>
                    <li>
                      <p>Email- devraj4yOj4@gmail.com</p>
                    </li>
                    <li>
                      <p>DOB- 12/12/2023</p>
                    </li>
                    <li>
                      <p>Address- Saray JHajhan</p>
                    </li>
                    <li>
                      <p>Pincode- 354110</p>
                    </li>
                    <li>
                      <p>State- Uttar Pradesh</p>
                    </li>
                    <li>
                      <p>City- Noida</p>
                    </li>
                    <li>
                      <p>PAN- CAAPD1112A</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Contact Sidebar */}
            {/* Contact Details */}
            <div className="col-xl-9">
              <div
                className={
                  activityToggle ? "toggle-popup sidebar-popup" : "toggle-popup"
                }
              >
                <div className="sidebar-layout">
                  <div className="sidebar-header">
                    <h4>Check Customer CIBIL</h4>
                    <Link
                      to="#"
                      className="sidebar-close toggle-btn"
                      onClick={() => setActivityToggle(!activityToggle)}
                    >
                      <i className="ti ti-x" />
                    </Link>
                  </div>
                  <div className="toggle-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Customer Name
                              <span className="text-danger">*</span>
                            </label>

                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Mobile Number
                              <span className="text-danger">*</span>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Email ID
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              DOB <span className="text-danger">*</span>
                            </label>
                            <div className=" icon-form">
                              <span className="form-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="form-control"
                                maxDate={new Date()}
                                dateFormat="dd/MM/yyyy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Address
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Pincode <span className="text-danger"></span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              className="select"
                              options={options}
                              placeholder="Select Pincode"
                              inputValue={pinCode}
                              onInputChange={handlePinCodeChange}
                              isSearchable={true}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              State
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              City
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Customer Pan Number
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="submit-button text-end">
                          <Link
                            to="#"
                            className="btn btn-light sidebar-close"
                            onClick={togglePopup}
                          >
                            Cancel
                          </Link>
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Tab Content */}
              <div className="contact-tab-view">
                {/* --chart-- */}
                <div>
                  <CreditScoreChart creditScore={850} />
                </div>
                {/* --chart-- */}
                <table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    textAlign: "left",
                    border: "1px solid black",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        border: "1px solid black",
                        backgroundColor: "lightblue",
                      }}
                    >
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Product Name
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Business Loan
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Personal Loan
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Credit Card
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Over Draft
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        LAP (Loan Against Property)
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Car Loan
                      </th>
                      <th
                        style={{
                          border: "1px solid black",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Total Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index} style={{ border: "1px solid black" }}>
                        <td
                          style={{
                            border: "1px solid black",
                            padding: "4px",
                            color: "black",
                            fontWeight: "600",
                            fontSize: "12px",
                          }}
                        >
                          {row.col1}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col2}</Link>
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col3}</Link>
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col4}</Link>
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col5}</Link>
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col6}</Link>
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col7}</Link>
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "4px" }}
                        >
                          <Link to="#">{row.col8}</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CusCibilDet;
