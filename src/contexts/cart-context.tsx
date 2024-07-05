'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  itens: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const haveThisItemInCart = state.some(
        (item) => item.productId === productId,
      )

      if (haveThisItemInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ itens: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
