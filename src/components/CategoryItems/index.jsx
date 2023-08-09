import { useEffect } from "react";
import { Link } from "@mui/material";
import PropTypes from "prop-types";

const CategoryItems = ({ item }) => {

  useEffect(() => {
    document.querySelector('#category-items').scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return (
    <div>
      {item.children.map(({ id, title }) => (
        <div key={id}>
          <Link
            underline="none"
            href={title.replaceAll(" ", "-") + "-" + id}
            sx={{
              fontSize: 14,
              display: "inline-block",
              mb: 1,
              color: "#333",
              borderBottom: "1px hidden",
              transition: ".2s all linear",
              "&:hover": {
                color: "#FBC100",
                borderBottom: "1px dashed #FBC100",
              },
            }}
          >
            {title}
          </Link>
        </div>
      ))}
    </div>
  );
};

CategoryItems.propTypes = {
  item: PropTypes.object,
};

export default CategoryItems;
