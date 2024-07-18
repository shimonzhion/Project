import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MobileMenu from "../MobileMenu"; 

const pages = ["Home"];

function ResponsiveNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => { setMobileMenuOpen(true); };
  const handleCloseMobileMenu = () => { setMobileMenuOpen(false); };

  return (
    <>
      <AppBar position="static"  sx={{ backgroundColor: '#ff5722' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h5"noWrap sx={{mr: 2,display: { xs: "none", md: "flex" },textDecoration: "none",}}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{mr: 2, display: { xs: "flex", md: "none" },flexGrow: 1,color: "inherit", textDecoration: "none",}}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" aria-label="open drawer" onClick={handleOpenMobileMenu} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onClose={handleCloseMobileMenu} />
    </>
  );
}

export default ResponsiveNavbar;
