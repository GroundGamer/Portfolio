import axios from "axios";
import {IWork} from "../../models/IWork";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWorks = createAsyncThunk(
	'works/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IWork[]>('https://6181070c8bfae60017adfd94.mockapi.io/myWork')
			return response.data;
		}
		catch (e) {
			return thunkAPI.rejectWithValue('Не удалось загрузить работы!')
		}
	},
)