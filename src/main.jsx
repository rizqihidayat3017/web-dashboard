import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './component/Errorpage/PageNotFound.jsx'
import Dashboardv2 from './Pages/Dashboardv2.jsx'
import Invoice from './component/DashboardAdmin/Invoice.jsx'
import Detailscgr from './component/DashboardAdmin/Detailscgr.jsx'
import Detailspetani from './Manual/DetailsPetani.jsx'
import NavbarV2 from './component/DashboardAdmin/NavbarV2.jsx'
import Signin from './component/Login/Signin.jsx'
import Petanidetails from './component/DashboardAdmin/Petanidetails.jsx'
import DetailspengajuanCGRv2 from './Pages/DetailspengajuanCGRv2.jsx'
import Pengajuancgrv2 from './Pages/Pengajuancgrv2.jsx'
import Datacgr from './component/DashboardAdmin/Datacgr.jsx'
import Contractcgr from './component/DashboardAdmin/Contractcgr.jsx'

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
    element : <Datacgr/>
  },
  {
    path: '/contractcgrv2',
    element : <Contractcgr/>
  },
  {
    path: '/invoice',
    element : <Invoice/>
  },
  {
    path: '/detailscgr',
    element : <Detailscgr/>
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
    element : <Petanidetails/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

