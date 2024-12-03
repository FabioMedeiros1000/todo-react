import HamburguerMenu from '../../components/HamburguerMenu'
import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

const Cadastro = () => (
  <>
    <BarraLateral mostrarFiltros={false} />
    <HamburguerMenu mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
