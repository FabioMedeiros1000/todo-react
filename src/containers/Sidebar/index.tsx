import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Filters from '../Filters'

import { changeName } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

import * as S from './styles'

import { Button, Input } from '../../styles'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { name } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={name}
              onChange={(event) => dispatch(changeName(event.target.value))}
            />
            <Filters nCols={2} />
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
