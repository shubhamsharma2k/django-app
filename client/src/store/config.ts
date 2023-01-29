//store imports
import { createStore, createTypedHooks } from "easy-peasy";
import { StoreModel } from "./model";
import { home } from "./models/home";
import { auth } from "./models/auth";

import { HomeService } from "../services/homeService";
import { AuthService } from "../services/authService";

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;

export const storeModel: StoreModel = {
  home,
  auth,
};

export const store = createStore(storeModel, {
  devTools: true,
  name: "devsearch-ui",
  injections: {
    homeService: new HomeService(),
    authService: new AuthService(),
  },
});
