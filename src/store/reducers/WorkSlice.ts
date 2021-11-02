import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWork} from "../../models/IWork";
import {fetchWorks} from "./WorkAction";

interface WorkState {
	works: IWork[];
	isLoading: boolean;
	error: string;
}

const initialState: WorkState = {
	works: [],
	isLoading: false,
	error: ''
}

export const WorkSlice = createSlice({
	name: 'work',
	initialState,
	reducers: {
	},
	extraReducers: {
		//Если сервер не возвращает нам ошибку, получаем данные
		[fetchWorks.fulfilled.type]: (state, action: PayloadAction<IWork[]>) => {
			state.isLoading = false;
			state.error = '';
			state.works = action.payload;
		},
		//Ждём данные с сервера
		[fetchWorks.pending.type]: (state) => {
			state.isLoading = true;
		},
		//Если сервер возвращает нам ошибку, выводится ошибка
		[fetchWorks.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
})

export default WorkSlice.reducer;