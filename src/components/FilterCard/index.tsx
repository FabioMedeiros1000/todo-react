import { useDispatch, useSelector } from 'react-redux'

import * as enums from '../../utils/enums/Tasks'
import { changeFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

import * as S from './styles'

export type Props = {
  label: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ label, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const countTasks = () => {
    if (criterion === 'all') return tasks.items.length
    if (criterion === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const filtrar = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const counter = countTasks()
  const active = checkIsActive()

  return (
    <S.Card active={active} onClick={filtrar}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
