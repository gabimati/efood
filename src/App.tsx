import { BrowserRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GlobalCss } from './styles/GlobalStyles'
import Rotas from './routes'
import CartPopup from './components/Cart'
import { RootState } from './store'
import { toggleCartVisibility } from './store/cart'

function App() {
  const isCartVisible = useSelector(
    (state: RootState) => state.cart.isCartVisible
  )
  const dispatch = useDispatch()

  const handleCartToggle = () => {
    dispatch(toggleCartVisibility())
  }

  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Rotas />
        {isCartVisible && <CartPopup fecharCarrinho={handleCartToggle} />}
      </div>
    </BrowserRouter>
  )
}

export default App
