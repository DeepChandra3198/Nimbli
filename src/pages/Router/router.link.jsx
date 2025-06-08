import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";

import SalesDashboardPage from "../OneView/SalesDashboardPage"
import StaffPage from '../HumanResource/StaffPage'
import StaffDetailPage from "../HumanResource/StaffDetailPage";
import RolesPermissions from "../HumanResource/RolesPermissions";

import ProductPage from '../Product/Product'

import ServicePage from "../Services/Services";

import OnlyDialer from "../OnlyDialer/OnlyDialer";
import LeadDetailsPage from "../OnlyDialer/LeadDetailsPage";

// import LeadsPage from "../Sales/LeadsPage";
import LeadsKanban from "../Sales/LeadsKanban";
// import LeadDetailsPage from "../Sales/LeadDetailsPage";

import CustomerPage from "../Customer/CustomerPage";
import CustomerList from "../Customer/CustomerList";
import CustomerGrid from "../Customer/CustomerGrid";
import CustomerDetails from "../Customer/CustomerDetailsPage"

import Companies from "../Subscription/Companies";
import CompaniesGrid from "../Subscription/CompaniesGrid";
import CompaniesDetails from "../Subscription/CompaniesDetails"
import MembershipAddon from "../Subscription/MembershipAddon";
import MembershipTransaction from "../Subscription/MembershipTransaction";
import Membershipplan from "../Subscription/MembershipPlan";

import Task from "../Task/TaskPage";
import TaskDetailsPage from "../Task/TaskDetailsPage"

import Profile from "../Settings/General Settings/Profile";
import Security from "../Settings/General Settings/Security";
import Notifications from "../Settings/General Settings/Notifications";
import ConnectedApps from "../Settings/General Settings/ConnectedApps";

import CompanySettings from "../Settings/Website Settings/CompanySetting";
import Language from "../Settings/Website Settings/Language";
import Preference from "../Settings/Website Settings/Preference";
import Prefixes from "../Settings/Website Settings/Prefixes";
import Appearance from "../Settings/Website Settings/Appearance";
import Localization from "../Settings/Website Settings/Localization";

import CustomFields from "../Settings/App Settings/CustomFields";
import Invoice from "../Settings/App Settings/Invoice";
import Printers from "../Settings/App Settings/Printers";

import BankAccounts from "../Settings/Financial Settings/BankAccounts";
import Currencies from "../Settings/Financial Settings/Currencies";
import PaymentGateways from "../Settings/Financial Settings/PaymentGateways";
import TaxRates from "../Settings/Financial Settings/TaxRates";

import EmailSettings from "../Settings/System Settings/Email";
import GdprCookies from "../Settings/System Settings/GdprCookies";
import SmsGateways from "../Settings/System Settings/SmsGateways";

import Storage from "../Settings/Other Settings/Storage";
import BanIpAddress from "../Settings/Other Settings/BanIpAddress";

// import Sources from "../Settings/Master/Sources";
// import LostReason from "../Settings/Master/LostReason";
// import ContactStage from "../Settings/Master/ContactStage";
// import Industry from "../Settings/Master/Industry";
// import Calls from "../Settings/Master/Calls";

import Department from "../SetUp/StaffMaster/Department";
import Role from "../SetUp/StaffMaster/Role";
import Group from "../SetUp/StaffMaster/Group";
import JobType from "../SetUp/StaffMaster/JobType";
import WorkShift from "../SetUp/StaffMaster/WorkShift";

import Source from "../SetUp/SalesMaster/Source";
import Reasons from "../SetUp/SalesMaster/Reasons";
import Industry from "../SetUp/SalesMaster/Industry";
import Stage from "../SetUp/SalesMaster/Stage";

import TaskCategory from "../SetUp/TaskMaster/TaskCategory";
import TaskSubCategory from "../SetUp/TaskMaster/TaskSubCategory";

// import ContactMessages from "../support/contactMessages";
import TicketStage from "../Support/NewTicket";

import Faq from "../Content/Faq";

import Chat from "../Application/Chat";
import VideoCall from "../Application/VideoCall";
import Todo from "../Application/ToDo";
import FileManager from "../Application/FileManager";
import CallHistory from "../Application/CallHistory";
import AudioCall from "../Application/AudioCall";
import Email from "../Application/Email";
import Notes from "../Application/Notes";
import Calendar from "../Application/Calender";

