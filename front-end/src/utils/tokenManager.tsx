export const getHeaders = () => {
  const token = localStorage.getItem("token");
  const auth = {
    headers: {
      Authorization: token,
    },
  };
  return auth;
};

export const getStorageItem = (item: string) => {
  return localStorage.getItem(item);
};

export const setStorageItem = (item: string, value: string) => {
  localStorage.setItem(item, value);
};

export const deleteStorageItem = (item: string) => {
  localStorage.removeItem(item);
};
