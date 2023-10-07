import {Grid,} from "@mui/material";
import CategoryAside from "../CategoryAside";
import CategoryProducts from "../CategoryProducts";

const CategoryContent = () => {

  return (
    <Grid container pt={3}>
      <Grid item xs={3}>
        <CategoryAside />
      </Grid>
      <Grid item xs={9}>
        <CategoryProducts />
      </Grid>
    </Grid>
  )
}

export default CategoryContent