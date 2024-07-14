import Stripe from 'stripe';
(async () => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string)

  // product
  const productFree = await stripeClient.products.create({
    name: 'free',
    statement_descriptor: 'free',
    default_price_data: {
      currency: 'JPY',
      unit_amount: 0,
      recurring: {
        interval: 'month',
      }
    },
    description: 'free plan',
  })
  console.log(`free productId: ${productFree.id}`)
  console.log(`free priceId: ${productFree.default_price}`)

  const productPro = await stripeClient.products.create({
    name: 'pro',
    statement_descriptor: 'pro',
    default_price_data: {
      currency: 'JPY',
      unit_amount: 100000,
      recurring: {
        interval: 'month',
      }
    },
    description: 'pro plan',
  })

  console.log(`pro productId: ${productPro.id}`)
  console.log(`free priceId: ${productPro.default_price}`)
})();
