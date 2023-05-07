import client from '../client';

export const signupHandler = async (
  name,
  email,
  password,
  passwordConfirm,
  address,
  city,
  country,
  pinCode
) => {
  try {
    const { data } = await client.post(`/auth/signup`, {
      name,
      email,
      password,
      passwordConfirm,
      address,
      city,
      country,
      pinCode,
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const signinHandler = async (email, password) => {
  try {
    const { data } = await client.post(`/auth/signin`, { email, password });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const signoutHandler = async (token) => {
  try {
    const { data } = await client.get(`/auth/signout`, {
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

export const updatePasswordHandler = async (
  oldPassword,
  password,
  passwordConfirm,
  token
) => {
  try {
    const { data } = await client.patch(
      `/auth/update-my-password`,
      {
        oldPassword,
        password,
        passwordConfirm,
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

export const getMeHandler = async (token) => {
  try {
    const { data } = await client.get(`/me`, {
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

export const updateProfileHandler = async (values, token) => {
  try {
    const { data } = await client.patch(`/me/update`, values, {
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
