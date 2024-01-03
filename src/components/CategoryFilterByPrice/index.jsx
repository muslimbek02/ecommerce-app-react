import { Box, TextField, InputAdornment } from "@mui/material";
import CategoryAsideTitle from "../CategoryAsideTitle";
import ClearButtonAside from "../ClearButtonAside";

const CategoryFilterByPrice = () => {
  return (
    <div>
      <CategoryAsideTitle>Narx, baho</CategoryAsideTitle>
      <ClearButtonAside>Tozalash</ClearButtonAside>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          size="small"
          id="small-price"
          placeholder="100"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">dan</InputAdornment>
            ),
          }}
        />
        <TextField
          id="large-price"
          size="small"
          placeholder="5000000"
          sx={{ ml: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">gacha</InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default CategoryFilterByPrice;
