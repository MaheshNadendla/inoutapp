import React, { useState } from "react";
import "./inout.css";
import "./header.css";

import BoysOut from "./BoysOut/BoysOut";
import BoysHome from "./BoysHome/BoysHome";
import GirlsHome from "./GirlsHome/GirlsHome";
import GirlsOut from "./GirlsOut/GirlsOut";
import StaffHome from "./StaffHome/StaffHome";
import VisitersOut from "./VisitersOut/VisitersOut";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { InputBase } from "@mui/material";

function Inout() {
  const [page, setPage] = useState("boyshome");
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setMobileOpen(false);
  };

  const menuItems = [
    { label: "Boys Home", value: "boyshome" },
    { label: "Boys Out", value: "boysout" },
    { label: "Girls Home", value: "girlshome" },
    { label: "Girls Out", value: "girlsout" },
    { label: "Staff Home", value: "staffhome" },
    { label: "Visitors", value: "visitersout" },
  ];

  const searchBarStyles = {
    display: "flex",
    alignItems: "center",
    background: isMobile ? "rgba(2, 2, 2, 0.35)" : "rgba(255, 255, 255, 0.15)",
    borderRadius: "5px",
    padding: "5px",
  };

  const searchBar = (
    <div style={searchBarStyles}>
      <InputBase placeholder="Enter Roll Number" sx={{ color: "white", paddingLeft: "10px" }} />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
    </div>
  );

  return (
    <div className="InoutFullScreen" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/InoutBg.png)`,
      
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>

{/* background: "linear-gradient(#141e30, #243b55)" */}

{/* backgroundColor: "#77DD77" */}
{/* backgroundColor: "#3CB371" */}
{/* backgroundColor: "#009E60" */}
{/* backgroundColor: "#00A86B"  */}


      <AppBar position="fixed" sx={{ backgroundColor: "#556B2F00"   }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ flex: 1,flexGrow:0.5 }}>Campus Flow</Typography>
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ flexGrow: '0.3', display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
              {menuItems.map((item) => (
                <Button key={item.value} color="inherit" onClick={() => handlePageChange(item.value)}>
                  {item.label}
                </Button>
              ))}
              {searchBar}
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar Menu for Mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List>
          <ListItem>{searchBar}</ListItem>
          {menuItems.map((item) => (
            <ListItem key={item.value} disablePadding>
              <ListItemButton onClick={() => handlePageChange(item.value)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Page Content */}
      <div style={{ flexGrow: 1, marginTop: "80px"  }}>
        {page === "boyshome" && <BoysHome />}
        {page === "boysout" && <BoysOut />}
        {page === "girlshome" && <GirlsHome />} 
        {page === "girlsout" && <GirlsOut />}
        {page === "staffhome" && <StaffHome />}
        {page === "visitersout" && <VisitersOut />}
      </div>
    </div>
  );
}

export default Inout;