import React, { Fragment, useState } from "react";
import Select from "react-select";

const PersonalLoan = () => {
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

  // occupation
  const occupationOptions = [
    { value: "self-employed", label: "Self Employed" },
    { value: "salaried", label: "Salaried" },
  ];
  const [selectedOccupation, setSelectedOccupation] = useState(null);
  const handleOccupationChange = (option) => {
    setSelectedOccupation(option);
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
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Occupation <span className="text-danger">*</span>
                    </label>
                    <Select
                      classNamePrefix="react-select"
                      className="select"
                      value={selectedOccupation}
                      onChange={handleOccupationChange}
                      options={occupationOptions}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Annual Income <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
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
                      Loan Amt. Required <span className="text-danger">*</span>
                    </label>

                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Existing EMI <span className="text-danger">*</span>
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
              </div>
            </form>
          {/* </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default PersonalLoan;
