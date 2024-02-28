import NavbarV2 from "../component/DashboardAdmin/NavbarV2";
import Sidebar from "../component/DashboardAdmin/Sidebar";
import Econtractku from "../component/Econtract/Econtractku";

function EcontractkuPages() {
  return (
    <div>
      <NavbarV2/>
        <Sidebar>
          <Econtractku />
        </Sidebar>
    </div>
  );
}

export default EcontractkuPages;
