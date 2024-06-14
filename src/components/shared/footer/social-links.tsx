import Link from 'next/link'
import React from 'react'

type SocialLinkProps = {
  href: string
  ariaLabel: string
  icon: React.ReactNode
}

type SocialLinksProps = {
  links: ReadonlyArray<SocialLinkProps>
}

const SocialLink = ({ href, ariaLabel, icon }: SocialLinkProps): JSX.Element => {
  return (
    <Link className="footer-link" href={href} title={ariaLabel} aria-label={ariaLabel}>
      {icon}
    </Link>
  )
}

const SocialLinks = ({ links }: SocialLinksProps): JSX.Element => {
  return (
    <div className="footer-links">
      {links.map(link => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  )
}

export default SocialLinks
