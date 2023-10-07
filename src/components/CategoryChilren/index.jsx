import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@mui/material";
import PropTypes from "prop-types";
import {setIsOpenCatalog} from "../../redux/slices/categorySlice"
import { createSlug } from "../../helpers/createSlug";

const CategoryChildren = ({ item }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector('#category-items').scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return (
    <div>
      {item.children.map(category => (
        <div key={category.id}>
          <Link
            underline="none"
            onClick={() => dispatch(setIsOpenCatalog(false))}
            href={createSlug(category)}
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
            {category.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

CategoryChildren.propTypes = {
  item: PropTypes.object,
};

export default CategoryChildren;
