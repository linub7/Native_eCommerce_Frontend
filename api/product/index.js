import client from '../client';

export const getAllAdminProductsHandler = async (token) => {
  try {
    const { data } = await client.get(`/products/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getAllProductsHandler = async () => {
  try {
    const { data } = await client.get(`/products`);
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getSingleProductHandler = async (productId) => {
  try {
    const { data } = await client.get(`/products/${productId}`);
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
