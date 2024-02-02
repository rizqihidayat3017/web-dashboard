import ComponentDash from "../component/DashboardAdmin/ComponentDash";
import NavbarV2 from "../component/DashboardAdmin/NavbarV2";
import Sidebar from "../component/DashboardAdmin/Sidebar";

function Dashboardv2() {
  return (
    <div>
      <NavbarV2 />
      <Sidebar>
        <ComponentDash />
      </Sidebar>
    </div>
  );
}

export default Dashboardv2;
