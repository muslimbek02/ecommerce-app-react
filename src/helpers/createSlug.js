//   title ----- category.title
//   id ------ category.id

export const createSlug = ({ title, id }) =>
  "/category/" + title.replaceAll(" ", "-") + "-" + id;
