import { styled, Link } from "@mui/material";

const BreadCrumbItem = styled(Link)(() => ({
  display: "block",
  padding: "5px 20px",
  color: "#333",
  fontSize: "12px",
  lineHeight: "16px",
  marginRight: "4px",
  position: "relative",
  whiteSpace: "nowrap",
  textDecoration: "none",
  fontWeight: '500',
  zIndex: 1,
  borderRadius: '2px',
  "&::after": {
    content: `""`,
    textAlign: "center",
    backgroundColor: "#ececec",
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "skewX(-10deg)",
    zIndex: -1,
    borderRadius: '2px',
  },
}));

export default BreadCrumbItem;
