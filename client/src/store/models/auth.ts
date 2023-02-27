import { Action, action, Thunk, thunk } from "easy-peasy";

export interface AuthModel {
  register: Thunk<AuthModel, RegisterModel>;
  login: Thunk<AuthModel, LoginModel>;
  loading: boolean;
  setLoading: Action<AuthModel, boolean>;
  user: UserAuthDetailsModel;
  setUser: Action<AuthModel, UserAuthDetailsModel>;
}

export interface UserAuthDetailsModel {
  isAuthenticated: boolean;
  name: string;
  email: string;
}

export interface RegisterModel {
  name: string;
  email: string;
  password: string;
}

export interface LoginModel {
  email: string;
  password: string;
}

export const auth: AuthModel = {
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  user: {
    isAuthenticated: false,
    name: "",
    email: "",
  },
  setUser: action((state, payload) => {
    state.user.isAuthenticated = payload.isAuthenticated;
    state.user.name = payload.name;
    state.user.email = payload.email;
  }),
  register: thunk(async (actions, payload, { injections }) => {
    const { authService } = injections;
    const rsp = await authService.register({
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    return rsp;
  }),
  login: thunk(async (actions, payload, { injections }) => {
    const { authService } = injections;
    actions.setLoading(true);

    const rsp = await authService.login({
      email: payload.email,
      password: payload.password,
    });

    if (rsp.status === 200) {
      const tokenResponse = await authService.accessToken({
        email: payload.email,
        password: payload.password,
      });
      const accessToken = tokenResponse.data.access;
      localStorage.setItem("access_token", accessToken);
      actions.setUser(rsp.data);
    }
    actions.setLoading(false);
    return rsp;
  }),
};