import Deals from "../Marketing/Deals";
import DealsDetails from "../Marketing/DealsDetails";
import DealsKanban from "../Marketing/DealsKanban";
import Campaign from "../Marketing/Campaign";
import Category from "../Product&Catelogue/Category/Category";
import Brand from "../Product&Catelogue/Brand/Brand";
import SizeColour from "../Product&Catelogue/Size&Colour/SizeColour";
import SizeColourOption from "../Product&Catelogue/Size&ColourOption/SizeColourOption";
import Filters from "../Product&Catelogue/Filter/Filters";
import FiltersValue from "../Product&Catelogue/FiltersValue/filtersValue";

// import Activities from "../crm/activities";
// import Campaign from "../crm/campaign";
// import ActivityCalls from "../crm/activityCalls";
// import ActivityMail from "../crm/activityMail";
// import ActivityTask from "../crm/activityTask";
// import CampaignComplete from "../crm/campaign/campaignComplete";
// import CampaignArchieve from "../crm/campaign/campaignArchieve";
// import Analytics from "../crm/analytics";
// import ConnectedApps from "../settings/generalSettings/connectedApps";
// import Countries from "../content/location/countries";
// import ContactDetails from "../crm/contacts";
// import BankAccounts from "../settings/financialSettings/bankAccounts";
// import BlankPage from "../pages/blankPage";
// import Calendar from "../mainMenu/apps/calendar";
// import Deals from "../crm/deals";
// import DealsDetails from "../crm/deals/dealsDetails";
// import Currencies from "../settings/financialSettings/currencies";
// import DataTable from "../tables/dataTable";
// import BasicTable from "../tables/basicTable";
// import Country from "../content/countries";

// import DealReports from "../reports/dealReports";
// import DeleteRequest from "../userManagement/deleteRequest";


// import Notes from "../application/notes";
// import Cities from "../content/cities";
// import ComingSoon from "../pages/comingSoon";
// import Manageusers from "../userManagement/manageusers";
// import LockScreen from "../authentication/lockscreen";

// import Leads from "../crm/leads/leads";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ForgotPassword from "../Auth/ForgotPassword";
import CreditScore from "../CreditScore/CreditScore";
import CusCibilDet from "../../components/CreditScore/CusCibilDet";
import Ecard from "../E-Card/Ecard";
import Calculator from "../Calculator/Calculator";
import ManagePartnerConnect from "../Partners/ManagePartnerConnect";
import ManageStaffs from "../Partners/ManageStaffs";
import ManageInvoices from "../Partners/ManageInvoices";
import ManageLeads from "../Partners/ManageLeads";
import ManageBankCommission from "../Partners/ManageBankCommission";
import ManageTds from "../Partners/ManageTds";
import ManagePartnerConnectDetails from "../Partners/ManagePartnerConnectDetails";

// inventory and products
import Products from "../../pages/Inventory&Product/ProductList/ProductList";
import DisibaledProducts from "../../pages/Inventory&Product/DisibaledProducts/DisibaledProducts";
import EnaledProducts from "../../pages/Inventory&Product/EnabledProducts/EnabledProducts";
import BulkUpload from "../../pages/Inventory&Product/BulkProduct/BulkProducts";



// Customer 
import Customer from "../../pages/Customer/AllBuyers/Customers"

// Sales order 
import OrderList from "../../pages/OrderSales/OderList"

// CMS
import BlogCategory from "../../pages/CMS/BlogCategory"
import Blogs from "../../pages/CMS/Blogs"
import BlogSubCategory from "../../pages/CMS/BlogSubCategory"
import Faqs from "../../pages/CMS/Faq"
import Footer from "../../pages/CMS/Footer"
import HomeBanners from "../../pages/CMS/HomeBanners"
import MediaPages from "../../pages/CMS/MediaPages"
import SubFooter from "../../pages/CMS/SubFooter"
import WebPages from "../../pages/CMS/WebPages"

//Support
import CloseTicket from "../../pages/Support/ClosedTicket"
import HoldTicket from "../../pages/Support/HoldTicket"
import NewTicket from "../../pages/Support/NewTicket"
import OpenTicket from "../../pages/Support/OpenTicket"

//Reports
import OrderReport from "../../pages/Reports/Order"


const route = all_routes;

