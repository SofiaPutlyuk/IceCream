import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({})
const persistConfig = {
    key: "root",
    storage,
    whitelist: [""]
}
export type RootState = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer
})
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store;

