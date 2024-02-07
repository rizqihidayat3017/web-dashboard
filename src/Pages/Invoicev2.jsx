import Invoice from "../component/DashboardAdmin/Invoice";
import NavbarV2 from "../component/DashboardAdmin/NavbarV2";
import Sidebar from "../component/DashboardAdmin/Sidebar";

function Invoicev2() {
  return (
    <div>
      <NavbarV2 />
      <Sidebar>
        <Invoice />
      </Sidebar>
    </div>
  );
}

export default Invoicev2;
