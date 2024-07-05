'use client'

import { useCart } from '@/contexts/cart-context'

type AddProductButtonProps = {
  productId: number
}

export function AddProductButton({ productId }: AddProductButtonProps) {
  const { addToCart } = useCart()

  function handlerAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handlerAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
