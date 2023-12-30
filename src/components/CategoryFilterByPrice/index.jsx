import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import CategoryAsideTitle from "../CategoryAsideTitle";

const CategoryFilterByPrice = () => {
  return (
    <div>
      <CategoryAsideTitle>Narx, baho</CategoryAsideTitle>
      <Typography
        sx={{
          fontSize: "13px",
          pb: 0.1,
          borderBottom: "1px dashed #a0a2a7",
          display: "inline-block",
          mb: 2,
          cursor: "pointer",
          transition: "0.3s linear border",
          "&:hover": {
            borderBottom: "1px solid #a0a2a7",
          },
        }}
      >
        Tozalash
      </Typography>
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
