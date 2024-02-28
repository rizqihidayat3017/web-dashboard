import NavbarV2 from "../../component/DashboardAdmin/NavbarV2";
import NewContractCGR from "../../component/DashboardAdmin/New Contract/NewContract";
import Sidebar from "../../component/DashboardAdmin/Sidebar";

function NewContractPages() {
  return (
    <div>
      <NavbarV2 />
      <Sidebar>
        <NewContractCGR />
      </Sidebar>
    </div>
  );
}

export default NewContractPages;
