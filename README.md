# stripe-subscription-sandbox

```bash
$ cp .env.example .env
# add STRIPE_SECRET_KEY=xxx (xxx is secret key written in Stripe Web UI) to '.env' file
$ npm run create-products
# shows price ids
# add STRIPE_FREE_PRICE_ID and STRIPE_PRO_PRICE_ID to '.env' file
$ npm run create-customers
# shows customer ids
# add STRIPE_POOR_CUSTOMER_ID and STRIPE_RICH_CUSTOMER_ID to '.env' file,
# and add payment method to customers in Stripe Web UI
$ npm run create-subscriptions
$ npm run check-subscriptions
```
