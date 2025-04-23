import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { PageTransition } from "@/components/page-transition";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
