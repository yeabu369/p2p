import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PlaceOrderPage = () => {
  return (
    <>
      <MetaTags title="PlaceOrder" description="PlaceOrder page" />

      <h1>PlaceOrderPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlaceOrderPage/PlaceOrderPage.tsx</code>
      </p>
      <p>
        My default route is named <code>placeOrder</code>, link to me with `
        <Link to={routes.placeOrder()}>PlaceOrder</Link>`
      </p>
    </>
  )
}

export default PlaceOrderPage
