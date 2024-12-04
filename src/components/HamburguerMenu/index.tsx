import { useState, useRef, useEffect } from 'react'
import { Fade as Hamburguer } from 'hamburger-react'
import { Container, HamburguerContent } from './styles'
import { Botao, Campo } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'
import Filtros from '../../containers/Filtros'

type Props = {
  mostrarFiltros: boolean
}

const HamburguerMenu = ({ mostrarFiltros }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const filtrosRef = useRef<HTMLDivElement>(null)

  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickInFilter = (event: MouseEvent) => {
      if (
        filtrosRef.current &&
        filtrosRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickInFilter)
    } else {
      document.removeEventListener('mousedown', handleClickInFilter)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickInFilter)
    }
  }, [isOpen])

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
            <div ref={filtrosRef}>
              <Filtros nCols={3} />
            </div>
          </HamburguerContent>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </Container>
  )
}

export default HamburguerMenu
