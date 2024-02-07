import React from 'react'
import Dashboard from '../assets/img/icons/menu-icon-01.svg'
import logouticon from '../assets/img/icons/logout.svg'
import Doctors from '../assets/img/icons/menu-icon-02.svg'
import Posts from '../assets/img/icons/menu-icon-03.svg'
import settings from '../assets/img/icons/menu-icon-16.svg'
import Bankicon from '../assets/img/icons/menu-icon-04.svg'
import Company from '../assets/img/icons/company.png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
   
  return (
    <>
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main</li>
						<li className="submenu">
							<a href="#"><span className="menu-side"><img src={Dashboard} alt=""/></span> <span> Dashboard </span> <span className="menu-arrow"></span></a>
							<ul style={{ display:'none'}}>
								
							</ul>
						</li>
						<li className="submenu">
							<a href="#"><span className="menu-side"><img src={Doctors} alt=""/></span> <span>Menu</span> <span className="menu-arrow"></span></a>
							<ul style={{ display:'none'}}>
                            <li><Link to="/menu">Add Menu</Link></li>
                       
							</ul>
						</li>
                   

                      
                        <li className="submenu mt-5">
							<a href="#"><span className="menu-side"><img src={logouticon} ></img></span> <span>   <li><Link > Logout</Link></li></span></a>
							
						</li>
                      
                       
                    </ul>
					{/* <div className="logout-btn">
						<a><span className="menu-side btn-submit"  ><img src={logouticon} alt=""/></span> <span>Logout</span></a>
					</div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar