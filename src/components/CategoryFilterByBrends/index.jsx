import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { brendsList } from "../../assets/data";

import CategoryAsideTitle from "../CategoryAsideTitle";
import BrendsList from "../BrendsList";

const CategoryFilterByBrends = () => {
  const [brends, setBrends] = useState(brendsList);
  const [filteredBrends, setFilteredBrends] = useState(brendsList);
  const [searchInputVal, setSearchInputVal] = useState("");

  const handleChange = (evt) => {
    setSearchInputVal(evt.target.value);
    const searchedBrends = brends.filter((brend) =>
      brend.toLowerCase().includes(evt.target.value.toLowerCase())
    );
    setFilteredBrends(searchedBrends);
  };

  return (
    <div>
      <CategoryAsideTitle>Brend</CategoryAsideTitle>
      <TextField
        sx={{ my: 1, width: "100%" }}
        id="search-brend-input"
        size="small"
        placeholder="Brend"
        value={searchInputVal}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <BrendsList brends={filteredBrends} />
    </div>
  );
};

export default CategoryFilterByBrends;
