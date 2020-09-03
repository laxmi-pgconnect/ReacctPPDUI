
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import AcUnitIcon from '@material-ui/icons/AcUnit';

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Masters from"views/Masters/Masters.js";
import Transactions from "views/Transactions/Transactions.js";
import Reports from "views/Reports/Reports.js";
import ItemMaster from"views/Masters/ItemMaster.js";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/masters",
    name: "Masters",
    icon: Person,
    component: Masters,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "swap_horiz",
    component: Transactions,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: LibraryBooks,
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Info",
    icon: AnnouncementIcon,
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Workflow",
    icon: AcUnitIcon,
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/itemMaster",
    name: "Change Division/Year",
    icon: CallSplitIcon,
    component: ItemMaster,
    layout: "/admin"
  },
  
  
];

export default dashboardRoutes;
