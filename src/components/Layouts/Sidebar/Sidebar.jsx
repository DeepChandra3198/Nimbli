
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../ImageWithBasePath";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../../pages/Router/all_routes";
import "../../../index.css"

const Sidebar = ({ setMiniSidebar, setExpandMenu }) => {
    const Location = useLocation();
    const [openMenus, setOpenMenus] = useState({});
    const [openSubMenus, setOpenSubMenus] = useState({});
    const route = all_routes;
    const profileName = localStorage.getItem('name') || '';
    const type = localStorage.getItem('type') || '';
    const profilePic = localStorage.getItem('profilePic') || '';

    const toggle = () => {
        setExpandMenu(true);
    };

    const toggle2 = () => {
        setExpandMenu(false);
    };

    function handleMenu(menu) {
        setOpenMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
        // setOpenMenus({
        //     [menu]: !openMenus[menu]
        // })
    };

    function handleMenu(menu) {
        setOpenMenus((prevState) => ({
            // ...prevState,
            [menu]: !prevState[menu],
        }));
    }

    function handleSubMenu(subMenu) {
        setOpenSubMenus((prevState) => ({
            // ...prevState,
            [subMenu]: !prevState[subMenu],
        }));
    }

    // useEffect(() => {

    //     console.log('openMenus =>', openMenus)

    // }, [openMenus])

    function toggleMiniSidebar() {
        setMiniSidebar(prev => !prev)
    }

    return <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={toggle}
        onMouseLeave={toggle2}
    >
        <Scrollbars>
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="clinicdropdown admin-margin">
                            <Link to="profile.html">
                                <img src={profilePic ? profilePic : "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png"} className="img-fluid" alt="Profile" />
                                <div className="user-names">
                                    <h5>{profileName || 'Ravi '}</h5>
                                    <h6>{type == "1" ? "Admin" : "Employee"}</h6>
                                </div>
                            </Link>
                            <Link id="toggle_btn" to="#" onClick={toggleMiniSidebar}>
                                <i className="ti ti-arrow-bar-to-left" />
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h6 className="submenu-hdr">Main Menu</h6>
                            <ul>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['dashboard'] ? "subdrop active active" : 'subdrop'}
                                        onClick={() => {
                                            handleMenu('dashboard')
                                        }}
                                    >
                                        <i className="ti ti-settings"></i><span>SET UP</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["dashboard"] &&
                                        <ul>
                                            <li><Link to={route.salesDashboard}>Manage Admin Menu</Link></li>
                                            <li><Link to={route.salesDashboard}>Form Dropdown</Link></li>
                                            <li><Link to={route.salesDashboard}>Form Dropdown Options</Link></li>
                                            <li><Link to={route.salesDashboard}>Manage Curencies</Link></li>
                                            <li><Link to={route.salesDashboard}>Create Permission</Link></li>
                                            <li><Link to={route.salesDashboard}>All Permissions</Link></li>
                                            <li><Link to={route.salesDashboard}>Create Users</Link></li>
                                            <li><Link to={route.salesDashboard}>Manage Users</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['productCatalogue'] ? "subdrop active" : 'subdrop'}
                                        onClick={() => {
                                            handleMenu('productCatalogue');
                                        }}
                                    >
                                        <i className="ti ti-box"></i><span>PRODUCT CATALOGUE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["productCatalogue"] && (
                                        <ul>
                                            <li><Link to={route.category}>Category</Link></li>
                                            <li><Link to={route.brand}>Brands</Link></li>
                                            <li><Link to={route.sizeColour}>Size/Color</Link></li>
                                            <li><Link to={route.sizeColourOption}>Size/Color Options</Link></li>
                                            <li><Link to={route.filters}>Filters</Link></li>
                                            <li><Link to={route.filtersValue}>Filter Values</Link></li>
                                        </ul>
                                    )}
                                </li>

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['inventory'] ? "subdrop active" : 'subdrop'}
                                        onClick={() => {
                                            handleMenu('inventory');
                                        }}
                                    >
                                        <i className="ti ti-package"></i><span>INVENTORY & PRODUCTS</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["inventory"] && (
                                        <ul>
                                            <li><Link to={route.allProducts}>All Products</Link></li>
                                            <li><Link to={route.disabledProducts}>Disabled Products</Link></li>
                                            <li><Link to={route.enabledProducts}>Enabled Products</Link></li>
                                            <li><Link to={route.bulkUpload}>Upload Bulk Products</Link></li>
                                        </ul>
                                    )}
                                </li>


                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['dashboard'] ? "subdrop active active" : 'subdrop'}
                                        onClick={() => {
                                            handleMenu('dashboard')
                                        }}
                                    >
                                        <i className="ti ti-layout-2"></i><span>ONE VIEW</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["dashboard"] &&
                                        <ul>
                                            <li><Link to={route.salesDashboard}>Sales Dashboard</Link></li>
                                            <li><Link to={route.salesDashboard}>Support Dashboard</Link></li>
                                            <li><Link to={route.salesDashboard}>Staff Dashboard</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['sales'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('sales')
                                        }}
                                    >
                                        <i className="ti ti-chart-arcs">
                                        </i><span>CRM</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['sales'] &&
                                        <ul>
                                            <li><Link to={route.leads}>Manage Leads</Link></li>
                                            <li><Link to={route.leads}>Add Lead</Link></li>
                                            <li><Link to={route.leads}>Proposal Template</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['dialer'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('dialer')
                                        }}
                                    >
                                        <i className="ti ti-chart-arcs">
                                        </i><span>ONLY DIALER</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['dialer'] &&
                                        <ul>
                                            <li><Link to={route.dialer}>Manage Leads</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['creditrule'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('creditrule')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>CREDIT RULE ENGINE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["creditrule"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Credit Rule</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['odasanalyser'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('odasanalyser')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>ODAS ANALYSER</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["odasanalyser"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Odas</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['odasverifications'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('odasverifications')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>ODAS VERIFICATIONS</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["odasverifications"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Odas Verifications</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['creditscore'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('creditscore')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>CREDIT SCORE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["creditscore"] &&
                                        <ul>
                                            <li><Link to={route.creditscore}>Manage Credit Score</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['businessintelligence'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('businessintelligence')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>BUSINESS INTELLIGENCE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["businessintelligence"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Business Intelligence</Link></li>
                                        </ul>
                                    }
                                </li>
                                {/* <li className="submenu">
  <Link to="#"
    className={openMenus['partnerconnect'] ? "subdrop active" : "subdrop"}
    onClick={() => handleMenu('partnerconnect')}
  >
    <i className="ti ti-file-report"></i>
    <span>PARTNER CONNECT</span>
    <span className="menu-arrow"></span>
  </Link>

  {openMenus["partnerconnect"] && (
    <ul>
        <li><Link to={route.services}>services</Link></li>
      <li><Link to={route.managePartnerConnect}>Manage Partner Connect</Link></li>
      <li><Link to={route.managestaff}>Manage Staffs</Link></li>
      <li><Link to={route.manageInvoices}>Manage Invoices</Link></li>
      <li><Link to={route.manageLeads}>Manage Leads</Link></li>

      <li className="submenu">
        <Link to="#"
          className={openMenus['cms'] ? "subdrop active" : "subdrop"}
          onClick={() => handleMenu('cms')}
        >
          CMS<span className="menu-arrow"></span>
        </Link>

        {openMenus["cms"] && (
          <ul>
            <li><Link to={route.manageBankCommission}>Bank Commission</Link></li>
            <li><Link to={route.manageTDS}>TDS</Link></li>
          </ul>
        )}
      </li>
    </ul>
  )}
</li> */}


                                {/* <li className="submenu">
  <Link to="#"
    className={openMenus['partnerconnect'] ? "subdrop active font-semibold text-lg py-3" : "subdrop font-semibold text-lg py-3"}
    onClick={() => handleMenu('partnerconnect')}
  >
    <i className="ti ti-file-report"></i>
    <span>PARTNER CONNECT</span>
    <span className="menu-arrow"></span>
  </Link>

  {openMenus["partnerconnect"] && (
    <ul className="ml-6 mt-2 space-y-3">
      <li><Link to={route.services} className="text-sm text-gray-600 hover:text-black">services</Link></li>
      <li><Link to={route.managePartnerConnect} className="text-sm text-gray-600 hover:text-black">Manage Partner Connect</Link></li>
      <li><Link to={route.managestaff} className="text-sm text-gray-600 hover:text-black">Manage Staffs</Link></li>
      <li><Link to={route.manageInvoices} className="text-sm text-gray-600 hover:text-black">Manage Invoices</Link></li>
      <li><Link to={route.manageLeads} className="text-sm text-gray-600 hover:text-black">Manage Leads</Link></li>

      <li className="submenu ml-4 mt-1">
        <Link to="#"
          className={openMenus['cms'] ? "subdrop active font-medium" : "subdrop font-medium"}
          onClick={() => handleMenu('cms')}
        >
          CMS<span className="menu-arrow"></span>
        </Link>

        {openMenus["cms"] && (
          <ul className="ml-8 mt-1 space-y-2">
            <li><Link to={route.manageBankCommission} className="text-sm text-gray-500 hover:text-black">Bank Commission</Link></li>
            <li><Link to={route.manageTDS} className="text-sm text-gray-500 hover:text-black">TDS</Link></li>
          </ul>
        )}
      </li>
    </ul>
  )}
</li> */}


{/* 
                                // <li className="submenu">
                                //     <Link
                                //         to="#"
                                //         className={
                                //             openMenus["Menu10"] ? "subdrop active" : "subdrop"
                                //         }
                                //         onClick={() => {
                                //             handleMenu("Menu10");
                                //         }}
                                //     >
                                //         <i className="ti ti-file-report"></i>
                                //         <span>PARTNER CONNECT</span>
                                //         <span
                                //             className="menu-arrow"
                                //             style={{
                                //                 transform: openMenus["Menu10"]
                                //                     ? "rotate(90deg)"
                                //                     : "rotate(0deg)",
                                //                 transition: "transform 0.3s ease",
                                //             }}
                                //         ></span>
                                //     </Link>
                                //     <ul>
                                //         <li><Link to={route.managePartnerConnect} className="text-sm text-gray-600 hover:text-black">Manage Partner Connect</Link></li>
                                //         <li><Link to={route.managestaff} className="text-sm text-gray-600 hover:text-black">Manage Staffs</Link></li>
                                //         <li><Link to={route.manageInvoices} className="text-sm text-gray-600 hover:text-black">Manage Invoices</Link></li>
                                //         <li><Link to={route.manageLeads} className="text-sm text-gray-600 hover:text-black">Manage Leads</Link></li>
                                //         <li className="submenu submenu-two subdrop">
                                //             <Link
                                //                 to="#"
                                //                 className={
                                //                     openSubMenus["subMenu8"]
                                //                         ? "subdrop active"
                                //                         : "subdrop"
                                //                 }
                                //                 onClick={() => {
                                //                     handleSubMenu("subMenu8");
                                //                 }}
                                //             >
                                //                 CMS
                                //                 <span
                                //                     className="menu-arrow inside-submenu"
                                //                     style={{
                                //                         transform: openSubMenus["subMenu8"]
                                //                             ? "rotate(90deg)"
                                //                             : "rotate(0deg)",
                                //                         transition: "transform 0.3s ease",
                                //                     }}
                                //                 ></span>
                                //             </Link>
                                //             {openSubMenus["subMenu8"] && (
                                //                 <ul>
                                //                     <li><Link to={route.manageBankCommission} className="text-sm text-gray-500 hover:text-black">Bank Commission</Link></li>
                                //                     <li><Link to={route.manageTDS} className="text-sm text-gray-500 hover:text-black">TDS</Link></li>


                                //                 </ul>
                                //             )}
                                //         </li>


                                //     </ul>
                                // </li> */}

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['hrms'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('hrms')
                                        }}
                                    >
                                        <i className="ti ti-file-invoice"></i><span>HUMAN RESOURCE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['hrms'] &&
                                        <ul>
                                            <li><Link to={route.manageStaff}>Manage Staff </Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Attendance</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Leaves</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Salary</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Targets</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Achievements</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Incentives</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Rewards</Link></li>
                                           
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['accounts'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('accounts')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>ACCOUNTS</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["accounts"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Accounts</Link></li>
                                        </ul>
                                    }
                                </li> 
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['rolemanagement'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('rolemanagement')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>ROLE MANAGEMENT</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["rolemanagement"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Role Management</Link></li>
                                        </ul>
                                    }
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['wallet'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('wallet')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>WALLET</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["wallet"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Wallet</Link></li>
                                        </ul>
                                    }
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['sametime'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('sametime')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>SAMETIME (TEAM CHAT)</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["sametime"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Sametime</Link></li>
                                        </ul>
                                    }
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['calculator'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('calculator')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>CALCULATOR</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["calculator"] &&
                                        <ul>
                                            <li><Link to={route.calculator}>Manage Calculator</Link></li>
                                        </ul>
                                    }
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['product'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('product')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>PRODUCT</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["product"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Product</Link></li>
                                        </ul>
                                    }
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['ecard'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('ecard')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>E-CARD</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["ecard"] &&
                                        <ul>
                                            <li><Link to={route.ecard}>Manage E-Card</Link></li>
                                        </ul>
                                    }
                                </li>
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['odasoffer'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('odasoffer')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>ODAS OFFER</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["odasoffer"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Odas Offer</Link></li>
                                        </ul>
                                    }
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['lenderdeep'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('lenderdeep')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>LENDER DEEP INTEGRATION</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["lenderdeep"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Lender Deep Integration</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['dataintelligence'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('dataintelligence')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>DATA INTELLIGENCE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["dataintelligence"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Data intelligence</Link></li>
                                        </ul>
                                    }
                                </li>
                                     <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['marketing'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('marketing')
                                        }}>
                                        <i className="ti ti-timeline-event-exclamation">
                                        </i><span>MARKETING</span>
                                        <span className="menu-arrow"></span></Link>
                                        {openMenus["marketing"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Marketing</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['crosssell'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('crosssell')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>CROSS SELL</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["crosssell"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Cross Sell</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['mail'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('mail')
                                        }}
                                    >
                                        <i className="ti ti-mail"></i><span>MAIL</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["mail"] &&
                                        <ul>
                                            <li><Link to={route.email}>Manage Mail</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['assemnetmodule'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('assemnetmodule')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>SELF ASSEMNET MODULE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["assemnetmodule"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Self Assemnet Module</Link></li>
                                        </ul>
                                    }
                                </li> */}















                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['task'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('task')
                                        }}>
                                        <i className="ti ti-list-check">
                                        </i><span>TASKS</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['task'] &&
                                        <ul>
                                            <li><Link to={route.tasks}>Manage Task</Link></li>
                                            <li><Link to={route.tasks}>New Tasks</Link></li>
                                            <li><Link to={route.tasks}>Assigned Tasks </Link></li>
                                            <li><Link to={route.tasks}>Open Tasks</Link></li>
                                            <li><Link to={route.tasks}>In Process Tasks</Link></li>
                                            <li><Link to={route.tasks}>Closed Tasks</Link></li>
                                        </ul>
                                    }

                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu6'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu6')
                                        }}>
                                        <i className="ti ti-user-up">
                                        </i><span>CUSTOMERS</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.customers}>Manage Customer</Link></li>
                                        <li><Link to={route.customerList}>Add Contacts</Link></li>
                                        <li><Link to={route.customerList}>Add Customer</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['incentives'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('incentives')
                                        }}
                                    >
                                        <i className="ti ti-file-invoice"></i><span>INCENTIVES</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['incentives'] &&
                                        <ul>
                                            <li><Link to={route.rolesPermissions}>Staff Targets</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Achievements</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Incentives</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Rewards</Link></li>
                                        </ul>
                                    }

                                </li> */}



                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['services'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('services')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>SERVICES</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["services"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Services</Link></li>
                                            <li><Link to={route.services}>Disabled Services </Link></li>
                                            <li><Link to={route.services}>Add Services</Link></li>
                                        </ul>
                                    }

                                </li> */}

                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['sales'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('sales')
                                        }}
                                    >
                                        <i className="ti ti-chart-arcs">
                                        </i><span>SALES</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['sales'] &&
                                        <ul>
                                            <li><Link to={route.leads}>Manage Leads</Link></li>
                                            <li><Link to={route.leads}>Add Lead</Link></li>
                                            <li><Link to={route.leads}>Proposal Template</Link></li>
                                        </ul>
                                    }

                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['task'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('task')
                                        }}>
                                        <i className="ti ti-list-check">
                                        </i><span>TASKS</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['task'] &&
                                        <ul>
                                            <li><Link to={route.tasks}>Task Category</Link></li>
                                            <li><Link to={route.tasks}>New Tasks</Link></li>
                                            <li><Link to={route.tasks}>Assigned Tasks </Link></li>
                                            <li><Link to={route.tasks}>Open Tasks</Link></li>
                                            <li><Link to={route.tasks}>In Process Tasks</Link></li>
                                            <li><Link to={route.tasks}>Closed Tasks</Link></li>
                                        </ul>
                                    }

                                </li> */}

                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu7'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu7')
                                        }}>
                                        <i className="ti ti-report-money">
                                        </i><span>FINANCE</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.customerList}>View Contracts</Link></li>
                                        <li><Link to={route.customerList}>Payment Schedule</Link></li>
                                        <li><Link to={route.customerList}>Create Invoices</Link></li>
                                        <li><Link to={route.customerList}>New Invoices</Link></li>
                                        <li><Link to={route.customerList}>Due Invoices</Link></li>
                                        <li><Link to={route.customerList}>Paid Invoices</Link></li>
                                        <li><Link to={route.customerList}>Customer SOA</Link></li>
                                        <li><Link to={route.customerList}>Connect Zoho</Link></li>
                                        <li><Link to={route.customerList}>Connect SAP</Link></li>
                                        <li><Link to={route.customerList}>Connect Tally</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu8'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu8')
                                        }}
                                    >
                                        <i className="ti ti-ticket">
                                        </i><span>SUPPORT</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.ticketStage}>Support Category</Link></li>
                                        <li><Link to={route.ticketStage}>Support Sub Category</Link></li>
                                        <li><Link to={route.ticketStage}>Create Support Ticket</Link></li>
                                        <li><Link to={route.ticketStage}>Open Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>In Process Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>Closed Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>Hold Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>AI Chatbot</Link></li>
                                        <li><Link to={route.ticketStage}>Video Chat</Link></li>
                                        <li><Link to={route.ticketStage}>Voice Calls</Link></li>
                                        <li><Link to={route.ticketStage}>Manage FAQ</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu9'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu9')
                                        }}>
                                        <i className="ti ti-timeline-event-exclamation">
                                        </i><span>MARKETING</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.campaign}>Campaigns</Link></li>
                                        <li><Link to={route.email}>Emails</Link></li>
                                        <li><Link to={route.deals}>Deals</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['menu-sub'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('menu-sub')
                                        }}

                                    >
                                        <i className="ti ti-building-community"></i><span>SUBSCRIPTION</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['menu-sub'] &&
                                        <ul>
                                            <li><Link to={route.companies}>Manage Companies </Link></li>
                                            <li><Link to={route.membershipplan}>Membership Plans </Link></li>
                                            <li><Link to={route.membershipAddon}>Membership Addons </Link></li>
                                            <li><Link to={route.membershipTransaction}>Transactions </Link></li>
                                        </ul>
                                    }

                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['expense'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('expense')
                                        }}

                                    >
                                        <i className="ti ti-file-delta"></i><span>EXPENSE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['expense'] &&
                                        <ul>
                                            <li><Link to={route.salesDashboard}>Expense Category </Link></li>
                                            <li><Link to={route.salesDashboard}>Expense Sub Category </Link></li>
                                            <li><Link to={route.salesDashboard}>Create Expense</Link></li>
                                            <li><Link to={route.salesDashboard}>Manage Expense</Link></li>
                                            <li><Link to={route.salesDashboard}>Expense Summary</Link></li>
                                            <li><Link to={route.salesDashboard}>AI-Expense Summary</Link></li>
                                            <li><Link to={route.membershipTransaction}>Connect with Zoho</Link></li>
                                        </ul>
                                    }

                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['setting'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('setting')
                                        }}>
                                        <i className="ti ti-settings-cog">
                                        </i><span>SETTINGS</span>
                                        <span className="menu-arrow"></span></Link>

                                    <ul>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu2'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu2')
                                                }} >
                                                General Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu2'] &&
                                                <ul>
                                                    <li><Link to={route.profile}>Profile</Link></li>
                                                    <li><Link to={route.security}>Security</Link></li>
                                                    <li><Link to={route.notification}>Notification</Link></li>
                                                    <li><Link to={route.connectedApps}>Connected App</Link></li>
                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu3'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu3')
                                                }} >
                                                Website Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu3'] &&
                                                <ul>
                                                    <li><Link to={route.companySettings}>Company Setting</Link></li>
                                                    <li><Link to={route.localization}>Localization</Link></li>
                                                    <li><Link to={route.prefixes}>Prefixes</Link></li>
                                                    <li><Link to={route.preference}>Preference</Link></li>
                                                    <li><Link to={route.appearance}>Appearance</Link></li>
                                                    <li><Link to={route.language}>Language</Link></li>
                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu4'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu4')
                                                }} >
                                                App Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu4'] &&
                                                <ul>
                                                    <li><Link to={route.invoiceSettings}>Invoice</Link></li>
                                                    <li><Link to={route.printers}>Printers</Link></li>
                                                    <li><Link to={route.customFields}>Custom Fields</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu5'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu5')
                                                }} >
                                                System Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu5'] &&
                                                <ul>
                                                    <li><Link to={route.emailSettings}>Email</Link></li>
                                                    <li><Link to={route.smsGateways}>SMS-Gateways</Link></li>
                                                    <li><Link to={route.gdprCookies}>GDPR-Cookies</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu6'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu6')
                                                }} >
                                                Financial Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu6'] &&
                                                <ul>
                                                    <li><Link to={route.paymentGateways}>Payment Gateways</Link></li>
                                                    <li><Link to={route.bankAccount}>Bank Accounts</Link></li>
                                                    <li><Link to={route.taxRates}>Tax Rates</Link></li>
                                                    <li><Link to={route.currencies}>Currencies</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu7'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu7')
                                                }} >
                                                Other Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu7'] &&
                                                <ul>
                                                    <li><Link to={route.storage}>Storage</Link></li>
                                                    <li><Link to={route.banIpAddrress}>Ban IP Address</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu8'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu8')
                                                }} >
                                                Master
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu8'] &&
                                                <ul>
                                                    <li><Link to={route.sources}>Sources</Link></li>
                                                    <li><Link to={route.lostReason}>Lost Reasons</Link></li>
                                                    <li><Link to={route.contactStage}>Contact Stage</Link></li>
                                                    <li><Link to={route.industry}>Industry</Link></li>
                                                    <li><Link to={route.calls}>Calls</Link></li>
                                                </ul>
                                            }
                                        </li>

                                    </ul>
                                </li> */}
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['setup'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('setup')
                                        }}>
                                        <i className="ti ti-settings-cog">
                                        </i><span>SETUP</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['setup'] &&
                                        <ul>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['staff-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('staff-master')
                                                    }} >
                                                    Staff Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['staff-master'] &&
                                                    <ul>
                                                        <li><Link to={route.department}> Department </Link></li>
                                                        <li><Link to={route.role}>Roles</Link></li>
                                                        <li><Link to={route.group}>Group </Link></li>
                                                        <li><Link to="#">Permissions</Link></li>
                                                        <li><Link to={route.workShift}>Working Shift</Link></li>
                                                        <li><Link to={route.jobType}>Job Type</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['product-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('product-master')
                                                    }} >
                                                    Product Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['product-master'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                        <li><Link to={route.prefixes}>Tax</Link></li>
                                                        <li><Link to={route.preference}>Unit</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['service-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('service-master')
                                                    }} >
                                                    Services Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['service-master'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                        <li><Link to={route.prefixes}>Tax</Link></li>
                                                        <li><Link to={route.preference}>Unit</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['sales-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('sales-master')
                                                    }} >
                                                    Sales Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['sales-master'] &&
                                                    <ul>
                                                        <li><Link to={route.source}>Source</Link></li>
                                                        <li><Link to={route.reasons}>Reasons</Link></li>
                                                        <li><Link to={route.industry}>Industry</Link></li>
                                                        <li><Link to={route.stage}>Stage</Link></li>

                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['task-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('task-master')
                                                    }} >
                                                    Task Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['task-master'] &&
                                                    <ul>
                                                        <li><Link to={route.taskCategory}>Category</Link></li>
                                                        <li><Link to={route.taskSubCategory}>Sub Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['customer-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('customer-master')
                                                    }} >
                                                    Customer Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['customer-master'] &&
                                                    <ul>
                                                        <li><Link to={route.storage}>Group</Link></li>
                                                        <li><Link to={route.banIpAddrress}>Flag</Link></li>

                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['finance-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('finance-master')
                                                    }} >
                                                    Finance Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['finance-master'] &&
                                                    <ul>
                                                        <li><Link to={route.sources}>GST</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['subMenu8'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('subMenu8')
                                                    }} >
                                                    Support Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['subMenu8'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                        <li><Link to={route.localization}>FAQ Category</Link></li>
                                                        <li><Link to={route.localization}>FAQ Sub Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['marketing-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('marketing-master')
                                                    }} >
                                                    Marketing Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['marketing-master'] &&
                                                    <ul>
                                                        <li><Link to={route.sources}>Campaign Type</Link></li>
                                                        <li><Link to={route.lostReason}>UTM Source</Link></li>
                                                        <li><Link to={route.contactStage}>Vendor Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['expense-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('expense-master')
                                                    }} >
                                                    Expense Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['expense-master'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                        </ul>
                                    }
                                </li> */}

                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </Scrollbars>
    </div>



}

export default Sidebar;



