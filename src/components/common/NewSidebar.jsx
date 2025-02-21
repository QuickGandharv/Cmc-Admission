import logo from '../../assets/images/logo.png';
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { LuLayoutPanelLeft, LuLogOut} from "react-icons/lu";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import useAxios from '../../hooks/UseAxios';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

   const  {userData, setUserData } = useContext(UserContext);
   const navigate = useNavigate();
   const BEARER_TOKEN = userData?.token;
   const {fetchData} = useAxios('/logout', 'post', {headers: {'Authorization': `Bearer ${BEARER_TOKEN}`}})

   async function Logout(){
      await fetchData()
      setUserData({token: '', role: null, permissions: {}});
      navigate('/login');
   }

   return(
      <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-[#013220] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
         <div className="flex items-center justify-between gap-2 px-6 py-6">
            <a className="active" href="/" aria-current="page">
               <img src={logo} alt="Logo" />
            </a>
         </div>
         <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            <nav className="py-4 px-4 lg:px-6">
            <div>
               <ul className="mb-6 flex flex-col gap-1.5">
                  <li className='flex items-center'>
                     <RxDashboard />
                     <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/">Dashboard</a>
                  </li>
                  <li className='flex items-center'>
                     <FaRegUser />
                     <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/users">Users</a>
                  </li>
                  <li className='flex items-center'>
                     <GrDocument />
                     <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/applications">Applications</a>
                  </li>
                  <li className='flex items-center'>
                     <TbReportSearch />
                     <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/reports">Reports</a>
                  </li>
                  <li className='flex items-center'>
                     <LuLogOut />
                     <button onClick={Logout} className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false">Logout</button>
                  </li>
                  {
                     userData?.role === 'super-admin' &&
                     (<li className='flex items-center'>
                        <LuLayoutPanelLeft />
                        <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/admin-panel">Admin Panel</a>
                     </li>)
                  }
                  
               </ul>
               </div>
            </nav>
         </div>
      </aside>
   )
}

export default Sidebar;
