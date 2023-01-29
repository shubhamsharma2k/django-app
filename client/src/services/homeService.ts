import axios from "axios";

export class HomeService {
  url = "http://127.0.0.1:8000/api/";

  async getProducts() {
    try {
      return await axios.get(this.url + "products/");
    } catch (error) {
      return error;
    }
  }
}
