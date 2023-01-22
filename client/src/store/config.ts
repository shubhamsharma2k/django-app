//store imports
import { createStore, createTypedHooks } from "easy-peasy";
import { StoreModel } from "./model";

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;

export const storeModel: StoreModel = {

};

export const store = createStore(storeModel, {
  devTools: true,
  name: "devsearch-ui",
  injections: {
  },
});