import NavbarV2 from "../component/DashboardAdmin/NavbarV2"
import Sidebar from "../component/DashboardAdmin/Sidebar"

function EContractInclude() {
  return (
    <div>
      <NavbarV2/>
      <Sidebar>
        <EContractInclude/>
      </Sidebar>
    </div>
  )
}

export default EContractInclude
