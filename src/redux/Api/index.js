import axios from "axios";

export const getData = () => {
  return axios.get("https://63dd44b1df83d549ce9e82f9.mockapi.io/simple-cart");
};
