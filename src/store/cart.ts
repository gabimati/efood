import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  image: string
  title: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  isCartVisible: boolean
}

const initialState: CartState = {
  items: [],
  isCartVisible: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push(action.payload)
      }
      state.isCartVisible = true // Mostra o popup ao adicionar um item
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        item.quantity -= 1
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    toggleCartVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible
    }
  }
})

export const {
  addItem,
  removeItem,
  decreaseItemQuantity,
  clearCart,
  toggleCartVisibility
} = cartSlice.actions
export default cartSlice.reducer
