import axios from "axios";

const calls = async (path, method, data, headers) => {
  const environment = process.env.NODE_ENV;
  const URL =
    environment === "development"
      ? process.env.NEXT_PUBLIC_UAT
      : process.env.NEXT_PUBLIC_PROD;
  const response = await axios({
    method,
    url: `${URL}${path}`,
    data,
    headers,
  });

  return response;
};

export default calls;
