import { Paper, InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import SuggestsList from "../SuggestsList";
import { setIsOpenCatalog } from "../../redux/slices/categorySlice";

const SearchBar = ({isVisible, setIsVisible }) => {
  
  const dispatch = useDispatch()

  const handleFocus = () => {
    setIsVisible(true);
    dispatch(setIsOpenCatalog(false))
  };
  
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
          onFocus={handleFocus}
          onClick={(evt) => evt.stopPropagation()}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Mahsulotlar va turkumlar izlash"
          inputProps={{ "aria-label": "Mahsulotlar va turkumlar izlash" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {isVisible && <SuggestsList setIsVisible={setIsVisible} />}
    </Box>
  );
};

SearchBar.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func
};

export default SearchBar;
