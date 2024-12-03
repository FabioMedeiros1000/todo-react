import { useState } from 'react'
import { Fade as Hamburguer } from 'hamburger-react'
import { Container, Filtros, HamburguerContent } from './styles'
import { Botao, Campo } from '../../styles'
import FiltroCard from '../FiltroCard'
import * as enums from '../../utils/enums/Tarefa'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const HamburguerMenu = ({ mostrarFiltros }: Props) => {
  const [isOpen, setOpen] = useState(false)

  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container>
      {mostrarFiltros ? (
        <>
          <Hamburguer
            rounded
            easing="ease-in"
            duration={0.3}
            color="#2f3640"
            size={40}
            toggled={isOpen}
            toggle={setOpen}
            label="Show menu"
            hideOutline={false}
          />
          <HamburguerContent className={isOpen ? 'is-open' : ''}>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <Filtros>
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
            </Filtros>
          </HamburguerContent>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </Container>
  )
}

export default HamburguerMenu
