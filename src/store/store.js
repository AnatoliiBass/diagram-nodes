import { combineReducers, createStore } from "redux";
import reducerEC from "./reducers/reducerEC";
import reducerSG from "./reducers/reducerSG";
import reducerSN from "./reducers/reducerSN";
import reducerVPC from "./reducers/reducerVPC";


const reducers = combineReducers({
   VPC: reducerVPC,
   EC: reducerEC,
   SG: reducerSG,
   SN: reducerSN
})


const store = createStore(reducers)

export default store