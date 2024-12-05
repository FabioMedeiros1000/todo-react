import FilterCard from '../../components/FilterCard'

import * as enums from '../../utils/enums/Tasks'

import * as S from './styles'

export type Props = {
  nCols: number
}

const Filters = ({ nCols }: Props) => (
  <S.Filters nCols={nCols}>
    <FilterCard
      value={enums.Status.PENDING}
      criterion="status"
      label="pendentes"
    />
    <FilterCard
      value={enums.Status.COMPLETED}
      criterion="status"
      label="concluídas"
    />
    <FilterCard
      value={enums.Priority.URGENT}
      criterion="priority"
      label="urgentes"
    />
    <FilterCard
      value={enums.Priority.IMPORTANT}
      criterion="priority"
      label="importantes"
    />
    <FilterCard
      value={enums.Priority.NORMAL}
      criterion="priority"
      label="normal"
    />
    <FilterCard criterion="all" label="todas" />
  </S.Filters>
)

export default Filters
