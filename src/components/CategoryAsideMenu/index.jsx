import { Box, List, ListItem, Typography, ListItemButton } from "@mui/material";
import { useSelector } from "react-redux";
import { createSlug } from "../../helpers/createSlug";

const CategoryAsideMenu = () => {
  const { categoryItem } = useSelector((state) => state.category);

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={500}>
        Turkumlar
      </Typography>
      <List sx={{ p: "10px" }}>
        <ListItem
          sx={{ p: 0, bgcolor: "#ececec", borderRadius: "4px", mb: 0.4 }}
        >
          <ListItemButton href={"/" + createSlug(categoryItem)} sx={{ p: 1 }}>
            {categoryItem.title}
          </ListItemButton>
        </ListItem>
        {categoryItem.children.map((item) => (
          <ListItem key={item.id} sx={{ p: 0, borderRadius: "4px", mb: 0.4 }}>
            <ListItemButton href={"/" + createSlug(item)} sx={{ p: 1 }}>
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryAsideMenu;
