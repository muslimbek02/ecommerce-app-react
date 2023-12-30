import { createSlice } from "@reduxjs/toolkit";
import { categories, categoryItem } from "../../assets/data";

const initialState = { categories, categoryItem, isOpenCatalog: false, category: '' };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryItem: (state, action) => {
      const selectedCategory = state.categories.find(
        (item) => item.id === action.payload
      );
      state.categoryItem = selectedCategory;
    },
    setIsOpenCatalog: (state, action) => {
      state.isOpenCatalog = action.payload;
    },
  },
});

export const { setCategoryItem, setIsOpenCatalog } = categorySlice.actions;
export default categorySlice.reducer;
