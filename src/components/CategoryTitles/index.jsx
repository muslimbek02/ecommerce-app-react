import { useSelector, useDispatch } from "react-redux";
import { Grid, Link, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClearIcon from "@mui/icons-material/Clear";
import CategoryItems from "../CategoryItems";
import { setIsOpenCatalog } from "../../redux/slices/categorySlice";
import { createSlug } from "../../helpers/createSlug";

const CategoryTitles = () => {
  
  const {categoryItem} = useSelector(state => state.category);
  const dispatch = useDispatch()

  return (
    <Grid item xs={9} sx={{ px: 2, py: 4 }}>
      <Box
        sx={{
          pb: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          underline="none"
          href={createSlug(categoryItem)}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "#141415",
            fontSize: 20,
            fontWeight: 600,
          }}
          onClick={() => dispatch(setIsOpenCatalog(false))}
        >
          {categoryItem.title}
          <ChevronRightIcon />
        </Link>
        <ClearIcon
          sx={{ cursor: "pointer", mr: 4 }}
          onClick={() => dispatch(setIsOpenCatalog(false))}
        />
      </Box>
      <Grid
        container
        spacing={3}
        wrap="wrap"
        sx={{ height: "calc(70vh - 55px)", overflowY: "auto" }}
        id="category-items"
      >
        {categoryItem.children.map(item => (
          <Grid item key={item.id} xs={4} className="category-item">
            <Link
              href={createSlug(item)}
              underline="none"
              sx={{
                display: "inline-block",
                color: "#141415",
                fontSize: 18,
                fontWeight: 600,
                mb: "18px",
              }}
              onClick={() => dispatch(setIsOpenCatalog(false))}
            >
              {item.title}
            </Link>
            <CategoryItems item={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryTitles;
