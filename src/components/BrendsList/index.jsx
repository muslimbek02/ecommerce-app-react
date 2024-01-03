import { useState } from "react";
import { FormControlLabel, Checkbox, Box } from "@mui/material";
import ClearButtonAside from "../ClearButtonAside";

const BrendsList = ({brends}) => {
  const [showAllBrends, setShowAllBrends] = useState(false);

  const handleClick = () => {
    setShowAllBrends(!showAllBrends);
  };

  return (
    <div>
      <Box sx={{ maxHeight: "204px", overflowY: "auto" }}>
        {brends.slice(0, 6).map((brend) => (
          <div key={brend}>
            <FormControlLabel
              sx={{ mt: 0.5 }}
              control={<Checkbox sx={{ py: 0 }} />}
              label={brend}
            />
          </div>
        ))}
        {showAllBrends &&
          brends.length > 6 &&
          brends.slice(6).map((brend) => (
            <div key={brend}>
              <FormControlLabel control={<Checkbox />} label={brend} />
            </div>
          ))}
      </Box>
      <ClearButtonAside mt={2} onClick={handleClick}>
        {showAllBrends ? "Berkitish" : "Hammasi"}
      </ClearButtonAside>
    </div>
  );
};

export default BrendsList;
