import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7416d3d356a74362aceb8df3785663c0",
  },
});
