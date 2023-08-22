import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4d8af297708e4686ab6b19040cb42b81",
  },
});
