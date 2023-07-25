import { Button, styled } from "@mui/material";

const Btn = styled(Button)(() => ({
  color: "#000",
  padding: "8px 20px",
  textTransform: "capitalize",
  fontSize: "17px",
  fontWeight: "500",
  backgroundColor: "primary",
  "&:hover": {
    backgroundColor: ''
  },
  // "&.Mui-active": {
  //   boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  // },
}));

export default Btn;
