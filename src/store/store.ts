import {combineReducers, configureStore} from "@reduxjs/toolkit";
import WorkSlice from './reducers/WorkSlice'
import WheelSlice from "./reducers/WheelSlice";

const rootReducer = combineReducers({
	WorkSlice,
	WheelSlice,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: false,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware()
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']