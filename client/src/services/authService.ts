import axios from "axios";
import { LoginModel, RegisterModel } from "../store/models/auth";

export class AuthService {
  url = {
    login: "http://127.0.0.1:8000/api/login/",
    signUp: "http://127.0.0.1:8000/api/register/",
  };

  async register(data: RegisterModel) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      return await axios.post(this.url["signUp"], data, config);
    } catch (error) {
      return error;
    }
  }

  async login(data: LoginModel) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      return await axios.post(this.url["login"], data, config);
    } catch (error) {
      return error;
    }
  }
}
