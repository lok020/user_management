import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import NavLink from "react-bootstrap/esm/NavLink";


import '../CSS/layout.scss';

const Layout = () => {
  const [minimized, setMinimized] = useState(false);
  const [curRoute, setCurRoute] = useState("Home");

  useEffect(() => {
    
  }, []);

  const handleMinimized= () => {
    setMinimized(!minimized);
  }

  const handleChangeRoute = (e) => {
    setCurRoute(e.target.id);
  }

  return (
    <div className="layout">
        <div className={minimized? "sidebar sidebar-minimized" : "sidebar"}>
          <div className="sidebar-header">
            <div className={minimized? "sidebar-header-title sidebar-title-hide" : "sidebar-header-title"}>{"User Managerment Panel"}</div>
            <Button className={minimized? "sidebar-header-minimized-btn sidebar-btn-expand" : "sidebar-header-minimized-btn"} onClick={handleMinimized}>
              <div className="minimized-line"></div>
              <div className="minimized-line"></div>
              <div className="minimized-line"></div>
            </Button>
          </div>
          <Link to="/" id="Home" className={curRoute === "Home"? "sidebar-selection selected" : "sidebar-selection"} onClick={handleChangeRoute}>{"Home"}</Link>
          <Link to="/User" id="User" className={curRoute === "User"? "sidebar-selection selected" : "sidebar-selection"} onClick={handleChangeRoute}>{"User"}</Link>
        </div>
        <Outlet />
    </div>
  )
};

export default Layout;