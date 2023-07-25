import React from "react";
import { createTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

LinkBehavior.displayName = "LinkBehavior";

LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FBC100",
      light: "#fff",
      dark: "FBC100",
      contrastText: "#000",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
