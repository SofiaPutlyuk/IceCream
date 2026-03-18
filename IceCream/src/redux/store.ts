import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from 'redux-persist/es/storage';
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist"
const rootReducer = combineReducers({
    temp: (state = {}) => state
})
    const persistConfig = {
    key: "root",
    storage,
    whitelist: [""]
}
export type RootState = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store;

