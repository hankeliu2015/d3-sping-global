import React from 'react'
// import Link from 'next/link'
import { Layout } from '@/components/shared/layout'
import { Header } from '@/components/shared/header'
import Hero from './hero'
import { Causes, Cause, CauseImage, CauseTextContent } from '@/components/shared/causes'
import Technologies from '@/components/new-landing-page/technologies'
// import SocialMediaBar from '../shared/social-media-bar'
// // import SEO from '../shared/seo'
// // import JoinSection from './join-section'
import BlueSection from '@/components/shared/blue-section'
import PinkDot from '@/components/shared/pink-dot'
import { lhkh } from '@/components/shared/causes'


const Announcement = (): JSX.Element => {
  return (
    <section className="causes announcement" style={{
      background: 'linear-gradient(135deg, #164176 0%, #164176 50%, #fa759e 100%)',
    }}>
      <div className="causes__content" style={{
        gridTemplateColumns: '1fr 25px 2fr',
        gridTemplateRows: '5.5fr',
      }}>
        <>
          <CauseImage
            src={lhkh.imgSrc}
            borderColor={lhkh.borderColor}
          />
          <CauseTextContent
            description={`More Human Internet is excited to be partnering with Obodo to advance their online strategy, bringing more volunteers to help their mission of stewarding the irreplaceable cultural and natural resources of East Honolulu.`}
            href={lhkh.href}
            style={{
              gridRow: '1',
              textAlign: 'left',
              color: 'white',
            }}
          />
        </>
      </div>
    </section>
  )
}

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
      <BlueSection>
        <h1>Our leaders join your cause directly, working alongside you to meet your online &amp; offline goals.</h1>
        <img />
      </BlueSection>
      <PinkDot />
      <Causes />
      <Technologies />
      {/* <JoinSection ref={internalSectionRefs['Join']} /> */}
      {/* <SocialMediaBar /> */}
    </Layout>
  )
}

export default NewLandingPage
