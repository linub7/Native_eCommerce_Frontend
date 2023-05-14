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

export const addProductHandler = async (values, token) => {
  try {
    const { data } = await client.post(`/products`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const updateProductInfoHandler = async (
  productId,
  name,
  description,
  stock,
  price,
  category,
  token
) => {
  try {
    const { data } = await client.patch(
      `/products/${productId}`,
      { name, description, stock, price, category },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const addProductImageHandler = async (productId, values, token) => {
  try {
    const { data } = await client.patch(
      `/products/${productId}/add-images`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const deleteProductImageHandler = async (productId, publicId, token) => {
  try {
    const { data } = await client.patch(
      `/products/${productId}/delete-image/${publicId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const deleteProductHandler = async (productId, token) => {
  try {
    const { data } = await client.delete(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
