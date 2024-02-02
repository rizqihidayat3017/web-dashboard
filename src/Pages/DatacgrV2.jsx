import Datacgr from "../component/DashboardAdmin/Datacgr";
import NavbarV2 from "../component/DashboardAdmin/NavbarV2";
import Sidebar from "../component/DashboardAdmin/Sidebar";

function DatacgrV2() {
  return (
    <div>
      <NavbarV2 />
      <Sidebar>
        <Datacgr />
      </Sidebar>
    </div>
  );
}

export default DatacgrV2;
