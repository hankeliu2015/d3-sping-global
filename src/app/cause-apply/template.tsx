import { Header } from '@/components/shared/header';
import { Layout as ApplyFormTemplate } from '@/components/shared/layout';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
    <ApplyFormTemplate header={<Header />}>
      {children}
    </ApplyFormTemplate>
  )}