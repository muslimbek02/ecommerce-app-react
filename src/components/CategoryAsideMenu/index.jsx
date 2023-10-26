import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { useSelector } from "react-redux";
import { createSlug } from "../../helpers/createSlug";
import CategoryAsideTitle from "../CategoryAsideTitle";

const CategoryAsideMenu = () => {
  const { categoryItem } = useSelector((state) => state.category);

  return (
    <Box>
      <CategoryAsideTitle>
        Turkumlar
      </CategoryAsideTitle>
      <List sx={{ p: "10px" }}>
        <ListItem
          sx={{ p: 0, mb: 0.4 }}
        >
          <ListItemButton href={"/" + createSlug(categoryItem)} sx={{ p: 1, borderRadius: "4px", bgcolor: "#ececec" }}>
            {categoryItem.title}
          </ListItemButton>
        </ListItem>
        {categoryItem.children.map((item) => (
          <ListItem key={item.id} sx={{ p: 0, mb: 0.4 }}>
            <ListItemButton href={"/" + createSlug(item)} sx={{ p: 1, borderRadius: "4px" }}>
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryAsideMenu;
