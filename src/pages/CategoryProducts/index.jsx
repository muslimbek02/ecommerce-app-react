import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { getCategoryId } from "../../helpers/getCategoryId";
import { searchCategoryById } from "../../helpers/searchCategoryById";

const CategoryPage = () => {
  const { categories } = useSelector(state => state.category);

  const { slug } = useParams();
  const id = getCategoryId(slug);

  const category = searchCategoryById(id, categories);
  console.log(category);
  return (
    <main>
      <div className="category-page">
        <div className="container">
          <Breadcrumb pathList={category.path} />
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
