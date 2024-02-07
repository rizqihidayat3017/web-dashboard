import NavbarV2 from "../component/DashboardAdmin/NavbarV2";
import Petanidetails from "../component/DashboardAdmin/Petanidetails";
import Sidebar from "../component/DashboardAdmin/Sidebar";

function DetailsPetaniv2() {
  return (
    <div>
      <NavbarV2 />
      <Sidebar>
        <Petanidetails />
      </Sidebar>
    </div>
  );
}

export default DetailsPetaniv2;
