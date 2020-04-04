import { createStore, combineReducers, applyMiddleware } from "redux";

// import articles from "../_reducers/article";
import users from "../_reducer/user";
import auth from "../_reducer/auth";
import station from "../_reducer/station";
import addtickets from "../_reducer/addticket";
import typekereta from "../_reducer/typekereta";
import Liststation from "../_reducer/liststation";
import paymentt from "../_reducer/payment";
import train from "../_reducer/train";
import myticket from "../_reducer/myticket";
import admin from "../_reducer/admin";
import Search from "../_reducer/search";
import UploadPhotos from "../_reducer/upload";

import { logger, promise } from "../middleware/index";

// Global state
const rootReducers = combineReducers({
  auth,
  users,
  station,
  addtickets,
  typekereta,
  Liststation,
  paymentt,
  train,
  myticket,
  admin,
  Search,
  UploadPhotos,
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
