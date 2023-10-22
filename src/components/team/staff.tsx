import React from 'react'
import Image from 'next/image'

type StaffProps = TeamMember

export default function Staff({ name, title, image_file_name, background_color, background_shape }: StaffProps) {
  return (
    <div className="staff-card">
      <Image className={`staff-card__image ${background_color} ${background_shape}`} src={`/headshots/${image_file_name}`} alt={name} width={500} height={500} />
      <p className="staff-card__name">
        {name}
      </p>
      <p className="staff-card__title">
        {title}
      </p>
    </div>
  )
}
