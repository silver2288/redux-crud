import axios from "axios";

export const fetchData = data => {
  return {
    type: "ADD_rPOST",
    data
  };
};

export const fetchPostData = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const rPost = response.data[Math.floor(Math.random() * 6) + 1];
      const id = rPost.id;
      const title = rPost.title;
      const message = rPost.body;
      const data = {
        id,
        title,
        message
      };
      dispatch(fetchData(data));
    } catch (error) {
      throw error;
    }
  };
};
