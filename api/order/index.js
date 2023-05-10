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
