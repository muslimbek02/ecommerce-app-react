import { useState } from "react";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import SuggestsList from "../SuggestsList";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box className="searchbar" sx={{ position: "relative" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Mahsulotlar va turkumlar izlash"
          inputProps={{ "aria-label": "Mahsulotlar va turkumlar izlash" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {isVisible && <SuggestsList />}
    </Box>
  );
};

export default SearchBar;
