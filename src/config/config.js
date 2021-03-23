import axios from "axios";

class api {
  params = "game of thr";
  base_api = "https://imdb8.p.rapidapi.com/auto-complete";
  token = "c595a74285msh7cdf20efe82002ap1a55f9jsnc8826c1bd9e7";
  host = "imdb8.p.rapidapi.com";

  getDataAll() {
    return axios.get(this.base_api, {
      params: { q: this.params },
      headers: {
        "x-rapidapi-key": this.token,
        "x-rapidapi-host": this.host,
      },
    });
  }
}

export default api;
