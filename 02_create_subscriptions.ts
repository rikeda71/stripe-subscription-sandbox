import Stripe from 'stripe';
(async () => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string)

  // poor customer -> free plan
  console.log(`poor customer id: ${process.env.STRIPE_POOR_CUSTOMER_ID}`)
  console.log(`free price id: ${process.env.STRIPE_FREE_PRICE_ID}`)
  const createSubscriptionResult1 = await stripeClient.subscriptions.create({
    customer: process.env.STRIPE_POOR_CUSTOMER_ID as string,
    items: [
      {
        price: process.env.STRIPE_FREE_PRICE_ID as string,
        quantity: 1,
      }
    ]
  })
  console.log(`free subscriptionId: ${createSubscriptionResult1.id}`)

  // rich customer -> pro plan
  console.log(`rich customer id: ${process.env.STRIPE_RICH_CUSTOMER_ID}`)
  console.log(`pro price id: ${process.env.STRIPE_PRO_PRICE_ID}`)
  const createSubscriptionResult2 = await stripeClient.subscriptions.create({
    customer: process.env.STRIPE_RICH_CUSTOMER_ID as string,
    items: [
      {
        price: process.env.STRIPE_PRO_PRICE_ID as string,
        quantity: 1,
      }
    ]
  })

  console.log(`pro subscriptionId: ${createSubscriptionResult2.id}`)
})();
