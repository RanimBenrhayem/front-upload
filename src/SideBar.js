import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React, { Component } from "react";
import {
  MdDashboard,
  MdOutlineWarning,
  MdOutlineRecommend,
  MdLogout,
} from "react-icons/md";
import "./App.css";
class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <SideNav
          className="bod"
          onSelect={(selected) => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav>
            <NavItem eventKey="home">
              <NavIcon>
                <MdDashboard className="dashboard" />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>

            <NavItem eventKey="charts">
              <NavIcon>
                <MdOutlineWarning className="warning" />
              </NavIcon>
              <NavText>Warnings</NavText>
            </NavItem>

            <NavItem eventKey="recomm">
              <NavIcon>
                <MdOutlineRecommend className="recom" />
              </NavIcon>
              <NavText>Recommendations</NavText>
            </NavItem>

            <NavItem eventKey="logout">
              <NavIcon>
                <MdLogout className="logoutbutton" />
              </NavIcon>
              <NavText className="logouttext">Logout</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </React.Fragment>
    );
  }
}

export default SideBar;
