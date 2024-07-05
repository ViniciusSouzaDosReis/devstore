import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { ImageResponse } from 'next/server'
import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Image({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const product = await getProduct(params.slug)

  const productURL = new URL(product.image, process.env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
