import { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Box, Badge, Menu, MenuItem } from "@mui/material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SearchBar from "../SearchBar";
import Btn from "../Button";
import NavButton from "../NavButton";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className="container">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="./">
              <Typography variant="h3" color={"#000"}>
                E-Shop...
              </Typography>
            </Link>
            <Btn
              variant="contained"
              startIcon={
                <WidgetsOutlinedIcon sx={{ fontSize: "25px!important" }} />
              }
              sx={{ ml: "30px" }}
            >
              Katalog
            </Btn>
          </Box>

          <SearchBar />
          
          <Stack direction={"row"} alignItems="center">
            <NavButton>
              <AccountCircleIcon />
              Kirish
            </NavButton>
            <NavButton href="wishlist">
              <Badge badgeContent={1} color="primary">
                <FavoriteBorderIcon />
              </Badge>
              Sevimlilar
            </NavButton>
            <NavButton href="cart">
              <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon />
              </Badge>
              Savatcha
            </NavButton>
            <div>
              <NavButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  src="./images/flag-uz.jpg"
                  alt="flag-uz"
                  className="flag-img"
                />
                {`O'z`}
              </NavButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#F7F7F7",
                  }}
                >
                  <img
                    src="./images/flag-ru.jpg"
                    alt="flag-ru"
                    width={25}
                    height={25}
                    style={{ marginRight: "10px", borderRadius: "50%" }}
                  />
                  Рус
                </MenuItem>
              </Menu>
            </div>
          </Stack>
        </Stack>
      </div>
    </header>
  );
};

export default Header;
