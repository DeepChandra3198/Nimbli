import React, { Fragment, useState } from "react";
import "../../../style/css/onlydialer/detailedinfo.css";
import Select from "react-select";

const BusinessLoan = () => {
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
  // address
  const [selectedAddressType, setSelectedAddressType] = useState("");
  const handleAddressCheckboxChange = (addressType) => {
    setSelectedAddressType(
      selectedAddressType === addressType ? "" : addressType
    );
  };

  // entity
  const entityOptions = [
    {
      value: "1",
      label: "Proprietorship",
      inputs: [
        { type: "text", label: "Enter Firm Name" },
        { type: "text", label: "Proprieter Name" },
      ],
    },
    {
      value: "2",
      label: "Partnership",
      inputs: [
        { type: "text", label: "Partner Name" },
        { type: "number", label: "Partnership%" },
      ],
    },
    {
      value: "3",
      label: "LLP Pvt Ltd/Ltd",
      inputs: [
        { type: "text", label: "Director Name" },
        { type: "number", label: "Share Holding%" },
        { type: "text", label: "Share Holder Name" },
        { type: "number", label: "Share Holding%" },
      ],
    },
  ];

  const [selectedEntity, setSelectedEntity] = useState(null);
  const [upperInputGroups, setUpperInputGroups] = useState([]);
  const [lowerInputGroups, setLowerInputGroups] = useState([]);

  const handleAddFields = (type) => {
    if (selectedEntity) {
      const newGroup = (
        type === "upper"
          ? selectedEntity.inputs.slice(0, 2)
          : selectedEntity.inputs.slice(2)
      ).map((input, index) => ({
        ...input,
        key: `${type}-${
          type === "upper" ? upperInputGroups.length : lowerInputGroups.length
        }-${index}-${Date.now()}`,
      }));
      if (type === "upper") {
        setUpperInputGroups([...upperInputGroups, newGroup]);
      } else {
        setLowerInputGroups([...lowerInputGroups, newGroup]);
      }
    }
  };

  const handleRemoveFields = (type) => {
    if (type === "upper" && upperInputGroups.length > 1) {
      setUpperInputGroups(upperInputGroups.slice(0, -1));
    } else if (type === "lower" && lowerInputGroups.length > 1) {
      setLowerInputGroups(lowerInputGroups.slice(0, -1));
    }
  };

  const handleEntityChange = (option) => {
    setSelectedEntity(option);
    if (option.value === "3") {
      setUpperInputGroups([
        option.inputs
          .slice(0, 2)
          .map((input, index) => ({ ...input, key: `initial-upper-${index}` })),
      ]);
      setLowerInputGroups([
        option.inputs
          .slice(2)
          .map((input, index) => ({ ...input, key: `initial-lower-${index}` })),
      ]);
    } else {
      setUpperInputGroups([
        option.inputs.map((input, index) => ({
          ...input,
          key: `initial-${index}`,
        })),
      ]);
      setLowerInputGroups([]);
    }
  };

  //   insurance
  const insuranceOptions = [
    { value: "health", label: "Health Insurance" },
    { value: "car", label: "Car Insurance" },
    { value: "life", label: "Life Insurance" },
    { value: "other", label: "Other" },
  ];

  const [selectedInsuranceType, setSelectedInsuranceType] = useState(null);
  const [showInsuranceDropdown, setShowInsuranceDropdown] = useState(false);

  const handleInsuranceCheckboxChange = (type) => {
    setSelectedInsuranceType(type);
    setShowInsuranceDropdown(type === "yes");
  };

  //   car
  const brandOptions = [
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "ford", label: "Ford" },
  ];

  const modelOptions = [
    { value: "corolla", label: "Corolla" },
    { value: "civic", label: "Civic" },
    { value: "focus", label: "Focus" },
  ];

  const yearOptions = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];
  const [selectedCarOwned, setSelectedCarOwned] = useState(null);
  const [showCarDropdowns, setShowCarDropdowns] = useState(false);
  const handleCarOwnedCheckboxChange = (type) => {
    setSelectedCarOwned(type);
    setShowCarDropdowns(type === "yes");
  };
  // tenure
  const tenureOptions = [
    { value: "1", label: "1 Year" },
    { value: "2", label: "2 Years" },
    { value: "3", label: "3 Years" },
    { value: "4", label: "4 Years" },
    { value: "5", label: "5 Years" },
  ];

  const [selectedTenure, setSelectedTenure] = useState(null);

  const handleTenureChange = (option) => {
    setSelectedTenure(option);
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
    <Fragment>
      {/* <div className="sidebar-layout mt-3">
        <div className="toggle-body">
          <div className="pro-create"> */}
            <form onSubmit={handleSubmit}className="mt-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Nature of Business <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Address Type <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        checked={selectedAddressType === "residential"}
                        onChange={() =>
                          handleAddressCheckboxChange("residential")
                        }
                        className="detailed-address-checkbox1"
                      />
                      <label className="detailed-address-checkbox-label">
                        Residential
                      </label>

                      <input
                        type="checkbox"
                        checked={selectedAddressType === "office"}
                        onChange={() => handleAddressCheckboxChange("office")}
                        className="detailed-address-checkbox2"
                      />
                      <label>Office</label>
                    </div>
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
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      GST Number <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Udyam Number <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Loan Amt. Required <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Entity Type <span className="text-danger">*</span>
                    </label>
                    <Select
                      classNamePrefix="react-select"
                      className="select"
                      value={selectedEntity}
                      onChange={handleEntityChange}
                      options={entityOptions}
                    />
                  </div>
                  {upperInputGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="row">
                      {group.map((input) => (
                        <div key={input.key} className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              {input.label}
                            </label>
                            <input
                              type={input.type}
                              placeholder={input.placeholder}
                              className="form-control"
                            />
                          </div>
                        </div>
                      ))}
                      {selectedEntity && selectedEntity.value !== "1" && (
                        <div className="col-md-6 d-flex justify-content-start align-items-center form-wrap">
                          <button
                            type="button"
                            onClick={() => handleAddFields("upper")}
                            className="btn btn-primary me-2"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveFields("upper")}
                            disabled={upperInputGroups.length === 1}
                            className="btn btn-danger"
                          >
                            -
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  {selectedEntity &&
                    selectedEntity.value === "3" &&
                    lowerInputGroups.map((group, groupIndex) => (
                      <div key={groupIndex} className="row">
                        {group.map((input) => (
                          <div key={input.key} className="col-md-6">
                            <div className="form-wrap">
                              <label className="col-form-label">
                                {input.label}
                              </label>
                              <input
                                type={input.type}
                                placeholder={input.placeholder}
                                className="form-control"
                              />
                            </div>
                          </div>
                        ))}
                        <div className="col-md-6 d-flex justify-content-start align-items-center form-wrap">
                          <button
                            type="button"
                            onClick={() => handleAddFields("lower")}
                            className="btn btn-primary me-2"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveFields("lower")}
                            disabled={lowerInputGroups.length === 1}
                            className="btn btn-danger"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Existing EMI <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Avg. Bank Balance <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Tenure in Current Business{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <Select
                      classNamePrefix="react-select"
                      className="select"
                      value={selectedTenure}
                      onChange={handleTenureChange}
                      options={tenureOptions}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      TurnOver <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Ownership (Text) <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Any Insurance <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        checked={selectedInsuranceType === "yes"}
                        onChange={() => handleInsuranceCheckboxChange("yes")}
                        className="detailed-address-checkbox1"
                      />
                      <label className="detailed-address-checkbox-label">
                        Yes
                      </label>

                      <input
                        type="checkbox"
                        checked={selectedInsuranceType === "no"}
                        onChange={() => handleInsuranceCheckboxChange("no")}
                        className="detailed-address-checkbox2"
                      />
                      <label>No</label>
                    </div>
                  </div>

                  {showInsuranceDropdown && (
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Insurance Type <span className="text-danger">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        className="select"
                        options={insuranceOptions}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Car Owned <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        checked={selectedCarOwned === "yes"}
                        onChange={() => handleCarOwnedCheckboxChange("yes")}
                        className="detailed-address-checkbox1"
                      />
                      <label className="detailed-address-checkbox-label">
                        Yes
                      </label>

                      <input
                        type="checkbox"
                        checked={selectedCarOwned === "no"}
                        onChange={() => handleCarOwnedCheckboxChange("no")}
                        className="detailed-address-checkbox2"
                      />
                      <label>No</label>
                    </div>
                  </div>

                  {showCarDropdowns && (
                    <div className="form-wrap">
                      <label className="col-form-label ">
                        Car Brand <span className="text-danger">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        className="select form-wrap"
                        options={brandOptions}
                      />
                      <label className="col-form-label ">
                        Car Model <span className="text-danger">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        className="select form-wrap"
                        options={modelOptions}
                      />
                      <label className="col-form-label">
                        Car Purchase Year <span className="text-danger">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        className="select"
                        options={yearOptions}
                      />
                    </div>
                  )}
                </div>
                {/* <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Disposition <span className="text-danger">*</span>
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
                </div> */}
              </div>
            </form>
          {/* </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default BusinessLoan;
