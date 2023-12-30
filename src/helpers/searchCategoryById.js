export const searchCategoryById = (id, categories) => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }

    if (category.children && category.children.length > 0) {
      const foundChild = searchCategoryById(id, category.children);
      if (foundChild) {
        return foundChild;
      }
    }
  }
  return null;
};
