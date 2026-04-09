'use server'

import { stripe } from '@/lib/stripe'
import { SERVICES } from '@/lib/products'

export async function startCheckoutSession(productId: string): Promise<string> {
  const product = SERVICES.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Serviço com id "${productId}" não encontrado`)
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded_page',
    redirect_on_completion: 'never',
    line_items: [
      {
        price_data: {
          currency: 'brl',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  })

  if (!session.client_secret) {
    throw new Error('Stripe não retornou client_secret da sessão.')
  }

  return session.client_secret
}
