import axios from "axios";

axios.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response.status === 404)
      return { message: "Error occured! Data not found." };
    return { message: "Unexpected error has occured. Please try again." };
  },
);
