import React from 'react'
import { Layout } from '@/components/shared/layout'
import useHeader from './landing-page/useHeader'

import GetUpdates from '@/components/shared/get-updates'
import Hero from './landing-page/hero'
import HowItWorks from './landing-page/how-it-works'
import LearnMore from './landing-page/learn-more'
import SocialMediaBar from '@/components/shared/social-media-bar'
import useExplicitHeightOnIPhone from '@/effects/useExplicitHeightOnIPhone'
import RoarSEO from './roar-seo'

const RoarPage = ({ location }: PageProps): JSX.Element => {
  const navigator = typeof window === 'undefined' ? undefined : window.navigator
  const { header, internalSectionRefs, dotsRef } = useHeader(location, navigator)

  useExplicitHeightOnIPhone(internalSectionRefs['hero'], internalSectionRefs['How it works']) // tslint:disable-line:no-expression-statement

  return (
    <Layout additionalClassNames="roar" header={header}>
      <RoarSEO />
      <Hero ref={internalSectionRefs['hero']} dotsRef={dotsRef} />
      <HowItWorks ref={internalSectionRefs['How it works']} />
      <LearnMore ref={internalSectionRefs['Learn more']} />
      <GetUpdates ref={internalSectionRefs['Community']} />
      <SocialMediaBar />
    </Layout>
  )
}

export default RoarPage