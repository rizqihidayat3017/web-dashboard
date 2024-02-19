import Demspray from "../component/DashboardAdmin/Demspray"
import NavbarV2 from "../component/DashboardAdmin/NavbarV2"
import Sidebar from "../component/DashboardAdmin/Sidebar"


function ActivityDemsprey() {
  return (
    <div>
        <NavbarV2/>
        <Sidebar>
            <Demspray/>
        </Sidebar>
    </div>
  )
}

export default ActivityDemsprey
