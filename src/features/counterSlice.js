import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        result: '',
        datas: [],
    },
    reducers: {
        calculate: (state, action) => {
            state.result = eval(action.payload)
            state.datas.push(state.result)
            localStorage.setItem('result', state.datas)
        },
        clear: (state) => {
            state.result = ''
        }
    },
})

export const { calculate, clear } = counterSlice.actions

export default counterSlice.reducer