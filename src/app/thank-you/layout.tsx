import { Layout as SharedLayout } from '@/components/shared/layout'
// import SEO from '@/components/shared/seo'

export default function PageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <SharedLayout additionalClassNames="thank-you">
      {/* <SEO pageTitle="Thank You" /> */}
      {children}
    </SharedLayout>
)}