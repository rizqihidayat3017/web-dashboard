import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './component/Errorpage/PageNotFound.jsx'
import Dashboardv2 from './Pages/Dashboardv2.jsx'
import Detailspetani from './Manual/DetailsPetani.jsx'
import NavbarV2 from './component/DashboardAdmin/NavbarV2.jsx'
import Signin from './component/Login/Signin.jsx'
import DetailspengajuanCGRv2 from './Pages/DetailspengajuanCGRv2.jsx'
import Pengajuancgrv2 from './Pages/Pengajuancgrv2.jsx'
import DatacgrV2 from './Pages/DatacgrV2.jsx'
import Contractcgrv2 from './Pages/Contractcgrv2.jsx'
import DetailsdataCgrv2 from './Pages/DetailsdataCgrv2.jsx'
import DetailsPetaniv2 from './Pages/DetailsPetaniv2.jsx'
import Invoicev2 from './Pages/Invoicev2.jsx'
import Econtract from './component/DashboardAdmin/Econtract.jsx'
import A4kertas from './component/DashboardAdmin/A4kertas.jsx'
import EcontractA4 from './Pages/EcontractA4.jsx'
import ActivityDemsprey from './Pages/ActivityDemsprey.jsx'
import Demspray from './component/DashboardAdmin/Cycle1/Demspray.jsx'
import AktivitasTanam from './component/DashboardAdmin/Cycle1/AktivitasTanam.jsx'
import DetailAktivitasTanam from './component/DashboardAdmin/Cycle1/DetailAktivitasTanam.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Signin/>,
    errorElement : <PageNotFound/>,
  },
  {
    path: '/dashboardv2',
    element : <Dashboardv2/>
  },
  {
    path: '/pengajuancgrv2',
    element : <Pengajuancgrv2/>
  },
  {
    path: '/detailspengajuancgrv2',
    element : <DetailspengajuanCGRv2/>
  },
  {
    path: '/datacgrv2',
    element : <DatacgrV2/>
  },
  {
    path: '/contractcgrv2',
    element : <Contractcgrv2/>
  },
  {
    path: '/invoice',
    element : <Invoicev2/>
  },
  {
    path: '/detailscgr',
    element : <DetailsdataCgrv2/>
  },
  {
    path: '/detailspetani',
    element : <Detailspetani/>
  },
  {
    path: '/navbarv2',
    element : <NavbarV2/>
  },
  {
    path: '/signin',
    element : <Signin/>
  },
  {
    path: '/petanidetails',
    element : <DetailsPetaniv2/>
  },
  {
    path: '/coba',
    element : <Econtract/>
  },
  {
    path: '/coba2',
    element : <A4kertas/>
  },
  {
    path: '/coba3',
    element : <EcontractA4/>
  },
  {
    path: '/cobademsprey',
    element : <Demspray/>
  },
  {
    path: '/demsprey',
    element : <ActivityDemsprey/>
  },
  {
    path: '/aktivitastanam',
    element : <AktivitasTanam/>
  },
  {
    path: '/cycletanam',
    element : <DetailAktivitasTanam/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

