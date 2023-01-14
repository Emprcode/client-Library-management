import axios from "axios";

const baseEpUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;

const userEp = baseEpUrl + "/user";
const bookEp = baseEpUrl + "/book";

// USER
const getUserFromSessionStorage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return user?._id;
  }
};

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

// BOOK

export const addBook = async (bookInfo) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.post(bookEp, bookInfo, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBooks = async () => {
  try {
    const userId = getUserFromSessionStorage();
    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.get(bookEp, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
