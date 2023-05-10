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

export const createCategoryHandler = async (name, token) => {
  try {
    const { data } = await client.post(
      `/categories`,
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const deleteSingleCategoryHandler = async (categoryId, token) => {
  try {
    const { data } = await client.delete(`/categories/${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
