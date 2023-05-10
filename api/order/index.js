import client from '../client';

export const placeOrderHandler = async (
  orderItems,
  taxPrice,
  shippingCharges,
  token
) => {
  try {
    const { data } = await client.post(
      `/orders`,
      {
        orderItems,
        taxPrice,
        shippingCharges,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getMyAllOrdersHandler = async (token) => {
  try {
    const { data } = await client.get(`/orders/me`, {
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

export const getAllUsersOrderHandler = async (token) => {
  try {
    const { data } = await client.get(`/orders`, {
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

export const getUserSingleOrderHandler = async (orderId, token) => {
  try {
    const { data } = await client.get(`/orders/${orderId}`, {
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

export const updateUserSingleOrderHandler = async (orderId, token) => {
  try {
    const { data } = await client.patch(`/orders/${orderId}`, {
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

export const deleteUserSingleOrderHandler = async (orderId, token) => {
  try {
    const { data } = await client.delete(`/orders/${orderId}`, {
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
