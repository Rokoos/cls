import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo";
import SideDrawer from "./SideDrawer";

export default class Navbar extends React.Component {
  state = {
    drawerOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value,
      headerShow: false,
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          {/* <Logo /> */}

          <p className="header-title">CLS Instalacje Elektryczne</p>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </div>
      </nav>
    );
  }
}