export const publicRoutes = [
    {
        path: route.salesDashboard,
        element: <SalesDashboardPage />,
    },
    {
        path: '/',
        name: 'Root',
        element: <Navigate to="/login" />,
    },
    {
        path: route.manageStaff,
        element: <StaffPage />,
    },
    {
        path: route.staffDetails,
        element: <StaffDetailPage />,
    },
    {
        path: route.rolesPermissions,
        element: <RolesPermissions />,
    },
    {
        path: route.product,
        element: <ProductPage />,
    },
    {
        path: route.services,
        element: <ServicePage />,
    },
    {
        path: route.managePartnerConnect,
        element: <ManagePartnerConnect />,
    },
    {
        path: route.managePartnerConnectDetails,
        element: <ManagePartnerConnectDetails />,
    },
    {
        path: route.managestaff,
        element: <ManageStaffs />,
    },
    {
        path: route.manageInvoices,
        element: <ManageInvoices />,
    },
    {
        path: route.manageLeads,
        element: <ManageLeads />,
    },
    {
        path: route.manageBankCommission,
        element: <ManageBankCommission />,
    },
    {
        path: route.manageTDS,
        element: <ManageTds />,
    },
    {
        path: route.dialer,
        element: <OnlyDialer />
    },
    {
        path: route.leadsDetails,
        element: <LeadDetailsPage />
    },
    // {
    //     path: route.leads,
    //     element: <LeadsPage />,
    // },
    {
        path: route.leadsKanban,
        element: <LeadsKanban />,
    },
    {
        path: route.category,
        element: <Category />,
    },
    {
        path: route.brand,
        element: <Brand />,
    },
    {
        path: route.sizeColour,
        element: <SizeColour />,
    },
    {
        path: route.sizeColourOption,
        element: <SizeColourOption />,
    },
    {
        path: route.filters,
        element: <Filters />,
    },
    {
        path: route.filtersValue,
        element: <FiltersValue />,
    },
    // {
    //     path: route.leadsDetails,
    //     element: <LeadDetailsPage />
    // },
    {
        path: route.customers,
        element: <CustomerPage />,
    },
    {
        path: route.customerList,
        element: <CustomerList />,
    },
    {
        path: route.customerGrid,
        element: <CustomerGrid />,
    },
    {
        path: route.customerDetails,
        element: <CustomerDetails />,
    },
    {
        path: route.companies,
        element: <Companies />,
    },
    {
        path: route.companiesGrid,
        element: <CompaniesGrid />,
    },
    {
        path: route.companyDetails,
        element: <CompaniesDetails />,
    },
    {
        path: route.membershipplan,
        element: <Membershipplan />,
    },
    {
        path: route.membershipAddon,
        element: <MembershipAddon />,
    },
    {
        path: route.membershipTransaction,
        element: <MembershipTransaction />,
    },
    {
        path: route.tasks,
        element: <Task />,
    },
    {
        path: route.taskDetails,
        element: <TaskDetailsPage />,
    },

    {
        path: route.department,
        element: <Department />,
    },
    {
        path: route.role,
        element: <Role />,
    },
    {
        path: route.group,
        element: <Group />,
    },
    {
        path: route.jobType,
        element: <JobType />,
    },
    {
        path: route.workShift,
        element: <WorkShift />,
    },
    {
        path: route.source,
        element: <Source />,
    },
    {
        path: route.reasons,
        element: <Reasons />,
    },
    {
        path: route.industry,
        element: <Industry />,
    },
    {
        path: route.stage,
        element: <Stage />,
    },
    {
        path: route.taskCategory,
        element: <TaskCategory />,
    },
    {
        path: route.taskSubCategory,
        element: <TaskSubCategory />,
    },
    {
        path: route.products,
        element: < Products />,
    },
    {
        path: route.disibaledProducts,
        element: < DisibaledProducts />,
    },
    {
        path: route.enabledProducts,
        element: < EnaledProducts />,
    },
    {
        path: route.bulkUpload,
        element: < BulkUpload />,
    },
    {
        path: route.buyers,
        element: < Customer />,
    },
    {
        path: route.newOrders,
        element: < OrderList />,
    },
    {
        path: route.acceptedOrders,
        element: < OrderList />,
    },
    {
        path: route.packedOrders,
        element: < OrderList />,
    },
    {
        path: route.readyToShip,
        element: < OrderList />,
    },
    {
        path: route.shippedOrders,
        element: < OrderList />,
    },
    {
        path: route.deliveredOrders,
        element: < OrderList />,
    },
    {
        path: route.cancelledOrders,
        element: < OrderList />,
    },
    {
        path: route.returnedOrders,
        element: < OrderList />,
    },
    {
        path: route.pendingOrders,
        element: < OrderList />,
    },

    // {
    //     path: route.lostReason,
    //     element: <LostReason />,
    // },
    // {
    //     path: route.contactStage,
    //     element: <ContactStage />,
    // },

    // {
    //     path: route.calls,
    //     element: <Calls />,
    // },
    {
        path: route.connectedApps,
        element: <ConnectedApps />,
    },
    {
        path: route.notification,
        element: <Notifications />,
    },
    {
        path: route.profile,
        element: <Profile />,
    },
    {
        path: route.security,
        element: <Security />,
    },
    {
        path: route.appearance,
        element: <Appearance />,
    },
    {
        path: route.companySettings,
        element: <CompanySettings />,
    },
    {
        path: route.language,
        element: <Language />,
    },
    {
        path: route.localization,
        element: <Localization />,
    },
    {
        path: route.preference,
        element: <Preference />,
    },
    {
        path: route.prefixes,
        element: <Prefixes />,
    },
    {
        path: route.invoiceSettings,
        element: <Invoice />,
    },
    {
        path: route.currencies,
        element: <Currencies />,
    },
    {
        path: route.customFields,
        element: <CustomFields />,
    },
    {
        path: route.printers,
        element: <Printers />,
    },
    {
        path: route.bankAccounts,
        element: <BankAccounts />,
    },
    {
        path: route.currencies,
        element: <Currencies />,
    },
    {
        path: route.paymentGateways,
        element: <PaymentGateways />,
    },
    {
        path: route.taxRates,
        element: <TaxRates />,
    },
    {
        path: route.banIpAddrress,
        element: <BanIpAddress />,
    },
    {
        path: route.storage,
        element: <Storage />,
    },
    {
        path: route.emailSettings,
        element: <EmailSettings />,
    },
    {
        path: route.gdprCookies,
        element: <GdprCookies />,
    },
    {
        path: route.smsGateways,
        element: <SmsGateways />,
    },
    {
        path: route.faq,
        element: <Faq />,
    },
    //   {
    //     path: route.contactMessages,
    //     element: <ContactMessages />,
    //     route: Route,
    //   },
    {
        path: route.ticketStage,
        element: <TicketStage />,
    },
    {
        path: route.audioCall,
        element: <AudioCall />,
    },
    {
        path: route.callHistory,
        element: <CallHistory />,
    },
    {
        path: route.todo,
        element: <Todo />,
    },
    {
        path: route.email,
        element: <Email />,
    },
    {
        path: route.videoCall,
        element: <VideoCall />,
    },
    {
        path: route.chat,
        element: <Chat />,
    },
    {
        path: route.fileManager,
        element: <FileManager />,
    },
    {
        path: route.notes,
        element: <Notes />,
    },
    {
        path: route.calendar,
        element: <Calendar />,
    },

    {
        path: route.deals,
        element: <Deals />,
    },
    {
        path: route.dealsDetails,
        element: <DealsDetails />,
    },
    {
        path: route.dealsKanban,
        element: <DealsKanban />,
    },
    {
        path: route.campaign,
        element: <Campaign />,
    },
    {
        path: route.creditscore,
        element: <CreditScore />
    },
    {
        path: route.cuscibildet,
        element: <CusCibilDet />,
    },
    {
        path: route.ecard,
        element: <Ecard />,
    },
    {
        path: route.calculator,
        element: <Calculator />,
    },
    {
        path: route.homePageBanners,
        element: <HomeBanners />
    },
    {
        path: route.faqs,
        element: <Faqs />
    },
    {
        path: route.blogCategory,
        element: <BlogCategory />
    },
    {
        path: route.blog,
        element: <Blogs />
    },
    {
        path: route.blogSubCateogory,
        element: <BlogSubCategory />
    },
    {
        path: route.webPages,
        element: <WebPages />
    },
    {
        path: route.mediaFiles,
        element: <MediaPages />
    },
    {
        path: route.subHeader,
        element: <SubFooter />
    }, // Assuming SubFooter is header? Adjust if needed
    {
        path: route.subHeaderDetail,
        element: <SubFooter />
    },
    {
        path: route.footer,
        element: <Footer />
    },

    // Support
    {
        path: route.newTickets,
        element: <NewTicket />
    },
    {
        path: route.openTickets,
        element: <OpenTicket />
    },
    {
        path: route.inProcessTickets,
        element: <HoldTicket />
    }, // Assuming HoldTicket = In Process
    {
        path: route.closedTickets,
        element: <CloseTicket />
    },

    // Reports
    {
        path: route.orderReport,
        element: <OrderReport />
    },

    //   {
    //     path: route.callHistory,
    //     element: <CallHistory />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activities,
    //     element: <Activities />,
    //     route: Route,
    //   },

    //   {
    //     path: route.activityMeeting,
    //     element: <ActivityMetting />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activityCalls,
    //     element: <ActivityCalls />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activityMail,
    //     element: <ActivityMail />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activityTask,
    //     element: <ActivityTask />,
    //     route: Route,
    //   },
    //   {
    //     path: route.campaignComplete,
    //     element: <CampaignComplete />,
    //     route: Route,
    //   },
    //   {
    //     path: route.campaignArchieve,
    //     element: <CampaignArchieve />,
    //     route: Route,
    //   },
    //   {
    //     path: route.appearance,
    //     element: <Appearance />,
    //     route: Route,
    //   },
    //   {
    //     path: route.analytics,
    //     element: <Analytics />,
    //     route: Route,
    //   },
    //   {
    //     path: route.connectedApps,
    //     element: <ConnectedApps />,
    //     route: Route,
    //   },
    //   {
    //     path: route.countries,
    //     element: <Country />,
    //     route: Route,
    //   },

    //   {
    //     path: route.bankAccounts,
    //     element: <BankAccounts />,
    //     route: Route,
    //   },
    //   {
    //     path: route.blankPage,
    //     element: <BlankPage />,
    //     route: Route,
    //   },

    //   {
    //     path: route.manageusers,
    //     element: <Manageusers />,
    //   },




    //   {
    //     path: route.countries,
    //     element: <Countries />,
    //     route: Route,
    //   },
    //   {

    //   {
    //     path: route.dataTables,
    //     element: <DataTable />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tablesBasic,
    //     element: <BasicTable />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dealReports,
    //     element: <DealReports />,
    //     route: Route,
    //   },


    //   {
    //     path: route.deleteRequest,
    //     element: <DeleteRequest />,
    //     route: Route,
    //   },
    //   {
    //     path: route.cities,
    //     element: <Cities />,
    //     route: Route,
    //   },
    //   
    //   { path: route.localization, element: <Localization />, route: Route },
    //   {
    //     path: route.leadsDetails,
    //     element: <LeadsDetails />,
    //     route: Route,
    //   },
    //   {
    //     path: route.leads,
    //     element: <Leads />,
    //     route: Route,
    //   },
    //   {
    //     path: route.companies,
    //     element: <Companies />,
    //     route: Route,
    //   },
    //   {
    //     path: route.accordion,
    //     element: <Accordion />,
    //     route: Route,
    //   },
    //   {
    //     path: route.avatar,
    //     element: <Avatar />,
    //     route: Route,
    //   },
    //   {
    //     path: route.badges,
    //     element: <Badges />,
    //     route: Route,
    //   },
    //   {
    //     path: route.border,
    //     element: <Borders />,
    //     route: Route,
    //   },
    //   {
    //     path: route.breadcrums,
    //     element: <Breadcrumb />,
    //     route: Route,
    //   },
    //   {
    //     path: route.button,
    //     element: <Buttons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.buttonGroup,
    //     element: <ButtonsGroup />,
    //     route: Route,
    //   },
    //   {
    //     path: route.cards,
    //     element: <Cards />,
    //     route: Route,
    //   },
    //   {
    //     path: route.carousel,
    //     element: <Carousel />,
    //     route: Route,
    //   },
    //   {
    //     path: route.colors,
    //     element: <Colors />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dropdowns,
    //     element: <Dropdowns />,
    //     route: Route,
    //   },
    //   {
    //     path: route.grid,
    //     element: <Grid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.images,
    //     element: <Images />,
    //     route: Route,
    //   },
    //   {
    //     path: route.lightbox,
    //     element: <Lightboxes />,
    //     route: Route,
    //   },
    //   {
    //     path: route.media,
    //     element: <Media />,
    //     route: Route,
    //   },
    //   {
    //     path: route.modals,
    //     element: <Modals />,
    //     route: Route,
    //   },
    //   {
    //     path: route.navTabs,
    //     element: <NavTabs />,
    //     route: Route,
    //   },
    //   {
    //     path: route.offcanvas,
    //     element: <Offcanvas />,
    //     route: Route,
    //   },
    //   {
    //     path: route.pagination,
    //     element: <Pagination />,
    //     route: Route,
    //   },
    //   {
    //     path: route.popover,
    //     element: <Popovers />,
    //     route: Route,
    //   },
    //   {
    //     path: route.rangeSlider,
    //     element: <RangeSlides />,
    //     route: Route,
    //   },
    //   {
    //     path: route.progress,
    //     element: <Progress />,
    //     route: Route,
    //   },
    //   {
    //     path: route.spinner,
    //     element: <Spinner />,
    //     route: Route,
    //   },

    //   {
    //     path: route.typography,
    //     element: <Typography />,
    //     route: Route,
    //   },
    //   {
    //     path: route.video,
    //     element: <Video />,
    //     route: Route,
    //   },
    //   {
    //     path: route.toasts,
    //     element: <Toasts />,
    //     route: Route,
    //   },


    //   {
    //     path: route.leadsDashboard,
    //     element: <LeadsDashboard />,
    //     route: Route,
    //   },
    //   {
    //     path: route.projectDashboard,
    //     element: <ProjectDashboard />,
    //     route: Route,
    //   },

    //   {
    //     path: route.pages,
    //     element: <Pages />,
    //     route: Route,
    //   },

    //   {
    //     path: route.companyReports,
    //     element: <CompanyReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.contactReports,
    //     element: <ContactReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dealReports,
    //     element: <DealReports />,
    //     route: Route,
    //   },
    //   {
    //     path: route.leadReports,
    //     element: <LeadReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.projectReports,
    //     element: <ProjectReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.taskReports,
    //     element: <TaskReport />,
    //     route: Route,
    //   },

    //   {
    //     path: route.contactStage,
    //     element: <ContactStage />,
    //     route: Route,
    //   },

    //   
    //   {
    //     path: route.deleteRequest,
    //     element: <DeleteRequest />,
    //     route: Route,
    //   },
    //   



    //  

    //   {
    //     path: route.pipeline,
    //     element: <Pipeline />,
    //     route: Route,
    //   },
    //   {
    //     path: route.projects,
    //     element: <Projects />,
    //     route: Route,
    //   },


    //   {
    //     path: route.states,
    //     element: <States />,
    //     route: Route,
    //   },
    //   {
    //     path: route.testimonials,
    //     element: <Testimonials />,
    //     route: Route,
    //   },
    //   {
    //     path: route.clipboard,
    //     element: <ClipBoard />,
    //     route: Route,
    //   },
    //   {
    //     path: route.counter,
    //     element: <Counter />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dragandDrop,
    //     element: <DragAndDrop />,
    //     route: Route,
    //   },
    //   {
    //     path: route.rating,
    //     element: <Rating />,
    //     route: Route,
    //   },
    //   {
    //     path: route.stickyNotes,
    //     element: <Stickynote />,
    //     route: Route,
    //   },
    //   {
    //     path: route.textEditor,
    //     element: <TextEditor />,
    //     route: Route,
    //   },
    //   {
    //     path: route.timeLine,
    //     element: <Timeline />,
    //     route: Route,
    //   },
    //   {
    //     path: route.scrollBar,
    //     element: <Scrollbar />,
    //     route: Route,
    //   },
    //   {
    //     path: route.scrollBar,
    //     element: <Scrollbar />,
    //     route: Route,
    //   },
    //   {
    //     path: route.apexChat,
    //     element: <Apexchart />,
    //     route: Route,
    //   },
    //   {
    //     path: route.featherIcons,
    //     element: <FeatherIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.falgIcons,
    //     element: <FeatherIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.fantawesome,
    //     element: <FontawesomeIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.fantawesome,
    //     element: <FontawesomeIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.materialIcon,
    //     element: <MaterialIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.pe7icon,
    //     element: <PE7Icons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.simpleLineIcon,
    //     element: <SimplelineIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.themifyIcon,
    //     element: <ThemifyIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.typicon,
    //     element: <TypiconIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.basicInput,
    //     element: <BasicInputs />,
    //     route: Route,
    //   },
    //   {
    //     path: route.weatherIcon,
    //     element: <WeatherIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.checkboxandRadion,
    //     element: <CheckboxRadios />,
    //     route: Route,
    //   },
    //   {
    //     path: route.inputGroup,
    //     element: <InputGroup />,
    //     route: Route,
    //   },
    //   {
    //     path: route.gridandGutters,
    //     element: <GridGutters />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formSelect,
    //     element: <FormSelect />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formMask,
    //     element: <FormMask />,
    //     route: Route,
    //   },
    //   {
    //     path: route.fileUpload,
    //     element: <FileUpload />,
    //     route: Route,
    //   },
    //   {
    //     path: route.horizontalForm,
    //     element: <FormHorizontal />,
    //     route: Route,
    //   },
    //   {
    //     path: route.verticalForm,
    //     element: <FormVertical />,
    //     route: Route,
    //   },
    //   {
    //     path: route.floatingLable,
    //     element: <FloatingLabel />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formValidation,
    //     element: <FormValidation />,
    //     route: Route,
    //   },
    //   {
    //     path: route.reactSelect,
    //     element: <FormSelect2 />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formWizard,
    //     element: <FormWizard />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formWizard,
    //     element: <DataTables />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dataTable,
    //     element: <DataTables />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tableBasic,
    //     element: <TablesBasic />,
    //     route: Route,
    //   },
    //   {
    //     path: route.iconicIcon,
    //     element: <IonicIcons />,
    //     route: Route,
    //   },
    //   // {
    //   //   path: route.chart,
    //   //   element: <ChartJs />,
    //   //   route: Route,
    //   // },
    //   {
    //     path: route.tasksImportant,
    //     element: <TasksImportant />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tasksCompleted,
    //     element: <TaskCompleted />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ProposalsList,
    //     element: <Proposalslist />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ProposalsGrid,
    //     element: <Proposalsgrid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ProposalsView,
    //     element: <ProposalsView />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ContractsList,
    //     element: <Contractslist />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ContractsGrid,
    //     element: <ContractsGrid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.payments,
    //     element: <Payments />,
    //     route: Route,
    //   },
    //   {
    //     path: route.InvoiceList,
    //     element: <InvoiceList />,
    //     route: Route,
    //   },
    //   {
    //     path: route.InvoiceGrid,
    //     element: <InvoiceGrid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.estimationList,
    //     element: <EstimationList />,
    //     route: Route,
    //   },
    //   {
    //     path: route.estimationKanban,
    //     element: <EstimationKanban />,
    //     route: Route,
    //   },
    //   {
    //     path: route.placeholder,
    //     element: <Placeholder />,
    //     route: Route,
    //   },
    //   {
    //     path: route.sweetalert,
    //     element: <Alert />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tooltip,
    //     element: <Tooltips />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ribbon,
    //     element: <Ribbon />,
    //     route: Route,
    //   },
];

