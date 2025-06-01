import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Calculator = () => {
     // address
    //   const [selectedAddressType, setSelectedAddressType] = useState("");
    //   const handleAddressCheckboxChange = (addressType) => {
    //     setSelectedAddressType(
    //       selectedAddressType === addressType ? "" : addressType
    //     );
    //   };
      // address
      const [selectedCalculator, setSelectedCalculator] = useState("");

      const handleCheckboxChange = (calculatorType) => {
        setSelectedCalculator(calculatorType); // Sirf ek option ko select karega
      };
    
      const renderForm = () => {
        if (!selectedCalculator) return null;
    
        return (
          <div className="form-wrap mt-3 bg-white">
            <h3>{selectedCalculator}</h3>
            {/* <form>
              <div className="row">
                <div className="col-md-6">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter full name" />
                </div>
                <div className="col-md-6">
                  <label>Age</label>
                  <input type="number" className="form-control" placeholder="Enter age" />
                </div>
                <div className="col-md-6">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="col-md-6">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" placeholder="Enter phone number" />
                </div>
                <div className="col-md-6">
                  <label>Loan Amount</label>
                  <input type="number" className="form-control" placeholder="Enter loan amount" />
                </div>
                <div className="col-md-6">
                  <label>Address</label>
                  <input type="text" className="form-control" placeholder="Enter address" />
                </div>
              </div>
            </form> */}
          </div>
        );
      };
      
  return (
    // <Fragment>
    //   <div className="page-wrapper">
    //     <div className="content">
    //       <div className="row">
    //         <div className="col-xl-12">
    //           <div className="contact-tab-wrap">
    //             {/* <ul className=" nav">
    //               <li>
    //                 <Link
    //                   to="#"
    //                   data-bs-toggle="tab"
    //                   data-bs-target="#activities"
    //                   className="active"
    //                 >
    //                   Basic Info
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="#" data-bs-toggle="tab" data-bs-target="#calls">
    //                   Detailed Info
    //                 </Link>
    //               </li>
    //             </ul> */}
    //              <form >
    //              <div className="row">
    //              <div className="col-md-12">
    //               <div className="form-wrap">
    //                 <label className="col-form-label">
    //                   Calculator Type <span className="text-danger">*</span>
    //                 </label>
    //                 <div className="d-flex">
    //                 <label className="detailed-address-checkbox-label">
    //                   Personal Loan Calculator
    //                   </label>
    //                   <input
    //                     type="checkbox"
    //                     checked={selectedAddressType === "Personal"}
    //                     onChange={() =>
    //                       handleAddressCheckboxChange("Personal")
    //                     }
    //                     className="detailed-calculator-checkbox1"
    //                   />
                    
    //                 <label>Home Loan Calculator</label>
    //                   <input
    //                     type="checkbox"
    //                     checked={selectedAddressType === "Home"}
    //                     onChange={() => handleAddressCheckboxChange("Home")}
    //                     className="detailed-calculator-checkbox1"
    //                   />
    //                  <label>LAP Loan Calculator</label>
    //                   <input
    //                     type="checkbox"
    //                     checked={selectedAddressType === "LAP"}
    //                     onChange={() => handleAddressCheckboxChange("LAP")}
    //                     className="detailed-calculator-checkbox1"
    //                   />
    //                    <label>Tow Wheeler Loan Calculator</label>
    //                   <input
    //                     type="checkbox"
    //                     checked={selectedAddressType === "Wheeler"}
    //                     onChange={() => handleAddressCheckboxChange("Wheeler")}
    //                     className="detailed-calculator-checkbox1"
    //                   />
    //                 <label>Car Loan Calculator</label>
    //                   <input
    //                     type="checkbox"
    //                     checked={selectedAddressType === "Car"}
    //                     onChange={() => handleAddressCheckboxChange("Car")}
    //                     className="detailed-calculator-checkbox1"
    //                   />
    //                     <label>Business Loan Calculator</label>
    //                   <input
    //                     type="checkbox"
    //                     checked={selectedAddressType === "Business"}
    //                     onChange={() => handleAddressCheckboxChange("Business")}
    //                     className="detailed-calculator-checkbox1"
    //                   />
                    
    //                 </div>
    //               </div>
    //             </div>
    //              </div>
    //              </form>
    //           </div>

    //           <div className="contact-tab-view">
    //             <div className="tab-content pt-0">
    //               <div className="tab-pane active show" id="activities">
    //                 <div className="toggle-body">
    //                   <div className="pro-create">
    //                     <form>
    //                       <div className="row">
    //                         <div className="col-md-6">
    //                           <div className="form-wrap">
    //                             <label className="col-form-label">
    //                               {"Campaign Name"}{" "}
    //                               <span className="text-danger">*</span>
    //                             </label>

    //                             <input type="text" className="form-control" />
    //                           </div>
    //                         </div>
    //                         <div className="col-md-6">
    //                           <div className="form-wrap">
    //                             <label className="col-form-label">
    //                               {"Source Name"}{" "}
    //                               <span className="text-danger">*</span>
    //                             </label>
    //                             <input
    //                               type="text"
    //                               className="form-control"
    //                               name="leadName"
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </form>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="tab-pane fade" id="calls">
    //                 <div className="view-header">
    //                   <div className="col-md-12">
    //                     <div className="form-wrap">
    //                       <div className="sidebar-layout mt-3">
    //                         <div className="toggle-body">
    //                           <div className="pro-create">
    //                           <div className="col-md-6">
    //                           <div className="form-wrap">
    //                             <label className="col-form-label">
    //                               {"Campaign Name jqsjjqb"}{" "}
    //                               <span className="text-danger">*</span>
    //                             </label>

    //                             <input type="text" className="form-control" />
    //                           </div>
    //                         </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>
    <Fragment>
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-xl-12" style={{backgroundColor:"white"}}>
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-wrap">
                    <label className="calculator-col-form-label">
                      Calculator Type <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex">
                      <label className="calculator-text">
                        Personal Loan Calculator
                        <input
                          type="radio"
                          name="calculatorType"
                          value="Personal Loan Calculator"
                          onChange={(e) =>
                            handleCheckboxChange(e.target.value)
                          }
                          className="detailed-calculator-checkbox1"
                        />
                      </label>
                      <label className="calculator-text">
                        Home Loan Calculator
                        <input
                          type="radio"
                          name="calculatorType"
                          value="Home Loan Calculator"
                          onChange={(e) =>
                            handleCheckboxChange(e.target.value)
                          }
                          className="detailed-calculator-checkbox1"
                        />
                      </label>
                      <label className="calculator-text">
                        LAP Loan Calculator
                        <input
                          type="radio"
                          name="calculatorType"
                          value="LAP Loan Calculator"
                          onChange={(e) =>
                            handleCheckboxChange(e.target.value)
                          }
                          className="detailed-calculator-checkbox1"
                        />
                      </label>
                      <label className="calculator-text">
                        Two Wheeler Loan Calculator
                        <input
                          type="radio"
                          name="calculatorType"
                          value="Two Wheeler Loan Calculator"
                          onChange={(e) =>
                            handleCheckboxChange(e.target.value)
                          }
                          className="detailed-calculator-checkbox1"
                        />
                      </label>
                      <label className="calculator-text">
                        Car Loan Calculator
                        <input
                          type="radio"
                          name="calculatorType"
                          value="Car Loan Calculator"
                          onChange={(e) =>
                            handleCheckboxChange(e.target.value)
                          }
                          className="detailed-calculator-checkbox1"
                        />
                      </label>
                      <label className="calculator-text">
                        Business Loan Calculator
                        <input
                          type="radio"
                          name="calculatorType"
                          value="Business Loan Calculator"
                          onChange={(e) =>
                            handleCheckboxChange(e.target.value)
                          }
                          className="detailed-calculator-checkbox1"
                        />
                      </label>
                    </div>
                    
                  </div>
                </div>
              </div>
            </form>
          </div>

          {renderForm()}
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default Calculator;
