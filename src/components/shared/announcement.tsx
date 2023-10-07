import React from 'react'
import { CauseImage, CauseTextContent } from '@/components/shared/causes'
import { lhkh } from '@/components/shared/causes'

export function Announcement(): JSX.Element {
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
