import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Task from '../../models/Tasks'
import * as enums from '../../utils/enums/Tasks'

type tasksState = {
  items: Task[]
}

const initialState: tasksState = {
  items: [
    {
      id: 1,
      description: 'Estudar javascript revendo o módulo 7',
      priority: enums.Priority.NORMAL,
      status: enums.Status.COMPLETED,
      title: 'Estudar Javascript'
    },
    {
      id: 2,
      description: 'Estudar material de apoio',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDING,
      title: 'Estudar TypeScript'
    },
    {
      id: 3,
      description: 'Praticar a construção de uma Landing Page',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING,
      title: 'Estudar Bootstrap'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id != action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskAlreayExists = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskAlreayExists) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.items[state.items.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.items.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.items[taskIndex].status = action.payload.completed
          ? enums.Status.COMPLETED
          : enums.Status.PENDING
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
