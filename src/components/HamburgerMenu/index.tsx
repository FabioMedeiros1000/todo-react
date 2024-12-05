import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fade as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom'

import Filters from '../../containers/Filters'

import { RootReducer } from '../../store'
import { changeName } from '../../store/reducers/filter'

import * as S from './styles'

import { Button, Input } from '../../styles'

type Props = {
  showFilters: boolean
}

const HamburgerMenu = ({ showFilters }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const filtersRef = useRef<HTMLDivElement>(null)

  const { name } = useSelector((state: RootReducer) => state.filter)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickInFilter = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        filtersRef.current.contains(event.target as Node)
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
    <S.Container>
      {showFilters ? (
        <>
          <Hamburger
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
          <S.HamburgerContent className={isOpen ? 'is-open' : ''}>
            <Input
              type="text"
              placeholder="Buscar"
              value={name}
              onChange={(event) => dispatch(changeName(event.target.value))}
            />
            <div ref={filtersRef}>
              <Filters nCols={3} />
            </div>
          </S.HamburgerContent>
        </>
      ) : (
        <Button onClick={() => navigate('/')}>Voltar a lista de tarefas</Button>
      )}
    </S.Container>
  )
}

export default HamburgerMenu
