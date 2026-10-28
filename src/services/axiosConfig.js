
import axios from "axios";
import { toast } from "react-toastify";

const axiosConfig = async (method, url, data) => {
  try {
    return await axios({ method, url, data })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong while using Axios");
    throw error;
  }
};

export default axiosConfig;
