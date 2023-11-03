import React from 'react'
// import { Card, CardContent } from '@material-ui/core'
import Hero from '@/components/shared/hero'

export default function ThankYouPage(): JSX.Element {
  return (
    <>
      <Hero additionalClassNames="thank-you">
        {/* <Card> */}
        <h2>
          Thank You
        </h2>
        {/* <CardContent className="thank-you">{children}</CardContent> */}
        {/* </Card> */}
      </Hero>
    </>
  )
}
