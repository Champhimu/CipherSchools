import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

// https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png

const drawerWidth = 240;
const navItems = [
  { name: "Home", link: "/" },
  { name: "Contact", link: "/contact" },
  { name: "Students", link: "/std/login" },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CipherSchool
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink
            to={item.link}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log(container);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              alt="logo"
              width={50}
              height={50}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 1 }}
            >
              CipherSchool
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink to={item.link} style={{ textDecoration: "none" }}>
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              // margin: "10"
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
