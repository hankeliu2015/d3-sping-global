import React from 'react'

interface NetlifyFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  name: string;
  action: string;
}

export function NetlifyForm({ name, children, ...props }: NetlifyFormProps): JSX.Element {
  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      autoComplete="off"
      encType="multipart/form-data"
      {...props}
    >
      <input type="hidden" name="form-name" value={name} />
      {children}
    </form>
  )
}
