import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArticleIcon from "@mui/icons-material/Article";

import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              mt: -1,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              letterSpacing: ".1rem",
              fontSize: "2.5rem",
              fontFamily: "Roboto Condensed",
              fontWeight: "400",
            }}
          >
            coinfy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                component={() => <Link to="/" />}
              >
                <Typography textAlign="center">
                  {" "}
                  <HomeIcon /> Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Cryptocurrencies</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                linkButton
                containerElement={<Link to="/news" />}
              >
                <Typography textAlign="center">News</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Full View */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "flex" }}
              startIcon={<HomeIcon />}
            >
              <Typography
                textTransform="capitalize"
                fontFamily="var(--font-base)"
              >
                {" "}
                Home{" "}
              </Typography>
            </Button>
            <Button
              component={Link}
              to="/cryptocurrencies"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "flex" }}
              startIcon={<MonetizationOnIcon />}
            >
              <Typography textTransform="capitalize">
                {" "}
                Cryptocurrencies{" "}
              </Typography>
            </Button>
            <Button
              component={Link}
              to="/news"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "flex" }}
              startIcon={<ArticleIcon />}
            >
              <Typography textTransform="capitalize"> News </Typography>
            </Button>
          </Box>

          {/* //profile section */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
