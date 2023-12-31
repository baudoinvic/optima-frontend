
 import About from "./views/site/About";
 import Home from "./views/site/Home";
 import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
 import Signup from "./views/site/Signup";
 import Login from "./views/site/Login";
 import Dashboard from "./components/AdminDashboard/Dashboard";
 import Chart from "./components/AdminDashboard/Chart";
import Users from "./components/AdminDashboard/Users";
import Dash from "./components/AdminDashboard/Dash";
import Navbar from "./components/site/navbar";
import Setting from "./components/AdminDashboard/Setting";
import Staff from "./components/AdminDashboard/Staff";
import Region from "./components/AdminDashboard/Region/Region";
import Regionalcommunity from "./components/AdminDashboard/Region/Regionalcommunity";




 function App() {

 
 const Layout = () => {
   <>
   
   <Navbar />

   <Outlet />
   
   </>
 };



   return (
     <div className="App">
       <div className="mainContainer">
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout />} />
             <Route index element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/login" element={<Login />} />

             {/* Dashboard routes */}
             <Route path="/dashboard" element={<Dashboard />}>
               <Route path="" element={<Dash />} />
               <Route path="Users" element={<Users />} />
               <Route path="chart" element={<Chart />} />
               <Route path="Setting" element={<Setting />} />
               <Route path="Staff" element={<Staff />} />
               <Route path="Region" element={<Region />} />
               <Route
                 path="Regionalcommunity"
                 element={<Regionalcommunity />}
               />
             </Route>
           </Routes>
         </BrowserRouter>
       </div>
     </div>
   );
 }

 export default App;