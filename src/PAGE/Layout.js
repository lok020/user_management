import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

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
    console.log(e.target.id);
    setCurRoute(e.target.id);
  }

  return (
    <div className="layout">
        <div className={minimized? "sidebar sidebar-minimized" : "sidebar"}>
          <div className="sidebar-header">
            <div className={minimized? "sidebar-header-title sidebar-header-title-hide" : "sidebar-header-title"}>{"User Managerment Panel"}</div>
            <Button className={minimized? "sidebar-header-minimized-btn sidebar-btn-expand" : "sidebar-header-minimized-btn"} onClick={handleMinimized}>
              <i className="fa fa-bars fa-2x"></i>
            </Button>
          </div>
          <Link to="/" id="Home" className={curRoute === "Home"? "sidebar-selection selected" : "sidebar-selection"} onClick={handleChangeRoute}>
            <i id="Home" className={minimized? "fa fa-home fa-2x" : "fa fa-home"}></i>
            <div id="Home" className={minimized? "sidebar-selection-title-hide" : "selection-title"}>{"Home"}</div>
          </Link>
          <Link to="/User" id="User" className={curRoute === "User"? "sidebar-selection selected" : "sidebar-selection"} onClick={handleChangeRoute}>
            <i id="User" className={minimized? "fa fa-user fa-2x" : "fa fa-user"}></i>
            <div id="User" className={minimized? "sidebar-selection-title-hide" : "selection-title"}>{"User"}</div>
          </Link>
          <Link to="/Setting" id="Setting" className={curRoute === "Setting"? "sidebar-selection selected" : "sidebar-selection"} onClick={handleChangeRoute}>
            <i id="Setting" className={minimized? "fa fa-cog fa-2x" : "fa fa-cog"}></i>
            <div id="Setting" className={minimized? "sidebar-selection-title-hide" : "selection-title"}>{"Setting"}</div>
          </Link>
        </div>
        <Outlet />
    </div>
  )
};

export default Layout;