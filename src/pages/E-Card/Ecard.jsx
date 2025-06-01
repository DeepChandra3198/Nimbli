import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CollapseHeader from "../../components/CollapseHeader/CollapseHeader";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../../../public/ecard-logo.png";
import img from "../../../public/ecard-img.jpg";

const Ecard = () => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col-4">
                    <h4 className="page-title">Select E-Card Type To View</h4>
                  </div>
                  <div className="col-8 text-end">
                    <div className="head-icons">
                      <CollapseHeader />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Header */}

              {/* E-Card type */}
              <div className="row nav">
                <div className="col-xl-4 col-lg-6">
                  <div className="campaign-box bg-danger-light">
                    <div className="campaign-img">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#visiting-card"
                          className="active"
                        >
                          E-Visiting Card
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <div className="campaign-box bg-warning-light">
                    <div className="campaign-img">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#id-card"
                        >
                          E-ID Card
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <div className="campaign-box  bg-purple-light">
                    <div className="campaign-img">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#greeting-card"
                        >
                          E-Greeting Card
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              {/* E-Card type */}
              {/* visiting-card */}
              <div
                className="contact-tab-view"
                style={{
                  height: "75%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="tab-content pt-0">
                  <div className="tab-pane active show" id="visiting-card">
                    <div className="toggle-body">
                      <div className="pro-create">
                        <div style={{ marginBottom: "20px" }}>
                          <h1>Your E-ID Card</h1>
                        </div>
                        <div
                          class="col-sm-12"
                          style={{ border: "2px solid black" }}
                        >
                          <div class="card" style={{ marginBottom: "0px" }}>
                            <div
                              class="row card-body"
                              style={{ padding: "12px" }}
                            >
                              <div className="col-md-8">
                                <div>
                                  <img
                                    src={logo}
                                    alt=""
                                    style={{ width: "85%" }}
                                  />
                                </div>

                                <ul className="basic-info">
                                  <li>
                                    <p>Employee Code : ODAS001</p>
                                  </li>
                                  <li>
                                    <p>Employee Name : Bhusan Malla</p>
                                  </li>
                                  <li>
                                    <p>Blood Group : o+</p>
                                  </li>

                                  <li>
                                    <p>Contact Number : 9999999991</p>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: "18px",
                                }}
                              >
                                <div
                                  className="avatar company-avatar"
                                  style={{ height: "125px", width: "105px" }}
                                >
                                  <img src={img} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-button text-end mt-5">
                        <button  className="btn btn-primary">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* id-card */}
                  <div className="tab-pane fade" id="id-card">
                    <div className="toggle-body">
                      <div className="pro-create">
                      <div style={{ marginBottom: "20px" }}>
                          <h1>Your E-Visiting Card</h1>
                        </div>
                        <div
                          class="col-md-12"
                          style={{ border: "2px solid black" }}
                        >
                          <div class="card" style={{ marginBottom: "0px" }}>
                            <div
                              class="row card-body"
                              style={{ paddingBottom: "0px" }}
                            >
                              <div
                                className="col-md-12"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                   <div style={{marginRight:"auto"}}>
                                  <img
                                    src={logo}
                                    alt=""
                                    style={{ width: "85%" }}
                                  />
                                </div>
                                <ul
                                  className="basic-info"
                                  style={{ display: "contents" }}
                                >
                                  <li>
                                    <p>Bhusan Malla</p>
                                  </li>
                                  <li>
                                    <p>Head Alliance</p>
                                  </li>

                                  <li>
                                    <p>#9999990901 Bhusan@Odasone.com</p>
                                  </li>
                                </ul>
                                <div style={{ marginTop: "25px" }}>
                                  <Link to="#" style={{ color: "blue" }}>
                                    www.Odasone.com
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-button text-end mt-5">
                        <button  className="btn btn-primary">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* greeting-card */}
                  <div className="tab-pane fade" id="greeting-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Ecard;
