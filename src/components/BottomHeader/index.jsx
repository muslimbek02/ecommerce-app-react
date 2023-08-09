import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography, Link } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createSlug } from "../../helpers/createSlug";
import { setIsOpenCatalog } from "../../redux/slices/categorySlice";

const BottomHeader = () => {

  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-bottom-wrapper">
          {categories.slice(0, 8).map(category => (
            <Link
              href={createSlug(category)}
              key={category.id}
              className="header-bottom-link"
            >
              {category.title}
            </Link>
          ))}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600
            }}
            onClick={(evt) => {
              evt.stopPropagation();
              dispatch(setIsOpenCatalog(true));
            }}
          >
            Yana
            <KeyboardArrowDownIcon />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
