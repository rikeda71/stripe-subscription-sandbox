import Stripe from 'stripe';
(async () => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string)
  const customer = await stripeClient.customers.create({
    email: 'test@example.com',
    name: 'test customer'
  })

  console.log(`customerId: ${customer.id}`)

})();
