import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CategoryTitles from "../CategoryTitles";
import { setCategoryItem, setIsOpenCatalog } from "../../redux/slices/categorySlice";

const CatalogDropdown = () => {

  const {categoryItem} = useSelector(state => state.category);
  const {categories} = useSelector(state => state.category);
  const dispatch = useDispatch();

  const bodyClick = () => {
    dispatch(setIsOpenCatalog(false))
  };

  useEffect(() => {
    document.body.addEventListener("click", bodyClick);

    return () => document.body.removeEventListener("click", bodyClick);
  }, []);

  return (
    <div className="catalog-dropdown" onClick={(evt) => evt.stopPropagation()}>
      <div>
        <Grid container sx={{ px: 2 }}>
          <Grid item xs={3} sx={{ pt: 2 }}>
            <MenuList sx={{ px: 1, height: "70vh", overflowY: "auto" }}>
              {categories.map((category) => (
                <MenuItem
                  key={category.id}
                  sx={{
                    borderRadius: 2,
                    pr: 0,
                    color: "#333",
                    whiteSpace: "wrap",
                    backgroundColor:
                      category.id === categoryItem.id && "#fef3cc",
                    "&:hover": { backgroundColor: "#fef3cc" },
                  }}
                  onClick={() => dispatch(setCategoryItem(category.id))}
                >
                  <img
                    src={category.iconLink}
                    alt="icon"
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                  <ListItemText sx={{ ml: 1 }}>{category.title}</ListItemText>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                </MenuItem>
              ))}
            </MenuList>
          </Grid>
          <CategoryTitles />
        </Grid>
      </div>
    </div>
  );
};

export default CatalogDropdown;
