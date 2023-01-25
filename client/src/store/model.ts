import { AuthModel } from "./models/auth";
import { HomeModel } from "./models/home";

export interface StoreModel {
    home:HomeModel;
    auth:AuthModel;
}