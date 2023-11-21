import { Create_Project } from "./Pages/Create_Project";
import "bootstrap/dist/css/bootstrap.min.css";
import User_Login from "./Pages/User_Login";
import User_Sign_Up from "./Pages/User_Sign_Up";
import { HashRouter, Routes, Route } from "react-router-dom";
import { List_Project } from "./Pages/List_Project";
import { Edit_Project } from "./Pages/Edit_Project";
import { User_DashBoard } from "./Pages/User_DashBoard";
import { HomePage } from "./Pages/HomePage";
import { ProfilePage } from "./Pages/ProfilePage";
import { About_Page } from "./Pages/About_Page";
import { Support_Page } from "./Pages/Support_Page";
import { List_Members } from "./Pages/List_Members";
import { View_Task } from "./Pages/View_Task";
import { Task_Status } from "./Pages/Task_Status";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sign-up" element={<User_Sign_Up />} />
          <Route path="/sign-in" element={<User_Login />} />
          <Route path="/User-Dashboard/:id" element={<User_DashBoard />} />
          <Route path="/Create-Project/:id" element={<Create_Project />} />
          <Route path="/Project-List/:id" element={<List_Project />} />
          <Route path="/project/:id/:name" element={<Edit_Project />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/Profile/:id" element={<ProfilePage />} />
          <Route path="/about-us" element={<About_Page/>} />
          <Route path="/support/:id" element={<Support_Page/>} />
          <Route path="/Allocate-Task/:id/:name" element={<List_Members/>} />
          <Route path="/View-Task/:id" element={<View_Task/>}/>
          <Route path="/Task-Status/:id/:name" element={<Task_Status/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
