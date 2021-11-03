import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface WheelState {
	indexAnchor: number;
}

const initialState: WheelState = {
	indexAnchor: 0
}

export const WheelSlice = createSlice({
	name: 'wheel',
	initialState,
	reducers: {
		increment: (state) => {
			state.indexAnchor += 1
		},
		decrement: (state) => {
			state.indexAnchor -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.indexAnchor += action.payload
		},
	},
})

export const { increment, decrement, incrementByAmount } = WheelSlice.actions

export default WheelSlice.reducer;