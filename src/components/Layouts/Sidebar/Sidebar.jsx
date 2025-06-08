
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
                                            <li><Link to={route.products}>All Products</Link></li>
                                            <li><Link to={route.disibaledProducts}>Disabled Products</Link></li>
                                            <li><Link to={route.enabledProducts}>Enabled Products</Link></li>
                                            <li><Link to={route.bulkUpload}>Upload Bulk Products</Link></li>
                                        </ul>
                                    )}
                                </li>


                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['cutomers'] ? "subdrop active active" : 'subdrop'}
                                        onClick={() => {
                                            handleMenu('cutomers')
                                        }}
                                    >
                                        <i className="ti ti-layout-2"></i><span>CUSTOMERS</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["cutomers"] &&
                                        <ul>
                                            <li><Link to={route.buyers}>All Buyers</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link
                                        to="#"
                                        className={openMenus['salesOrder'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('salesOrder');
                                        }}
                                    >
                                        <i className="ti ti-shopping-cart" />
                                        <span>SALES ORDER</span>
                                        <span className="menu-arrow"></span>
                                    </Link>

                                    {openMenus['salesOrder'] && (
                                        <ul>
                                            <li><Link to={route.newOrders}>New Orders</Link></li>
                                            <li><Link to={route.acceptedOrders}>Accepted Orders</Link></li>
                                            <li><Link to={route.packedOrders}>Packed Orders</Link></li>
                                            <li><Link to={route.readyToShip}>Ready to Ship Orders</Link></li>
                                            <li><Link to={route.shippedOrders}>Shipped Orders</Link></li>
                                            <li><Link to={route.deliveredOrders}>Delivered Orders</Link></li>
                                            <li><Link to={route.cancelledOrders}>Cancelled Orders</Link></li>
                                            <li><Link to={route.returnedOrders}>Returned Orders</Link></li>
                                            <li><Link to={route.pendingOrders}>Pending Orders</Link></li>
                                        </ul>
                                    )}
                                </li>

                                <li className="submenu">
                                    <Link
                                        to="#"
                                        className={openMenus['cms'] ? "subdrop active" : "subdrop"}
                                        onClick={() => handleMenu('cms')}
                                    >
                                        <i className="ti ti-settings" />
                                        <span>CMS</span>
                                        <span className="menu-arrow"></span>
                                    </Link>

                                    {openMenus['cms'] && (
                                        <ul>
                                            <li><Link to={route.homePageBanners}>Home Page Banners</Link></li>
                                            <li><Link to={route.faqs}>FAQs</Link></li>
                                            <li><Link to={route.blogCategory}>Blog Category</Link></li>
                                            <li><Link to={route.blogSubCateogory}>Blog Sub-Category</Link></li>
                                            <li><Link to={route.blog}>Blog</Link></li>
                                            <li><Link to={route.webPages}>Web Pages</Link></li>
                                            <li><Link to={route.mediaFiles}>Media Files</Link></li>
                                            {/* <li><Link to={route.header}>Header</Link></li> */}
                                            <li><Link to={route.footer}>Footer</Link></li>
                                        </ul>
                                    )}
                                </li>

                                <li className="submenu">
                                    <Link
                                        to="#"
                                        className={openMenus['support'] ? "subdrop active" : "subdrop"}
                                        onClick={() => handleMenu('support')}
                                    >
                                        <i className="ti ti-headset" />
                                        <span>SUPPORTS</span>
                                        <span className="menu-arrow"></span>
                                    </Link>

                                    {openMenus['support'] && (
                                        <ul>
                                            <li><Link to={route.newTickets}>New Tickets</Link></li>
                                            <li><Link to={route.openTickets}>Open Tickets</Link></li>
                                            <li><Link to={route.inProcessTickets}>In Process Tickets</Link></li>
                                            <li><Link to={route.closedTickets}>Closed Tickets</Link></li>
                                        </ul>
                                    )}
                                </li>

                                <li className="submenu">
                                    <Link
                                        to="#"
                                        className={openMenus['reports'] ? "subdrop active" : "subdrop"}
                                        onClick={() => handleMenu('reports')}
                                    >
                                        <i className="ti ti-report" />
                                        <span>Reports</span>
                                        <span className="menu-arrow"></span>
                                    </Link>

                                    {openMenus['reports'] && (
                                        <ul>
                                            {/* <li><Link to={route.salesReport}>Sales Report</Link></li> */}
                                            <li><Link to={route.orderReport}>Order Report</Link></li>
                                            {/* <li><Link to={route.productReport}>Product Report</Link></li>
                                            <li><Link to={route.customerReport}>Customer Report</Link></li>
                                            <li><Link to={route.inventoryReport}>Inventory Report</Link></li>
                                            <li><Link to={route.settlementReport}>Settlement Report</Link></li>  */}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </Scrollbars>
    </div>



}

export default Sidebar;



