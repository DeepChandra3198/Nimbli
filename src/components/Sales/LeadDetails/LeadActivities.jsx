import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BusinessLoan from "../../OnlyDialer/DetailedInfo/BusinessLoan";
import PersonalLoan from "../../OnlyDialer/DetailedInfo/PersonalLoan";
import CreditCard from "../../OnlyDialer/DetailedInfo/CreditCard";
import HlLap from "../../OnlyDialer/DetailedInfo/HlLap";

const LeadActivities = (
  {

  }
) => {


  const initialForm = {
    leadName: "",
    leadEmail: "",
    leadMobile1: "",
    leadMobile2: "",
    leadMobile3: "",
    value: 0,
    tags: "",
    companyId: null,
    cityId: null,
    stateId: null,
    countryId: null,
    industryId: null,
    sourceId: null,
    status: "active",
    visibility: "public",
    gender: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [startDate, setStartDate] = useState(new Date());
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "trans", label: "Trans" },
  ];
  const productOptions = [
    { value: "businessloan", label: "Business Loan" },
    { value: "personalloan", label: "Personal Loan" },
    { value: "insurance", label: "Insurance" },
    { value: "creditcard", label: "Credit Card" },
    { value: "collectionagency", label: "Collection Agency" },
    { value: "carloan", label: "Car Loan" },
    { value: "hl/lap", label: "HL/LAP" },
  ];
  function getTime(value) {
    const isoDateString = value;
    const date = new Date(isoDateString);

    // Get hours, minutes, and determine AM/PM
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      formData.tags = JSON.stringify(tagValue);
      formData.value = formData.value ? formData.value : 0;

      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/lead/add-lead`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        body: formDataToSend,
      });
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || "Failed to add lead");
      }
      togglePopup();
      fetchLeadData();
      setFormData(initialForm);
      toast.success("Lead added successfully!");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const renderInputFields = () => {
    switch (selectedProduct) {
      case "businessloan":
        return <BusinessLoan />;
      case "personalloan":
        return <PersonalLoan />;
      case "insurance":
        return <div>Insurance Input Field</div>;
      case "creditcard":
        return <CreditCard />;
      case "collectionagency":
        return <div>Collection Agency Input Field</div>;
      case "carloan":
        return <div>Car Loan Input Field</div>;
      case "hl/lap":
        return <HlLap />;
      default:
        return null;
    }
  };
  // disposition
  const dispositionOptions = [
    { value: "option1", label: "Dialed Number" },
    { value: "option2", label: "Connected Call" },
    { value: "option3", label: "Non Connected Call" },
    { value: "option4", label: "Documents Requested" },
    { value: "option5", label: "Call Back" },
    { value: "option6", label: "SMS Sent" },
    { value: "option7", label: "Whatsapp Sent" },
    { value: "option8", label: "Mail Sent" },
  ];
  const [selectedDisposition, setSelectedDisposition] = useState(null);

  const handleDispositionChange = (option) => {
    setSelectedDisposition(option);
  };
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
    <div className="col-xl-12">
      <div className="contact-tab-wrap">
        <ul className="contact-nav nav">
          <li>
            <Link
              to="#"
              data-bs-toggle="tab"
              data-bs-target="#activities"
              className="active"
            >
              Basic Info
            </Link>
          </li>
          <li>
            <Link to="#" data-bs-toggle="tab" data-bs-target="#calls">
              Detailed Info
            </Link>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="contact-tab-view">
        <div className="tab-content pt-0">
          <div className="tab-pane active show" id="activities">
            <div className="toggle-body">
              <div className="pro-create">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Campaign Name"}{" "}
                          <span className="text-danger">*</span>
                        </label>

                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Source Name"} <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="leadName"
                          required
                          value={formData.leadName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Customer Name"}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          // name='leadName'
                          // required
                          // value={formData.leadName}
                          // onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Customer Mobile Number"}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          // name='leadName'
                          // required
                          // value={formData.leadName}
                          // onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Customer Alt. Mobile Number"}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          // name='value'
                          // placeholder='100'
                          // value={formData.value}
                          // onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Customer Email ID"}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          // name='leadName'
                          // required
                          // value={formData.leadName}
                          // onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"DOB"} <span className="text-danger">*</span>
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
                    <div className="col-md-4">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          Gender <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          className="select"
                          defaultValue={formData.gender}
                          onChange={(event) => {
                            let { value } = event;
                            handleInputChange({
                              target: { name: "gender", value },
                            });
                          }}
                          options={genderOptions}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
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
                    <div className="col-md-4">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          State <span className="text-danger"></span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          className="select"
                          //   value={stateOptions.find(
                          //     (option) => option.value === formData.stateId
                          //   )}
                          //   onChange={(event) => {
                          //     let { value } = event;
                          //     handleInputChange({
                          //       target: { name: "stateId", value },
                          //     });
                          //   }}
                          //   options={stateOptions}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          City <span className="text-danger"></span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          className="select"
                          //   value={cityOptions.find(
                          //     (option) => option.value === formData.cityId
                          //   )}
                          //   onChange={(event) => {
                          //     let { value } = event;
                          //     handleInputChange({
                          //       target: { name: "cityId", value },
                          //     });
                          //   }}
                          //   options={cityOptions}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          {"Company Name"}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          // name='leadName'
                          // required
                          // value={formData.leadName}
                          // onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="submit-button text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="calls">
            <div className="view-header">
              <div className="col-md-12">
                <div className="form-wrap">
                  <div className="col-md-6">
                    <label className="col-form-label">
                      Product Type <span className="text-danger"></span>
                    </label>
                    <Select
                      classNamePrefix="react-select"
                      className="select"
                      value={productOptions.find(
                        (option) => option.value === selectedProduct
                      )}
                      onChange={(option) => setSelectedProduct(option.value)}
                      options={productOptions}
                    />
                  </div>
                  {renderInputFields()}
                  <div className="sidebar-layout mt-3">
                    <div className="toggle-body">
                      <div className="pro-create">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-wrap">
                                <label className="col-form-label">
                                  Disposition{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <Select
                                  classNamePrefix="react-select"
                                  className="select"
                                  value={selectedDisposition}
                                  onChange={handleDispositionChange}
                                  options={dispositionOptions}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-wrap">
                                <label className="col-form-label">
                                  Remarks <span className="text-danger">*</span>
                                </label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  placeholder="Enter your remarks here..."
                                ></textarea>
                              </div>
                            </div>
                            <div className="submit-button text-end">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="calls-activity">
              {callData.length == 0 && <Empty description={false} />}
              {callData.map((data, index) => (
                <div className="calls-box" key={data.id}>
                  <div className="caller-info">
                    <div className="calls-user">
                      <img src={data?.staff?.profilePicUrl} alt="img" />
                      <div style={{ display: "grid" }}>
                        {index > 0 ? (
                          <p>
                            <del style={{ color: "red" }}>
                              <span>{data?.staff?.name}</span>{" "}
                              <strong> {data?.status.toLowerCase()} </strong>a
                              call on {getDate(data.callBackDate)},{" "}
                              {getTime(data.callBackTime)}{" "}
                            </del>
                          </p>
                        ) : (
                          <p style={{ color: "green" }}>
                            <span>{data?.staff?.name}</span>{" "}
                            <strong> {data?.status.toLowerCase()} </strong>a
                            call on {getDate(data.callBackDate)},{" "}
                            {getTime(data.callBackTime)}
                          </p>
                        )}

                        <span
                          className="badge-day"
                          style={{
                            fontSize: "x-small",
                            margin: "0",
                            maxWidth: "8rem",
                          }}
                        >
                          {getDate(data?.createdAt)},{getTime(data?.createdAt)}
                        </span>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="calls-action">
                        <div className="dropdown call-drop">
                          {data?.status == "Done" ? (
                            <Link
                              to="#"
                              
                              aria-expanded="false"
                            >
                           
                              <img
                                src="/assets/img/call-done.jpg"
                                alt="img"
                                style={{ width: "50px", height: "50px" }}
                              />
                            </Link>
                          ) : (
                            <OverlayTrigger
                              placement="bottom"
                              overlay={
                                <Tooltip id="mark-done-tooltip ">
                                  Mark Done
                                </Tooltip>
                              }
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#create_call_comment"
                                className="dropdown-toggle bg-pending"
                                aria-expanded="false"
                                onClick={() => {
                                  setFollowUp(data?.id);
                                }}
                              >
                                <i className="ti ti-square-check" />
                              
                              </Link>
                            </OverlayTrigger>
                          )}
                        </div>
                        {data.status !== "Done" && (
                          <div className="dropdown call-drop">
                            {
                              <OverlayTrigger
                                placement="bottom"
                                overlay={
                                  <Tooltip id="rescheduled-call-tooltip">
                                    Re-scheduled call
                                  </Tooltip>
                                }
                              >
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#create_call_rescheduled"
                                  className="dropdown-toggle"
                                  aria-expanded="false"
                                  onClick={() => {
                                    setFollowUp(data?.id);
                                  }}
                                >
                                  <i className="ti ti-calendar-month" />
                                 
                                </Link>
                              </OverlayTrigger>
                            }
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <p>
                    {data.lastCallSummary} <br />
                  </p>
                  {data?.comment && (
                    <div
                      className="reply-box"
                      style={{
                        backgroundColor: "#F9F9FC",
                        borderRadius: "5px",
                        margin: "0 0 15px",
                        padding: "15px",
                      }}
                    >
                      <p>{data?.comment}</p>
                    </div>
                  )}
                </div>
              ))}
            </div> */}
          </div>
          {/* /Calls */}
          {/* Comment */}
          {/* <div className="tab-pane fade" id="lead-comment">
            <div className="view-header">
              <h4>Comment</h4>
              <ul>
                <li>
                  <div className="form-sort">
                    <i className="ti ti-sort-ascending-2" />
                    <Select
                      className="select"
                      options={ascendingandDecending}
                      classNamePrefix="react-select"
                      placeholder="Ascending"
                    />
                  </div>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#create_comment"
                    className="com-add"
                  >
                    <i className="ti ti-circle-plus me-1" />
                    Add New
                  </Link>
                </li>
              </ul>
            </div>
            <div className="notes-activity">
              {commentData.length == 0 && <Empty description={false} />}
              {commentData.map((data) => (
                <div className="calls-box" key={data.id}>
                  <div className="caller-info">
                    <div className="calls-user">
                      <img src={data?.staff?.profilePicUrl} alt="img" />
                      <div style={{ display: "grid" }}>
                        <p>
                          <span>{data?.staff?.name}</span>
                        </p>
                        <span
                          className="badge-day"
                          style={{
                            fontSize: "x-small",
                            margin: "0",
                            maxWidth: "8rem",
                          }}
                        >
                          {getDate(data?.createdAt)},{getTime(data?.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="calls-action">
                      <div className="dropdown action-drop">
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link className="dropdown-item" to="#">
                            <i className="ti ti-edit text-blue" />
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <i className="ti ti-trash text-danger" />
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>{data?.comment}</p>
                </div>
              ))}
            </div>
          </div> */}
          {/* /Comment */}
          {/* Proposal */}
          {/* <div className="tab-pane fade" id="lead-proposal">
            <div className="view-header">
              <h4>Proposal</h4>
              <ul>
                <li>
                  <div className="form-sort">
                    <i className="ti ti-sort-ascending-2" />
                    <Select
                      className="select"
                      options={ascendingandDecending}
                      classNamePrefix="react-select"
                      placeholder="Ascending"
                    />
                  </div>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#create_lead_proposal"
                    className="com-add"
                  >
                    <i className="ti ti-circle-plus me-1" />
                    Add New
                  </Link>
                </li>
              </ul>
            </div>
            <div className="notes-activity">
              {proposalData.length === 0 && <Empty description={false} />}
              {proposalData.map((proposal) => (
                <div className="calls-box" key={proposal?.id}>
                  <div className="caller-info">
                    <div className="calls-user">
                      <img src={proposal?.staff?.profilePicUrl} alt="img" />
                      <div>
                        <h6>
                          {proposal?.staff?.name} uploaded a proposal update
                        </h6>
                        <p>
                          {getDate(proposal?.createdAt)},{" "}
                          {getTime(proposal?.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="calls-action">
                      <div className="dropdown action-drop">
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link className="dropdown-item" to="#">
                            <i className="ti ti-edit text-blue" />
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <i className="ti ti-trash text-danger" />
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5>{proposal?.proposal?.title}</h5>
                  <p>{proposal?.proposal?.comment}</p>
                  <ul>
                    <li>
                      <div className="note-download">
                        <div className="note-info">
                          <span className="note-icon bg-secondary-success">
                            <i className="ti ti-file-spreadsheet" />
                          </span>
                          <div>
                            <h6>{proposal?.proposal?.other}</h6>
                          </div>
                        </div>
                        <Link to={proposal?.proposal?.attachment1Url}>
                          <i className="ti ti-arrow-down" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <div className="notes-editor">
                    <div className="note-edit-wrap">
                      <div className="summernote">
                        Write a new comment, send your team notification by
                        typing @ followed by their name
                      </div>
                      <div className="text-end note-btns">
                        <Link to="#" className="btn btn-light add-cancel">
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-primary">
                          Save
                        </Link>
                      </div>
                    </div>
                    <div className="text-end">
                      <Link
                        to="#"
                        className="add-comment"
                        data-bs-toggle="modal"
                        data-bs-target="#create_proposal_comment"
                        onClick={() => {
                          setFollowUp(proposal?.id);
                        }}
                      >
                        <i className="ti ti-square-plus me-1" />
                        Add Comment & Changes on this proposal
                      </Link>
                    </div>
                  </div>

                  {proposal?.proposal?.proposalComment.map((comment) => (
                    <div className="reply-box" style={{ display: "grid" }}>
                      <p>
                        {" "}
                        Status :{" "}
                        {comment.status.charAt(0).toUpperCase() +
                          comment.status.slice(1)}
                      </p>
                      <p>{comment?.comment}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div> */}
          {/* /Proposal */}
          {/* Files */}
          {/* <div className="tab-pane fade" id="files">
            <div className="view-header">
              <h4>Files</h4>
            </div>
            <div className="files-activity">
              <div className="files-wrap">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="file-info">
                      <h4>Manage Documents</h4>
                      <p>
                        Send customizable quotes, proposals and contracts to
                        close deals faster.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <ul className="file-action">
                      <li>
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#create_lead_file"
                        >
                          Create Document
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {fileData.map((file) => (
                <div className="files-wrap" key={file.id}>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="file-info">
                        <div className="file-user">
                          <div style={{ display: "flex" }}>
                            <img src={file?.staff?.profilePicUrl} alt="img" />
                          </div>
                          <div style={{ display: "grid" }}>
                            <p>{file?.staff?.name} uploaded file</p>
                            <p
                              style={{
                                fontSize: "x-small",
                                margin: "0",
                                maxWidth: "8rem",
                              }}
                            >
                              {getDate(file?.leadDocument?.createdAt)},
                              {getTime(file?.leadDocument?.createdAt)}
                            </p>
                          </div>
                        </div>
                        <h4>{file?.leadDocument?.fileName}</h4>
                        <p>{file?.leadDocument?.comment}</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <ul className="file-action">
                        <li>
                          <Link
                            className="badge badge-tag badge-danger-light"
                            to={
                              file?.leadDocument?.fileType === "video"
                                ? file?.leadDocument?.language
                                : file?.leadDocument?.attachment1Url
                            }
                          >
                            <span>{file?.leadDocument?.fileType}</span>
                            {file?.leadDocument?.fileType == "image" && (
                              <div className="note-download">
                                <div className="note-info">
                                  <span className="note-icon">
                                    <img
                                      src={file?.leadDocument?.attachmentUrl}
                                      alt="Preview"
                                      style={{ width: "300px", height: "auto" }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}
                            {file?.leadDocument?.fileType == "jpg" && (
                              <div className="note-download">
                                <div className="note-info">
                                  <span className="note-icon">
                                    <img
                                      src={file?.leadDocument?.attachmentUrl}
                                      alt="Preview"
                                      style={{ width: "300px", height: "auto" }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}
                            {file?.leadDocument?.fileType == "png" && (
                              <div className="note-download">
                                <div className="note-info">
                                  <span className="note-icon">
                                    <img
                                      src={file?.leadDocument?.attachmentUrl}
                                      alt="Preview"
                                      style={{ width: "300px", height: "auto" }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}

                            {file?.leadDocument?.fileType == "pdf" && (
                              <div className="note-download">
                                <div className="note-info">
                                  <span className="note-icon">
                                    <img
                                      src="/assets/img/pdf-icon.png"
                                      alt="Preview"
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}

                            {file?.leadDocument?.fileType === "video" &&
                              file?.leadDocument?.language && (
                                <div className="note-download">
                                  <div className="note-info">
                                    <span className="note-icon">
                                      {file.leadDocument.language.includes(
                                        "youtube.com"
                                      ) ||
                                      file.leadDocument.language.includes(
                                        "youtu.be"
                                      ) ? (
                           
                                        <iframe
                                          width="100%"
                                          height="100px"
                                          src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                                            file.leadDocument.language
                                          )}`}
                                          title="YouTube video player"
                                          frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                        ></iframe>
                                      ) : (
              
                                        <video
                                          width="100%"
                                          height="100px"
                                          controls
                                        >
                                          <source
                                            src={file.leadDocument.language}
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              )}

                            {file?.leadDocument?.fileType === "zip" && (
                              <div className="note-download">
                                <div className="note-info">
                                  <span className="note-icon">
                                    <img
                                      src="/assets/img/zip-icon.png"
                                      alt="Preview"
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}

                            {file?.leadDocument?.fileType === "csv" && (
                              <div className="note-download">
                                <div className="note-info">
                                  <span className="note-icon">
                                    <img
                                      src="/assets/img/excel-icon.png"
                                      alt="Preview"
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
                                    />
                                  </span>
                                </div>
                              </div>
                            )}
                          </Link>
                        </li>
                        <li>
                          <div className="dropdown action-drop">
                            <Link
                              to="#"
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-edit text-blue" />
                                Edit
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash text-danger" />
                                Delete
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-download text-info" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          {/* /Files */}
          {/* Email */}
          {/* <div className="tab-pane fade" id="email">
            <div className="view-header">
              <h4>Email</h4>
              <ul>
                <li>
                  <OverlayTrigger
                    placement="left"
                    overlay={
                      <Tooltip id="tooltip-left">
                        There are no email accounts configured. Please configure
                        your email account in order to Send/Create Emails.
                      </Tooltip>
                    }
                  >
                    <Link
                      to="#"
                      className="com-add"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      data-bs-custom-class="tooltip-dark"
                      data-bs-original-title="There are no email accounts configured. Please configure your email account in order to Send/Create Emails"
                    >
                      <i className="ti ti-circle-plus me-1" />
                      Create Email
                    </Link>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
            <div className="files-activity">
              <div className="files-wrap">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="file-info">
                      <h4>Manage Emails</h4>
                      <p>
                        You can send and reply to emails directly via this
                        section.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <ul className="file-action">
                      <li>
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#create_email"
                        >
                          Connect Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="files-wrap">
                <div className="email-header">
                  <div className="row">
                    <div className="col top-action-left">
                      <div className="float-start d-none d-sm-block">
                        <input
                          type="text"
                          placeholder="Search Messages"
                          className="form-control search-message"
                        />
                      </div>
                    </div>
                    <div className="col-auto top-action-right">
                      <div className="text-end">
                        <button
                          type="button"
                          title="Refresh"
                          data-bs-toggle="tooltip"
                          className="btn btn-white d-none d-md-inline-block me-1"
                        >
                          <i className="fa-solid fa-rotate" />
                        </button>
                        <div className="btn-group">
                          <Link to="#" className="btn btn-white">
                            <i className="fa-solid fa-angle-left" />
                          </Link>
                          <Link to="#" className="btn btn-white">
                            <i className="fa-solid fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="text-muted d-none d-md-inline-block">
                          Showing 10 of 112{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email-content">
                  <div className="table-responsive">
                    <table className="table table-inbox table-hover">
                      <thead>
                        <tr>
                          <th colSpan={6} className="ps-2">
                            <input type="checkbox" className="checkbox-all" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="unread clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star starred " />
                            </span>
                          </td>
                          <td className="name">John Doe</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td>
                            <i className="fa-solid fa-paperclip" />
                          </td>
                          <td className="mail-date">13:14</td>
                        </tr>
                        <tr className="unread clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">Envato Account</td>
                          <td className="subject">
                            Important account security update from Envato
                          </td>
                          <td />
                          <td className="mail-date">8:42</td>
                        </tr>
                        <tr className="clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">Twitter</td>
                          <td className="subject">
                            HRMS Bootstrap Admin Template
                          </td>
                          <td />
                          <td className="mail-date">30 Nov</td>
                        </tr>
                        <tr className="unread clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">Richard Parker</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">18 Sep</td>
                        </tr>
                        <tr className="clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">John Smith</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">21 Aug</td>
                        </tr>
                        <tr className="clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">me, Robert Smith (3)</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">1 Aug</td>
                        </tr>
                        <tr className="unread clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">Codecanyon</td>
                          <td className="subject">Welcome To Codecanyon</td>
                          <td />
                          <td className="mail-date">Jul 13</td>
                        </tr>
                        <tr className="clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">Richard Miles</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td>
                            <i className="fa-solid fa-paperclip" />
                          </td>
                          <td className="mail-date">May 14</td>
                        </tr>
                        <tr className="unread clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa-regular fa-star" />
                            </span>
                          </td>
                          <td className="name">John Smith</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">11/11/16</td>
                        </tr>
                        <tr className="clickable-row">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star starred " />
                            </span>
                          </td>
                          <td className="name">Mike Litorus</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">10/31/16</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* /Email */}
        </div>
      </div>
      {/* /Tab Content */}
    </div>
  );
};

export default LeadActivities;