export const authRoutes = [
    //   {
    //     path: route.comingSoon,
    //     element: <ComingSoon />,
    //     route: Route,
    //   },
    {
        path: route.login,
        element: <Login />,
    },
    {
        path: route.register,
        element: <Register />,
    },
    {
        path: route.forgotPassword,
        element: <ForgotPassword />,
    },
    //   {
    //     path: route.twoStepVerification,
    //     element: <TwoStepVerification />,
    //     route: Route,
    //   },
    //   {
    //     path: route.emailVerification,
    //     element: <EmailVerification />,
    //     route: Route,
    //   },
    //   {
    //     path: route.success,
    //     element: <Success />,
    //     route: Route,
    //   },
    //   {
    //     path: route.register,
    //     element: <Register />,
    //     route: Route,
    //   },
    //   {
    //     path: route.resetPassword,
    //     element: <ResetPassword />,
    //     route: Route,
    //   },

    //   {
    //     path: route.error404,
    //     element: <Error404 />,
    //     route: Route,
    //   },
    //   {
    //     path: route.error500,
    //     element: <Error500 />,
    //     route: Route,
    //   },
    //   {
    //     path: route.underMaintenance,
    //     element: <UnderMaintenance />,
    //     route: Route,
    //   },
    //   {
    //     path: route.lockScreen,
    //     element: <LockScreen />,
    //   },
];
