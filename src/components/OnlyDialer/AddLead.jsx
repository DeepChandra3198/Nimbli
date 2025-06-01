import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";
import AddNewCompany from "../../components/Sales/AddNewCompany";
import { toast } from "react-toastify";
import axios from "axios";
import { makeArray } from "jquery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BusinessLoan from "../OnlyDialer/DetailedInfo/BusinessLoan";
import PersonalLoan from "../OnlyDialer/DetailedInfo/PersonalLoan";
import CreditCard from "../OnlyDialer/DetailedInfo/CreditCard";
import HlLap from "../OnlyDialer/DetailedInfo/HlLap";

const AddLead = ({
  togglePopup,
  addLead,
  sourceOptions,
  industryOptions,
  countryOptions,
  fetchLeadData,
}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const Token = localStorage.getItem("token") || "";

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
  const [tagValue, setTagValue] = useState(["Collab"]);
  const [addCompany, setAddCompany] = useState(false);
  const [newContents, setNewContents] = useState([0]);
  const [haveCompany, setHaveCompany] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const mobileArr = ["leadMobile1", "leadMobile2", "leadMobile3"];
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

  // console.log("formData =>", formData);

  const addNewContent = () => {
    setNewContents([...newContents, newContents.length]);
  };

  const addCompanyPopup = () => {
    setAddCompany(!addCompany);
  };

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

  const fetchCompanyData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/lead/company-list`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const formattedData = response.data.data.map((item) => ({
        label: item.companyName,
        value: item.companyId,
      }));
      setCompanyOptions(formattedData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/employee/state-list/${formData.countryId}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        );
        const formattedData = response.data.data.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setStateOptions(formattedData);
      } catch (error) {
        toast.error(error);
      }
    };
    const fetchCityData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/employee/city-list/${formData.stateId}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        );
        const formattedData = response.data.data.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setCityOptions(formattedData);
      } catch (error) {
        toast.error(error);
      }
    };
    if (formData.countryId) {
      fetchStateData();
    }
    if (formData.stateId) fetchCityData();
  }, [formData.countryId, formData.stateId]);

  // add inputs
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

  return (
    <>
      <div className={`toggle-popup ${addLead ? "sidebar-popup" : ""}`}>
        <div className="sidebar-layout">
          <div className="sidebar-header">
            <h4>Add New Lead</h4>
            <Link
              to="#"
              className="sidebar-close toggle-btn"
              onClick={togglePopup}
            >
              <i className="ti ti-x" />
            </Link>
          </div>
          <div className="toggle-body">
            <div className="pro-create">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 form-wrap">
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
        

                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        {"Campaign Name"} <span className="text-danger">*</span>
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
                        {"Customer Name"} <span className="text-danger">*</span>
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
                        // value={stateOptions.find(
                        //   (option) => option.value === formData.stateId
                        // )}
                        // onChange={(event) => {
                        //   let { value } = event;
                        //   handleInputChange({
                        //     target: { name: "stateId", value },
                        //   });
                        // }}
                        // options={stateOptions}
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
                        value={stateOptions.find(
                          (option) => option.value === formData.stateId
                        )}
                        onChange={(event) => {
                          let { value } = event;
                          handleInputChange({
                            target: { name: "stateId", value },
                          });
                        }}
                        options={stateOptions}
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
                        value={cityOptions.find(
                          (option) => option.value === formData.cityId
                        )}
                        onChange={(event) => {
                          let { value } = event;
                          handleInputChange({
                            target: { name: "cityId", value },
                          });
                        }}
                        options={cityOptions}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        {"Company Name"} <span className="text-danger">*</span>
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
                  {renderInputFields()}
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
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AddNewCompany
        addCompany={addCompany}
        addCompanyPopup={addCompanyPopup}
        sourceOptions={sourceOptions}
        industryOptions={industryOptions}
        countryOptions={countryOptions}
        handleRefreshCompanyData={fetchCompanyData}
      />
    </>
  );
};

export default AddLead;
