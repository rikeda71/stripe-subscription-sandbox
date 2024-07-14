import Stripe from 'stripe';
(async () => {
  const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string)
  const poorCustomer = await stripeClient.customers.search({ query: 'email:\'poor@example.com\'', expand: ['data.subscriptions']})
  console.log(`poor customer: ${JSON.stringify(poorCustomer.data[0])}`)
  console.log(`poor customer subscription: ${JSON.stringify(poorCustomer.data[0].subscriptions?.data[0])}`)

  const richCustomer = await stripeClient.customers.search({ query: 'email:\'rich@example.com\'', expand: ['data.subscriptions']})
  console.log(`rich customer: ${JSON.stringify(richCustomer.data[0])}`)
  console.log(`rich customer subscription: ${JSON.stringify(richCustomer.data[0].subscriptions?.data[0])}`)
})();
