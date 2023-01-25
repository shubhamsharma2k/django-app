import { Action, action, Thunk, thunk } from "easy-peasy";

export interface AuthModel {
  loginModal: boolean;
  setLoginModal: Action<AuthModel, boolean>;
}

export const auth: AuthModel = {
  loginModal: false,
  setLoginModal: action((state, payload) => {
    state.loginModal = payload;
  }),
};
