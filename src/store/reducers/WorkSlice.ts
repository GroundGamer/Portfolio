import { createSlice } from '@reduxjs/toolkit'

import { fetchWorks } from './WorkAction'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { IWork } from '../../models/IWork'

interface WorkState {
    works: Array<IWork>;
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
    reducers: {},
    extraReducers: {
        [fetchWorks.fulfilled.type]: (state, action: PayloadAction<Array<IWork>>) => {
            state.isLoading = false
            state.error = ''
            state.works = action.payload
        },
        [fetchWorks.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchWorks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default WorkSlice.reducer