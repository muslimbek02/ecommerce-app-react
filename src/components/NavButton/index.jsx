import { styled, Button } from "@mui/material";

export const NavButton = styled(Button)(() => ({
  textTransform: "capitalize",
  display: "flex",
  flexDirection: "column",
  fontSize: "12px",
  color: "#000",
  "&:hover": {
    background: "none",
  },
}));
