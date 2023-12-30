import { Stack, Link } from "@mui/material";
import { PropTypes } from "prop-types";
import { searchCategoryById } from "../../helpers/searchCategoryById";
import { createSlug } from "../../helpers/createSlug";
import { categories } from "../../assets/data";

const Breadcrumb = ({ pathList }) => {
  return (
    <Stack direction="row" mt={2} alignItems="center">
      <Link href="/" className="breadcrumb-link">
        Bosh sahifa
      </Link>
      {/* pagination items */}
      {pathList.slice(1).map((id, idx) => {
        const title = searchCategoryById(id, categories).title;
        const path = createSlug({ title, id });

        if (idx === pathList.length - 2) {
          return (
            <div className="disabled-breadcrumb-link breadcrumb-link" key={idx}>
              {title}
            </div>
          );
        }

        return (
          <Link className="breadcrumb-link" href={path} key={idx}>
            {title}
          </Link>
        );
      })}
    </Stack>
  );
};

Breadcrumb.propTypes = {
  pathList: PropTypes.array,
};

export default Breadcrumb;
