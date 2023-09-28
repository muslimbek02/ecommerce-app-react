import { Stack } from "@mui/material";
import { PropTypes } from "prop-types";
import BreadCrumbItem from "../BreadCrumbItem";
import { searchCategoryById } from "../../helpers/searchCategoryById";
import { createSlug } from "../../helpers/createSlug";
import { categories } from "../../assets/data";

const Breadcrumb = ({ pathList }) => {
  return (
    <Stack direction="row" mt={2}>
      <BreadCrumbItem href="/">Bosh sahifa</BreadCrumbItem>
      {pathList.map((id) => {
        if (id !== 1) {
          const title = searchCategoryById(id, categories).title;
          const path = createSlug({ title, id });
          return (
            <BreadCrumbItem href={'/' + path} key={path}>
              {title}
            </BreadCrumbItem>
          );
        } else {
          return;
        }
      })}
    </Stack>
  );
};

Breadcrumb.propTypes = {
  pathList: PropTypes.array,
};

export default Breadcrumb;
