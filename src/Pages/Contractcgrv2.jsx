import Contractcgr from "../component/DashboardAdmin/Contractcgr";
import NavbarV2 from "../component/DashboardAdmin/NavbarV2";
import Sidebar from "../component/DashboardAdmin/Sidebar";

function Contractcgrv2() {
  return (
    <div>
      <NavbarV2 />
      <Sidebar>
        <Contractcgr/>
      </Sidebar>
    </div>
  );
}

export default Contractcgrv2;
