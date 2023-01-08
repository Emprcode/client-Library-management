import axios from "axios";

const baseEpUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;

const userEp = baseEpUrl + "/user";

export const createUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEp, userObj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEp + "/login", userObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
