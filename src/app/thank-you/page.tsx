import React from 'react'
// import { Card, CardContent } from '@material-ui/core'
import Hero from '@/components/shared/hero'
import { Layout } from '@/components/shared/layout'
// import SEO from '@/components/shared/seo'

export default function ThankYouPage(): JSX.Element {
  return (
    <Layout additionalClassNames="thank-you">
      {/* <SEO pageTitle="Thank You" /> */}
      <Hero additionalClassNames="thank-you">
        {/* <Card> */}
        <h2>
          Thank You
        </h2>
        {/* <CardContent className="thank-you">{children}</CardContent> */}
        {/* </Card> */}
      </Hero>
    </Layout>
  )
}
