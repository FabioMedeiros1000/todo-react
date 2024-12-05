import AddButton from '../../components/AddButton'
import HamburgerMenu from '../../components/HamburgerMenu'
import Sidebar from '../../containers/Sidebar'
import TasksList from '../../containers/TasksList'

const Home = () => (
  <>
    <Sidebar showFilters />
    <HamburgerMenu showFilters />
    <TasksList />
    <AddButton />
  </>
)

export default Home
