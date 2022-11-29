import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducer";

const persistConfig = {
  key: "simpleApplication",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const persistedStore = () => {
  let isProduction = process.env.NODE_ENV === "production" ? true : false;

  let store = createStore(
    persistedReducer,
    isProduction
      ? applyMiddleware(thunk)
      : composeWithDevTools(applyMiddleware(thunk))
  );

  let persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default persistedStore;
