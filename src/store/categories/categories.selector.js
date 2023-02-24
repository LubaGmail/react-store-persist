/**
    entire state = {categories: {…}, cart: {…}}         obj of objs
      state.categories = {categories: Array(5)}           obj of Array
        state.categories.categories = (5) [{…}, {…}, {…}, {…}, {…}]    Array of objs: title, items
 */

export const selectCategories = (state) => {
    const categoriesMap = state.categories.categories.reduce (
        (acc, { title, items }) => {
          acc[title.toLowerCase()] = items;
          return acc;
        }, {}
    );
    return categoriesMap;
}