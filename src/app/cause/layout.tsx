import { Layout as SharedLayout } from '@/components/shared/layout'

export default function PageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <SharedLayout>
      {children}
    </SharedLayout>
)}