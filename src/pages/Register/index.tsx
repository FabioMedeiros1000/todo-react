import HamburgerMenu from '../../components/HamburgerMenu'
import Sidebar from '../../containers/Sidebar'
import Form from '../../containers/Form'

const Register = () => (
  <>
    <Sidebar showFilters={false} />
    <HamburgerMenu showFilters={false} />
    <Form />
  </>
)

export default Register
