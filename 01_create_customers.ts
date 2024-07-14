import Stripe from 'stripe';
(async () => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string)
  const poorCustomer = await stripeClient.customers.create({
    email: 'poor@example.com',
    name: 'poor customer'
  })
  const richCustomer = await stripeClient.customers.create({
    email: 'rich@example.com',
    name: 'rich customer'
  })

  console.log(`poor customerId: ${poorCustomer.id}`)
  console.log(`rich customerId: ${richCustomer.id}`)
})();
