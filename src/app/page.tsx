import React from 'react'
import { Layout } from '@/components/shared/layout'
import { Header } from '@/components/shared/header'
import Hero from './hero'
import { Causes } from '@/components/shared/causes'
import Technologies from '@/components/new-landing-page/technologies'
// import SocialMediaBar from '../shared/social-media-bar'
// // import SEO from '../shared/seo'
// // import JoinSection from './join-section'
import PinkDot from '@/components/shared/pink-dot'
import OurLeaders from '@/components/new-landing-page/our-leaders'
import { Announcement } from '@/components/shared/announcement'



const NewLandingPage = (): JSX.Element => {
  return (
    <Layout
      additionalClassNames="new-landing-page"
      header={<>
        <Announcement />
        <Header />
      </>}
    >


      {/* <SEO /> */}
      <Hero />
      <OurLeaders />
      <PinkDot />
      <Causes />
      <Technologies />
      {/* <JoinSection ref={internalSectionRefs['Join']} /> */}
      {/* <SocialMediaBar /> */}
    </Layout>
  )
}

export default NewLandingPage
