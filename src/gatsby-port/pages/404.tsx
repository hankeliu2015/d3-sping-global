import React from 'react'
import Link from 'next/link'
import { Layout } from '../../components/shared/layout'
// import SEO from '../components/shared/seo'

// eslint-disable-next-line import/no-anonymous-default-export
export default function NotFoundPage() {
  return (
    <Layout style={{
      display: 'grid',
      gridTemplateRows: '1fr auto'
     }}>
      {/* <SEO pageTitle="404: Not found" /> */}
      <div style={{
        margin: 25
      }}>
        <h1>
          404: page not found
        </h1>
        <p>Sorry, but the page you requested could not be found. <Link href="/">Return home.</Link></p>
      </div>
    </Layout>
  )
}
