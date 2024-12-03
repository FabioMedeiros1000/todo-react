import BotaoAdicionar from '../../components/BotaoAdicionar'
import HamburguerMenu from '../../components/HamburguerMenu'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <HamburguerMenu mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
