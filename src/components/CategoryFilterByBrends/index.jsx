import {useState} from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CategoryAsideTitle from "../CategoryAsideTitle";
import BrendsList from "../BrendsList";

const CategoryFilterByBrends = () => {
  const [brends, setBrends] = useState([]);
  return (
    <div>
      <CategoryAsideTitle>Brend</CategoryAsideTitle>
      <TextField
        sx={{ my: 1, width: "100%" }}
        id="search-brend-input"
        size="small"
        placeholder="Brend"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <BrendsList brends={brends} />
    </div>
  );
};

export default CategoryFilterByBrends;
