import { Link } from "react-router-dom";
const Export =()=>{
    return (
        <>
<li>
                                <div className="export-dropdwon">
                                  <Link
                                    to="#"
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-package-export" />
                                    Export
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
        </>
    )
}
export default Export;