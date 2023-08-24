import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryId } from "../../helpers/getCategoryId";
import { searchCategoryById } from "../../helpers/searchCategoryById";

const CategoryProducts = () => {
  const { categories} = useSelector(state => state.category);

  const { slug } = useParams();
  const id = getCategoryId(slug);
  
  const category = searchCategoryById(id, categories);

  return (
    <h1>
      {category.title}
    </h1>
  );
};

export default CategoryProducts;
