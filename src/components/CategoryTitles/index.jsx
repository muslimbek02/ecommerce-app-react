import { useSelector, useDispatch } from "react-redux";
import { Grid, Link, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClearIcon from "@mui/icons-material/Clear";
import CategoryItems from "../CategoryItems";
import { setIsOpenCatalog } from "../../redux/slices/categorySlice";

const CategoryTitles = () => {
  
  const categoryItem = useSelector(({ category }) => category.categoryItem);
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
          href={categoryItem.title.replaceAll(" ", "-") + "-" + categoryItem.id}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "#141415",
            fontSize: 20,
            fontWeight: 600,
          }}
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
              href={item.title.replaceAll(" ", "-") + "-" + item.id}
              underline="none"
              sx={{
                display: "inline-block",
                color: "#141415",
                fontSize: 18,
                fontWeight: 600,
                mb: "18px",
              }}
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
