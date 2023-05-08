import client from '../client';

export const getAllCategoriesHandler = async () => {
  try {
    const { data } = await client.get(`/categories`);
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getSingleCategoryHandler = async (categoryId) => {
  try {
    const { data } = await client.get(`/categories/${categoryId}`);
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
