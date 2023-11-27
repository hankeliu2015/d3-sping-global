import React, { forwardRef } from 'react'
import cls from 'classnames'
import { repeat } from 'lodash'
import Link from 'next/link'
import Image from 'next/image'

type CauseProps = { cause: string, imgSrc: string, borderColor: string, heading?: string, description: string, href?: string, imageAlt?: string }

export const lhkh = {
  cause: 'lhkh',
  imgSrc: '/causes/lhkh_hero.png',
  borderColor: '#FA759E',
  heading: 'Livable Hawaii Kai Hui',
  description: `We are excited to be advancing an online strategy to bring 1500 volunteers of all ages to steward the irreplaceable cultural and natural resources of East Honolulu`,
  href: '/partnering-with-livable-hawaii-kai-hui',
  imageAlt: 'lhkh project image'
}

export const roar = {
  cause: 'roar',
  imgSrc: '/causes/roar_hero.png',
  borderColor: '#164176',
  heading: 'Roar!',
  description: `Our free, open source browser extension enables users of the web report technical issues to website maintainers.`,
  href: '/roar',
  imageAlt: 'roar project image'
}

export const homePageCauses: ReadonlyArray<any> = [
  lhkh,
  roar,
]

export const CauseImage = ({ src, borderColor, imageAlt }: { src: string, borderColor: string, imageAlt?: string }) => (
  <div className="cause__image">
    {/* TODO: repalce img with Next/image. keep width and height props as static value(651px) for now  */}
    {/* next-image requires alt property. add default string for imgeAlt */}
    <Image src={src} style={{ borderColor }} width={651} height={651} alt={imageAlt ? imageAlt : "empty image description"} priority></Image>
  </div>
)

interface CauseTextContentProps extends React.ComponentProps<any> {
  heading?: string,
  description: string
  href?: string
}

export const CauseTextContent = ({ heading, description, href, ...rest }: CauseTextContentProps) => (
  <div className="cause__content" {...rest}>
    <div>
      {heading && (<h2 className="human-blue">{heading}</h2>)}
      <p>{description}</p>
      {href && (<Link className="link" href={href}>Learn More</Link>)}
    </div>
  </div>
)

export const Cause = ({ imgSrc, borderColor, heading, description, href, imageAlt }: CauseProps) => (
  <>
    <CauseImage src={imgSrc} borderColor={borderColor} imageAlt={imageAlt} />
    <CauseTextContent
      heading={heading}
      description={description}
      href={href}
    />
  </>
)

export function CausesSection({ children, rightToLeft }: { children: React.ReactNode, rightToLeft?: boolean }) {
  const numRows = Array.isArray(children) ? children.length : 1
    return (
      <section className={cls('causes', { rightToLeft })}>
        <div className="causes__content" style={{ gridTemplateRows: repeat('1fr 5.5fr ', numRows) + ' 1fr' }}>
          {children}
        </div>
      </section>
    )
}

export function Causes({ causes = homePageCauses }: { causes?: ReadonlyArray<CauseProps> } = {}) {
  return (
    <CausesSection>
      {causes.map((props) => (
        <Cause key={props.heading} {...props} />
      ))}
    </CausesSection>
  )
}