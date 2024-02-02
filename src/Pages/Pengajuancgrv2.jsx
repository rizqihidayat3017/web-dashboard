import NavbarV2 from "../component/DashboardAdmin/NavbarV2"
import PengajuanCGR from "../component/DashboardAdmin/PengajuanCGR";
import Sidebar from "../component/DashboardAdmin/Sidebar"

function Pengajuancgrv2() {
  return (
    <div>
        <NavbarV2/>
        <Sidebar>
            <PengajuanCGR/>
        </Sidebar>
    </div>
  )
}

export default Pengajuancgrv2;
