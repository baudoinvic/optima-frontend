// import About from "./views/site/About";
// import Home from "./views/site/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./views/site/Signup";
// import Login from "./views/site/Login";
// import Dashboard from "./components/AdminDashboard/Dashboard";
// import Chart from "./components/AdminDashboard/Chart";


// function App() {
//   return (
//     <div className="App">
//       <div className="mainContainer">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />

         
//             <Route path="/dashboard" element={<Dashboard />}>
//             <Route path="/chart" element={<Chart />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

// export default App;


 import About from "./views/site/About";
 import Home from "./views/site/Home";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Signup from "./views/site/Signup";
 import Login from "./views/site/Login";
 import Dashboard from "./components/AdminDashboard/Dashboard";
 import Chart from "./components/AdminDashboard/Chart";

 function App() {
   return (
     <div className="App">
       <div className="mainContainer">
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/login" element={<Login />} />

             {/* Dashboard routes */}
             <Route path="/dashboard" element={<Dashboard />}>
               <Route path="chart" element={<Chart />} />
             </Route>
           </Routes>
         </BrowserRouter>
       </div>
     </div>
   );
 }

 export default App;