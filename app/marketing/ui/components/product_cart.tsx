import ProductDto from '#marketing/dtos/product'
import { TableCell, TableRow } from '#ui/components/table'
import React, { useState } from 'react'
import { useForm, router } from '@inertiajs/react'
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react'
import Cart from '#marketing/models/cart'

interface ProductCartProps {
  product: ProductDto
  quantity: number
  size: string
  cart: Cart
}

export function ProductCart({ product, quantity, size, cart }: ProductCartProps) {
  const stock = product.stock.find((stock) => stock.size === size)
  const stockQuantity = stock ? stock.stock : 0
  const [actQantity, setActQuantity] = useState(quantity)

  const { put, setData } = useForm({
    productId: product.id,
    quantity: quantity,
    size: size,
  })

  const submitQuantity = async (newQty: number) => {
    setActQuantity(newQty)
    setData('quantity', newQty)
    await put('/cart/set-quantity')

    router.reload()
  }

  const handleQuantityChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const raw = e.target.value
    const value = Number.isFinite(Number(raw)) ? parseInt(raw) : 0

    if (value <= stockQuantity && value >= 0) {
      await submitQuantity(value)
    }
  }

  return (
    <TableRow key={product.id}>
      <TableCell className="font-medium">
        <img
          width={'150px'}
          className={'rounded-md'}
          src={
            product.imageUrl ||
            'https://img.freepik.com/vecteurs-premium/vecteur-icone-image-par-defaut-page-image-manquante-pour-conception-site-web-application-mobile-aucune-photo-disponible_87543-7509.jpg?w=1380'
          }
          alt={"Pas d'images"}
        />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price / 100}</TableCell>
      <TableCell>{size}</TableCell>
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="p-1 border rounded-md hover:bg-gray-50 disabled:opacity-50"
            onClick={async () => {
              const next = Math.max(0, actQantity - 1)
              await submitQuantity(next)
            }}
            disabled={actQantity <= 0}
            aria-label="Diminuer la quantité"
          >
            <MinusIcon size={16} />
          </button>
          <input
            type="number"
            value={actQantity}
            onChange={handleQuantityChange}
            min={0}
            max={stockQuantity}
            className="w-16 text-center border rounded-md"
          />
          <button
            type="button"
            className="p-1 border rounded-md hover:bg-gray-50 disabled:opacity-50"
            onClick={async () => {
              const next = Math.min(stockQuantity, actQantity + 1)
              await submitQuantity(next)
            }}
            disabled={actQantity >= stockQuantity}
            aria-label="Augmenter la quantité"
          >
            <PlusIcon size={16} />
          </button>
          <button
            type="button"
            className="p-1 border rounded-md hover:bg-red-50 text-red-600"
            onClick={async () => {
              if (actQantity !== 0) await submitQuantity(0)
            }}
            aria-label="Supprimer l'article"
            title="Supprimer"
          >
            <TrashIcon size={16} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}
