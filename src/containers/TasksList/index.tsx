import { useSelector } from 'react-redux'

import Task from '../../components/Task'

import { RootReducer } from '../../store'

import { MainContainer, Title } from '../../styles'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { name, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = items
    if (name !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(name.toLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return items
    }
  }

  const displayFilteringResult = (amount: number) => {
    let message = ''
    const complementation =
      name !== undefined && name.length > 0 ? `e "${name}"` : ''

    if (criterion === 'all') {
      message = `${amount} tarefa(s) encontrada(s) como: todas ${complementation}`
    } else {
      message = `${amount} tarefa(s) encontrada(s) como: "${`${criterion}=${value}`}" ${complementation}`
    }

    return message
  }

  const tasks = filterTasks()
  const message = displayFilteringResult(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TasksList
