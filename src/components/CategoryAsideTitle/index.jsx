import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const CategoryAsideTitle = ({ children }) => {
  return (
    <Typography variant="subtitle1" fontWeight={600}>
      {children}
    </Typography>
  );
};

CategoryAsideTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CategoryAsideTitle;
