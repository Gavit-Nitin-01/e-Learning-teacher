

import React, { useState } from 'react';
import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom';
import TeacherState from './context/TeacherState.jsx';



function App() {
  const [isSidebarToggled, setSidebarToggled] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggled(prevState => !prevState);
  };
  
  return (
    <> 
      <TeacherState>
        <div className="sb-nav-fixed">
          <Header onSidebarToggle={handleSidebarToggle} />
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Sidebar isSidebarToggled={isSidebarToggled} />
            </div>
            <div id="layoutSidenav_content">
              <main>
              <Outlet />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </TeacherState>
    </>
  )
}

export default App
