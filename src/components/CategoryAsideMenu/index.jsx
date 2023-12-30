import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { createSlug } from "../../helpers/createSlug";
import CategoryAsideTitle from "../CategoryAsideTitle";
import { getCategoryId } from "../../helpers/getCategoryId";
import { searchCategoryById } from "../../helpers/searchCategoryById";

const CategoryAsideMenu = () => {
  const { categories } = useSelector((state) => state.category);
  const { slug } = useParams();

  const id = getCategoryId(slug);

  const currentCategory = searchCategoryById(id, categories);

  return (
    <Box>
      <CategoryAsideTitle>Turkumlar</CategoryAsideTitle>
      <List sx={{ p: "10px" }}>
        {
          /* parent category links start */
          currentCategory.path.slice(1, -1).map((id) => {
            const parentCategory = searchCategoryById(id, categories);
            return (
              <ListItem sx={{ p: 0, mb: 0.4 }} key={id}>
                <ListItemButton
                  href={createSlug(parentCategory)}
                  sx={{ p: 1, borderRadius: "4px" }}
                >
                  <ArrowBackIosIcon fontSize="inherit" />
                  {parentCategory.title}
                </ListItemButton>
              </ListItem>
            );
          }) /* parent category links end */
        }
        <ListItem sx={{ p: 0, mb: 0.4 }}>
          <ListItemButton
            href={createSlug(currentCategory)}
            sx={{ p: 1, borderRadius: "4px", bgcolor: "#ececec" }}
          >
            {currentCategory.title}
          </ListItemButton>
        </ListItem>
        {currentCategory.children.map((item) => (
          <ListItem key={item.id} sx={{ p: 0, mb: 0.4 }}>
            <ListItemButton
              href={createSlug(item)}
              sx={{ p: 1, borderRadius: "4px" }}
            >
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryAsideMenu;
