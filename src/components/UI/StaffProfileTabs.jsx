
import { Link } from "react-router-dom";
import { all_routes } from "../../pages/Router/all_routes";

const StaffProfileTabs = () => {
    const route = all_routes;
    
    return (
        <div className="card settings-tab ">
            <div className="card-body pb-0">
                <div className="settings-menu">
                    <ul className="nav">
                        <li>
                            <Link to={route.staffInfo} className="active">
                                <i className="ti ti-id-badge" /> Info
                            </Link>
                        </li>
                        <li>
                            <Link to={route.companySettings}>
                                <i className="ti ti-briefcase" /> Admin
                            </Link>
                        </li>
                        <li>
                            <Link to={route.joining}>
                                <i className="ti ti-user" /> Onboarding
                            </Link>
                        </li>
                        <li>
                            <Link to={route.invoiceSettings}>
                                <i className="ti ti-calendar" /> Leave
                            </Link>
                        </li>
                        <li>
                            <Link to={route.emailSettings}>
                                <i className="ti ti-moneybag" /> Banking
                            </Link>
                        </li>
                        <li>
                            <Link to={route.paymentGateways}>
                                <i className="ti ti-moneybag" /> Payroll
                            </Link>
                        </li>
                        <li>
                            <Link to={route.storage}>
                                <i className="ti ti-shield" />
                                Compliances
                            </Link>
                        </li>
                        <li>
                            <Link to={route.insurence}>
                                <i className="ti ti-gift" /> Comp & Ben
                            </Link>
                        </li>
                        <li>
                            <Link to={route.budgetingManagement}>
                                <i className="ti ti-star" /> Performance
                            </Link>
                        </li>
                        <li>
                            <Link to={route.manPowerRating}>
                                <i className="ti ti-heart" /> Retention
                            </Link>
                        </li>
                        <li>
                            <Link to={route.resumeInfo}>
                                <i className="ti ti-file" />
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StaffProfileTabs