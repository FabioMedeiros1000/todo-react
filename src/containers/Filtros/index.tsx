import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

export type Props = {
  nCols: number
}

const Filtros = ({ nCols }: Props) => (
  <S.Filtros nCols={nCols}>
    <FiltroCard
      valor={enums.Status.PENDENTE}
      criterio="status"
      legenda="pendentes"
    />
    <FiltroCard
      valor={enums.Status.CONCLUIDA}
      criterio="status"
      legenda="concluídas"
    />
    <FiltroCard
      valor={enums.Prioridade.URGENTE}
      criterio="prioridade"
      legenda="urgentes"
    />
    <FiltroCard
      valor={enums.Prioridade.IMPORTANTE}
      criterio="prioridade"
      legenda="importantes"
    />
    <FiltroCard
      valor={enums.Prioridade.NORMAL}
      criterio="prioridade"
      legenda="normal"
    />
    <FiltroCard criterio="todas" legenda="todas" />
  </S.Filtros>
)

export default Filtros
