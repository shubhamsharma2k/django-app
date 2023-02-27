import { Action, action, Thunk, thunk } from "easy-peasy";
import { store } from "../config";

export interface HomeModel {
  products: any[];
  setProducts: Action<HomeModel, any[]>;
  getProducts: Thunk<HomeModel>;
}

export const home: HomeModel = {
  products: [],
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
  getProducts: thunk(
    async (actions, payload, { fail, injections, getState }) => {
      const { homeService } = injections;

      const rsp = await homeService.getProducts();

      if (rsp.status === 200) {
        actions.setProducts(rsp.data);
      } else if (rsp.status === 401) {
        store.getActions().auth.setUser({
          ...store.getState().auth.user,
          isAuthenticated: false,
        });
      }
      return rsp;
    }
  ),
};
