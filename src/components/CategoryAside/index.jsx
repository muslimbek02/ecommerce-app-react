import { Box} from "@mui/material";
import CategoryAsideMenu from "../CategoryAsideMenu";
import CategoryFilterByBrends from "../CategoryFilterByBrends";
import CategoryFilterByPrice from "../CategoryFilterByPrice";


const CategoryAside = () => {
 
  

  return (
    <Box>
      <CategoryAsideMenu />
      <CategoryFilterByPrice/>
      <CategoryFilterByBrends />
    </Box>
  );
};

export default CategoryAside;
