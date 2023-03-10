import axios from "axios";

const baseEpUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;

const userEp = baseEpUrl + "/user";
const bookEp = baseEpUrl + "/book";
const transactionEp = baseEpUrl + "/transaction";

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

export const BorrowBook = async (bookId) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.post(
      bookEp + "/borrow",
      { bookId },
      { headers: { Authorization: userId } }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBook = async (bookId) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.delete(bookEp, {
      data: { bookId },
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBorrowedBooks = async () => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }
    const { data } = await axios.get(bookEp + "/borrowedByUser", {
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const returnBook = async (bookId) => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.patch(
      bookEp + "/return",
      { bookId },
      { headers: { Authorization: userId } }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getAllTransactions = async () => {
  try {
    const userId = getUserFromSessionStorage();

    if (!userId) {
      return {
        status: "error",
        message: "please login first",
      };
    }

    const { data } = await axios.get(transactionEp, {
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};


// update password

export const updatePasswordinForm = async(passInfo) => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId){
      return {
        status:"error",
        message:"Please login first!"
      }
    }

    const {data} = await axios.patch(userEp + "/password-update", passInfo, {
      headers:{
        Authorization: userId
      }
    } )
    return data
  } catch (error) { 
    return {
    status: "error",
    message: error.message,
  };}
} 