import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";

const pages = [
  { title: "Home", link: "#home" },
  { title: "Facility", link: "facility" },
  { title: "About Us", link: "about_us" },
  { title: "Gallery", link: "gallery" },
  { title: "Banquet", link: "banquet" },
  { title: "Contact", link: "#contact" },
];
function ResponsiveAppBar() {
  // const router = useNavigate();
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
    <AppBar position="fixed" sx={{ bgcolor: "#39393a" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="flex md:hidden justify-between items-center"
          >
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
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                >
                  <Link href={`/${page.link}`}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <img
              className="z-10 "
              style={{ width: "100px", height: "auto" }}
              src="/logo.png"
              onClick={() => window.open("/", "_self")}
            ></img>
            <Link href="/booking">
              <button className="uppercase border border-white px-3 py-1">
                Book now
              </button>
            </Link>
          </Box>
          <div className=" flex-col w-full text-white hidden md:flex">
            <div className="text-center mb-4 pt-2 hidden sm:block">
              <span className="uppercase text-[16px] flex justify-center items-center">
                <i className="bx bxs-paint text-white px-1 " />
                Travels update
                <i
                  onClick={() =>
                    window.open(
                      "https://www.tripadvisor.com/Hotel_Review-g424935-d23427247-Reviews-Clarks_Resorts_Birgunj-Birgunj_Narayani_Zone_Central_Region.html/",
                      "_blank"
                    )
                  }
                  className="bx bx-right-arrow-alt text-white px-1 cursor-pointer "
                />
              </span>
            </div>
            <div className="flex justify-start items-center w-full px-10">
              <div className="relative w-[150px]">
                <img
                  className="z-10 "
                  style={{ width: "100px", height: "auto" }}
                  src="/logo.png"
                  onClick={() => window.open("/", "_self")}
                ></img>
              </div>

              <div className="w-full text-[13px] ">
                <div className="border-b-[1px] border-yellow-800 pb-1 hidden sm:block">
                  <span className="border-r-2 border-white px-2">
                    <i className="bx bxs-phone text-white px-1 " />
                    +977 9802310555
                  </span>
                  <span className="border-r-2 border-white px-2">
                    <i className="bx bxs-map text-white pr-1 " />
                    Gandak, Bahuwri-14, Birgung, Nepal
                  </span>
                  <span className="text-white cursor-pointer">
                    <i
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/clarksresort/",
                          "_blank"
                        )
                      }
                      className="bx bxl-facebook px-1 "
                    />
                    <i className="bx bxl-twitter px-1 " />
                    <i
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/explore/locations/109151424345432/clarks-resort-birgunj/",
                          "_blank"
                        )
                      }
                      className="bx bxl-instagram px-1 "
                    />
                    <i
                      onClick={() =>
                        window.open("mailto:shahamit756@gmail.com", "_blank")
                      }
                      className="bx bx-envelope px-1 "
                    />
                    <i
                      onClick={() =>
                        window.open(
                          "https://www.tripadvisor.com/Hotel_Review-g424935-d23427247-Reviews-Clarks_Resorts_Birgunj-Birgunj_Narayani_Zone_Central_Region.html/",
                          "_blank"
                        )
                      }
                      className="bx bx-spa px-1 "
                    />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <Box
                    sx={{
                      flexGrow: 0,
                      padding: "5px 0",
                      display: { xs: "none", md: "flex", alignItems: "center" },
                    }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page.title}
                        onClick={handleCloseNavMenu}
                        sx={{
                          padding: "0 8px",
                          color: "white",
                          display: "block",
                        }}
                      >
                        <Link
                          href={`/${page.link}`}
                          className="text-[13px] text-white"
                        >
                          {page.title}
                        </Link>
                      </Button>
                    ))}
                  </Box>

                  <Link href="/booking">
                    <button className="uppercase border border-white px-3 py-1">
                      Book now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
