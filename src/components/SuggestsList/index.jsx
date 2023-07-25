import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SuggestsList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: "50px",
        left: 0,
        right: 0,
        zIndex: 1000,
        borderRadius: "4px",
        boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
        backgroundColor: "#fff",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <Typography variant="h6">Ommabop</Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default SuggestsList;
