import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Tasks'

type FilterState = {
  name?: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  name: '',
  criterion: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeName, changeFilter } = filterSlice.actions
export default filterSlice.reducer
