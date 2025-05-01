import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Typography,
  Menu,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
// import SubNavbar from "./SubNavbar";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const styles = {
    textDecoration: "none",
    color: "black",
  };

  // const [anchorEl, setAnchorEl] = useState(null); // State to control the dropdown menu

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Handle opening the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setAnchorEl(null);
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#99434c" }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo on the left */}
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
              color="white"
            >
              {/* <img
                src="logo.svg"
                alt="Logo"
                style={{ width: 40, marginRight: 8 }}
              />{" "} */}
              {/* Replace logo.svg with your logo path */}
              Fiza
            </Typography>

            {/* Search bar in the center */}
            <TextField
              variant="outlined"
              placeholder="Search Poducts..."
              size="small"
              sx={{
                width: "50%",
                maxWidth: "500px",
                backgroundColor: "white",
                borderRadius: "4px",
                "& .MuiOutlinedInput-input": {
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#777",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)", // Keep the same border color on hover
                    },
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)", // Remove focus effect border color
                    },
                    "& .MuiOutlinedInput-input": {
                      backgroundColor: "transparent",
                    },
                    boxShadow: "none",
                    outline: "none",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)", // Default border color
                  },
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end" sx={{ padding: "0px" }}>
                      <IconButton aria-label="Search" disableRipple>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Icons on the right */}
            <Box>
              {/* Cart Icon with Badge */}
              <IconButton
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-flex",
                  },
                  marginRight: "4px",
                  "&:hover": {
                    color: "#fff", // Change the color on hover
                  },
                }}
                disableRipple
              >
                <Badge
                  badgeContent={4}
                  sx={{
                    "& .MuiBadge-standard": {
                      backgroundColor: "#fff", // Change color of badge content
                      fontSize: "10px",
                      color: "#975e64",
                    },
                  }}
                >
                  <ShoppingCartOutlined
                    sx={{
                      fontSize: "1.5rem", // Set the size of the icon (e.g., 48px)
                    }}
                  />
                </Badge>
              </IconButton>

              {/* Like Icon */}
              <IconButton
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-flex",
                  },
                  mx: "4px",
                  "&:hover": {
                    color: "#fff", // Change the color on hover
                  },
                }}
                disableRipple
              >
                <FavoriteBorderOutlined
                  sx={{
                    fontSize: "1.5rem", // Set the size of the icon (e.g., 48px)
                  }}
                />
              </IconButton>

              {/* User Icon */}
              <IconButton
                sx={{
                  marginLeft: "4px",
                  "&:hover": {
                    color: "#fff", // Change the color on hover
                  },
                }}
                disableRipple
                onClick={handleMenuOpen}
              >
                <AccountCircleOutlined
                  sx={{
                    fontSize: "1.5rem", // Set the size of the icon (e.g., 48px)
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dropdown Menu for Sign In / Register */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom", // Dropdown appears below the icon
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* {!isAuthenticated ? (
          <>
            <MenuItem onClick={handleMenuClose}>
              <Typography
                variant="body1"
                component={Link}
                style={styles}
                to="/login"
              >
                Log In
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography
                variant="body1"
                component={Link}
                style={styles}
                to="/signup"
              >
                Sign Up
              </Typography>
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleLogout}>
            <Typography variant="body1">Logout</Typography>
          </MenuItem>
        )}
      </Menu> */}

        {isAuthenticated ? (
          <MenuItem onClick={handleLogout}>
            <Typography variant="body1">Logout</Typography>
          </MenuItem>
        ) : (
          [
            <MenuItem onClick={handleMenuClose} key="login">
              <Typography
                variant="body1"
                component={Link}
                style={styles}
                to="/login"
              >
                Log In
              </Typography>
            </MenuItem>,
            <MenuItem onClick={handleMenuClose} key="signup">
              <Typography
                variant="body1"
                component={Link}
                style={styles}
                to="/signup"
              >
                Sign Up
              </Typography>
            </MenuItem>,
          ]
        )}
      </Menu>
      {/* <SubNavbar /> */}
    </>
  );
};

export default Navbar;
