import { useState } from "react";
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const CategoryHeader = () => {
  const [age, setAge] = useState(10);

  const handleChange = (evt) => {
    setAge(evt.target.value);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className="category-header"
      mt={3}
      paddingBottom={1}
      borderBottom="1px solid #ececec"
    >
      <Typography
        variant="h1"
        fontWeight={500}
        fontSize="24px"
        fontFamily="'Roboto', sans-serif"
      >
        Title
      </Typography>
      <Stack direction="row" alignItems="center" width="300px">
        <Typography mr={2}>Saralash</Typography>
        <FormControl fullWidth size="small">
          <Select id="demo-simple-select" value={age} onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default CategoryHeader;
