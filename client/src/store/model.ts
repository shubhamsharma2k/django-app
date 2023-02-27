import { AuthModel } from "./models/auth";
import { HomeModel } from "./models/home";
import { MiscModel } from "./models/misc";

export interface StoreModel {
    home:HomeModel;
    auth:AuthModel;
    misc:MiscModel
}